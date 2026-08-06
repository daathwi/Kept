"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/content/homepage";
import { whatsappUrl } from "@/content/site";

type FormState = {
  name: string;
  email: string;
  phone: string;
  brand: string;
  businessType: string;
  why: string;
};

const empty: FormState = {
  name: "",
  email: "",
  phone: "",
  brand: "",
  businessType: "",
  why: "",
};

function buildWhatsAppMessage(values: FormState): string {
  return [
    "Hi, I'd like to talk about a website for my business.",
    "",
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    `Phone: ${values.phone.trim()}`,
    `Brand: ${values.brand.trim()}`,
    `Business type: ${values.businessType.trim()}`,
    `Why I need it: ${values.why.trim()}`,
  ].join("\n");
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(empty);
  const labels = contact.form;

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const href = whatsappUrl(buildWhatsAppMessage(values));
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate={false}>
      <div className="contact-form-grid">
        <label className="contact-field">
          <span>{labels.name}</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            required
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
          />
        </label>

        <label className="contact-field">
          <span>{labels.email}</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
          />
        </label>

        <label className="contact-field">
          <span>{labels.phone}</span>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            required
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
          />
        </label>

        <label className="contact-field">
          <span>{labels.brand}</span>
          <input
            type="text"
            name="brand"
            required
            value={values.brand}
            onChange={(event) => update("brand", event.target.value)}
          />
        </label>

        <label className="contact-field contact-field--full">
          <span>{labels.businessType}</span>
          <select
            name="businessType"
            required
            value={values.businessType}
            onChange={(event) => update("businessType", event.target.value)}
          >
            <option value="" disabled>
              Select one
            </option>
            {labels.businessTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label className="contact-field contact-field--full">
          <span>{labels.why}</span>
          <textarea
            name="why"
            rows={4}
            required
            value={values.why}
            onChange={(event) => update("why", event.target.value)}
          />
        </label>
      </div>

      <div className="contact-form-actions">
        <button type="submit" className="btn-primary">
          {contact.cta}
        </button>
      </div>
    </form>
  );
}
