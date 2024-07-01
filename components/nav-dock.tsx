import { Dock, DockIcon } from "@/components/magicui/dock"
import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdAlternateEmail } from "react-icons/md"

export function NavDock() {
  return (
    <Dock>
      <DockIcon>
        <a href="https://github.com/Wakushi" target="_blank">
          <FaGithub style={{ fontSize: "1.7rem" }} />
        </a>
      </DockIcon>
      <DockIcon>
        <a
          href="https://www.linkedin.com/in/maxime-eliazord-8718ab259/"
          target="_blank"
        >
          <FaLinkedin style={{ fontSize: "1.7rem" }} />
        </a>
      </DockIcon>
      <DockIcon>
        <a href="mailto:maxime.eliazord@gmail.com" target="_blank">
          <MdAlternateEmail style={{ fontSize: "1.7rem" }} />
        </a>
      </DockIcon>
    </Dock>
  )
}
