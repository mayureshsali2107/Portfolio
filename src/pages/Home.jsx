import React from 'react';

function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-100 p-6 md:p-12 mt-10 md:mt-15">
      <div className="text-center md:text-left text-4xl md:text-4xl md:mt-15 font-bold font-serif leading-relaxed">
        Hi,<br />
        I'm <span className="text-blue-600">Mayuresh</span><br />
        Web Designer
      </div>
      
      <div className="w-60 h-60 md:w-100 md:h-100 rounded-full overflow-hidden shadow-lg">
        <img
          src="../mayur.jpg"
          alt="Mayur"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}

export default Home;
