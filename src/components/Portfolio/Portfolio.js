import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import PageHeader from '../PageHeader/PageHeader';
import img1 from '../../assets/image1.png';
import img2 from '../../assets/image2.png';
import img3 from '../../assets/image3.png';
import img4 from '../../assets/image4.png';
import classes from './Portfolio.module.css'
import { useInView } from 'react-intersection-observer';

const MotionContainer = styled(motion.div)`
    background: black;
    height: 100vh;
`;

const SliderWrapper = styled.div`
    position: relative;
    max-width: 40%;
    margin-left: 30%; 
`;

const Slider = styled(motion.div)`
    display: flex;
    aspect-ratio: 16 / 9;
    overflow-x: hidden;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    box-shadow: 0 1.5rem 3rem -0.75rem hsla(0, 0%, 0%, 0.25);
    border-radius: 20px;
    position: relative;
`;

const SliderImage = styled(motion.img)`
    flex: 1 0 100%;
    scroll-snap-align: start;
    object-fit: cover;
    width: 30%;
`;


const SliderNav = styled.div`
    display: flex;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
`;

const SliderNavItem = styled(motion.div)`
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: darkgrey;
    opacity: 0.75;
    transition: opacity ease 250ms;
    &:hover {
        opacity: 1;
    }
`;

const ActionButton = styled(motion.div)`
    position: absolute;
    top: 50%;
    right: 3%;
    transform: translateY(-50%);
    border-radius: 100%;
    background: rgba(0, 0, 255, 0.5);
    padding: 1%;
    z-index: 2;
    transition: background-color 0.3s ease;
    &:hover {
        background: rgba(0, 0, 255, 0.8);
    }
`;


const Header = styled.h2`
    text-align: center;
    color: azure;
    padding: 2%;
    margin-top: -5%;
    font-family: 'Playfair Display', serif;
`;

const Footer = styled.h2`
    text-align: center;
    color: azure;
    margin-top: 4%;
    font-family: 'Playfair Display', serif;
    margin-bottom: 4%;
`;





const images = [
    { url: 'https://andibruehl.github.io/JavaScriptGames/', src: img1 },
    { url: 'https://github.com/AndiBruehl', src: img2 },
    { url: 'https://andibruehl.github.io/Quiztopia/', src: img3 },
    { url: 'https://andibruehl.github.io/WeatherNow/', src: img4 },
];

const Portfolio = () => {
    
    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    const autoPlayIntervalRef = useRef(null);

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

    useEffect(() => {
        if (autoPlay) {
            autoPlayIntervalRef.current = setInterval(() => {
                handleNextClick();
            }, 5000); // Change image every 5 seconds
        } else {
            clearInterval(autoPlayIntervalRef.current);
        }

        return () => {
            
            clearInterval(autoPlayIntervalRef.current);
        };
    }, [autoPlay, currentIndex]);

    const handleNextClick = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
            sliderRef.current.scrollBy({ left: sliderRef.current.clientWidth, behavior: 'smooth' });
        } else {
            setCurrentIndex(0);
            sliderRef.current.scrollBy({ left: -sliderRef.current.scrollWidth, behavior: 'smooth' });
        }
    };

    const handleImageClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        
        <MotionContainer
        
            initial={{ opacity: 0 }} // Set initial opacity to 1
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={classes.Portfolio} id="portfolio">
            <PageHeader title={'Portfolio'} />
            <Header>Beispiele meiner Arbeiten:</Header>
            <SliderWrapper>
                <Slider
                    ref={sliderRef}
                    initial={{ opacity: 1 }} // Set initial opacity to 1
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {images.map((image, index) => (
                        <SliderImage
                            key={index}
                            src={image.src}
                            alt={`Image ${index}`}
                            onClick={() => handleImageClick(image.url)}
                            initial={{ opacity: index === currentIndex ? 1 : 0 }} // Set initial opacity based on currentIndex
                            animate={{ opacity: index === currentIndex ? 1 : 0 }}
                            transition={{ opacity: { duration: 0.8 } }}
                        />
                    ))}
                </Slider>
                <ActionButton
                    onClick={handleNextClick}
                    initial={{ opacity: 1 }} // Set initial opacity to 1
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                >
                    <MdKeyboardDoubleArrowRight />
                </ActionButton>
                <SliderNav>
                    {images.map((_, index) => (
                        <SliderNavItem
                            key={index}
                            className={index === currentIndex ? 'active' : ''}
                            style={{ backgroundColor: index === currentIndex ? 'blue' : 'lightblue' }}
                            initial={{ opacity: 0.75 }}
                            animate={{ opacity: index === currentIndex ? 1 : 0.75 }}
                            whileHover={{ opacity: 1 }}
                        />
                    ))}
                </SliderNav>
            </SliderWrapper>
            <Footer>Auf eines der Bilder klicken, um weitergeleitet zu werden.</Footer>
        </MotionContainer>
    );
};

export default Portfolio;
