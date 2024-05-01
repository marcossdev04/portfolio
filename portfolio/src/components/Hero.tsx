import Image from "next/image";
import Link from "next/link";
import eu from '@/assets/eu.jpg'

export function Hero() {
    return (
        <section>
            <div className="relative flex mobile:flex-col-reverse items-center justify-between mt-12 z-10 ml-[10%] mr-[10%]">
                <div className="flex flex-col items-start z-10 mobile:items-center">
                    <div className="text-7xl font-black mb-8 font-[roboto]  mobile:text-center">
                        <h1>Olá, me chamo Marcos!</h1>
                    </div>
                    <div className="text-3xl font-[roboto] mb-14 mobile:text-center">
                        <p>
                            Engenheiro de software full-stack com 2 anos de experiência com React e NodeJs.
                            Entre em contato se quiser saber mais
                        </p>
                    </div>
                    <div className="bg-green-500 rounded-full text-3xl font-semibold px-4 py-6 shadow-md">
                        <Link href={'mailto:marcosdev04@gmail.com'}>Me contate</Link>
                    </div>
                </div>
                <div className="w-1/2 z-10">
                    <Image className="rounded-full" src={eu} alt="me" />
                </div>
                <div className="absolute w-[60vw] h-[60vw] top-[-428px] left-[-15vw] rounded-full bg-[#20552f] opacity-60 blur-[100px] z-0"></div>
                <div className="absolute w-[50vw] h-[60vw] top-[246px] left-[55vw] rounded-full bg-[#20552f] opacity-60 blur-[100px] z-0"></div>
            </div>
        </section>
    )
}