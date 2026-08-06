import { who } from "@/content/homepage";

export function WhoSection() {
  return (
    <section id="who">
      <div className="wrap section-head">
        <span className="kicker">{who.kicker}</span>
        <h2>{who.title}</h2>
        <p>{who.description}</p>
      </div>
      <div className="wrap">
        <div className="who-grid">
          {who.cards.map((card) => (
            <div key={card.tag} className="who-card">
              <span className="tag">{card.tag}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
