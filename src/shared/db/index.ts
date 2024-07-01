export const testDb = [
  {
    id:1,
    typeAnswer: 'single',
    question: 'Какая градация наиболее популярна в сфере разработки?',
    variants: ['Junior, Middle, Senior','Kid, Middle, Senior','Junior, Middle, Mister', 'Салага, Средняк, Красавец'],
    userAnswer: [],
    rightAnswer: ['Junior, Middle, Senior']
  },
  {
    id:2,
    typeAnswer: 'multi',
    question: 'Наиболее популярные фреймворки для javascript?',
    variants: ['React','Vue','Angular', 'Svelte', 'Spring'],
    userAnswer: [],
    rightAnswer: ['React', 'Vue','Angular', 'Svelte']
  },
  {
    id:3,
    typeAnswer: 'short',
    question: 'Назовите SSR-фреймворк для VueJs?',
    userAnswer: [],
    rightAnswer: ['nuxtjs']
  },
  {
    id:4,
    typeAnswer: 'full',
    question: 'Мы живем в сумеречном мире и...',
    userAnswer: [],
    rightAnswer: ['нет друзей на закате']
  }
]