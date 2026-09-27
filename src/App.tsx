import './App.css'
import { BuildingProvider } from './context/BuildingContext'
import { Building } from './components/Building'

function App() {

  return (
    <BuildingProvider>
      <Building />
    </BuildingProvider>
  )
}

export default App
