function AboutView({ project }) {
    return (
        
        <section className="pl-3 md:pl-60 mr-5 text-black">
            <p className="text-[1rem] text-right">{project.contact1}</p>
            <p className="text-[1rem] text-right">{project.contact2}</p>
            <p className="text-[1rem] text-right">{project.contact3}</p>
            <p className="py-2 text-[.9rem] text-right whitespace-pre-line">{project.text1}</p>
            <p className="text-[.9rem] text-right whitespace-pre-line">{project.linebreake1}</p>
            <p className="py-2 text-[.9rem] text-right whitespace-pre-line">{project.work}</p>
            <p className="py-2 text-[.9rem] text-right whitespace-pre-line">{project.education}</p>
            <p className="text-[.9rem] text-right whitespace-pre-line">{project.linebreake1}</p>
            <p className="py-2 text-[.9rem] text-right whitespace-pre-line">{project.text2}</p>
            <p className="py-2 text-[.9rem] text-right whitespace-pre-line">{project.text3}</p>
            <p className="text-[.9rem] text-right whitespace-pre-line">{project.linebreake1}</p>
            <p className="mt-10 text-sm  text-right opacity-60">{project.year}</p>
        </section>
    );
}

export default AboutView;


 