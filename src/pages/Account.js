import React from 'react';
import SavedShows from "../components/SavedShows";


const Account = () => {
    return (
        <>
            <div className='w-full text-white'>
                <img
                    className="w-full h-[400px] object-cover"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/d253acf4-a1e2-4462-a416-f78802dc2d85/010646ec-1e4b-4e94-9656-5e341158430a/VN-vi-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3d3c2942-2cb1-4354-8cc3-38f22d399cae_large.jpg"
                    alt="/"
                />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px] '></div>
                <div className='absolute top-[20%] p-4 md:p-8'>
                    <h1 className='text-3xl md:text-5xl font-bold'>
                        My shows
                    </h1>
                </div>
            </div>
            <SavedShows />
        </>
    );
};

export default Account;