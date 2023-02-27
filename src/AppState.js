import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  /** @type {import('./models/Account.js').Profile|null} */
  profile: null,

  /** @type {import('./models/Post.js').Post[]} */
  posts: [],

  /** @type {import('./models/Post.js').Post|null} */
  post: null,

  /** @type {import('./models/Ad.js').Ad.js[]} */
  ads: [],

  nextPage: null,
  previousPage: null
})
