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
                                    aria-label={`Выпуск ${e.num} на VK Video`}
                                    title="VK Video"
                                >
                                    <img
                                        className="episode__icon"
                                        src="/vkvideo.svg"
                                        alt="VK Video"
                                    />
                                </a>
                                <a
                                    className="episode__link"
                                    href={e.ruto}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Выпуск ${e.num} на RuTube`}
                                    title="RuTube"
                                >
                                    <img
                                        className="episode__icon"
                                        src="/rutube.svg"
                                        alt="RuTube"
                                    />
                                </a>
                            </span>
                        </div>
                    ))}
                </div>

               
            </div>
        </section>
    );
}