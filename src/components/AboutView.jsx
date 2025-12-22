function AboutView({ project }) {
  return (
    <section className="pl-60 text-black">
        
      <h1 className="text-4xl pb-4">{project.title}</h1>

      <p className="py-6 whitespace-pre-line">{project.text1}</p>
      <p className="py-6 whitespace-pre-line">{project.text2}</p>

      <p className="mt-10 text-sm opacity-60">
        {project.year}
      </p>
    </section>
  );
}

export default AboutView;