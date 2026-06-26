import { useState } from "react";
import { Plus } from "lucide-react";
import { useLanguage } from "../i18n/useLanguage";
import "./Faq.css";

export default function Faq() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section faq" id="faq">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t.faq.eyebrow}</span>
          <h2>{t.faq.title}</h2>
        </div>

        <div className="faq__list">
          {t.faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div className={`faq__item ${isOpen ? "faq__item--open" : ""}`} key={i}>
                <button
                  className="faq__question"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <Plus size={18} className="faq__icon" />
                </button>
                <div className="faq__answer-wrap">
                  <p className="faq__answer">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
