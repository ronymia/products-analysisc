import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container grid grid-cols-2 gap-8'>
            <div className="container my-8 bg-slate-300 rounded p-2">
                <p className='font-semibold'>
                    <span className='font-semibold'>Question</span> : What is context Api?
                </p>
                <p>
                    <span className='font-semibold'> Answer</span> : The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                </p>
            </div>
            <div className="container my-8 bg-slate-300 rounded p-2">
                <p className='font-semibold'>
                    <span className='font-semibold'>Question</span> : Difference between inline block and block
                </p>
                <p>
                    <span className='font-semibold'> Answer</span> : Any element within a program, document or message is called inline or in-line. When considering HTML, any code built into the web page is called inline. And it does not include any code loaded from an external file. In any web page, almost all the contents are inline except the CSS and image files. Any element that starts a new line for a paragraph and uses the full page or container is called block elements. It has one line or multiple lines and possesses a line break before and after the elements in the line. CSS can be used for formatting the block element.
                </p>
            </div>
        </div>
    );
};

export default Blogs;