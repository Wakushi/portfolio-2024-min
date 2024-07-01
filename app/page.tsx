import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern"
import { NavDock } from "@/components/nav-dock"
import ProjectList from "@/components/project-list"
import { cn } from "@/lib/utils"
import { AnimationOrder, ProjectType } from "@/types/project"

export default function Home() {
  const ANIMATION_DELAY_INCREMENT = 0.1

  const generateDelayStyle = (order: AnimationOrder) => {
    const style = {
      animation: `fade-in 1s ease ${
        order * ANIMATION_DELAY_INCREMENT
      }s forwards`,
    }
    return style
  }

  return (
    <main className="relative p-4 lg:py-[4rem] mx-auto max-w-[640px] flex flex-col gap-8 mb-4">
      <Head
        animationOrder={AnimationOrder.FIRST}
        generateDelayStyle={generateDelayStyle}
      />
      <TopContent
        animationOrder={AnimationOrder.SECOND}
        generateDelayStyle={generateDelayStyle}
      />
      <ProjectSection generateDelayStyle={generateDelayStyle} />
      <BottomContent
        animationOrder={AnimationOrder.SEVENTH}
        generateDelayStyle={generateDelayStyle}
      />
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.08}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          "h-full top-[-20%] skew-y-12 opacity-30"
        )}
      />
    </main>
  )
}

function Head({
  animationOrder,
  generateDelayStyle,
}: {
  animationOrder: AnimationOrder
  generateDelayStyle: (order: AnimationOrder) => React.CSSProperties
}) {
  return (
    <div
      style={generateDelayStyle(animationOrder)}
      className="flex flex-col md:flex-row items-center justify-between animated-block"
    >
      <h1 className="text-[3rem]">Maxime Eliazord</h1>
      <NavDock />
    </div>
  )
}

function TopContent({
  animationOrder,
  generateDelayStyle,
}: {
  animationOrder: AnimationOrder
  generateDelayStyle: (order: AnimationOrder) => React.CSSProperties
}) {
  return (
    <div className="flex flex-col gap-8">
      <p style={generateDelayStyle(animationOrder)} className="animated-block">
        <em className="font-extralight">Solving functional needs.</em>{" "}
        Passionate for crafting accessible, polished and secure experiences.
        Creating tailor-made web applications to help people increase their
        productivity and profitability.
      </p>
      <p
        style={generateDelayStyle(AnimationOrder.THIRD)}
        className="animated-block"
      >
        Web developer at <a href="https://sequodia.com/">Sequodia</a>, building{" "}
        <a href="https://ethereum.org/">on-chain</a> on my spare time.
      </p>
    </div>
  )
}

function BottomContent({
  animationOrder,
  generateDelayStyle,
}: {
  animationOrder: AnimationOrder
  generateDelayStyle: (order: AnimationOrder) => React.CSSProperties
}) {
  return (
    <div
      className="flex flex-col gap-8 animated-block"
      style={generateDelayStyle(animationOrder)}
    >
      <h2>Why the web?</h2>
      <div className="flex flex-col gap-2">
        <p>
          Building on the web is <em className="font-extralight">art</em>.
        </p>
        <p>
          We start with a blank canvas, finding the correct path to paint the
          solution that <span className="font-bold">solves problems</span> for
          hundreds, thousands, or even millions of people, using the{" "}
          <em className="font-extralight">tools</em> and{" "}
          <em className="font-extralight">techniques</em> we have acquired over
          the years.
        </p>
        <p>
          This <span className="font-bold">creativity</span> and{" "}
          <span className="font-bold">freedom</span> found in this ocean of
          possibilities serve as my daily source of happiness and motivation.
        </p>
      </div>
    </div>
  )
}

function ProjectSection({
  generateDelayStyle,
}: {
  generateDelayStyle: (order: AnimationOrder) => React.CSSProperties
}) {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-10 mb-4">
      <ProjectList
        projectType={ProjectType.BUILDING}
        animationOrder={AnimationOrder.FOURTH}
        generateDelayStyle={generateDelayStyle}
      />
      <ProjectList
        projectType={ProjectType.PROJECTS}
        animationOrder={AnimationOrder.FIFTH}
        generateDelayStyle={generateDelayStyle}
      />
      <ProjectList
        projectType={ProjectType.AWARDS}
        animationOrder={AnimationOrder.SIXTH}
        generateDelayStyle={generateDelayStyle}
      />
    </div>
  )
}
