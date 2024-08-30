import React from 'react';

function FBLink({ message }) {
  const handleClick = () => {
    window.open('https://www.facebook.com/profile.php?id=61564066067641', '_blank');
  };

  return (

    <span className='flex flex-row justify-center items-center'>
      <a className='px-1' href="https://www.facebook.com/profile.php?id=61564066067641" >
        {message}
      </a>

      <img src="../assets/Facebook_Logo_Primary.png" alt="the facebook logo" className='w-10 px-1' onClick={handleClick}/>
    </span>
  );
}

export default FBLink;
