import { Check, MessageCircle } from "lucide-react";
import { useLanguage } from "../i18n/useLanguage";
import { telegramLink } from "../utils/whatsapp";
import "./Plans.css";

export default function Plans() {
  const { t, lang } = useLanguage();

  return (
    <section className="section plans" id="plans">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t.plans.eyebrow}</span>
          <h2>{t.plans.title}</h2>
          <p>{t.plans.subtitle}</p>
        </div>

        <div className="plans__grid">
          {t.plans.list.map((plan) => {
            const perMonth = (plan.price / plan.months).toFixed(2);
            return (
              <div
                key={plan.key}
                className={`plan-card ${plan.popular ? "plan-card--popular" : ""}`}
              >
                {plan.popular && (
                  <span className="plan-card__popular-tag mono">{t.plans.popular}</span>
                )}
                <h3 className="plan-card__name">{plan.name}</h3>
                <p className="plan-card__tagline">{plan.tagline}</p>

                <div className="plan-card__price">
                  <span className="mono plan-card__price-value">{plan.price.toFixed(2)}€</span>
                  <span className="plan-card__price-duration">/ {plan.duration}</span>
                </div>
                <span className="mono plan-card__per-month">
                  {t.plans.perMonth.replace("{value}", perMonth)}
                </span>

                <ul className="plan-card__features">
                  {t.plans.features.map((f, i) => (
                    <li key={i}>
                      <Check size={15} strokeWidth={2.5} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={telegramLink(lang, plan)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${plan.popular ? "btn-warm" : "btn-primary"} plan-card__cta`}
                >
                  <MessageCircle size={15} />
                  {t.plans.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
