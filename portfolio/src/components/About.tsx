import Image from "next/image";
import avatar from '@/assets/freepik-export-20240430174416ZN7k.png'
import { GiArrowCursor } from "react-icons/gi";
import { FaServer } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";

export function About() {
    return (
        <section id="sobre" className="relative bg-[rgba(12,12,12,0.6)] rounded-2xl p-20 mt-20 mobile:mt-0 z-10 ml-[10%] mr-[10%] mobile:bg-transparent mobile:px-0">
            <h2 className="text-4xl font-bold tracking-wider mobile:text-center">SOBRE MIM</h2>
            <div className="flex items-center mobile:flex-col">
                <Image src={avatar} alt="avatar" className="w-[40%] mt-10 mobile:hidden" />
                <ul className=" flex flex-col gap-[20px] mt-7">
                    <li className="flex items-center rounded-3xl list-none p-6 bg-no-repeat bg-transparent transition-colors duration-300 ease-in-out hover:bg-green-700 mobile:px-4 mobile:text-center" >
                        <div className="">
                            <div className="flex mobile:justify-center mb-3">
                                <GiArrowCursor color="white" size={30} />
                                <h3 className="text-2xl font-semibold">Frontend Devloper</h3>
                            </div>
                            <p className="text-xl">
                                Como desenvolvedor Front-end, me dedico a criar
                                experiências de usuário envolventes e intuitivas.
                                Estou constantemente atualizado sobre as últimas
                                tendências e tecnologias front-end, frameworks
                                como React.js, Tailwind, para garantir que os projetos
                                que trabalho estejam semrpe visando a melhor experiência
                                do usuário. Minhas abordagens garantem que cada projeto que eu toco seja
                                não apenas funcional, mas também visualmente atraente e
                                fácil de usar.</p>
                        </div>
                    </li>
                    <li className="flex items-center rounded-3xl list-none p-6 bg-no-repeat bg-transparent transition-colors duration-300 ease-in-out hover:bg-green-700 mobile:px-2 mobile:text-center">

                        <div className="">
                            <div className="flex gap-1 mobile:justify-center mb-3">
                                <FaServer color="white" size={30} />
                                <h3 className="text-3xl font-semibold">Backend Devloper</h3>
                            </div>
                            <p className="text-xl">
                                Já como Backend, sou apaixonado por criar
                                sistemas robustos e escaláveis que alimentam as aplicações
                                web. Minhas experiências abrangem a construção de APIs
                                eficientes e seguras, o gerenciamento de bancos de dados
                                e a implementação de lógicas de negócios.
                                Estou confortável trabalhando com Node.js, utilizando
                                frameworks populares como Express e NestJs.
                                Minha prioridade é garantir que os sistemas que
                                desenvolvo sejam rápidos, confiáveis ​​e capazes de lidar
                                com grandes volumes de tráfego
                            </p>
                        </div>
                    </li>
                    <li className="flex items-center rounded-3xl list-none p-6 bg-no-repeat bg-transparent transition-colors duration-300 ease-in-out hover:bg-green-700 mobile:px-4 mobile:text-center">
                        <div className="">
                            <div className="flex gap-1 mobile:justify-center mb-3">
                                <MdOutlineWeb color="white" size={30} />
                                <h3 className="text-2xl font-semibold">UI Designer</h3>
                            </div>
                            <p className="text-xl">
                                Meu objetivo como UX Desingner é criar experiências digitais que
                                sejam intuitivas, acessíveis e agradáveis ​​para os usuários. Minha abordagem
                                começa com uma compreensão profunda das necessidades e
                                expectativas do usuário, seguida pela criação de wireframes,
                                protótipos e testes de usabilidade. Estou sempre buscando maneiras de
                                aprimorar minhas habilidades e conhecimentos em UX Desing
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}