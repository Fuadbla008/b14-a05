import { Suspense, use } from 'react';
import './App.css'
import Footer from './component/Footer';
import HeroSec from './component/HeroSec';
import Navber from './component/Navber';
import '../src/type'
import type { Itype } from '../src/type';
import DetailsCard from './component/Card';


const fetchdata = async (): Promise<Itype[]> => {
  const res = await fetch('/data.json')
  const data = await res.json();
  return data;
}
const stateData = fetchdata();

const Stack = () => {
  const stackName = use(stateData);

  return (
    <div className="grid grid-cols-4 gap-5">
      <div className="grid grid-cols-3 col-span-3 gap-4">
        {
          stackName.map((data: Itype) => (
            <DetailsCard key={data.id} item={data}></DetailsCard>
          ))
        }
      </div>
      <div className="grid col-span-1">
        <div>
          <h3>Your Stock</h3>
          <p>No</p>
        </div>
      </div>
    </div>
  )
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
