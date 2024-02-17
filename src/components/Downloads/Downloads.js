import classes from './Downloads.module.css'
import PageHeader from '../PageHeader/PageHeader';

import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Downloads = () => {

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
                    x: '100vw',
                });
            }
        }

        animateInView(); // Aufruf der Animation

    }, [inView, animation]);

    const containerStyles = {
        margin: '0 15%',
        marginTop: '-3%',
        backgroundColor: 'rgba(135, 206, 235, 0.5)',
        padding: '2%',
        borderRadius: '20px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
        display: 'flex',
        zIndex: 2000000000000,
        maxWidth: '100vw',
        marginLeft: '20vw',
    };

    const textContainerStyles = {
        flex: 1,
        paddingRight: '20px',
    };

    const h2Style = {
        fontWeight: 'normal',
        fontSize: '26px',
        marginBottom: '15px',
        fontStyle: 'italic bold',
        fontFamily: '"Playfair Display", serif',
        color: 'white',
    };

    const h3Style = {
        fontWeight: 'normal',
        fontSize: '16px',
        marginBottom: '16px',
        fontStyle: 'italic bold',
        fontFamily: '"Playfair Display", serif',
        color: 'white',
    };

    const paragraphStyles = {
        fontWeight: 'normal',
        fontSize: '18px',
        marginBottom: '20px',
        fontFamily: '"Playfair Display", serif',
        color: 'white',
    };

    const linkStyles = {
        color: 'white',
        textDecoration: 'none', // Keine Unterstreichung
    };

    const handleDownloadCV = (event) => {
        event.preventDefault(); // Verhindere die Standardaktion des Links

        // Erstelle einen Link zur PDF-Datei (direkter Dateiname)
        const pdfLink = 'https://drive.google.com/file/d/1YSjz3EMQojgNxVdR9Ke6sux2-1P-APEx/view?usp=drive_link';

        // Erstelle ein unsichtbares a-Element
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = pdfLink;
        a.target = '_blank'; // Open in a new tab
        a.rel = 'noopener noreferrer'; // Security best practice for opening in a new tab

        // Füge das a-Element zum DOM hinzu und simuliere den Klick
        document.body.appendChild(a);
        a.click();

        // Entferne das a-Element aus dem DOM
        document.body.removeChild(a);
    };

    const handleDownloadSkills = (event) => {
        event.preventDefault(); // Verhindere die Standardaktion des Links

        // Erstelle einen Link zur PDF-Datei (direkter Dateiname)
        const pdfLink = 'https://drive.google.com/file/d/1urRS9fvujHhxPBDEK61RCdf37leK_XxG/view?usp=drive_link';

        // Erstelle ein unsichtbares a-Element
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = pdfLink;
        a.target = '_blank'; // Open in a new tab
        a.rel = 'noopener noreferrer'; // Security best practice for opening in a new tab

        // Füge das a-Element zum DOM hinzu und simuliere den Klick
        document.body.appendChild(a);
        a.click();

        // Entferne das a-Element aus dem DOM
        document.body.removeChild(a);
    };

    const handleDownloadCert = (event) => {
        event.preventDefault(); // Verhindere die Standardaktion des Links

        // Erstelle einen Link zur PDF-Datei (direkter Dateiname)
        const pdfLink = 'https://drive.google.com/file/d/1u_SyuTjzGjP2JSackQn0iupN6wUr7a07/view?usp=drive_link';

        // Erstelle ein unsichtbares a-Element
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = pdfLink;
        a.target = '_blank'; // Open in a new tab
        a.rel = 'noopener noreferrer'; // Security best practice for opening in a new tab

        // Füge das a-Element zum DOM hinzu und simuliere den Klick
        document.body.appendChild(a);
        a.click();

        // Entferne das a-Element aus dem DOM
        document.body.removeChild(a);
    };

    const handleDownloadQuizApp = (event) => {
        event.preventDefault(); // Verhindere die Standardaktion des Links

        // Erstelle einen Link zur PDF-Datei (direkter Dateiname)
        const quizAppLink = 'https://drive.google.com/file/d/1K6hYlbgT_Scj-efPbfabPHF0ike8rPm9/view?usp=drive_link';

        // Erstelle ein unsichtbares a-Element
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = quizAppLink;
        a.target = '_blank'; // Open in a new tab
        a.rel = 'noopener noreferrer'; // Security best practice for opening in a new tab

        // Füge das a-Element zum DOM hinzu und simuliere den Klick
        document.body.appendChild(a);
        a.click();

        // Entferne das a-Element aus dem DOM
        document.body.removeChild(a);
    };

    return (
        <div className={classes.Downloads} id="downloads">
            <PageHeader title={'Downloads'} />
            <div ref={ref} className={classes.DownloadContent}>
                <motion.div
                    initial={{ x: "-100vw" }}
                    animate={animation}
                >

                    <div id="root">
                        <div className="welcome-section" style={containerStyles}>
                            <div style={textContainerStyles}>
                                <h2 style={h2Style}>Downloads</h2>
                                <h3 style={h3Style}>(Weiterleitung erfolgt auf GoogleDrive, dort stehen die Dateien zur Verfügung.)</h3>
                                <br></br>
                                <p style={paragraphStyles}>
                                    <a href="Lebenslauf-Download" onClick={handleDownloadCV} style={linkStyles}>
                                        ↓ Lebenslauf/CV PDF
                                    </a>
                                </p>
                                <p style={paragraphStyles}>
                                    <a href="QuizApp-Download" onClick={handleDownloadQuizApp} style={linkStyles}>
                                        ↓ QuizTopia-App offline (Windows)
                                    </a>
                                </p>
                                <p style={paragraphStyles}>
                                    <a href="Skillnachweis-Download" onClick={handleDownloadSkills} style={linkStyles}>
                                        ↓ Skillnachweise als PDF
                                    </a>
                                </p>
                                <p style={paragraphStyles}>
                                    <a href="Zertifikat-Download" onClick={handleDownloadCert} style={linkStyles}>
                                        ↓ TechStarter-Abschlusszertifikat als PDF
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

export default Downloads;
