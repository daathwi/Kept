"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="wrap" style={{ padding: "80px 28px" }} role="alert">
      <h1 style={{ marginBottom: "16px" }}>Something went wrong</h1>
      <p style={{ color: "var(--ink-soft)", marginBottom: "24px" }}>
        {error.message || "An unexpected error occurred."}
      </p>
      <button type="button" className="btn-primary" onClick={reset}>
        Try again
      </button>
    </div>
  );
}
