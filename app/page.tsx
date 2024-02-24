import ProjectCard from "@/components/project-card"
import { projects } from "@/data/projects"
import { Project, ProjectType } from "@/types/project"

import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdAlternateEmail } from "react-icons/md"

export default function Home() {
  const animationDelayIncrement = 0.1
  let animationDelay = 0

  const generateDelayStyle = () => {
    const style = { animation: `fade-in 1s ease ${animationDelay}s forwards` }
    animationDelay += animationDelayIncrement
    return style
  }

  return (
    <main className="p-4 py-[8rem] lg:pt-[8rem] mx-auto max-w-[640px]">
      <article className="flex flex-col gap-8 mb-4">
        <div
          style={generateDelayStyle()}
          className="flex flex-col md:flex-row items-center justify-between animated-block"
        >
          <h1 className="text-[3rem]">Maxime Eliazord</h1>
          <div className="flex items-center gap-4">
            <a href="https://github.com/Wakushi" target="_blank">
              {" "}
              <FaGithub style={{ fontSize: "1.7rem" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/maxime-eliazord-8718ab259/"
              target="_blank"
            >
              {" "}
              <FaLinkedin style={{ fontSize: "1.7rem" }} />
            </a>
            <a href="mailto:maxime.eliazord@gmail.com" target="_blank">
              {" "}
              <MdAlternateEmail style={{ fontSize: "1.7rem" }} />
            </a>
          </div>
        </div>
        <p style={generateDelayStyle()} className="animated-block">
          <em className="font-extralight">Solving functional needs.</em>{" "}
          Passionate for crafting accessible, polished and secure experiences.
          Creating tailor-made web applications to help people increase their
          productivity and profitability.
        </p>
        <p style={generateDelayStyle()} className="animated-block">
          Web developer at <a href="https://sequodia.com/">Sequodia</a>,
          building <a href="https://ethereum.org/">on-chain</a> on my spare
          time.
        </p>
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-4">
          <div
            style={generateDelayStyle()}
            className="flex flex-col gap-6 flex-1 animated-block"
          >
            <h2 className="text-sm text-dark">Building</h2>
            {projects
              .filter(
                (project: Project) => project.type === ProjectType.BUILDING
              )
              .map((project) => {
                return <ProjectCard key={project.title} project={project} />
              })}
          </div>
          <div
            style={generateDelayStyle()}
            className="flex flex-col gap-6 flex-1 animated-block"
          >
            <h2 className="text-sm text-dark">Projects</h2>
            {projects
              .filter(
                (project: Project) => project.type === ProjectType.PROJECT
              )
              .map((project) => {
                return <ProjectCard key={project.title} project={project} />
              })}
          </div>
          <div
            style={generateDelayStyle()}
            className="flex flex-col gap-6 flex-1 animated-block"
          >
            <h2 className="text-sm text-dark">Hacks</h2>
            {projects
              .filter((project: Project) => project.type === ProjectType.HACK)
              .map((project) => {
                return <ProjectCard key={project.title} project={project} />
              })}
          </div>
        </div>
        <h2 style={generateDelayStyle()} className="animated-block">
          Why ?
        </h2>
        <div
          style={generateDelayStyle()}
          className="flex flex-col gap-2 animated-block"
        >
          <p>
            Building on the web is <em className="font-extralight">art</em>.
          </p>
          <p>
            We start with a blank canvas, finding the correct path to paint the
            solution that <span className="font-bold">solves problems</span> for
            hundreds, thousands, or even millions of people, using the{" "}
            <em className="font-extralight">tools</em> and{" "}
            <em className="font-extralight">techniques</em> we have acquired
            over the years.
          </p>
          <p>
            This <span className="font-bold">creativity</span> and{" "}
            <span className="font-bold">freedom</span> found in this ocean of
            possibilities serve as my daily source of happiness and motivation.
          </p>
        </div>
      </article>
    </main>
  )
}
