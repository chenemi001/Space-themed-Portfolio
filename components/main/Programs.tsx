'use client'
import React from "react";
import ProjectCard from "../sub/ProjectCard";

export function Projects() {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="A portfolio showcasing modern web design and development techniques using Next.js. Featuring dynamic layouts and interactive elements." />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Design and implementation of interactive website cards, focusing on user engagement and dynamic content presentation." />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="A visually stunning website with a space theme, incorporating cosmic imagery and interactive elements to create an immersive experience." />
      </div>
    </div>
  );
}

export default Projects;
