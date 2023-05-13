import style from './App.module.css'
import Card from './componentes/Card'
import Medicacion from './componentes/bodyCard/Medicacion'
import TurnosMedico from './componentes/bodyCard/TurnosMedico'
import Footer from './componentes/footer/Footer'
import Insulinas from './componentes/service/dataInsulinas.js'
import Pastillas from './componentes/service/dataPastillas.js'

function App() {
  return (
    <div className={style.container}>
      <Card 
        title="Turnos Medicos" 
        body={<TurnosMedico />}
      />
      <Card 
        title="Diabetes" 
        body={<Medicacion data={Insulinas} />}
      />
      <Card 
        title="Cancer" 
        body={<Medicacion data={Pastillas} />}
      />
      <Footer />
      
    </div>
  )
}

export default App
