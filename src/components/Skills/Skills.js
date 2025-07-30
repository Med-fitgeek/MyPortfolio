import uniqid from 'uniqid'
import { skills, skillIcons } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Mes Compétences</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            <div className='skill-icon'>{skillIcons[skill]}</div>
        <div className='skill-name'>{skill}</div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
