import React, { useEffect, useState } from 'react';
import useReview from '../../Hooks/useReview';
import User from '../Users/User';
import './Review.css';

const Review = () => {

    const [users, setUsers] = useReview();


    return (
        <div className=' container mx-auto grid grid-cols-3 my-20 gap-4'>
            {
                users.map(user => <User
                    key={user.id}
                    user={user}
                ></User>)
            }
        </div>
    );
};

export default Review;