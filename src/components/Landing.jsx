// import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
// import { useTypewriter } from 'react-simple-typewriter';
import UndrawBooks from '../assets/Undraw_Books.svg';

const Landing = () => {
    // const [text, setText] = useTypewriter({

    //     words: [
    //         'I am a Front-end Software Engineer',
    //         'with a strong passion for building web applications with great user experiences.',
    //         'Heres a bit more about me.',
    //     ],

    //     loop:true,
    //     delaySpeed:3000
    // });

    return (
        <section id='landing'>
            <header>
                <div
                className="header__container">
                    <div className="header__description">
                        <h1>Most awarded Australian Library</h1>
                        <h2>Find your dream book <span className='purple'>Library</span></h2>
                        <Link to="#features" >

                            <button className='btn'>Browse books</button>
                        </Link>
                    </div>
                    <figure className='header__img--wrapper'>
                        <img src={UndrawBooks} alt="" />
                    </figure>
                </div >
            </header>

        </section>
    );
}

export default Landing;
