import { Project, ProjectType } from "@/types/project"

const projects: Project[] = [
  {
    type: ProjectType.BUILDING,
    title: "Mosaic",
    description:
      "Tokenization and fractionalization service for art asset managers. <a href='https://devpost.com/software/mosaic-zy3lu2' target='_blank'> (Read more...) </a>",
    resources: [
      {
        type: "Youtube",
        url: "https://www.youtube.com/watch?v=zz7ocEN09ps",
        description: "Demo",
        icon: "youtube",
      },
      {
        type: "Frontend",
        url: "https://github.com/Wakushi/mosaic-app",
        description: "(Next.js)",
        icon: "github",
      },
      {
        type: "Backend",
        url: "https://github.com/Wakushi/mosaic-foundry",
        description: "(Foundry)",
        icon: "github",
      },
    ],
  },
  {
    type: ProjectType.BUILDING,
    title: "Portalsig",
    description:
      "Crosschain multisig wallet factory for EVM compatible blockchains. <a href='https://www.linkedin.com/feed/update/urn:li:activity:7170549028277964800/' target='_blank'> (Read more...) </a>",
    resources: [
      {
        type: "Youtube",
        url: "https://www.youtube.com/watch?v=muvzPS_4WdI",
        description: "Demo",
        icon: "youtube",
      },
      {
        type: "Frontend",
        url: "https://github.com/Wakushi/portalsig-front",
        description: "(Next.js)",
        icon: "github",
      },
      {
        type: "Backend",
        url: "https://github.com/Wakushi/portalsig-foundry",
        description: "(Foundry)",
        icon: "github",
      },
    ],
  },
  {
    type: ProjectType.PROJECTS,
    title: "Service accomodation platform",
    description:
      "Client files matching with housing based on specific criteria, and administrators with tools to manage file statuses.",
    externalLink:
      "https://sequodia.com/plateforme-de-gestion-de-logements-de-fonction",
  },
  {
    type: ProjectType.PROJECTS,
    title: "Medical platform",
    description:
      "Online booking and payment for both teleconsultations and physical appointments with doctors",
    externalLink:
      "https://sequodia.com/plateforme-medicale-de-teleconsultation-et-gestion-des-rendez-vous",
  },
  {
    type: ProjectType.AWARDS,
    title: "DEVMentor",
    description:
      "<span>1<sup>st</sup></span> place in SocialFi innovations at <a href='https://devpost.com/software/devmentor' target='_blank'> Chainlink Constellation Hackathon 2023 </a>",
    resources: [
      {
        type: "Youtube",
        url: "https://www.youtube.com/watch?v=Z-BR3U3cnAI&t=140s",
        description: "Demo",
        icon: "youtube",
      },
      {
        type: "Frontend",
        url: "https://github.com/Wakushi/devmentor-front",
        description: "(Next.js)",
        icon: "github",
      },
      {
        type: "Backend",
        url: "https://github.com/Wakushi/devmentor",
        description: "(Foundry)",
        icon: "github",
      },
    ],
  },
]

export { projects }
