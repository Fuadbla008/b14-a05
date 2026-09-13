import HeroBanner from '../../assets/banner-stack.png'

const HeroSec = () => {
    return (
        <div className="container mx-auto px-6 py-6 lg:py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-12">

                <div className="flex flex-col gap-6">

                    <div className="space-y-2">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                            Build Your Ideal
                        </h1>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight 
                            hero-gradient-text">
                            Development Stack
                        </h1>
                    </div>

                    <p className="text-gray-600 max-w-xl leading-relaxed">
                        Explore frontend, backend, database, and tooling options, compare them
                        side by side, and put together the stack that fits your next project.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2">
                        <button className="btn border-none px-6 bg-gradient-to-r from-orange-400 to-red-500 text-white">
                            Explore Technologies
                        </button>
                        <button className="btn px-6">
                            Learn More
                        </button>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <img
                        src={HeroBanner}
                        alt="Development Stack Banner"
                        className="w-full max-w-md lg:max-w-lg"
                    />
                </div>

            </div>
        </div>
    )
}

export default HeroSec