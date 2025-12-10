import { Link } from "wouter";
import bd from "./bd.json";

function Window() {
const reverse = [...bd].reverse();
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeImage = () => {
    setSelectedProject(null);
  };

  return (

      <section className="p-[0.4rem] relative flex flex-col items-center">
  {selectedProject && selectedProject.src && (
        <div
          className="fixed inset-0 flex flex-col items-center justify-center bg-opacity-30 backdrop-blur-sm z-50"
          onClick={closeImage}
        >
          <img
            src={selectedProject.src[0]}
            alt={selectedProject.title}
            className="max-w-[80%] max-h-[80%] object-contain"
            onClick={(e) => e.stopPropagation()} 
          />

          {/* Botão para navegar para a página do projeto */}
          <div className="mt-4">
            <Link href={`/projectview/${selectedProject.id}`}>
              <button className="px-4 py-2 text-black rounded ">
                (+ info)
              </button>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}

export default Window;
