import { useRoute } from "wouter";
import Nav from "./Nav";
import ProjectView from "./ProjectView";

function HomePage() {
  const [match, params] = useRoute("/arquive/project/:id");
  const projectId = params?.id;

  return (
    <>
      <section className="flex flex-col gap-[2rem] md:gap-[10rem] h-[100vh] md:flex-row min-h-0 h-[100%]">

        {/* ESQUERDO: Pagnaveg */}
        <section className=" md:w-1/2 bg-gradient-to-b from-[#00OFF] from-[0%] to-white to-[10%] md:bg-gradient-to-r from-[#00f] from-[1%] to-white to-[5%]">
          <Nav />
        </section>

        {/* DIREITO: PagProject */}
        <section className="md:w-1/2 h-[vh] overflow-y-auto bg-gradient-to-t from-[#0000FF] from-[0%] to-white to-[10%] md:bg-gradient-to-l from-[#00f] from-[1%] to-white to-[5%] ">

          <ProjectView id={projectId} />
        </section>
      </section>
    </>
  );
}

export default HomePage;