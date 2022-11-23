import React from 'react';

const Banner = () => {
    return (
        <section>
            <div className="bg-gradient-to-r from-primary via-secondary to-accent">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-50">Welcome to <span className='text-info'>Phone<br />Heaven</span></h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-50">Phone Heaven is one of the largest resealing phone website in the world. Be fast to claim your dream phone today.</p>
                    <div className="flex flex-wrap justify-center">
                        <button type="button" className="w-40 hover:bg-opacity-90 px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-100 text-gray-900">Categories</button>
                        <button type="button" className="w-40 hover:bg-base-100 hover:bg-opacity-10 font-semibold px-8 py-3 m-2 text-lg border rounded border-gray-300 text-gray-50">Login</button>
                    </div>
                </div>
            </div>
            <img src="https://source.unsplash.com/random/480x320" style={{height: '400px' , width: '900px'}} alt="" className="mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500" />
        </section>
    );
};

export default Banner;