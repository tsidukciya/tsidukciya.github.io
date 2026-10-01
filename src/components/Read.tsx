import { bookData } from "../data/bookData";

export function Read() {
  return (
    <section className="section" id="read">
      <div className="container">
        <span className="eyebrow reveal">Читать и слушать</span>
        <h2 className="section-title reveal">Доступно бесплатно</h2>
        <p className="section-lead reveal">
          Книга распространяется под лицензией CC BY 4.0. Читайте в удобном формате.
        </p>

        <div className="read__grid reveal">
          {bookData.platforms.map((p) => (
            <a
              className="platform"
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              key={p.name}
            >
              <span className="platform__icon">{p.icon}</span>
              <span>
                <span className="platform__name">{p.name}</span>
                <span className="platform__hint">Читать онлайн</span>
              </span>
              <span className="platform__arrow">→</span>
            </a>
          ))}

          {bookData.audio.map((p) => (
            <a
              className="platform"
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              key={p.name}
            >
              <span className="platform__icon">{p.icon}</span>
              <span>
                <span className="platform__name">{p.name}</span>
                <span className="platform__hint">Слушать выпуски</span>
              </span>
              <span className="platform__arrow">→</span>
            </a>
          ))}
        </div>

        <h3 className="section-title reveal" style={{ fontSize: 24, marginBottom: 20 }}>
          Видеовыпуски по книге
        </h3>
        <div className="episodes__list reveal">
          {bookData.episodes.map((e) => (
            <div className="episode" key={e.num}>
              <span className="episode__label">Выпуск {e.num}</span>
              <span className="episode__links">
                <a
                  className="episode__link"
                  href={e.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VK
                </a>
                <a
                  className="episode__link"
                  href={e.ruto}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RuTube
                </a>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
