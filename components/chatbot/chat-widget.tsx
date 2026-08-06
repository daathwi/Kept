"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { chatCopy } from "@/content/chatbot";
import { whatsappUrl } from "@/content/site";
import { createId, replyTo, type ChatMessage } from "@/lib/chatbot";
import { CHAT_CLOSE_EVENT } from "@/lib/chat-events";

/** Milliseconds between streamed characters. */
const STREAM_CHAR_MS = 16;

function initialMessages(): ChatMessage[] {
  return [{ id: "greeting", role: "bot", text: chatCopy.greeting }];
}

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function ChatWidget() {
  const panelId = useId();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>(() => initialMessages());
  const [streaming, setStreaming] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const streamTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function clearStream() {
    if (streamTimerRef.current) {
      clearTimeout(streamTimerRef.current);
      streamTimerRef.current = null;
    }
  }

  useEffect(() => {
    return () => clearStream();
  }, []);

  useEffect(() => {
    function onCloseRequest() {
      setOpen(false);
    }
    document.addEventListener(CHAT_CLOSE_EVENT, onCloseRequest);
    return () => document.removeEventListener(CHAT_CLOSE_EVENT, onCloseRequest);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("chat-drawer-open", open);
    return () => {
      root.classList.remove("chat-drawer-open");
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const node = listRef.current;
    if (node) node.scrollTop = node.scrollHeight;
  }, [open, messages]);

  useEffect(() => {
    if (!open || streaming) return;
    inputRef.current?.focus();
  }, [open, streaming]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function streamBotReply(messageId: string, fullText: string) {
    clearStream();

    if (prefersReducedMotion() || fullText.length === 0) {
      setMessages((prev) =>
        prev.map((message) =>
          message.id === messageId ? { ...message, text: fullText } : message,
        ),
      );
      setStreaming(false);
      return;
    }

    setStreaming(true);
    let index = 0;

    function tick() {
      index += 1;
      const next = fullText.slice(0, index);
      setMessages((prev) =>
        prev.map((message) =>
          message.id === messageId ? { ...message, text: next } : message,
        ),
      );

      if (index < fullText.length) {
        streamTimerRef.current = setTimeout(tick, STREAM_CHAR_MS);
      } else {
        streamTimerRef.current = null;
        setStreaming(false);
      }
    }

    streamTimerRef.current = setTimeout(tick, STREAM_CHAR_MS);
  }

  function pushExchange(userText: string) {
    const trimmed = userText.trim();
    if (!trimmed || streaming) return;

    const answer = replyTo(trimmed);
    const userMsg: ChatMessage = { id: createId(), role: "user", text: trimmed };
    const botId = createId();
    const botMsg: ChatMessage = { id: botId, role: "bot", text: "" };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
    streamBotReply(botId, answer);
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    pushExchange(input);
  }

  const showSuggestions = messages.length <= 1 && !streaming;
  const canSend = Boolean(input.trim()) && !streaming;

  return (
    <div className="chat-root">
      <button
        type="button"
        className={`chat-launcher${open ? " is-open" : ""}`}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? chatCopy.launcherClose : chatCopy.launcherLabel}
      </button>

      <aside
        className={`chat-panel${open ? " is-open" : ""}`}
        id={panelId}
        aria-label="Kept chat assistant"
        aria-hidden={!open}
      >
        <header className="chat-header">
          <div>
            <p className="chat-title">{chatCopy.title}</p>
            <p className="chat-subtitle">{chatCopy.subtitle}</p>
          </div>
          <button
            type="button"
            className="chat-icon-btn"
            onClick={() => setOpen(false)}
            aria-label={chatCopy.launcherClose}
          >
            ✕
          </button>
        </header>

        <div className="chat-messages" ref={listRef} aria-live="polite">
          {messages.map((message) => {
            const isStreamingBubble =
              streaming &&
              message.role === "bot" &&
              message.id === messages[messages.length - 1]?.id;

            return (
              <div
                key={message.id}
                className={`chat-bubble chat-bubble--${message.role}${isStreamingBubble ? " is-streaming" : ""}`}
              >
                {message.text}
                {isStreamingBubble ? <span className="chat-caret" aria-hidden="true" /> : null}
              </div>
            );
          })}
        </div>

        {showSuggestions ? (
          <div className="chat-suggestions" aria-label="Suggested questions">
            {chatCopy.suggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                className="chat-chip"
                onClick={() => pushExchange(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>
        ) : null}

        <a
          className="chat-wa"
          href={whatsappUrl(chatCopy.whatsappPrompt)}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={open ? 0 : -1}
        >
          {chatCopy.whatsappCta}
        </a>

        <form className="chat-form" onSubmit={onSubmit}>
          <label className="visually-hidden" htmlFor={`${panelId}-input`}>
            Your question
          </label>
          <input
            id={`${panelId}-input`}
            ref={inputRef}
            className="chat-input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder={chatCopy.placeholder}
            autoComplete="off"
            disabled={streaming}
            tabIndex={open ? 0 : -1}
          />
          <button
            type="submit"
            className="chat-send"
            disabled={!canSend}
            tabIndex={open ? 0 : -1}
          >
            {chatCopy.sendLabel}
          </button>
        </form>
      </aside>
    </div>
  );
}
