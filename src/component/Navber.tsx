import logo from '../../assets/logo-text.png'

const Navber = () => {
    return (
        <div className="flex flex-row justify-between items-center sticky top-0 z-50 bg-gray-100 py-5">
            <div>
                <img src={logo} alt="" />
            </div>
            <div className="flex flex-row gap-10">
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