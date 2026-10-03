import { bookData } from "../data/bookData";

export function Faq() {
  return (
    <section className="section section--alt" id="faq">
      <div className="container">
        <span className="eyebrow reveal">Часто спрашивают</span>
        <h2 className="section-title reveal">О книге коротко</h2>

        <div className="faq__list reveal">
          {bookData.faq.map((item) => (
            <details className="faq__item" key={item.q}>
              <summary className="faq__q">{item.q}</summary>
              <p className="faq__a">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
