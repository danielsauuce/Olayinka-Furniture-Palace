import { useState } from 'react';

function AuthPage() {
  const imgUrl = 'https://i.pinimg.com/1200x/de/8e/6c/de8e6cee6fb469054b917257e5149662.jpg';
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-cover bg-center ">
        <img
          src={imgUrl}
          alt="Luxury furniture showroom"
          className="absolute inset-0 bg-cover bg-center"
        />
      </div>
    </div>
  );
}

export default AuthPage;
