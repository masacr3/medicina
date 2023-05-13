import Secuestro from '../../assets/secuestro.png'
import style from './Footer.module.css'

function Footer() {
  return (
    <div className={style.container}>
        <div className={style.row}>
          <div></div>
          <img className={style.img} src={Secuestro} alt="" />
          <div></div>
          @masacr3
        </div>
    </div>
  )
}

export default Footer