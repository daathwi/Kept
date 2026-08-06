import { seatsFilledPercent, seatsOpen, site } from "@/content/site";
import { scarcity } from "@/content/homepage";

export function ScarcitySection() {
  const open = seatsOpen();
  const filledPct = seatsFilledPercent();

  return (
    <section className="scarcity" aria-labelledby="scarcity-heading">
      <div className="wrap">
        <div>
          <h2 id="scarcity-heading">{scarcity.title}</h2>
          <p>{scarcity.body}</p>
        </div>
        <div className="seat-tracker" aria-label="Client seat availability">
          <div className="row">
            <span>Seats filled</span>
            <span>Seats open</span>
          </div>
          <div className="seat-bar" role="progressbar" aria-valuenow={site.seats.filled} aria-valuemin={0} aria-valuemax={site.seats.total}>
            <span style={{ width: `${filledPct}%` }} />
          </div>
          <div className="row">
            <span className="count">
              {site.seats.filled} / {site.seats.total}
            </span>
            <span className="count">{open} open</span>
          </div>
        </div>
      </div>
    </section>
  );
}
