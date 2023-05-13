import turnoMedico from '../service/dataTurno.js'
import styleapp from '../../App.module.css'
import style from './Style.module.css'

function TurnosMedico() {
  return (
    <div className={` ${styleapp.column} `}>
        <div className={ `${styleapp.row} ${styleapp.sb}`}>
            <div className={style.nameOff}>Especialidad</div>
            <div className={style.fechaOff}>Fecha</div>
        </div>
        {turnoMedico && turnoMedico.map((item,i) => (
            <div key={i} className={ `${styleapp.row} ${styleapp.sb}`}>
                <div className={style.name}>{item.name}</div>
                <div className={style.fechaMedico}>{item.fecha}</div>
            </div>
        ))}
    </div>
  )
}

export default TurnosMedico