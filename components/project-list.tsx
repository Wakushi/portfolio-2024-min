import { projects } from "@/data/projects"
import { AnimationOrder, Project, ProjectType } from "@/types/project"
import ProjectCard from "./project-card"

export default function ProjectList({
  projectType,
  animationOrder,
  generateDelayStyle,
}: {
  projectType: ProjectType
  animationOrder: AnimationOrder
  generateDelayStyle: (order: AnimationOrder) => React.CSSProperties
}) {
  return (
    <div
      style={generateDelayStyle(animationOrder)}
      className="flex flex-col gap-6 flex-1 animated-block"
    >
      <h2 className="text-sm text-dark">{projectType}</h2>
      {projects
        .filter((project: Project) => project.type === projectType)
        .map((project) => {
          return <ProjectCard key={project.title} project={project} />
        })}
    </div>
  )
}
