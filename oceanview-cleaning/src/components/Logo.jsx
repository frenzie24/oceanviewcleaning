import React from "react";

const Logo = () => {
    return (
        <div className="min-w-64 w-96 relative text-center font-black">
            <h1 className="text-white font-interTight text-xl md:text-3xl lg:text-5xl drop-shadow-[0_4px_4px_rgba(150,150,0,1.0)] ">OCEANVIEW</h1>
            <h2 className="text-yellow-300 font-playWrite text-sm md:text-xl lg:text-2xl absolute left-1/2 transform -translate-y-1/2 drop-shadow-[0_1.0px_1.0px_rgba(0,0,0,1.0)] ">Cleaning Co.</h2>
        </div>
    );
}

export default Logo;