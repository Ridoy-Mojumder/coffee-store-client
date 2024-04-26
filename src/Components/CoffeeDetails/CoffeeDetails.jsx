
import { Link, useLoaderData } from 'react-router-dom';

const CoffeeDetails = () => {
    const coffee = useLoaderData();
    const { name, photoUrl, category, details, chef, taste, Supplier } = coffee;

    return (
        <div>
            <div className="mx-auto h-screen max-w-screen-sm my-20 space-y-6 rounded-xl bg-white px-4 pb-8 pt-4 font-sans shadow-lg dark:bg-[#18181B]">
                <div className="relative flex h-48 w-full justify-center lg:h-[280px]">
                    <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                        {/* love  */}
                        <div className="flex items-center"><svg width={30} className="fill-transparent stroke-white stroke-2 hover:fill-red-500 hover:stroke-red-500 " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ cursor: 'pointer' }}> <g strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"><path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path></g></svg></div>
                        <button className="rounded-xl bg-[#0095FF] px-3 py-1 font-medium text-white duration-200 hover:bg-[#0095FF]/90">30% off</button>
                    </div>
                    <img width={300} height={300} className="h-full w-full rounded-lg bg-black/40" src={photoUrl} alt="card navigate ui" />
                </div>
                <div className="mx-auto w-[85%] space-y-2 text-center font-semibold">
                    <h6 className="text-sm md:text-base lg:text-lg">{name}</h6>
                    <h6 className="text-sm md:text-base lg:text-lg">{chef}</h6>
                    <p className="text-sm md:text-base lg:text-lg">{taste}</p>
                    <p className="text-sm md:text-base lg:text-lg">{Supplier}</p>
                    <p className="text-xs font-semibold text-gray-400 md:text-sm">{category}</p>
                    <p className="text-xs font-semibold text-gray-400 md:text-sm">{details}</p>
                </div>
                <div className="">
                    <Link to='/'><button className="rounded-lg w-full bg-[#49B2FF] px-4 py-2 font-sans font-semibold text-white duration-300 hover:scale-105 hover:bg-sky-600">Home</button></Link>

                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;
