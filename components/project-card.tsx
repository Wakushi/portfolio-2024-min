import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Project, ProjectType } from "@/types/project"
import { CiFolderOn } from "react-icons/ci"
import { FaGithub, FaYoutube } from "react-icons/fa"
import { GoArrowUpRight } from "react-icons/go"
import { BorderBeam } from "./magicui/border-beam"

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, description, externalLink, resources, type } = project

  return (
    <div className="relative flex flex-col gap-2 min-w-[185px] bg-white bg-opacity-[0.03] shadow-lg backdrop-blur-sm p-4 rounded">
      {type === ProjectType.AWARDS && <BorderBeam />}
      {externalLink ? (
        <div className="flex items-center gap-1">
          <a href={externalLink} target="_blank">
            {title}
          </a>
          <GoArrowUpRight
            style={{ color: "#a0a0a0", minWidth: "1rem", minHeight: "1rem" }}
          />
        </div>
      ) : (
        <Popover>
          <PopoverTrigger>
            <div className="flex items-center gap-1">
              <span>{title}</span>{" "}
              <CiFolderOn style={{ color: "#a0a0a0", fontSize: "1.2rem" }} />
            </div>
          </PopoverTrigger>
          <PopoverContent className="flex flex-col gap-2 w-auto">
            <h3 className="font-light text-sm">Resources</h3>
            <div className="flex flex-col gap-1">
              {resources?.map((resource) => {
                return (
                  <div
                    key={resource.url}
                    className="flex items-center gap-2 text-sm"
                  >
                    {resource.icon === "github" ? <FaGithub /> : <FaYoutube />}{" "}
                    <a href={resource.url} target="_blank">
                      {resource.type}
                    </a>
                    <span>{resource.description}</span>
                    <GoArrowUpRight style={{ color: "#a0a0a0" }} />
                  </div>
                )
              })}
            </div>
          </PopoverContent>
        </Popover>
      )}

      <p
        className="text-sm font-light"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
    </div>
  )
}

export default ProjectCard
