import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function Footer() {
    return (
        <footer className="bg-green-950 mt-32 mobile:mt-10 flex flex-row justify-evenly w-[100vw] py-14 px-[10%] gap-[10px] mobile:flex-col mobile:gap-[23px] mobile:px-4">
            <div className="mobile:flex mobile:flex-col mobile:items-center">
                <h2 className="text-[80px] font-bold tracking-[4px]">Contatos</h2>
                <p className="text-[40px] font-normal tracking-[2px] text-center">Entre em contato por aqui</p>
            </div>
            <ul className="flex flex-col items-start list-none gap-6">
                <Link href={'https://github.com/marcossdev04'}>
                    <li className="flex items-center gap-6 mobile:gap-2">
                        <FaGithub size={40} />
                        <p className="text-3xl mobile:text-2xl font-normal tracking-[1.5px]">github.com/marcossdev04</p>
                    </li>
                </Link>
                <Link href={'https://www.linkedin.com/in/marcos-vinícius-9311a6254'}>
                    <li className="flex items-center gap-6 mobile:gap-2">
                        <FaLinkedin size={40} />
                        <p className="text-3xl mobile:text-2xl font-normal tracking-[1.5px]">linkedin.com/marcosVinícius</p>
                    </li>
                </Link>
                <Link href={'mailto:marcosdev04@gmail.com'}>
                    <li className="flex items-center gap-6 mobile:gap-2">
                        <MdEmail size={40} />
                        <p className="text-3xl mobile:text-2xl font-normal tracking-[1.5px]">marcosdev04@gmail.com</p>
                    </li>
                </Link>
                <Link href={'https://www.instagram.com/marcossvnc/'}>
                    <li className="flex items-center gap-6 mobile:gap-2">
                        <FaInstagram size={40} />
                        <p className="text-3xl mobile:text-2xl font-normal tracking-[1.5px]">@marcossvnc</p>
                    </li>
                </Link>
            </ul>
        </footer>
    )
}