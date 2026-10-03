import chapters from "./chapters.json";

export const siteUrl = "https://tsidukciya.ru";

type AuthorLink = { title: string; url: string; note?: string };

// Внешние материалы автора: блок «Об авторе» и JSON-LD берут один источник,
// чтобы ссылки на площадке и в разметке не разъезжались.
const articles: AuthorLink[] = [
  {
    title:
      "Автономность, мотивирующая цель, мастерство: зачем компаниям T-shaped специалисты",
    url: "https://vc.ru/flood/40369-avtonomnost-motiviruyushchaya-cel-masterstvo-zachem-kompaniyam-t-shaped-specialisty-i-kak-ih-razvivat",
    note: "VC.ru",
  },
  {
    title: "Перейти пустыню: как учиться новому и добиваться целей",
    url: "https://vc.ru/flood/40967-pereyti-pustynyu-kak-uchitsya-novomu-i-dobivatsya-celey",
    note: "VC.ru",
  },
  {
    title: "Как избавиться от потерь в процессе разработки ПО",
    url: "https://vc.ru/u/223752-timmson/178347-kak-izbavitsya-ot-poter-v-processe-razrabotki-po",
    note: "VC.ru",
  },
  {
    title: "Куда пойти учиться на программиста: мнения представителей сфер IT",
    url: "https://rb.ru/opinion/it-obrazovanie/",
    note: "RB.RU",
  },
  {
    title: "Стоит ли изучать старые книги по программированию: мнения экспертов",
    url: "https://tproger.ru/experts/old-books/",
    note: "Tproger",
  },
  {
    title: "Дизайн команды",
    url: "https://tlroadmap.io/roles/people-manager/team-management/team-design.html",
    note: "Teamlead Roadmap",
  },
];

const talks: AuthorLink[] = [
  {
    title: "Как работать головой, а не 8 часов: всё об IT в банкинге",
    url: "https://youtu.be/pu23ju6dc-g",
    note: " Интервью",
  },
  {
    title: "Наступаем на грабли самоорганизации",
    url: "https://youtu.be/HmHU1fgm64Y",
    note: "AgileDays 2020",
  },
  {
    title: "Вы ещё нанимаете? А мы уже учим!",
    url: "https://youtu.be/a1gCe8eBN-s",
    note: "DevOpsConf 2023",
  },
];

const community: AuthorLink[] = [
  {
    title: "LeSS Guide на русском",
    url: "https://less.works/",
    note: "участие в переводе",
  },
  {
    title: "Сообщество Technical Excellence",
    url: "https://technical-excellence.ru",
    note: "со-организатор митапов по инженерным практикам",
  },
  {
    title: "Сообщество Code Retreat Russia",
    url: "https://code-retreat-russia.github.io",
    note: "со-ментор сообщества",
  },
];

export const bookData = {
  title: "Цидукция",
  subtitle: "Жить, а не выжимать",
  author: "Артём Кротов",
  year: "2025",
  license: "https://creativecommons.org/licenses/by/4.0/deed.ru",
  description:
    "Автор обобщил свой опыт и инструменты, которые будут актуальны во второй половине 20-х годов XXI века для представителей «цифровых» профессий. Эта книга будет полезна широкой аудитории, но особенно разработчикам ПО, дизайнерам, копирайтерам, менеджерам, представителям бизнеса, всем профессиям, которые сейчас заняты в разработке и развитии цифровых продуктов.",
  tagline:
    "Чувствуете, что ничего не успеваете или просто хотите успевать больше? Эта книга может вам дать несколько идей.",
  platforms: [
    {
      name: "Литрес",
      url: "https://www.litres.ru/book/artem-krotov/cidukciya-zhit-a-ne-vyzhimat-72794674/",
      icon: "📖",
    },
    {
      name: "MyBook",
      url: "https://mybook.ru/author/artyom-krotov/cidukciya-zhit-a-ne-vyzhimat/",
      icon: "📚",
    },
  ],
  audio: [
    {
      name: "Неогенда Telegram",
      url: "https://t.me/neogenda",
      icon: "✈️",
    },
    {
      name: "Неогенда MAX",
      url: "https://max.ru/channel_neogenda",
      icon: "🎧",
    },
  ],
  episodes: [
    {
      num: 1,
      vkvideo: "https://vkvideo.ru/video-210997384_456240380",
      rutube: "https://rutube.ru/video/11dbbb77d1b884c80c144033bb3e1f2a/",
    },
    {
      num: 2,
      vkvideo: "https://vkvideo.ru/video-210997384_456240381",
      rutube: "https://rutube.ru/video/7601d0dd14c383a7e32bab3f8e3c1aff/",
    },
    {
      num: 3,
      vkvideo: "https://vkvideo.ru/video-210997384_456240382",
      rutube: "https://rutube.ru/video/2d240528dd1375a529158aed9ebb1e95/",
    },
    {
      num: 4,
      vkvideo: "https://vkvideo.ru/video-210997384_456240383",
      rutube: "https://rutube.ru/video/5eec48be431e52c0bd8a96eabbfaec31/",
    },
    {
      num: 5,
      vkvideo: "https://vkvideo.ru/video-210997384_456240384",
      rutube: "https://rutube.ru/video/06324f1a34c20e7cd5b521a4e8ae09e1/",
    },
    {
      num: 6,
      vkvideo: "https://vkvideo.ru/video-210997384_456240385",
      rutube: "https://rutube.ru/video/58a09cc3e13da8933dfb2074efd6da63/",
    },
  ],
  // Список живёт в chapters.json: тот же файл на билде читает плагин
  // noscript-seo (vite.config.ts), чтобы текстовый дубль не разъезжался с рендером.
  chapters,
  // Ответы должны совпадать с видимым контентом блока FAQ — иначе разметка невалидна.
  faq: [
    {
      q: "Сколько стоит книга «Цидукция»?",
      a: "Книга распространяется бесплатно по лицензии CC BY 4.0 и доступна на Литрес и MyBook.",
    },
    {
      q: "Для кого написана «Цидукция»?",
      a: "Для представителей «цифровых» профессий: разработчиков ПО, дизайнеров, копирайтеров, менеджеров, продактов, аналитиков, предпринимателей и фрилансеров.",
    },
    {
      q: "Сколько глав в книге «Цидукция»?",
      a: "30 глав-инструментов: от видения и матрицы Эйзенхауэра до хронофагов, атомных привычек и автоматизации с ИИ. Каждую главу можно читать отдельно как справочник.",
    },
    {
      q: "Кто автор книги «Цидукция»?",
      a: "Артём Кротов — разработчик ПО с 2007 года и Скрам-мастер с 2012 года. Пишет о продуктивности и инженерных практиках на VC и Хабре, выступает на AgileDays, LeSSDay, DevOpsConf, TechLeadConf и других конференциях.",
    },
  ],
  authorRole: "Разработчик ПО · Скрам-мастер · Спикер",
  authorBio:
    "В разработке ПО с 2007 года, Скрам-мастер с 2012-го. Помогаю продуктовым группам находить глубинные проблемы и собирать для них системные решения: от визуализации потока создания ценности и ограничения WIP до TDD, парного программирования и CI в паре с разработчиком. Работаю с Владельцем Продукта над видением, стратегией и бэклогом, обучаю команды декомпозиции требований и провожу интерактивные тренинги по Scrum, Kanban и LeSS. Публикуюсь на VC и Хабре, выступаю на AgileDays, LeSSDay, DevOpsConf, TechLeadConf, ArchDays, CodeR и ITDay, со-организую митапы сообщества Technical Excellence. Участвовал в переводах LeSS Guide и Scrum Primer на русский. В жизни стараюсь следовать эмпирическому контролю, ценностям Скрама и системному мышлению.",
  // Компетенции автора: видимый список в блоке «Об авторе» и Person.knowsAbout
  // в JSON-LD — один источник, чтобы разметка не расходилась с контентом.
  authorExpertise: [
    "Java/Kotlin, Spring Boot",
    "TS, React, Redux",
    "TDD, парное программирование, чистый код, SOLID",
    "Scrum, Kanban, LeSS",
  ],
  contact: "timmson666@mail.ru",
  // Профили, которыми владеет автор: на сайте они идут с rel="me",
  // в JSON-LD попадают как Person.sameAs. Один список на оба случая.
  authorProfiles: [
    { name: "FB", url: "https://facebook.com/artem.v.krotov/" },
    { name: "LinkendIn", url: "https://www.linkedin.com/in/artem-v-krotov/" },
    { name: "Хабр", url: "https://habr.com/ru/users/timmson/" },
    { name: "VC.ru", url: "https://vc.ru/u/223752-timmson" },
  ],
  authorLinks: { articles, talks, community },
};
