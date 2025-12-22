import { useState } from "react";
import { Link } from "wouter";
import bd from "./bd.json";

function PagNav() {
  const reverse = [...bd].reverse();
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeImage = () => {
    setSelectedProject(null);
  };

  return (
    <section className="p-[0.4rem] relative flex flex-col items-start">
      {reverse.map((project) => (
        <Link key={project.id} href={`/arquive/project/${project.id}`}>
          <button className="w-full text-left md:flex flex-row items-start text-black hover:opacity-60 hover:blur-[0.1em] mx-[0.4rem] cursor-crosshair"
            onClick={(e) => {
              e.preventDefault();
              handleProjectClick(project);
            }} >
            {project.separators}
          </button>
        </Link>
      ))}


      {selectedProject && selectedProject.id && (
        <section
          className="fixed inset-0 flex flex-col items-center justify-center bg-opacity-30 backdrop-blur-sm z-50"
          onClick={closeImage}>

          <img
            src={selectedProject.src[0]}
            alt={selectedProject.title}
            className="max-w-[80%] max-h-[80%] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <p>{selectedProject.categories} | {selectedProject.year}</p>


          <Link href={`/arquive/project/${selectedProject.id}`}>
            <button className=" text-black rounded hover:blur-[.1rem] ">
              {selectedProject.info}
            </button>
          </Link>
        </section>
      )}
    </section>
  );
}

export default PagNav;