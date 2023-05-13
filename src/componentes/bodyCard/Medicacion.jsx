import styleapp from '../../App.module.css'
import style from './Style.module.css'

function Medicacion({data}) {
  return (
    <div className={` ${styleapp.column} `}>
        <div className={ `${styleapp.row} ${styleapp.sb}`}>
            <div className={style.nameOff}>Nombre</div>
            <div className={style.cantidadOff}>Cantidad</div>
            <div className={style.fechaOff}>Fecha</div>
        </div>
        {data && data.map((item,i) => (
            <div key={i} className={ `${styleapp.row} ${styleapp.sb}`}>
                <div className={style.name}>{item.name}</div>
                <div className={style.cantidad}>{item.cantidad}</div>
                <div className={style.fecha}>{item.fecha}</div>
            </div>
        ))}
    </div>
  )
}

export default Medicacion