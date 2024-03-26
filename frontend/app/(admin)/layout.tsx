'use client'
import { Sidebar } from "./components"
import localFont from "next/font/local";
import '../styles/global.css';
import { useEffect, useRef, useState } from "react";

const sfProDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/SFProDisplay-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SFProDisplay-RegularItalic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/SFProDisplay-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SFProDisplay-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/SFProDisplay-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SFProDisplay-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },

  ],
})



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listElement = listRef.current;
    if (!listElement) return;

    const handleScroll = () => {
        setShowScrollButton(listElement.scrollTop > 100);
    };

    listElement.addEventListener('scroll', handleScroll);

    return () => listElement.removeEventListener('scroll', handleScroll);
}, []);
const scrollToTop = () => {
  const listElement = listRef.current; // Получаем текущий элемент списка
  if (!listElement) return;
  listElement.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
};
  return (
    <html lang="ru">
      <body className={sfProDisplay.className}>
        <div className="container">
        <Sidebar />
        {showScrollButton && (
            <button className="scroll-top" onClick={scrollToTop}>
               <img src="/icons/up-circle.svg" alt="scrollTop" width={60}/>
            </button>
        )}  
        <div className="content" ref={listRef}>
          {children}
        </div>
        </div>
        
      </body>
    </html>
  )
}
