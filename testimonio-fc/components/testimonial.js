import React from 'react';

function Testimonial() {
    return (
        <div className='main-container'>
            <img 
                className='image-testimonial'
                src={require('../images/Emma.png')}
                alt='Foto de Emma'/>
            <div className='container-text-testimonial'>
                <p className='name-testimonial'>Emma</p>
                <p className='cargo-testimonial'>Ingeniera</p>
                <p className='text-testimonial'>texto</p>
            </div>
        </div>
    );
}

export default Testimonial;