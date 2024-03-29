import './App.css'
import Image from './assets/bg-image.svg'
import Pages from './pages'

function App() {

  return (
    <div>
      <div className='fixed z-[-10]'>
        <img src={Image} alt="image" />
      </div>
      <Pages />
    </div>
  )
}

export default App
