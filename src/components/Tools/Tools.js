import uniqid from 'uniqid'
import { tools, toolIcons } from '../../portfolio'
import './Tools.css'

const Tools = () => {
  if (!tools.length) return null

  return (
    <section className='section tools' id='tools'>
      <h2 className='section__title'>Mes Outils</h2>
      <ul className='tools__list'>
        {tools.map((tool) => (
          <li key={uniqid()} className='tools__list-item tool-item'>
            <div className='tool-icon'>{toolIcons[tool]}</div>
            <div className='tool-name'>{tool}</div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Tools
