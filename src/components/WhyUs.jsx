import { Infinity as InfinityIcon, BadgeEuro, Smartphone, ShieldCheck, MessageCircleHeart, FileX } from "lucide-react";
import { useLanguage } from "../i18n/useLanguage";
import "./WhyUs.css";

const icons = [InfinityIcon, BadgeEuro, Smartphone, ShieldCheck, MessageCircleHeart, FileX];

export default function WhyUs() {
  const { t } = useLanguage();

  return (
    <section className="section whyus">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t.why.eyebrow}</span>
          <h2>{t.why.title}</h2>
        </div>

        <div className="whyus__grid">
          {t.why.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div className="whyus__card" key={i}>
                <Icon size={22} strokeWidth={2} />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
