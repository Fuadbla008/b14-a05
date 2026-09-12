import { Suspense, use, useState } from 'react';
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
  const [selected, setSelected] = useState<Itype[]>([]);

  const isSelected = (id: string) => selected.some((item) => item.id === id);

  const handleAdd = (item: Itype) => {
    if (!isSelected(item.id)) {
      setSelected((prev) => [...prev, item]);
    }
  };

  return (
    <div className="grid grid-cols-4 gap-5">
      <div className="grid grid-cols-3 col-span-3 gap-4">
        {
          stackName.map((data: Itype) => (
            <DetailsCard
              key={data.id}
              item={data}
              onAdd={() => handleAdd(data)}
              disabled={isSelected(data.id)}
            />
          ))
        }
      </div>

      <div className="col-span-1">
        <div className="bg-white rounded-2xl border border-gray-100 p-5">
          <h3 className="text-[22px] font-bold text-gray-900 mb-4">Your Stack</h3>

          {selected.length === 0 ? (
            <p className="text-gray-400 text-[14px]">No stack selected</p>
          ) : (
            <div className="flex flex-col gap-3">
              {selected.map((item) => (
                <div key={item.id} className="flex items-center gap-3 border border-gray-200 rounded-xl p-3">
                  <img src={item.icon} alt={item.name} className="w-9 h-9" />
                  <div>
                    <h4 className="text-[15px] font-semibold text-gray-900">{item.name}</h4>
                    <span className="text-gray-400 text-[12px]">{item.category}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
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