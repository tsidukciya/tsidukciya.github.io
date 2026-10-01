import { bookData } from "../data/bookData";

export function Chapters() {
  return (
    <section className="section" id="chapters">
      <div className="container">
        <span className="eyebrow reveal">Содержание</span>
        <h2 className="section-title reveal">30 глав — 30 ответов на вопросы</h2>
        <p className="section-lead reveal">
          Читайте целиком или открывайте нужную главу как справочник.
        </p>

        <div className="toc__grid reveal">
          {bookData.chapters.map((c) => (
            <div className="toc__item" key={c.num}>
              <span className="toc__num">{String(c.num).padStart(2, "0")}</span>
              <span className="toc__title">{c.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
