import { useLoaderData } from "react-router-dom";
import BannerSection from "./BannerSection";
import Coffee from "./Coffee";
import { useState } from "react";
import Swal from "sweetalert2";



const Home = () => {
    const loadingCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadingCoffees)


    const handleDelete = (_id) => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(coffee => coffee._id !== _id);
                            setCoffees(remaining);
                        }
                    })
            }
        });






    };


    return (
        <div>
            <BannerSection></BannerSection>
            <div className="mt-10">
                <h1 className="text-3xl font-bold mb-8 text-center">Coffees</h1>
                {coffees.length === 0 ? (
                    <p className="text-lg text-gray-700">No Coffee found.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {coffees.map((coffee) => (
                            <Coffee key={coffee._id} coffee={coffee} onDelete={handleDelete} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;