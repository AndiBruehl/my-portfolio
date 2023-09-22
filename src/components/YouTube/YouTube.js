import PageHeader from '../PageHeader/PageHeader';
import classes from './YouTube.module.css';
import QuizTopia from "./../../assets/QuizTopia.png"
import WeatherNow from "./../../assets/WeaatherNow.png"
import JavaScriptGames from './../../assets/JavaScripzGames.png'
import bg2 from './../../assets/background2.png';
import background from './../../assets/background3.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const playBtnSvg = (url) => {
    return (
        <div className={classes.PlayButton} onClick={(e) => window.open(url, "_blank").focus()}>
            <motion.svg whileHover={{ scale: 1.3 }} fill="white" height="50px" width="50px" version="1.1" id="Capa_1" viewBox="0 0 58.752 58.752" xmlSpace="preserve">
                <g>
                    <path d="M52.524,23.925L12.507,0.824c-1.907-1.1-4.376-1.097-6.276,0C4.293,1.94,3.088,4.025,3.088,6.264v46.205
                        c0,2.24,1.204,4.325,3.131,5.435c0.953,0.555,2.042,0.848,3.149,0.848c1.104,0,2.192-0.292,3.141-0.843l40.017-23.103
                        c1.936-1.119,3.138-3.203,3.138-5.439C55.663,27.134,54.462,25.05,52.524,23.925z M49.524,29.612L9.504,52.716
                        c-0.082,0.047-0.18,0.052-0.279-0.005c-0.084-0.049-0.137-0.142-0.137-0.242V6.263c0-0.1,0.052-0.192,0.14-0.243
                        c0.042-0.025,0.09-0.038,0.139-0.038c0.051,0,0.099,0.013,0.142,0.038l40.01,23.098c0.089,0.052,0.145,0.147,0.145,0.249
                        C49.663,29.47,49.611,29.561,49.524,29.612z"/>
                </g>
            </motion.svg>
        </div>
    );
}

const youtubeVideo = (url, thumbnail, description) => {
    return (
        <div className={classes.VideoContainer}>
            <div className={classes.Thumbnail}>
                {playBtnSvg(url)}
                <img src={thumbnail} alt='thumbnail' />
            </div>
            <div className={classes.Text}>
                <p>{description}</p>
            </div>
        </div>
    );
}

const quiztopiaVideoDescription = 'QuizTopia - Eine Online-Quiz-App';
const weatherNowVideoDescription = 'WeatherNow - Das aktuelle Wetter für JEDEN Ort der Welt prüfen!';
const gamesVideoDescription = 'TicTacToe und ein FlappyBird-Klon zum Zeitvertreib für zwischendurch!';
const cleanCodeVideoDescription = 'NICHT KLICKEN! SENSIBLER INHALT!';
// const javaScriptNodeJSDescription = 'Video2 - Platzhalter';
// const background2Description = 'Video3 - Platzhalter';

const YouTube = () => {

    const { ref, inView } = useInView(
        {
            threshold: 0.2,
        }
    );
    const animation = useAnimation();

    useEffect(() => {
        const animateInView = async () => {
            if (inView) {
                await animation.start({
                    x: 0,
                    transition: { type: "spring", duration: 1, bounce: 0.3 }
                });
            }
            if (!inView) {
                await animation.start({
                    x: '-100vw',
                });
            }
        }

        animateInView(); // Aufruf der Animation

    }, [inView, animation]);

    return (
        <div className={classes.YouTube} id="youtube">
            <img className={classes.Background} src={background} alt="background" />
            <PageHeader title={'YouTube'} />
            <div ref={ref} className={classes.YouTubeContent}>
                <div className={classes.Paragraph}>
                    <p>
                        Ich bin nun auch auf YouTube zu finden. Hier eine kleine Auswahl meiner bisherigen Videos.
                    </p>
                </div>
                <motion.div className={classes.Videos}
                    initial={{ x: "-100vw" }}
                    animate={animation}
                >
                    {youtubeVideo("https://youtu.be/i_yD-gn5iBg", QuizTopia, quiztopiaVideoDescription)}

                    {youtubeVideo("https://youtu.be/3MctlVzu3aI", WeatherNow, weatherNowVideoDescription)}

                    {youtubeVideo("https://youtu.be/i_yD-gn5iBg", JavaScriptGames, gamesVideoDescription)}

                    {youtubeVideo("https://www.youtube.com/watch?v=hvL1339luv0", bg2, cleanCodeVideoDescription)}

                    {/* {youtubeVideo("https://www.youtube.com/watch?v=hvL1339luv0", bg2, javaScriptNodeJSDescription)}

                    {youtubeVideo("https://www.youtube.com/watch?v=hvL1339luv0", bg2, background2Description)} */}

                </motion.div>
            </div>
        </div>
    );
}

export default YouTube;
