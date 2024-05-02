import Image, { StaticImageData } from "next/image"
import Link from "next/link"
interface Props {
    project: {
        title: string,
        description: string,
        skills: string[],
        demo: string,
        source: string,
        imageSrc: StaticImageData
    }
}
export const ProjectCard = ({ project }: Props) => {
    return (
        <div className="flex flex-col rounded-xl bg-gradient-to-b from-green-700 to-[#12301a] shadow-xl py-4 px-5 max-w-[345px] ">
            <Image className="mb-5" src={project.imageSrc} alt={`Imagem do projeto ${project.title}`} />
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="mt-2 text-2xl font-normal">{project.description}</p>
            <ul className="w-full mt-3 flex flex-row flex-wrap gap-2 list-none">
                {project.skills.map((skill, id) => {
                    return (
                        <li className="text-2xl font-normal rounded-[100px] bg-green-950 py-0.5 px-5" key={id}>{skill}</li>
                    )
                })}
            </ul>
            <div className="w-full mt-5 flex justify-around">
                <Link className={`${project.demo == "undef" ? 'hidden' : ''} text-3xl font-semibold rounded-[100px] bg-green-700 py-[1px] px-5`} target="_blank" href={project.demo}>Demo</Link>
                <Link className="text-3xl font-semibold rounded-[100px] bg-green-700 py-[1px] px-5" target="_blank" href={project.source}>Source</Link>
            </div>
        </div>
    )
}