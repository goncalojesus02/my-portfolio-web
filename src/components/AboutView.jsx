function AboutView({ project }) {
    return (
        
        <section className="pl-3 md:pl-60 mr-5 text-black text-right">
            <p className="text-[1rem] ">{project.contact1}</p>
            <p className="py-2 text-[.9rem]  whitespace-pre-line">{project.text1}</p>
            <p className="text-[.9rem]  whitespace-pre-line">{project.linebreake1}</p>
            <p className="py-2 text-[.9rem]  whitespace-pre-line">{project.work}</p>
            <p className="py-2 text-[.9rem]  whitespace-pre-line">{project.education}</p>
            <p className="text-[.9rem]  whitespace-pre-line">{project.linebreake1}</p>
            <p className="py-2 text-[.9rem]  whitespace-pre-line">{project.text2}</p>
            <p className="py-2 text-[.9rem]  whitespace-pre-line">{project.text3}</p>
            <p className="text-[.9rem]  whitespace-pre-line">{project.linebreake1}</p>
            <a className="text-[.9rem]  whitespace-pre-line text-[#000000] hover:blur-[.1rem]" href="https://www.linkedin.com/in/goncaloffjesus/" target="_blank">{project.contactlinks1}</a>
            <a className="text-[.9rem]  whitespace-pre-line text-[#000000] hover:blur-[.1rem]" href="https://www.instagram.com/goncaloffjesus/" target="_blank">{project.contactlinks2}</a>
            <a className="text-[.9rem]  whitespace-pre-line text-[#000000] hover:blur-[.1rem]" href="mailto:gvffjesus@gmail.com" target="_blank">{project.contactlink3}</a>
            <p className="mt-10 text-sm   opacity-60">{project.year}</p>
        </section>
    );
}

export default AboutView;


 