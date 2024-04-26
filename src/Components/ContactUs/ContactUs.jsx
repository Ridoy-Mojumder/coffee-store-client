import swal from 'sweetalert';

const ContactUs = () => {
    const handleContactSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const subject = form.subject.value;
        const message = form.message.value;
        const contactDetails = { name, email, subject, message };
        console.log(contactDetails);

        // Here you could add an API call to send the contact details
        swal({
            title: "Thank you!",
            text: "Your message has been sent successfully",
            icon: "success",
            button: "Ok!",
        });
    }

    return (
        <div className="bg-[#F4F3F0] p-8 m-10 rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
            <div className="space-y-10">
                <h1 className="text-2xl text-center font-extrabold text-[#331A15]">Contact Us</h1>
                <p>Please fill out the form below to send us a message. We'll get back to you as soon as possible!</p>
                <form onSubmit={handleContactSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative w-full">
                            <input
                                name="name"
                                placeholder=" "
                                className="peer border-b border-gray-500 focus:border-[#1B8EF8] bg-transparent py-2 text-[#1B8EF8] focus:outline-none w-full"
                                type="text"
                                id="contact_name"
                                required
                            />
                            <label htmlFor="contact_name" className="absolute -top-2 left-0 bg-transparent text-xs text-gray-400 duration-300 transform peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400">
                                Name
                            </label>
                        </div>

                        <div className="relative w-full">
                            <input
                                name="email"
                                placeholder=" "
                                className="peer border-b border-gray-500 focus:border-[#1B8EF8] bg-transparent py-2 text-[#1B8EF8] focus:outline-none w-full"
                                type="email"
                                id="contact_email"
                                required
                            />
                            <label htmlFor="contact_email" className="absolute -top-2 left-0 bg-transparent text-xs text-gray-400 duration-300 transform peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400">
                                Email
                            </label>
                        </div>

                        <div className="relative w-full">
                            <input
                                name="subject"
                                placeholder=" "
                                className="peer border-b border-gray-500 focus:border-[#1B8EF8] bg-transparent py-2 text-[#1B8EF8] focus:outline-none w-full"
                                type="text"
                                id="contact_subject"
                                required
                            />
                            <label htmlFor="contact_subject" className="absolute -top-2 left-0 bg-transparent text-xs text-gray-400 duration-300 transform peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400">
                                Subject
                            </label>
                        </div>

                        <div className="relative w-full col-span-1 md:col-span-2">
                            <textarea
                                name="message"
                                placeholder=" "
                                className="peer border-b border-gray-500 focus:border-[#1B8EF8] bg-transparent py-2 text-[#1B8EF8] focus:outline-none w-full h-32 px-0"
                                id="contact_message"
                                required
                            ></textarea>
                            <label htmlFor="contact_message" className="absolute -top-2 left-0 bg-transparent text-xs text-gray-400 duration-300 transform peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400">
                                Message
                            </label>
                        </div>
                    </div>

                    <button type="submit"
                        className="w-full flex justify-center py-2 mt-9 px-4 border border-transparent rounded-md shadow-sm 
                        text-sm font-medium text-black bg-[#D2B48C] hover:bg-[#331A15] hover:text-white focus:outline-none 
                        focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
