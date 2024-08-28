import React, { useEffect, useState } from "react";

const Logo = ( {large} ) => {
    const [isLarge, setIsLarge] = useState(large != undefined ? true : false )


    //"Cleaning Co" portion of the logo is always 2 font steps down
    useEffect(()=> {console.log(isLarge)}, [isLarge]);

    return (
        <>
            {isLarge ? <div className="logo">
                <h1 >OCEANVIEW</h1>
                <h2 >Cleaning Co.</h2>
            </div>: <div className="logo">
                <div className="h1-logo">OCEANVIEW</div>
                <div className="h2-logo">Cleaning Co.</div>
            </div>}

        </>
    );
}

export default Logo;