import React from 'react';
import logo from '../assets/logo.jpg';

const Home = () => {
  return (
    <div>
      <div className="container mx-auto p-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black">AJANVARAUS</h1>
          <p className="bg-red-300 text-black font-bold py-2 px-4 rounded-full hover:bg-gray-500 hover:text-white cursor-pointer"> AJANVARAUS </p>
        </div>
      </div>
      <div className="container mx-auto p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black">ESITTELY</h1>
          <p>Olisko tässä esittely?</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
// import React from 'react';
// import logo from '../assets/logo.jpg';

// const Home = () => {
//   return (
//     <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${logo})`, backgroundSize: '200%', backgroundPosition: 'center' }}>
//       <div className="container mx-auto p-4">
//         <h1 className="text-2xl font-bold text-black">Etusivu</h1>
//         <p>Olisko tässä se ajanvaraus linkki?</p>
//       </div>
//     </div>
//   );
// };

// export default Home;

