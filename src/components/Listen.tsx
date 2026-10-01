import { bookData } from "../data/bookData";

export function Listen() {
    return (
        <section className="section" id="listen">
            <div className="container">
                <span className="eyebrow reveal">Смотреть и слушать</span>
                <h2 className="section-title reveal">Видеовыпуски по книге</h2>

                <h3
                    className="section-title reveal"
                    style={{ fontSize: 24, marginBottom: 20 }}
                >
                    читает Алексей Пименов
                </h3>
                <div className="episodes__list reveal">
                    {bookData.episodes.map((e) => (
                        <div className="episode" key={e.num}>
                            <span className="episode__label">
                                Выпуск {e.num}
                            </span>
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
