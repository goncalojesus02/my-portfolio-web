import { useState, useEffect } from "react";
import { useRoute, useLocation } from "wouter";
import bd from "./bd.json";
import AboutView from "./AboutView";

function ProjectView() {
  const [project, setProject] = useState(null);
  const [match, params] = useRoute("/arquive/project/:id");
  const [location, setLocation] = useLocation();

  
  const projectIds = bd.map(p => p.id);

  useEffect(() => {
    if (match) {
      const found = bd.find((p) => p.id === Number(params.id));
      setProject(found || null);
    }
  }, [match, params]);

  
  const getNextProjectId = () => {
    const currentIndex = projectIds.indexOf(Number(params.id));
    const nextIndex = (currentIndex + 1) % projectIds.length; 
    return projectIds[nextIndex];
  };

  
  const handleNextProject = () => {
    const nextId = getNextProjectId();
    setLocation(`/arquive/project/${nextId}`);
  };

  if (!project) return <section></section>;
return (
  <section className="p-[0.4rem] text-[#000000]">

    {project.id === 13 ? (
      <AboutView project={project} />
    ) : (
      <>
        {match && (
          <button
            onClick={() => setLocation("/arquive/project/0")}
            className="absolute text-[#000000] hover:blur-[.1rem]"
          >
            {project.btn}
          </button>
        )}

        {match && (
          <button
            onClick={handleNextProject}
            className="absolute right-2 text-[#000000] hover:blur-[.1rem]"
          >
            {project.btn2}
          </button>
        )}

        <h1 className="text-3xl pb-4 md:pt-[1em]">
          {project.title}
        </h1>

        <p className="whitespace-pre-line text-right pb-8">
          {project.text}
        </p>

        {project.src?.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={project.title}
            className="w-full pb-8"
          />
        ))}
      </>
    )}
  </section>
);
}

export default ProjectView;