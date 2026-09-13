import { useState } from 'react';
import logo from '../../assets/logo-text.png'

const Navber = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-row justify-between items-center sticky top-0 z-50 bg-gray-100 py-5 px-4 md:px-10">
            
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="lg:hidden block text-gray-700 focus:outline-none"
            >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            <div className="lg:static absolute left-1/2 transform -translate-x-1/2 lg:translate-x-0">
                <img src={logo} alt="Logo" />
            </div>
            
            <div className="hidden lg:flex flex-row gap-10 ">
                <ul className="navbutton"><a href="#">Home</a></ul>
                <ul><a href="#">Technologies</a></ul>
                <ul><a href="#">Projects</a></ul>
                <ul><a href="#">About</a></ul>
                <ul><a href="#">Contact</a></ul>
            </div>

            <div className="flex flex-row items-center gap-4">
                <ul><a href="#">Sign In</a></ul>
                <ul><a href="#"><button className="px-6 py-2 btn-bg text-white font-medium rounded-full transition duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:btn-bg focus:ring-offset-2">Sign Up</button></a></ul>
            </div>

        </div>
    )
}

export default Navber;