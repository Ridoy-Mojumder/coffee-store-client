import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const loaderData = useLoaderData()
    console.log(loaderData.photoUrl)

    // const handleUpdated = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const updatedUser = { name, email };
    //     console.log(updatedUser);

    //     fetch(`http://localhost:5000/users/${loadedData._id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(updatedUser)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             if (data.modifiedCount > 0) {
    //                 alert("Data updated Successfully")
    //             }
    //         })
    // }


    const handleUpdate = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const Supplier = form.Supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoUrl = form.photoUrl.value;
        const newCoffee = { name, chef, Supplier, taste, category, details, photoUrl }
        console.log(newCoffee);
        fetch(`http://localhost:5000/coffee/${loaderData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Update Successfully!",
                        text: "Your Coffee has been Updated.",
                        icon: "success"
                    });
                }
            })
    }
    return (
        <div>
            <div className="bg-[#F4F3F0] p-8 m-10 rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
                <div className="space-y-10">
                    <h1 className="text-2xl text-center font-bold text-[#331A15]">Update a Coffee info</h1>
                    <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    <form className="" onSubmit={handleUpdate}>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="relative w-max">
                                <input
                                    name="name"
                                    className="peer border-b border-gray-500 focus:border-[#1B8EF8] bg-transparent py-2 text-[#1B8EF8] focus:outline-none"
                                    type="text"
                                    id='navigate_ui_input_44'
                                    defaultValue={loaderData.name} />
                                <label className="absolute -top-2 left-0 bg-transparent text-xs text-gray-400 duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400" htmlFor="navigate_ui_input_44">
                                    Name
                                </label>
                            </div>

                            <div className="relative w-max">
                                <input
                                    name="chef"
                                    className="peer border-b border-gray-500 focus:border-[#1B8EF8] bg-transparent py-2 text-[#1B8EF8] focus:outline-none"
                                    type="text"
                                    id='navigate_ui_input_44'
                                    defaultValue={loaderData.chef} />
                                <label className="absolute -top-2 left-0 bg-transparent text-xs text-gray-400 duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400" htmlFor="navigate_ui_input_44">
                                    Chef
                                </label>
                            </div>

                            <div className="relative w-max">
                                <input
                                    name="Supplier"
                                    className="peer border-b border-gray-500 focus:border-[#1B8EF8] bg-transparent py-2 text-[#1B8EF8] focus:outline-none"
                                    type="text"
                                    id='navigate_ui_input_44'
                                    defaultValue={loaderData.Supplier} />
                                <label className="absolute -top-2 left-0 bg-transparent text-xs text-gray-400 duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400" htmlFor="navigate_ui_input_44">
                                    Supplier
                                </label>
                            </div>

                            <div className="relative w-max">
                                <input
                                    name="taste"
                                    className="peer border-b border-gray-500 focus:border-[#1B8EF8] bg-transparent py-2 text-[#1B8EF8] focus:outline-none"
                                    type="text"
                                    id='navigate_ui_input_44'
                                    defaultValue={loaderData.taste} />
                                <label className="absolute -top-2 left-0 bg-transparent text-xs text-gray-400 duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400" htmlFor="navigate_ui_input_44">
                                    Taste
                                </label>
                            </div>

                            <div className="relative w-max">
                                <input
                                    name="category"
                                    className="peer border-b border-gray-500 focus:border-[#1B8EF8] bg-transparent py-2 text-[#1B8EF8] focus:outline-none"
                                    type="text"
                                    id='navigate_ui_input_44'
                                    defaultValue={loaderData.category} />
                                <label className="absolute -top-2 left-0 bg-transparent text-xs text-gray-400 duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400" htmlFor="navigate_ui_input_44">
                                    Category
                                </label>
                            </div>

                            <div className="relative w-max">
                                <input
                                    name="details"
                                    className="peer border-b border-gray-500 focus:border-[#1B8EF8] bg-transparent py-2 text-[#1B8EF8] focus:outline-none"
                                    type="text"
                                    id='navigate_ui_input_44'
                                    defaultValue={loaderData.details} />
                                <label className="absolute -top-2 left-0 bg-transparent text-xs text-gray-400 duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400" htmlFor="navigate_ui_input_44">
                                    Details
                                </label>
                            </div>
                        </div>
                        <div className="relative w-full mt-6">
                            <input
                                name="photoUrl"
                                className="peer border-b border-gray-500 focus:border-[#1B8EF8] bg-transparent py-2 text-[#1B8EF8] w-full focus:outline-none px-16"
                                type="text"
                                id='navigate_ui_input_44'
                                defaultValue={loaderData.photoUrl}
                            />
                            <label
                                className="absolute left-0 bg-transparent text-xs text-gray-400 duration-300 transform peer-placeholder-shown:top-1/2 peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-0.5rem] peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
                                htmlFor="navigate_ui_input_44 ">
                                PhotoURL
                            </label>
                        </div>

                        <button type="submit"
                            className="w-full flex justify-center py-2 mt-9 px-4 border border-transparent rounded-md shadow-sm 
                        text-sm font-medium text-black bg-[#D2B48C] hover:bg-[#331A15] hover:text-white focus:outline-none 
                        focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Update Coffee
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;