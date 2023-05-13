import style from './Card.module.css'
import styleapp from '../App.module.css'

function Card({title, body}) {
  return (
    <div className={styleapp.w100}>
      <h3>{title}</h3>
      <div className={style.box}>
        {body}
      </div>
    </div>
    
  )
}

export default Card