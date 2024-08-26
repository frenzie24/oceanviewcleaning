import React from 'react';
import Logo from './Logo';

const About = () => {
    return (
        <div className='w-content flex flex-row flex-wrap justify-center items-start [&_div]:px-2'>

            <div className="max-w-96">
                <img src="./assets/owner.PNG" alt="Jenny Lindoff, Oceanview Cleaning Co. founder" />
            </div>
            <div className="max-w-96 drop-shadow-[0_1px_1px_rgba(0,0,0,1)]">
               <Logo />
                <p className="text-justify pt-4 mb-4">
                    With over a decade of cleaning experience, Oceanview Cleaning Co. owner Jenny strives to deliver excellence with each and every clean, ensuring that customer satisfaction is above all else.
                </p>
                <p className="text-justify mb-4">
                    Summer of 2012 became the first “season” where cleaning experience began for Jenny. As years have gone by, she’s cleaned at a lot of prestigious condominiums along the panhandle. Jenny has developed a passion for cleaning, and spinning a personal touch on every spot she’s encountered.
                </p>
                <p className="text-justify mb-4">
                    We at Oceanview Cleaning Co. desire to expand our services. In addition to condo cleaning services, we also offer move-in and move-out cleans for residential, deep cleans, short term rentals (i.e., Air BNB’s), campers/trailers, and everything in-between. Every job is approached with a can-do mentality and no job is too big nor too little.
                </p>
                <p className="text-justify">
                    Please reach out to schedule your space to be tidied up in no time!
                </p>
                <p className="pt-3">Sincerely,</p>
                <p>Jenny Lindoff</p>
                <p>& Associates</p>
            </div>
        </div>
    );
};

export default About;