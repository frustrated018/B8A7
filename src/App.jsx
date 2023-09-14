import './App.css'
import Cards from './components/Cards/cards'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  return (
    <>
    <Header></Header>
    <div className='md:flex mx-16'>
    <div className=' '>
      <Cards></Cards>
    </div>
    <Sidebar></Sidebar>
    </div>
    </>
  )
}

export default App
