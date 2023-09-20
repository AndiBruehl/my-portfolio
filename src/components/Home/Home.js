import classes from './Home.module.css'
import code from './../../img/code.svg'
import binaryWorld from './../../img/binaryWorld.png'

const Home = () => {
    return (
        <div className={classes.Home}>
            <div className={classes.Container}>
                <h1 className={classes.Hello}>Hallo Welt!</h1>
                <h1>Willkommen auf meiner Website!</h1>
            </div>
            <img className={classes.Code} src={code} alt='code'></img>
            <img className={classes.binaryWorld} src={binaryWorld} alt='binaryWorld'></img>

        </div>




    );
}

export default Home;