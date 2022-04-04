import React from 'react';
import './Home.css';
import img from '../../images/mainPhoto.png';
import User from '../Users/User';
import Review from '../Review/Review';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    return (
        <div>
            <div className='container mx-auto grid grid-cols-2 gap-5 h-screen'>
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
            <div className="container mx-auto">
                <h1 className='font-semibold text-green-700 text-4xl my-4'>Customers Review</h1>
                <Review></Review>
                <button onClick={() => navigate("/review")} className='w-2/6 bg-green-500 h-8 rounded mb-8'>see more review</button>
            </div>
        </div>
    );
};

export default Home;