import './App.css'
import Footer from './component/Footer';
import HeroSec from './component/HeroSec';
import Navber from './component/Navber';

function App() {

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-5 grid gap-10">
        <Navber></Navber>
        <HeroSec></HeroSec>
        <Footer></Footer>
      </div>
    </div>

  )
}

export default App
