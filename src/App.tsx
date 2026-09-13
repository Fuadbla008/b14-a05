import { Suspense, use, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    if (isSelected(item.id)) {
      toast.warning(`${item.name} is already in your stack!`);
      return;
    }
    setSelected((prev) => [...prev, item]);
    toast.success(`${item.name} added to stack!`);
  };

  const handleRemove = (id: string) => {
    const removed = selected.find((item) => item.id === id);
    setSelected((prev) => prev.filter((item) => item.id !== id));
    if (removed) {
      toast.error(`${removed.name} removed from stack!`);
    }
  };

  const handleClearAll = () => {
    setSelected([]);
    toast.warn('All items removed from stack!');
  };



  return (
    <div>
      <div className="grid py-7 gap-2">
        <h1 className="text-6xl">
          Explore the <span className="hero-gradient-text">Technologies</span>
        </h1>
        <p className="text-gray-600 max-w-xl leading-relaxed">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">

        <div className="grid grid-cols-1 col-span-1 lg:grid-cols-3 lg:col-span-3 gap-4">
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
          <div className="bg-white rounded-2xl border border-gray-100 p-5 sticky top-5">
            <h3 className="text-[22px] font-bold text-gray-900 mb-1">Your Stack</h3>
            <p className="text-gray-400 text-[14px] mb-5">
              {selected.length > 0
                ? `${selected.length} Technology Selected`
                : 'No stack selected'}
            </p>

            <div className="flex flex-col gap-3">
              {
                selected.length > 0
                  ? selected.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between border border-gray-200 rounded-xl p-3"
                    >
                      <div className="flex items-center gap-3">
                        <img src={item.icon} alt={item.name} className="w-9 h-9" />
                        <div>
                          <h4 className="text-[15px] font-semibold text-gray-900 leading-tight">
                            {item.name}
                          </h4>
                          <span className="text-gray-400 text-[12px]">{item.category}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleRemove(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors duration-200 cursor-pointer"
                        aria-label={`Remove ${item.name}`}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))
                  : <div className="flex justify-center items-center p-10 border-1 border-dotted rounded-3xl text-gray-400">
                    Your stack is empty.
                  </div>
              }
            </div>

            {selected.length > 0 && (
              <button
                onClick={handleClearAll}
                className="w-full mt-5 py-3 rounded-xl border border-red-300 text-red-500 font-medium text-[15px] hover:bg-red-50 transition-colors duration-200 cursor-pointer"
              >
                Remove All
              </button>
            )}
          </div>
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

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </div>

  )
}

export default App;