import { Suspense, use } from 'react';
import './App.css'
import Footer from './component/Footer';
import HeroSec from './component/HeroSec';
import Navber from './component/Navber';

const fetchdata = async() =>{
  const res = await fetch('/data.json')
  const data = await res.json();
  return data;
}
const stateData = fetchdata();

const Stack = () =>{
  const stackName = use(stateData);
  const getStack = stackName.length;
  return console.log(getStack);
}

function App() {

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-5 grid gap-10">
        <Navber></Navber>
        <HeroSec></HeroSec>

        <Suspense fallback="loading">
          <Stack></Stack>
        </Suspense>

        <Footer></Footer>
      </div>
    </div>

  )
}

export default App
