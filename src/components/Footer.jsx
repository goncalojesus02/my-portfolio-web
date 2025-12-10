import bd from "./bd.json";

function Footer() {
  
  const projectId = 13; // ou outro critério
  const project = bd.find(p => p.id === projectId);

  return (
    <section className="">
      {/* Verifica se o projeto foi encontrado */}
      {project ? (
        <p>{project.year}</p>
      ) : (
        <p>Projeto não encontrado</p>
      )}
    </section>
  );
}

export default Footer;