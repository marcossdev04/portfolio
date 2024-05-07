import { ProjectCard } from "./ProjectCard"
import v from '@/assets/V.png'
import i from '@/assets/Insominia2.png'

export function Projects() {
    const projects = [
        {
            "title": "Vpratas",
            "imageSrc": v,
            "description": "Projeto de ecoomerce feito com o intuito da venda de prata 925, com a utilização de NextJs 13, junto com NextUi e funcionalidades como filtro de pesquisa, dinamyc routes, carrinho de compras!",
            "skills": ["Next 13", "Tailwind", "Typescript", "React", "Next-Ui"],
            "demo": "https://vpratas-5fp09aocq-marcossdev04s-projects.vercel.app",
            "source": "https://github.com/marcossdev04/VPRATAS"
        },
        {
            "title": "JWT Login",
            "imageSrc": i,
            "description": "Aplicação feita para apenas usuários com login autenticado com JWT conseguir consumir uma API de filmes, podendo listar, adicionar, editar, e excluir os filmes em questão.",
            "skills": ["Node", "NestJS", "Typescript", "TypeORM", "Docker", "Redis"],
            "demo": "undef",
            "source": "https://github.com/marcossdev04/nest-authenticator"
        },
    ]
    return (
        <section id="projetos" className="mt-20 ml-[10%] mr-[10%]">
            <h2 className="text-4xl font-bold tracking-wide uppercase">Projects</h2>
            <div className="mt-9 flex flex-row flex-wrap items-center justify-center gap-4 w-full">
                {projects.map((project, index) => {
                    return (
                        <ProjectCard key={index} project={project} />
                    )
                })}
            </div>
        </section>

    )
}