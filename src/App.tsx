import './App.css'
import Cardc from './component/Cardc';
import HeroSec from './component/HeroSec';
import Navber from './component/Navber';

function App() {

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-5 grid gap-10">
        <Navber></Navber>
        <HeroSec></HeroSec>
      </div>
    </div>

  )
}

export default App
