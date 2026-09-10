import logo from '../../assets/logo-text.png'

const Navber = () => {
    return (
        <div className="flex flex-row justify-between">
            <div>
                <img src={logo} alt="" />
            </div>
            <div className="flex flex-row gap-7">
                <ul><a href="#">Home</a></ul>
                <ul><a href="#">Technologies</a></ul>
                <ul><a href="#">Projects</a></ul>
                <ul><a href="#">About</a></ul>
                <ul><a href="#">Contact</a></ul>
            </div>
            <div className="flex flex-row gap-7">
                <ul><a href="#">Sign In</a></ul>
                <ul><a href="#"><button>Sign Up</button></a></ul>
            </div>
        </div>
    )
}

export default Navber;