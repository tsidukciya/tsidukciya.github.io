import { bookData } from "../data/bookData";

export function Cta() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta reveal">
          <h2 className="cta__title">Готовы жить, а не выжимать?</h2>
          <p className="cta__text">
            Начните читать прямо сейчас — бесплатно и без регистрации на удобной
            площадке.
          </p>
          <div className="cta__actions">
            <a
              href={bookData.platforms[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Читать на Литрес
            </a>
            <a
              href={`mailto:${bookData.contact}`}
              className="btn btn--ghost"
            >
              Связаться с автором
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
