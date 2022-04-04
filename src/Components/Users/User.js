import React from 'react';
import Review from '../Review/Review';
import './Users.css';

const User = ({ user }) => {
    // Destructuring
    const { name, image, comment } = user;
    return (
        <div className='user-card border rounded p-4 shadow-lg'>
            <div className="user-img flex justify-center items-center">
                <img src={image} alt="" />
            </div>
            <div className="comment-detail">
                <p className='pt-3'> <span className='font-semibold'>Name :</span> <span className='text-lg'>{name}</span></p>
                <p className='py-3'> <span className='font-semibold'>Review :</span> <span className='text-amber-500'>{comment.slice(0, 100) + '...'}</span></p>
                <p><span className='font-semibold'>Rating :</span> <span className='text-amber-400'>5 Star</span></p>
            </div>
        </div>
    );
};

export default User;