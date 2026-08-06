import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap" style={{ padding: "120px 28px" }}>
      <p className="kicker">404</p>
      <h1 style={{ marginBottom: "16px" }}>Page not found</h1>
      <p style={{ color: "var(--ink-soft)", marginBottom: "28px" }}>
        That route doesn&apos;t exist. Head back home.
      </p>
      <Link className="btn-primary" href="/">
        Back to Kept →
      </Link>
    </div>
  );
}
