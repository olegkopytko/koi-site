import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "О. К.",
  description: "Личный сайт и портфолио технического писателя Олега Копытко",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Обо мне', link: '/about' },
      { text: 'Резюме', link: '/cv' }
    ],
    // Стандартный локальный поиск
    search: {
      provider: 'local'
    }
  }
})
