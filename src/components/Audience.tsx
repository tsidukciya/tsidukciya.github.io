const audience = [
  "Разработчики ПО",
  "Дизайнеры",
  "Копирайтеры",
  "Менеджеры",
  "Предприниматели",
  "Продакты",
  "Аналитики",
  "Фрилансеры",
  "Все, кто работает в цифре",
];

export function Audience() {
  return (
    <section className="section section--alt">
      <div className="container">
        <span className="eyebrow reveal">Для кого</span>
        <h2 className="section-title reveal">Для тех, кто создаёт цифровое</h2>
        <p className="section-lead reveal">
          Книга будет полезна широкой аудитории, но особенно — представителям
          «цифровых» профессий: сайты, мобильные приложения, сервисы, фуд-, фин-,
          ед-, биг- и другие «техи».
        </p>

        <div className="audience__tags reveal">
          {audience.map((a) => (
            <span className="tag" key={a}>
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
