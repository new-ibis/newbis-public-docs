import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "NewBIS",
  description: "Official public user guides and capabilities documentation",
  base: "/",
  ignoreDeadLinks: true,
  
  head: [
    ['link', { rel: 'icon', href: '/icon-72x72.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://docs.newbis.bg/' }],
    ['meta', { property: 'og:title', content: 'NewBIS' }],
    ['meta', { property: 'og:description', content: 'Official public user guides and capabilities documentation' }],
    ['meta', { property: 'og:image', content: 'https://docs.newbis.bg/Logo_NB_Short.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: 'https://docs.newbis.bg/Logo_NB_Short.png' }]
  ],

  
  themeConfig: {
    logo: '/Logo_NewBIS_Group.png', // Uses the group logo for the header
    siteTitle: false, // Disables the text next to the logo

    
    search: {
      provider: 'local',
      options: {
        detailedView: true,
        translations: {
          button: {
            buttonText: 'Търсене',
            buttonAriaLabel: 'Търсене в документацията'
          },
          modal: {
            noResultsText: 'Няма намерени резултати',
            resetButtonTitle: 'Изчисти търсенето',
            footer: {
              selectText: 'за избор',
              navigateText: 'за навигация',
              closeText: 'за затваряне'
            }
          }
        }
      }
    },
    
    nav: [
      { text: 'Начало', link: '/' },
      { text: 'Ръководството', link: '/content/nachalo' },
      { text: 'Речник на термините', link: '/dictionary/index' },
      { text: 'Връзка с нас', link: 'https://newbis.bg' }
    ],
    
    sidebar: [
      { text: 'Въведение', link: '/content/nachalo' },
      { text: 'За нас', link: '/content/za-nas' },
      {
        text: 'Логистични модули',
        collapsed: true,
        items: [
          { text: 'Продажби (Общ преглед)', link: '/content/logistichni-moduli/prodajbi/prodajbi_opisanie_i_harakteristiki' },
          { text: 'Доставки (Общ преглед)', link: '/content/logistichni-moduli/dostavki/dostavki_opisanie_harakteristiki' },
          { text: 'Складова логистика', link: '/content/logistichni-moduli/skladova-logistika/skl_log_opisanie_i_harakteristiki' }
        ]
      },
      {
        text: 'Индустриални решения',
        collapsed: true,
        items: [
          { text: 'Автомобилна индустрия', link: '/content/industrii/avtomobilna' },
          { text: 'Бизнес и потребителски услуги', link: '/content/industrii/biznes-i-potrebitelski-uslugi' },
          { text: 'Машиностроителна индустрия', link: '/content/industrii/mashinostroitelna' },
          { text: 'Мебелна индустрия', link: '/content/industrii/mebelna' },
          { text: 'Транспорт и спедиция', link: '/content/industrii/transportna' },
          { text: 'Хранително-вкусова индустрия', link: '/content/industrii/hranitelno-vkusova' },
          { text: 'Финансова индустрия', link: '/content/industrii/finansova' },
          { text: 'Шивашка индустрия', link: '/content/industrii/shivashka' }
        ]
      },
      {
        text: 'Платформа и възможности',
        collapsed: true,
        items: [
          { text: 'App Builder (Low-code)', link: '/content/app-builder' },
          { text: 'Бизнес решения', link: '/content/resheniya' }
        ]
      },
      {
        text: 'Речник на термините',
        collapsed: true,
        items: [
          { text: 'Всички понятия А-Я', link: '/dictionary/index' }
        ]
      },
      {
        text: 'Правна информация',
        collapsed: true,
        items: [
          { text: 'Политика за поверителност', link: '/content/pravna-informaciq/politika-za-poveritelnost' },
          { text: 'Условия за ползване', link: '/content/pravna-informaciq/usloviya-za-polzvane' }
        ]
      }
    ],

    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/new-ibis/newbis-public-docs' }
    ],
    
    footer: {
      copyright: 'Copyright © 2026 NewBIS'
    },

    
    docFooter: {
      prev: 'Предишна страница',
      next: 'Следваща страница'
    },
    
    outlineTitle: 'На тази страница',
    darkModeSwitchLabel: 'Тема',
    sidebarMenuLabel: 'Меню',
    returnToTopLabel: 'Връщане в началото'
  }
})
