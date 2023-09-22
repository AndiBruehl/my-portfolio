import classes from './Home.module.css'
import code from './../../assets/code.svg'
import binaryWorld from './../../assets/binaryWorld.png'
import { motion } from 'framer-motion'
import WaveLine from './WaveLine'

const Home = () => {
    return (
        <div className={classes.Home} id="/">
            <WaveLine />
            <div className={classes.Container}>
                <h1 className={classes.Hello}>Hallo Welt!</h1>
                <h1>Willkommen auf meiner Website!</h1>
            </div>
            <motion.img 
            
            // initial={{ scale: 0 }}
            animate={{scale: [0, 1, 0.5], rotate: 180}}
            transition={{ delay: .41, duration: 5, ease: 'easeInOut' }} className={classes.Code} src={code} alt='code' />
            <motion.img 
            
            initial={{ scale: 0 }}
            animate={{scale: [0, 1, 0.8]}}
            transition={{ delay: 1.4, duration: 2, ease: 'easeInOut' }}
            
            className={classes.binaryWorld} src={binaryWorld} alt='binaryWorld' />

        </div>




    );
}

export default Home;