import { ProjectCard } from "./ProjectCard"

export function Projects() {
    const projects = [
        {
            "title": "Vpratas",
            "imageSrc": "projects/project.png",
            "description": "Projeto pessoal feito com o intuito da venda de prata 925, com a utilização de NextJs 13!",
            "skills": ["NextJs 13", "Tailwind", "Typescript"],
            "demo": "https://www.example.com",
            "source": "https://github.com/marcossdev04/nest-authenticator"
        },
        {
            "title": "JWT Login",
            "imageSrc": "projects/project.png",
            "description": "Apenas um usuário com login autenticado com JWT consegue consumir uma API de filmes, podendo listar, adicionar, editar, e excluir os mesmos.",
            "skills": ["Node", "NestJS", "Typescript", "TypeORM", "Docker", "Redis"],
            "demo": "https://www.example.com",
            "source": "https://github.com/marcossdev04/nest-authenticator"
        },
    ]
    return (
        <section className="mt-20 ml-[10%] mr-[10%]">
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