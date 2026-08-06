export default function Loading() {
  return (
    <div className="wrap" style={{ padding: "80px 28px" }} aria-busy="true" aria-live="polite">
      <p className="mono" style={{ color: "var(--ink-soft)", letterSpacing: "0.08em", textTransform: "uppercase", fontSize: "0.85rem" }}>
        Loading Kept…
      </p>
    </div>
  );
}
