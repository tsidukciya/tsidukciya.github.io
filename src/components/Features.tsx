const features = [
  {
    icon: "🎯",
    title: "От видения к задачам",
    text: "Как связать ежедневные дела с долгосрочной целью и перестать распыляться.",
  },
  {
    icon: "🧠",
    title: "Мышление и решения",
    text: "Пари Паскаля, критериальный анализ и эффект Зейгарник — инструменты выбора.",
  },
  {
    icon: "⏳",
    title: "Защита времени",
    text: "Хронофаги, муда, уведомления и соцсети: как перестать терять часы впустую.",
  },
  {
    icon: "🗂️",
    title: "Система задач",
    text: "To-do списки, матрица Эйзенхауэра и календарь, которые реально работают.",
  },
  {
    icon: "🤝",
    title: "Люди и встречи",
    text: "Фасилитация, soft skills и коммуникация без хаоса и лишних совещаний.",
  },
  {
    icon: "⚙️",
    title: "Автоматизация и ИИ",
    text: "Что и как автоматизировать, чтобы техника работала на вас, а не наоборот.",
  },
];

export function Features() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow reveal">Что внутри</span>
        <h2 className="section-title reveal">Инструменты, а не мотивационные лозунги</h2>
        <p className="section-lead reveal">
          Практичный опыт, проверенный на реальных проектах и «цифровых» буднях.
        </p>

        <div className="features__grid">
          {features.map((f) => (
            <article className="feature reveal" key={f.title}>
              <div className="feature__icon">{f.icon}</div>
              <h3 className="feature__title">{f.title}</h3>
              <p className="feature__text">{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
