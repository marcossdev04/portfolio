'use client'
import closeIcon from '@/assets/closeIcon.png'
import menuIcon from '@/assets/menuIcon.png'
import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';
export function Menu() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className=''>
            <div className=" max-w-[1300px] mobile:max-w-[339px] flex justify-between m-auto pt-[61px] items-center laptop:px-32 ">
                <div className='z-20'>
                    <span className="text-3xl font-semibold ">MRCDEV</span>
                </div>
                <div className="z-30">
                    <div className="mobile:hidden flex gap-12">
                        <Link href='#sobre' className="text-2xl">Sobre</Link>
                        <Link href='#experiencia' className="text-2xl">Experiência</Link>
                        <Link href='#projetos' className="text-2xl">Projetos</Link>
                        <Link href='#contato' className="text-2xl">Contato</Link>
                    </div>
                    <div className="absolute top-[60px] right-0 mr-[10%] flex-col items-end gap-[11px] z-30 desktop:hidden laptop:hidden tablet:hidden">
                        <div className="cursor-pointer justify-end flex">
                            <Image src={menuOpen ? closeIcon : menuIcon} alt="Menu-button" onClick={() => setMenuOpen(!menuOpen)} />
                        </div>
                        <div className={`${menuOpen ? '' : 'hidden'} flex flex-col items-center gap-3 rounded-[10px] bg-gradient-to-b bg-[#151311] from-[#151311] to-black p-6 shadow-md`}>
                            <Link href='#sobre' className="text-2xl">Sobre</Link>
                            <Link href='#experiencia' className="text-2xl">Experiência</Link>
                            <Link href='#projetos' className="text-2xl">Projetos</Link>
                            <Link href='#contato' className="text-2xl">Contato</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}