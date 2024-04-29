'use client'
import Image from "next/image";
import { useState } from "react";
import closeIcon from '@/assets/closeIcon.png'
import menuIcon from '@/assets/menuIcon.png'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <main className="bg-black">
      <div className="max-w-[1064px] mobile:max-w-[339px] flex justify-between m-auto pt-[61px] items-center ">
        <div>
          <span className="text-3xl font-semibold text-white ">Portfolio</span>
        </div>
        <div className="">
          <div className="mobile:hidden flex gap-12">
            <div className="text-2xl text-white">Sobre</div>
            <div className="text-2xl text-white">Experiência</div>
            <div className="text-2xl text-white">Projetos</div>
            <div className="text-2xl text-white">Contato</div>
          </div>
          <div className="absolute top-[60px] right-0 mr-[10%] flex-col items-end gap-[11px] z-10 desktop:hidden laptop:hidden tablet:hidden">
            <div className="cursor-pointer justify-end flex">
              <Image src={menuOpen ? closeIcon : menuIcon} alt="Menu-button" onClick={() => setMenuOpen(!menuOpen)} />
            </div>
            <div className={`${menuOpen ? '' : 'hidden'} flex flex-col items-center gap-3 rounded-[10px] bg-gradient-to-b bg-[#151311] from-[#151311] to-black p-6 shadow-md`}>
              <div className="text-2xl text-white">Sobre</div>
              <div className="text-2xl text-white">Experiência</div>
              <div className="text-2xl text-white">Projetos</div>
              <div className="text-2xl text-white">Contato</div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
