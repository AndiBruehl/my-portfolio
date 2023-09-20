import classes from './Skills.module.css'
import PageHeader from '../PageHeader/PageHeader';

const backendSkills =
    <ul>
        <li BACKEND></li>
        <li>SQL - NoSQL - Python - NodeJS</li>
    </ul>
const frontendSkills =
    <ul>
        <li FRONTEND></li>
        <li> JavaScript - ReactJS - HTML - CSS - Electron</li>
    </ul>
const osSkills =
    <ul>
        <li OS></li>
        <li> Linux - Windows - Android</li>
    </ul>
const cloudSkills =
    <ul>
        <li CLOUD></li>
        <li> AWS - GCP</li>
    </ul>
const otherSkills =
    <ul>
        <li WEITERE SKILLS></li>
        <li>Git - Docker - firebase - SCRUM (Grundlagen)</li>
    </ul>
    ;

const totalSkills = [backendSkills, frontendSkills, osSkills, cloudSkills, otherSkills];

const Skills = () => {
    return (
        <div className={classes.Skills}>

            <PageHeader title={'What about the Skills?'} />
            <p>
                Ich liebe lebenslanges Lernen und genieße es, kontinuierlich neue Dinge zu entdecken!
            </p>
            <p>
                Im Laufe der Zeit habe ich mit verschiedenen Programmiersprachen, Toolkits, Frameworks und Bibliotheken gearbeitet, und einige davon beherrsche ich besser als andere
            </p>
            <div className={classes.Container}>


            </div>
        </div>
    );
}

export default Skills;