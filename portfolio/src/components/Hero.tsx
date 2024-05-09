import Image from "next/image";
import Link from "next/link";
import eu from '@/assets/eu.jpg'

export function Hero() {
    return (
        <section>
            <div className="relative flex mobile:flex-col-reverse items-center justify-between mt-12 z-10 ml-[10%] mr-[10%]">
                <div className="flex flex-col items-start z-10 mobile:items-center w-[95%]">
                    <div className="text-7xl laptop:text-6xl font-black mb-8">
                        <h1>Olá, eu sou o Marcos!</h1>
                    </div>
                    <div className="text-3xl laptop:text-2xl mb-14 ">
                        <p>
                            Engenheiro de Software Full-Stack com 2 anos de experiência
                            focada em NextJs e Nodejs. Apaixonado em criar soluções eficientes e
                            inovadoras que impulsionam o sucesso dos projetos. Com habilidades sólidas
                            em desenvolvimento e uma abordagem colaborativa, adoro enfrentar
                            novos desafios e contribuir para equipes de alto desempenho. Entre em contato
                            para saber mais sobre como posso agregar valor ao seu projeto.
                        </p>
                    </div>
                    <div className="bg-green-500 rounded-full text-3xl font-semibold px-4 py-6 shadow-md">
                        <Link href={'mailto:marcosdev04@gmail.com'}>Saiba mais</Link>
                    </div>
                </div>
                <div className="w-1/2 z-10 mobile:mb-5">
                    <Image className="rounded-full" src={eu} alt="me" />
                </div>
                <div className="absolute w-[60vw] h-[60vw] top-[-428px] left-[-15vw] rounded-full bg-[#20552f] opacity-60 blur-[100px] z-0"></div>
                <div className="absolute w-[50vw] h-[60vw] top-[246px] left-[55vw] rounded-full bg-[#20552f] opacity-60 blur-[100px] z-0"></div>
            </div>
        </section>
    )
}