import React from 'react';

function FBLink() {
  const handleClick = () => {
    window.open('https://www.facebook.com/profile.php?id=61564066067641', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="bg-white hover:bg-blue-700"
    >
      <img src="../assets/Facebook_Logo_Primary.png" alt="the facebook logo" className='w-20' />
    </button>
  );
}

export default FBLink;
