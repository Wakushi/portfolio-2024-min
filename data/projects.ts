import { Project, ProjectType } from "@/types/project"

const projects: Project[] = [
  {
    type: ProjectType.BUILDING,
    title: "Portalsig",
    description:
      "Crosschain multisig wallet factory for EVM compatible blockchains.",
    repositories: [
      {
        type: "Frontend",
        url: "https://github.com/Wakushi/portalsig-front",
        description: "(Next.js)",
      },
      {
        type: "Backend",
        url: "https://github.com/Wakushi/portalsig-foundry",
        description: "(Foundry)",
      },
    ],
  },
  {
    type: ProjectType.PROJECT,
    title: "Service accomodation platform",
    description:
      "Client files matching with housing based on specific criteria, and administrators with tools to manage file statuses.",
    externalLink:
      "https://sequodia.com/plateforme-de-gestion-de-logements-de-fonction",
  },
  {
    type: ProjectType.PROJECT,
    title: "Medical platform",
    description:
      "Online booking and payment for both teleconsultations and physical appointments with doctors",
    externalLink:
      "https://sequodia.com/plateforme-medicale-de-teleconsultation-et-gestion-des-rendez-vous",
  },
  {
    type: ProjectType.HACK,
    title: "DEVMentor",
    description:
      "<span>1<sup>st</sup></span> place in SocialFi innovations at <a href='https://devpost.com/software/devmentor' target='_blank'> Chainlink Constellation Hackathon 2023 </a>",
    repositories: [
      {
        type: "Frontend",
        url: "https://github.com/Wakushi/devmentor-front",
        description: "(Next.js)",
      },
      {
        type: "Backend",
        url: "https://github.com/Wakushi/devmentor",
        description: "(Foundry)",
      },
    ],
  },
]

export { projects }
