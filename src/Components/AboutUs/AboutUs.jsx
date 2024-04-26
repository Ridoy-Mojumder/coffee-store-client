

const AboutUs = () => {
    return (
        <div className="bg-[#F4F3F0] p-8 m-10 rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
            <div className="space-y-10">
                <h1 className="text-2xl text-center font-extrabold text-[#331A15]">About Us</h1>
                <p className="text-md text-[#331A15]">
                    We are passionate coffee lovers who strive to bring you the best in coffee taste and quality. Our mission is to explore, discover, and share the richness of coffee from around the globe. We believe in the art of great coffee making and the deep impact it has on our lives.
                </p>
                <p className="text-md text-[#331A15]">
                    Founded in 2021, our team consists of world-class baristas, coffee enthusiasts, and culinary experts who all share a common love for coffee. We source our beans from the best suppliers and use state-of-the-art technology to ensure each cup of coffee is as flavorful as possible.
                </p>
                <h2 className="text-xl font-bold text-[#331A15]">Meet the Team</h2>
                <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                        <img src="https://example.com/photo1.jpg" alt="Team Member" className="w-full h-auto rounded-full"/>
                        <h3 className="text-md font-semibold text-[#331A15]">John Doe</h3>
                        <p className="text-sm text-gray-600">Founder & CEO</p>
                    </div>
                    <div className="space-y-2">
                        <img src="https://example.com/photo2.jpg" alt="Team Member" className="w-full h-auto rounded-full"/>
                        <h3 className="text-md font-semibold text-[#331A15]">Jane Smith</h3>
                        <p className="text-sm text-gray-600">Head Barista</p>
                    </div>
                    <div className="space-y-2">
                        <img src="https://example.com/photo3.jpg" alt="Team Member" className="w-full h-auto rounded-full"/>
                        <h3 className="text-md font-semibold text-[#331A15]">Emily Johnson</h3>
                        <p className="text-sm text-gray-600">Product Manager</p>
                    </div>
                </div>
                <p className="text-md text-[#331A15]">
                    We hope to make a difference in the world by fostering a community of coffee lovers and enthusiasts. Join us in our journey to make every coffee moment a special one.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
