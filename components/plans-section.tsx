import { plans } from "@/content/homepage";
import { whatsappUrl } from "@/content/site";

export function PlansSection() {
  return (
    <section id="plans">
      <div className="wrap section-head">
        <span className="kicker">{plans.kicker}</span>
        <h2>{plans.title}</h2>
        <p>{plans.description}</p>
      </div>
      <div className="wrap">
        <div className="menu-wrap">
          {plans.items.map((plan) => (
            <div key={plan.name} className={`plan${plan.featured ? " pro" : ""}`}>
              {plan.badge ? <span className="plan-badge">{plan.badge}</span> : null}
              <div className="plan-head">
                <span className="name">{plan.name}</span>
                <div className="price">
                  <span className="amount mono">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <p className="setup">
                  <span className="plus" aria-hidden="true">
                    +
                  </span>
                  <span className="amount mono">{plan.setup}</span>
                  <span className="period">{plan.setupLabel}</span>
                </p>
              </div>
              <ul className="plan-items">
                {plan.features.map((feature) => (
                  <li key={feature.label}>
                    <span>{feature.label}</span>
                    <span className="mono">{feature.value}</span>
                  </li>
                ))}
              </ul>
              <div className="plan-foot">
                <a
                  className="plan-cta"
                  href={whatsappUrl(
                    `Hi, I'm interested in the ${plan.name} and would like to get started.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {plans.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
