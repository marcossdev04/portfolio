import Image from "next/image"
import { FaAws, FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa"
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io"
import { SiPrisma, SiTailwindcss, SiTypescript } from "react-icons/si"
import ddologo from '@/assets/logo.png'
import { DiMongodb } from "react-icons/di"

export function Experience() {
    const experiences = [
        {
            name: "HTML5",
            icon: <FaHtml5 size={90} />,
            color: "bg-orange-700"
        },
        {
            name: "CSS",
            icon: <FaCss3Alt size={90} />,
            color: "bg-blue-700"
        },
        {
            name: "Javascript",
            icon: <IoLogoJavascript size={90} />,
            color: "bg-yellow-300"
        },
        {
            name: "Typescript",
            icon: <SiTypescript size={80} />,
            color: "bg-blue-700"
        },
        {
            name: "React",
            icon: <FaReact size={90} />,
            color: "bg-blue-500"
        },
        {
            name: "Node",
            icon: <IoLogoNodejs size={90} />,
            color: "bg-green-700"
        },
        {
            name: "Prisma",
            icon: <SiPrisma size={90} />,
            color: "bg-sky-900"
        },
        {
            name: "Tailwind Css",
            icon: <SiTailwindcss size={90} />,
            color: "bg-cyan-500"
        },
        {
            name: "Mongo DB",
            icon: <DiMongodb color="white" size={90} />,
            color: "bg-green-700"
        },
        {
            name: "AWS Cloud",
            icon: <FaAws color="white" size={90} />,
            color: "bg-sky-950"
        },


    ]
    const history = [
        {
            "role": "Desenvolvedor Full-Stack",
            "organisation": "Dia de Obra",
            "startDate": "set, 2023",
            "endDate": "jan, 2024",
            "experiences": ["ReactJs, NextJs", "NodeJs, NestJs"],
            "imageSrc": ddologo
        },
        {
            "role": "Desenvolvedor Front-End",
            "organisation": "Dia de Obra",
            "startDate": "Mai, 2023",
            "endDate": "Set, 2023",
            "experiences": ["NextJs, React Query", "Consumação de API's estilização com tailwind"],
            "imageSrc": ddologo
        },
    ]
    return (
        <section id="experiencia" className="mt-20 ml-[10%] mr-[10%] mobile:mt-0">
            <h2 className="text-4xl font-bold uppercase leading-7 mobile:text-center">Experiências</h2>
            <div className="flex justify-evenly mt-4 mobile:flex-col mobile:items-center mobile:gap-8 mobile:mt-0">
                <div className="w-[45%] mt-16 flex flex-wrap gap-[11px] mobile:w-full mobile:flex-row mobile:justify-center">
                    {experiences.map((skill, index) => {
                        return (
                            <div key={index} className="flex  flex-col items-center gap-[11px]">
                                <div className={`${skill.color} rounded-full flex items-center justify-center w-[120px] h-[120px] transition ease-in-out hover:-translate-y-4 duration-300`}>
                                    {skill.icon}
                                </div>
                                <p className="text-2xl font-[roboto] font-medium">{skill.name}</p>
                            </div>
                        )
                    })}
                </div>
                <ul className="w-[45%] flex flex-col gap-10 mobile:w-full mobile:gap-6 mobile:mt-5">
                    {history.map((historyItem, index) => {
                        return (
                            <li className="flex items-center gap-4 bg-gradient-to-r bg-[rgba(12,12,12,0.6)] transition-colors duration-300 ease-in-out hover:bg-green-700 rounded-xl p-6 mobile:flex-col" key={index}>
                                <Image className="w-[100px]" src={historyItem.imageSrc} alt="DDO Logo" />
                                <div className="font-[roboto]">
                                    <h3 className="text-3xl font-medium">{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                    <p className="text-xl font-light">{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                    <ul className="mt-2 list-inside text-[25px] list-disc ml-4">
                                        {historyItem.experiences.map((xp, id) => {
                                            return <li key={id}>{xp}</li>
                                        })}
                                    </ul>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}