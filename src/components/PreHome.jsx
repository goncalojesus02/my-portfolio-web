import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "wouter";


const HomePage = () => {
  const animacao = useRef(null);

  const totalPixels = useRef(Math.floor(Math.random() * 40) + 20).current;
  const columns = useRef(Math.floor(Math.random() * 8) + 3).current;
  const rows = Math.ceil(totalPixels / columns);


  useEffect(() => {
    const container = animacao.current;
    const pixels = [];

    const pixelWidth = window.innerWidth / columns;
    const pixelHeight = window.innerHeight / rows;

    // px
    for (let i = 0; i < totalPixels; i++) {
      const row = Math.floor(i / columns);
      const col = i % columns;

      const pixel = document.createElement("section");
      pixel.style.position = "fixed";
      pixel.style.width = `${pixelWidth}px`;
      pixel.style.height = `${pixelHeight}px`;
      pixel.style.backgroundColor = "#00f";
      pixel.style.top = `${row * pixelHeight}px`;
      pixel.style.left = `${col * pixelWidth}px`;

      container.appendChild(pixel);
      pixels.push(pixel);
    }

    // define a aleatória
    const ordem = pixels.map((_, i) => i);
    for (let i = ordem.length - 1; i > 0; i--) {
      const o = Math.floor(Math.random() * (i + 1));
      [ordem[i], ordem[o]] = [ordem[o], ordem[i]];
    }

    // ANIMATION
    const timeoutId = setTimeout(() => {
      ordem.forEach((index, i) => {
        gsap.to(pixels[index], {
          opacity: 0,
          scale: 0,
          duration: 0.1,
          delay: i * 0.11,
          ease: "power2.inOut",
        });
      });
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
      pixels.forEach((pixel) => pixel.remove());
    };
  }, []);

  return (
    <>
      
      <section
        ref={animacao}
        className="fixed top-0 left-0 w-screen h-screen overflow-hidden"
      ></section>

      {/* CONTEÚDO EFEITO */}
      <section className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#00f] ">
        <h1 className="text-3xl font-bold mb-4 text-center ">welcome to the new age</h1>
        <p className="text-lg text-center">
          este site reune projetos da autoria de gonçalo jesus{" "}

          <Link
            href="/arquive/project/0"
            className="underline hover:opacity-80"
          >
            abrir arquivo
          </Link>
        </p>
      </section>
    </>
  );
};

export default HomePage;
