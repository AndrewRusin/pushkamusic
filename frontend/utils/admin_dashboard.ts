import { IAdminNav } from "@/interfaces/admin_nav.interface";

export const items: IAdminNav[] = [
    {
      id: 1,
      title: 'Список песен',
      href: '/dashboard/song_items',
     
    },
     {
      id: 2,
      title: 'Список элементов фильтра',
      href: '/dashboard/filter_items',
  
    },
    {
      id: 3,
      title: 'Список релизов',
      href: '/dashboard/releases',
    },
    {
      id: 4,
      title: 'Контакты',
      href: '/dashboard/contacts',
    },
    {
      id: 5,
      title: 'Список подборок',
      href: '/dashboard/select_items',
    },
  ]