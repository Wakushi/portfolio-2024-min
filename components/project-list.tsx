import { projects } from "@/data/projects"
import { AnimationOrder, Project, ProjectType } from "@/types/project"
import ProjectCard from "./project-card"

export default function ProjectList({
  projectType,
  animationOrder,
  generateDelayStyle,
  icon,
}: {
  projectType: ProjectType
  animationOrder: AnimationOrder
  generateDelayStyle: (order: AnimationOrder) => React.CSSProperties
  icon: JSX.Element
}) {
  return (
    <div
      style={generateDelayStyle(animationOrder)}
      className="flex flex-col gap-4 flex-1 animated-block"
    >
      <div className="flex items-center gap-1 text-dark">
        {icon}
        <h2 className="text-md">{projectType}</h2>
      </div>
      {projects
        .filter((project: Project) => project.type === projectType)
        .map((project) => {
          return <ProjectCard key={project.title} project={project} />
        })}
    </div>
  )
}
