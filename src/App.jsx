import './App.css'
import { Allroutes } from './routes/Allroutes'
import {Header} from "./components"

function App() {

  return (
    <div className='bg-[#f5f5f5] min-h-[100vh]'>
      <div className='pb-[5%] mx-[auto] w-[60vw]'>
        <Header/>
        <Allroutes/>
      </div>
    </div>
  )
}

export default App
