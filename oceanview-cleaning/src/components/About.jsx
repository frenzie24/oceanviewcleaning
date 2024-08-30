import React from 'react';
import Logo from './Logo';

const About = () => {
    return (
        <div className='w-full flex flex-row flex-wrap justify-center items-start
        font-interTight text-white
        [&_div]:px-2'>


            <div className="about-container overflow-visible">

                <p className="about pt-4 " >
                    With over a decade of cleaning experience, Oceanview Cleaning Co. owner Jenny strives to deliver excellence with each and every clean, ensuring that customer satisfaction is above all else.
                </p>
                <p className="about">
                    Summer of 2013 became the first “season” where cleaning experience began for Jenny. As years have gone by, she’s cleaned at a lot of prestigious condominiums along the panhandle. Jenny has developed a passion for cleaning, and spinning a personal touch on every spot she’s encountered.
                </p>
                <p className="about">
                    We at Oceanview Cleaning Co. desire to expand our services. In addition to condo cleaning services, we also offer move-in and move-out cleans for residential, deep cleans, short term rentals (i.e., Air BNB’s), campers/trailers and everything in-between. Every job is approached with a can-do mentality and no job is too big nor too little.
                </p>
                <p className="about">
                    Please reach out to schedule.  Your space will be tidied up in no time!
                </p>
                <div className="flex flex-row flex-wrap justify-start pt-3 text-right [&_*]:w-full">
                    <p>Sincerely,</p>
                    <p>Jenny Lindoff & Associates</p>

                </div>
                <Logo />

            </div>
            <div className="about-container">
                <img src="./assets/owner.jpeg" alt="Jenny Lindoff, Oceanview Cleaning Co. founder" />
            </div>

        </div>
    );
};

export default About;