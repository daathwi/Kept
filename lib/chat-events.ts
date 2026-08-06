/** Cross-component chat open/close without a global store. */

export const CHAT_CLOSE_EVENT = "kept:close-chat";

export function requestCloseChat(): void {
  if (typeof document === "undefined") return;
  document.dispatchEvent(new Event(CHAT_CLOSE_EVENT));
}
