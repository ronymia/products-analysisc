import React from 'react';
import './Home.css';
import img from '../../images/mainPhoto.png';

const Home = () => {
    return (
        <div className='container mx-auto grid grid-cols-2 gap-5 h-4/5'>
            <div className="left-container flex justify-center items-center">
                <div className="">
                    <h1 className='text-7xl text-emerald-600 my-5'>
                        Gao Gram Bazar
                    </h1>
                    <p className=''>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequatur nobis ea vel corrupti doloribus quo. Sit, repellat dicta. Sint deleniti animi consectetur tempora eius, dolore atque enim qui repellendus?
                    </p>
                    <button className="bg-blue-200 hover:bg-blue-300 hover:transition hover:duration-300 hover:ease-in-out w-1/5 h-12 rounded my-4 hover:translate-x-6">to know more</button>
                </div>
            </div>
            <div className="right-container flex justify-center items-center">
                <img width="70%" src={img} alt="" />
            </div>
        </div>
    );
};

export default Home;