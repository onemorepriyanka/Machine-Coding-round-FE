import { useState } from 'react'
import './App.css'
import Explorefol from './Explorefolder/Explorefol'
import myExplorer from './Explorer'

function App() {
  const [explorerD, setExplorerD] = useState(myExplorer)

  return (
    <>
      <Explorefol explorer = {explorerD} />
    </>
  )
}

export default App
