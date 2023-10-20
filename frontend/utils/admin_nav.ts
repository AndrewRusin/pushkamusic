import { IAdminNav } from "@/interfaces/admin_nav.interface";

export const items: IAdminNav[] = [
    {
      id: 1,
      title: 'Панель управления',
      href: '/dashboard',
     
    },
     {
      id: 2,
      title: 'Создать песню',
      href: '/dashboard/create_song',
  
    },
    {
      id: 3,
      title: 'Создать фильтр ',
      href: '/dashboard/create_filter',
    },
    {
      id: 4,
      title: 'Создать релиз',
      href: '/dashboard/create_release',
    },
  ]