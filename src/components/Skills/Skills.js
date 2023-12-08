import classes from './Skills.module.css'
import PageHeader from '../PageHeader/PageHeader';
import codeThinking from '../../assets/codeThinking.svg'

const listTitleStyle = { fontWeight: 900, color: '#9B1FE8', marginBotton: '4px'}

const backendSkills =
    <ul key="backend">
        <li style={listTitleStyle}> BACKEND</li>
        <li>SQL - NoSQL - Python</li>
        <li>NodeJS - mariaDB - MongoDB</li>
    </ul>
const frontendSkills =
    <ul key="frontend">
        <li style={listTitleStyle}> FRONTEND</li>
        <li>JavaScript - ReactJS - HTML&CSS</li>
        <li>Electron</li>
    </ul>
const osSkills =
    <ul key="os">
        <li style={listTitleStyle}> OS</li>
        <li> Linux - Windows - Android</li>
    </ul>
const cloudSkills =
    <ul key="cloud">
        <li style={listTitleStyle}> CLOUD</li>
        <li> AWS - GCP</li>
    </ul>
const containerSkills =
    <ul key="container">
        <li style={listTitleStyle}> CONTAINER und DevOps</li>
        <li>Docker - Ansible - Jenkins</li>
        <li>Terraform - CI/CD - GitHub-Actions</li>
    </ul>
const otherSkills =
    <ul key="others">
        <li style={listTitleStyle}> WEITERE SKILLS</li>
        <li>GitHub - firebase - SCRUM </li>
        <li></li>
    </ul>;

const totalSkills = [backendSkills, frontendSkills, osSkills, cloudSkills, containerSkills, otherSkills];

const Skills = () => {
    return (
        <div className={classes.Skills} id="skills">

            <PageHeader title={'Meine Skills'} />
            <p className={classes.Paragraphs}>
                Ich liebe lebenslanges Lernen und genieße es, kontinuierlich neue Dinge zu entdecken!<br /><br />
                Im Laufe der Zeit habe ich mit verschiedenen Programmiersprachen, Toolkits, Frameworks und Bibliotheken gearbeitet, und einige davon beherrsche ich besser als andere.<br /><br />
                Dabei bin ich offen neue Techniken und Skills zu lernen!
            </p>
            <div className={classes.Container}>
                <img src={codeThinking} alt="CodeThinking" /><br/>
                {totalSkills.map((skills, index) => {
                    return (
                        <div className={classes.List} key={index}>
                            {skills}
                        </div>
                    )
                })}

            </div>
        </div>
    );
}

export default Skills;
