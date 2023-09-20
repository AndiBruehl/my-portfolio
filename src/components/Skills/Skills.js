import classes from './Skills.module.css'
import PageHeader from '../PageHeader/PageHeader';
import codeThinking from '../../img/codeThinking.svg'

const listTitleStyle = { fontWeight: 900, color: '#9B1FE8', marginBotton: '4px'}

const backendSkills =
    <ul>
        <li style={listTitleStyle}> BACKEND</li>
        <li>SQL - NoSQL - Python - NodeJS</li>
    </ul>
const frontendSkills =
    <ul>
        <li style={listTitleStyle}> FRONTEND</li>
        <li> JavaScript - ReactJS - HTML&CSS - Electron</li>
    </ul>
const osSkills =
    <ul>
        <li style={listTitleStyle}> OS</li>
        <li> Linux - Windows - Android</li>
    </ul>
const cloudSkills =
    <ul>
        <li style={listTitleStyle}> CLOUD</li>
        <li> AWS - GCP</li>
    </ul>
const otherSkills =
    <ul>
        <li style={listTitleStyle}> WEITERE SKILLS</li>
        <li>Git - Docker - firebase - SCRUM</li>
    </ul>
    ;

const totalSkills = [backendSkills, frontendSkills, osSkills, cloudSkills, otherSkills];

const Skills = () => {
    return (
        <div className={classes.Skills}>

            <PageHeader title={'What about the Skills?'} />
            <p className={classes.Paragraphs}>
                Ich liebe lebenslanges Lernen und genieße es, kontinuierlich neue Dinge zu entdecken!<br /><br />
                Im Laufe der Zeit habe ich mit verschiedenen Programmiersprachen, Toolkits, Frameworks und Bibliotheken gearbeitet, und einige davon beherrsche ich besser als andere.<br /><br />
                Dabei bin ich offen neue Techniken und Skills zu lernen!
            </p>
            <div className={classes.Container}>
                <img src={codeThinking} alt="CodeThinking" /><br/>
                {totalSkills.map(skills => {
                    return (
                        <div className={classes.List}>
                            {skills}
                        </div>
                    )
                })}

            </div>
        </div>
    );
}

export default Skills;