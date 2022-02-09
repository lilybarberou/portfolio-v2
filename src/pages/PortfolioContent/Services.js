import React from 'react';

import PlanetOne from '../../assets/Portfolio/planet1.png';

import * as s from '../../assets/Portfolio/servicesIndex';


const Services = () => {

    return ( 
        <div className='services'>
            <h1 className='bg-title'>
                SERVICES
                <img src={PlanetOne} className='services__img' alt="PlanetOne" />
            </h1>

            <div className="services__twin-box">
                <div className='services__box blur'>
                    <img src={s.Lightning} className='box__img' alt="Lightning" />
                    <div className="box__text">
                        <h2 className='box__title'>Fast</h2>
                        <p>Optimized & lag free code</p>
                    </div>
                </div>
                <div className='services__box blur'>
                    <img src={s.Light} className='box__img' alt="Light" />
                    <div className="box__text">
                        <h2 className='box__title'>Intuitive</h2>
                        <p>Easy-to-use UX/UI</p>
                    </div>
                </div>
            </div>
            <div className="services__twin-box">
                <div className='services__box blur'>
                    <img src={s.Responsive} className='box__img' alt="Responsive" />
                    <div className="box__text">
                        <h2 className='box__title'>Responsive</h2>
                        <p>Adaptative layout for all devices</p>
                    </div>
                </div>
                <div className='services__box blur'>
                    <img src={s.Rocket} className='box__img' alt="Rocket" />
                    <div className="box__text">
                        <h2 className='box__title'>Dynamic</h2>
                        <p>Better with user interaction</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Services;