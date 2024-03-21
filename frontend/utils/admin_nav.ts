import { IAdminNav } from "@/interfaces/admin_nav.interface";

export const items: IAdminNav[] = [
    {
      id: 1,
      title: 'Песни',
      href: '/dashboard/song_items',
    
    },
    {
      id: 2,
      title: 'Фильтр',
      href: '/dashboard/filter_items',

    },
    // {
    //   id: 3,
    //   title: 'релизы',
    //   href: '/dashboard/releases',
    // },
    {
      id: 3,
      title: 'Подборки',
      href: '/dashboard/select_items',
    },
    {  id: 4,
      title: 'Создать песню',
      href: '/dashboard/create_song',
      class:'red_btn_nav'
    },
    {
      id: 5,
      title: 'Создать фильтр ',
      href: '/dashboard/create_filter',
      class:'grey_btn_nav'
    },
    // {
    //   id: 4,
    //   title: 'Создать релиз',
    //   href: '/dashboard/create_release',
    // },
  ]