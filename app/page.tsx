import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { GoArrowUpRight } from "react-icons/go"
import { MdAlternateEmail } from "react-icons/md"

export default function Home() {
  return (
    <main className="p-4 pb-8 lg:pt-[8rem] mx-auto max-w-[640px]">
      <article className="flex flex-col gap-8 mb-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
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
        <p>
          <em className="font-extralight">Solving functional needs.</em>{" "}
          Passionate for crafting accessible, polished and secure experiences.
          Creating tailor-made web applications to help people increase their
          productivity and profitability.
        </p>
        <p>
          Web developer at <a href="https://sequodia.com/">Sequodia</a>,
          building <a href="https://ethereum.org/">on-chain</a> on my spare
          time.
        </p>
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-4">
          <div className="flex flex-col gap-6 flex-1">
            <h2 className="text-sm text-dark">Building</h2>
            <div className="flex flex-col gap-2">
              <HoverCard>
                <HoverCardTrigger>
                  <div className="flex items-center gap-1">
                    <span>Portalsig</span>{" "}
                    <GoArrowUpRight style={{ color: "#a0a0a0" }} />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="flex flex-col gap-2">
                  <h3 className="text-light text-sm">Repositories</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <FaGithub />{" "}
                    <a
                      href="https://github.com/Wakushi/portalsig-front"
                      target="_blank"
                    >
                      Frontend
                    </a>
                    <span>(Next.js)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaGithub />{" "}
                    <a
                      href="https://github.com/Wakushi/portalsig-foundry"
                      target="_blank"
                    >
                      Backend
                    </a>
                    <span>(Foundry)</span>
                  </div>
                </HoverCardContent>
              </HoverCard>
              <p className="text-dark text-md font-light">
                Crosschain multisig wallet factory for EVM compatible
                blockchains.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 flex-1">
            <h2 className="text-sm text-dark">Projects</h2>
            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                <h3 className="text-light text-md max-w-[170px]">
                  <a
                    href="https://sequodia.com/plateforme-de-gestion-de-logements-de-fonction"
                    target="_blank"
                  >
                    Service accomodation platform
                  </a>
                </h3>
                <GoArrowUpRight style={{ color: "#a0a0a0" }} />
              </div>
              <p className="text-dark text-md font-light">
                Client files matching with housing based on specific criteria,
                and administrators with tools to manage file statuses.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                <h3 className="text-light text-md max-w-[170px]">
                  <a
                    href="https://sequodia.com/plateforme-medicale-de-teleconsultation-et-gestion-des-rendez-vous"
                    target="_blank"
                  >
                    Medical platform
                  </a>
                </h3>
                <GoArrowUpRight style={{ color: "#a0a0a0" }} />
              </div>
              <p className="text-dark text-md font-light">
                Online booking and payment for both teleconsultations and
                physical appointments with doctors
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 flex-1">
            <h2 className="text-sm text-dark">Hacks</h2>
            <div className="flex flex-col gap-2">
              <HoverCard>
                <HoverCardTrigger>
                  <div className="flex items-center gap-1">
                    <span>DEVMentor</span>{" "}
                    <GoArrowUpRight style={{ color: "#a0a0a0" }} />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="flex flex-col gap-2">
                  <h3 className="text-light text-sm">Repositories</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <FaGithub />{" "}
                    <a
                      href="https://github.com/Wakushi/devmentor-front"
                      target="_blank"
                    >
                      Frontend
                    </a>
                    <span>(Next.js)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaGithub />{" "}
                    <a
                      href="https://github.com/Wakushi/devmentor"
                      target="_blank"
                    >
                      Backend
                    </a>
                    <span>(Foundry)</span>
                  </div>
                </HoverCardContent>
              </HoverCard>
              <p className="text-dark text-md font-light">
                <span>
                  1<sup>st</sup>
                </span>{" "}
                place in SocialFi innovations at{" "}
                <a
                  href="https://devpost.com/software/devmentor"
                  target="_blank"
                >
                  Chainlink Constellation Hackathon 2023
                </a>{" "}
                .
              </p>
            </div>
          </div>
        </div>
        <h2>Why ?</h2>
        <div className="flex flex-col gap-2">
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
