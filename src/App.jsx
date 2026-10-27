import Todos from './components/Todos'
import Info from './components/Info.jsx'

function App(){
  return(
    <div className="min-h-screen bg-[#f5f5f5] py-8 font-light text-[#111]">
      <Todos/>
      <Info name="DENESE JOYCE S. RODRIGUEZ"/>
    </div>
  )
}

export default App