import React from 'react';

function FBLink() {
  const handleClick = () => {
    window.open('https://www.facebook.com/profile.php?id=61564066067641', '_blank');
  };

  return (

     <a href="https://www.facebook.com/profile.php?id=61564066067641" > <img src="../assets/Facebook_Logo_Primary.png" alt="the facebook logo" className='w-16' /></a>

  );
}

export default FBLink;
