import classes from "./Links.module.css";
import PageHeader from "../PageHeader/PageHeader";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const svgStyles = {
  filter: "invert(1)", // Invert the colors of the SVG
};

const Links = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    const animateInView = async () => {
      if (inView) {
        await animation.start({
          x: 0,
          transition: { type: "spring", duration: 1, bounce: 0.3 },
        });
      }
      if (!inView) {
        await animation.start({
          x: "100vw",
        });
      }
    };

    animateInView(); // Aufruf der Animation
  }, [inView, animation]);

  const containerStyles = {
    margin: "0 15%",
    marginTop: "-3%",
    backgroundColor: "rgba(135, 206, 235, 0.5)",
    padding: "2%",
    borderRadius: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
    display: "flex",
    zIndex: 2000000000000,
    maxWidth: "100vw",
    marginLeft: "20vw",
  };

  const textContainerStyles = {
    flex: 1,
    paddingRight: "20px",
  };

  const paragraphStyles = {
    fontWeight: "normal",
    fontSize: "18px",
    marginBottom: "20px",
    fontFamily: '"Playfair Display", serif',
    color: "white",
    textDecoration: "none",
  };

  // const linkStyles = {
  //   color: "white",
  //   textDecoration: "none", // Keine Unterstreichung
  // };

  return (
    <div className={classes.Links} id="links">
      <PageHeader title={"Links"} />
      <div ref={ref} className={classes.DownloadContent}>
        <motion.div initial={{ x: "-100vw" }} animate={animation}>
          <div id="root">
            <div className="welcome-section" style={containerStyles}>
              <div style={textContainerStyles}>
                <br></br>
                <p style={paragraphStyles}>
                  <a
                    href="https://github.com/AndiBruehl"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://www.svgrepo.com/show/512317/github-142.svg"
                      width="20px"
                      height="20px"
                      alt="Github"
                      style={svgStyles}
                    />{" "}
                    GitHub
                  </a>
                </p>
                <p style={paragraphStyles}>
                  <a
                    href="https://andibruehl.github.io/JavaScriptGames/Spielstart.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://www.svgrepo.com/show/452875/bird.svg"
                      width="20px"
                      height="20px"
                      alt="JavaScript-Games"
                      style={svgStyles}
                    />{" "}
                    JavaScriptGames
                  </a>
                </p>
                <p style={paragraphStyles}>
                  <a
                    href="https://andibruehl.github.io/Quiztopia"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://www.svgrepo.com/show/509211/question.svg"
                      width="20px"
                      height="20px"
                      alt="Quizapp"
                      style={svgStyles}
                    />{" "}
                    QuizTopia
                  </a>
                </p>
                <p style={paragraphStyles}>
                  <a
                    href="https://andibruehl.github.io/WeatherNow/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://www.svgrepo.com/show/494028/weather-2.svg"
                      width="20px"
                      height="20px"
                      alt="WeatherNow"
                      style={svgStyles}
                    />{" "}
                    WeatherNow
                  </a>
                </p>
                <p style={paragraphStyles}>
                  <a
                    href="https://bastiwho.github.io/WeatherNow/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://www.svgrepo.com/show/494028/weather-2.svg"
                      width="20px"
                      height="20px"
                      alt="WeatherNow"
                      style={svgStyles}
                    />{" "}
                    WeatherNow - Alternative Landingpage{" "}
                    <a
                      href="https://github.com/bastiwho"
                      target="_blank"
                      rel="noreferrer"
                    >
                      (made by @BastiWho)
                    </a>
                  </a>
                </p>
                <p style={paragraphStyles}>
                  <a
                    href="https://fightingsamurais.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://www.svgrepo.com/show/483746/samurai.svg"
                      width="20px"
                      height="20px"
                      alt="Samurai"
                      style={svgStyles}
                    />{" "}
                    Fighting-Samurai
                  </a>
                </p>
                <p style={paragraphStyles}>
                  <a
                    href="https://pokemonlikestyledgame.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://www.svgrepo.com/show/54691/pokemon.svg"
                      width="20px"
                      height="20px"
                      alt="Pokeball"
                      style={svgStyles}
                    />{" "}
                    PokemonStyle-Game
                  </a>
                </p>
                <p style={paragraphStyles}>
                  <a
                    href="https://bookieslist.github.io/bookieslist/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://www.svgrepo.com/show/533406/book.svg"
                      width="20px"
                      height="20px"
                      alt="bookiesList"
                      style={svgStyles}
                    />{" "}
                    bookiesList-Website
                  </a>
                </p>
                <p style={paragraphStyles}>
                  <a
                    href="https://liefermax-mu.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://www.svgrepo.com/show/482679/cook-hat.svg"
                      width="20px"
                      height="20px"
                      alt="bookiesList"
                      style={svgStyles}
                    />{" "}
                    LieferMax - Dein LieferService!
                  </a>
                </p>
                <p style={paragraphStyles}>
                  <a
                    href="https://achat.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://www.svgrepo.com/show/412082/stream.svg"
                      width="20px"
                      height="20px"
                      alt="bookiesList"
                      style={svgStyles}
                    />{" "}
                    ACHAT
                  </a>
                </p>
                <p style={paragraphStyles}>
                  <a
                    href="https://farbgenerator.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://www.svgrepo.com/show/497798/brush-1.svg"
                      width="20px"
                      height="20px"
                      alt="farbgenerator"
                      style={svgStyles}
                    />{" "}
                    Farbgenerator
                  </a>
                </p>
                <p style={paragraphStyles}>
                  <a
                    href="https://job-star.vercel.app/landing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://www.svgrepo.com/show/138396/job-post.svg"
                      width="20px"
                      height="20px"
                      alt="jobstar"
                      style={svgStyles}
                    />{" "}
                    JobStar - Bewerbungen verwalten einfach gemacht!
                  </a>
                </p>
                <p style={paragraphStyles}>
                  <a
                    href="https://search4githubusers.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://www.svgrepo.com/show/506654/github.svg"
                      width="20px"
                      height="20px"
                      alt="jobstar"
                      style={svgStyles}
                    />{" "}
                    Search4GithubUsers - Github User übersichtlich dargestellt.
                  </a>
                </p>{" "}
                <p style={paragraphStyles}>
                  <a
                    href="https://comfysloth-demo.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://www.svgrepo.com/show/176721/sloth-animal.svg"
                      width="20px"
                      height="20px"
                      alt="jobstar"
                      style={svgStyles}
                    />
                    {"  "}
                    ComfySloth-Demo... Prototyp einer E-Commerce-Website
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Links;
