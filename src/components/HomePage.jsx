import { useRoute } from "wouter";
import Nav from "./Nav";
import ProjectView from "./ProjectView";

function HomePage() {
  const [match, params] = useRoute("/arquive/project/:id");
  const projectId = params?.id;

  return (
    <>
    {/* ARQUIVO / HOME PAGE DIVIDIDA EM DUAS COLUNAS IDEIA DO LAYOUT E PAG LADO ESQUERDO NAV E LADO DIREITO PAGINA PROJETO*/}
      <section className="flex flex-col gap-[2rem] md:gap-[10rem] h-[100vh] md:flex-row min-h-0 h-[100%]">

        <section className=" md:w-1/2 bg-gradient-to-b from-[#00OFF] from-[0%] to-white to-[10%] md:bg-gradient-to-r from-[#00f] from-[1%] to-white to-[5%]">
          <Nav/>
        </section>

        <section className="md:w-1/2 h-[vh] overflow-y-auto bg-gradient-to-t from-[#0000FF] from-[0%] to-white to-[10%] md:bg-gradient-to-l from-[#00f] from-[1%] to-white to-[5%] ">
          <ProjectView id={projectId}/>
        </section>
      </section>
    </>
  );
}

export default HomePage;