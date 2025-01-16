import React from 'react';
import logo from '../assets/logo.jpg';
import nails from '../assets/nails.png';
import nails2 from '../assets/nails2.png';
import nails3 from '../assets/nails3.png';

const Home = () => {
  return (
    <div>
      <div className="container mx-auto p-6 flex items-center justify-center">
        <div className="text-center">
        <a href="https://timma.fi/yritys/beautyroom-by-emma "> 
          <p className="text-2xl bg-red-300 text-black py-2 px-4 rounded-full hover:bg-red-950 hover:text-white cursor-pointer"> AJANVARAUS </p>
        </a> 
        </div>
      </div>
      <div className="container mx-auto p-6">
        <div className="text-center">
          <h1 className="text-2xl mb-6 text-black"> PALVELUT</h1>
          <p className='mb-16 text-justify w-full max-w-3xl mx-auto'>
            Beautyroom By Emma on vuonna 2022 perustettu kauneushoitola Siilinjärven keskustassa. 
            Meiltä saat palvelut laadukkaasti toteutettuna turvallisilla & tutkituilla sarjoilla sekä tuotteilla nykyaikaisia 
            tekniikoita hyödyntäen.
            Työskentelemme asiakaslähtöisesti, hellin mutta varmoin ottein sekä iloisella asenteella. 
            Haluamme tarjota asiakkaalle lempeän levähdyshetken hoitojemme parissa. 
            Pyrimme olemaan matalankynnyksen hoitola joten olet meille aina tervetullut juuri sellaisena kuin olet.
          </p>
          <div className="flex space-x-4 mb-16 text-justify w-full max-w-2xl mx-auto">
  <div className="flex flex-col items-start space-y-2 text-sm">
    <img src={nails} alt="Nails" className="h-60 w-60" />
    <ul className="list-none">
      <li>Meikkaukset</li>
    </ul>
  </div>
  <div className="flex flex-col items-start space-y-2 text-sm">
  <img src={nails2} alt="Nails2" className="h-60 w-60" />
    <ul className="list-none">
      <li>Sokeroinnit</li>
    </ul>
  </div>
  <div className="flex flex-col items-start space-y-2 text-sm">
  <img src={nails3} alt="Nails3" className="h-60 w-60" />
    <ul className="list-none">
      <li>Geelikynnet</li>
      <li>Geelilakkaukset sormiin</li>
      <li>Geelilakkaukset varpaisiin</li>
      <li>Manikyyrit</li>
    </ul>
  </div>
  <div className="flex flex-col items-start space-y-2 text-sm">
  <img src={nails2} alt="Nails2" className="h-60 w-60" />
    <ul className="list-none">
      <li>Ripsienpidennykset</li>
    </ul>
  </div>
</div>
          <h1 className="text-2xl text-black"> EMMA | PERUSTAJA </h1>
          <h2 className="text-2xl text-black mb-6"> Sky-kosmetologi & koulutettu ripsi- sekä kynsiteknikko  </h2>
          <p className='text-justify w-full max-w-3xl mx-auto'>
            Olen pienestä pitäen ollut hyvin esteettinen ihminen sekä pitänyt kauniista asioista ehkä se voisi olla yksi syy mikä sai heti 
            peruskoulun käytyä lähteä kauneudenhoitoalalle ja tämä vetäisi kyllä heti mukaansa. 
            Työssäni tärkeintä ovat asiakaskohtaamiset, tuloksellisuus, iho-ongelmissa auttaminen sekä työn laadukkuus. 
            Kouluttaudun jatkuvasti syventääkseni ammattitaitoa sekä pidän tärkeänä pysyä ajantasalla alan uusimmista tiedoista. 
            Luonteeltani sekä asiakaspalvelijana koen että olen helposti lähestyttyvä, iloinen sekä lempeä. 
            Toivon sekä pyrin siihen että jokainen asiakas tuntee olonsa kauniiksi ja itsevarmaksi lähtiessään ovestamme ulos.
          </p>
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
{/* <p className='mb-16 text-justify w-full max-w-2xl mx-auto'>
            Beautyroom By Emma on vuonna 2022 perustettu kauneushoitola Siilinjärven keskustassa. 
            Kauneushoitolan palveluvalikoimaan kuuluu mm. Yksilöidyt kasvohoidot, meikkaukset, mikroneulaus, happohoidot, jalkahoidot, 
            sokeroinnit, ripsienpidennykset, geelikynnet, geelilakkaukset sormiin & varpaisiin sekä manikyyrit. 
            Meiltä saat palvelut laadukkaasti toteutettuna turvallisilla & tutkituilla sarjoilla sekä tuotteilla nykyaikaisia 
            tekniikoita hyödyntäen.
            Työskentelemme asiakaslähtöisesti, hellin mutta varmoin ottein sekä iloisella asenteella. 
            Haluamme tarjota asiakkaalle lempeän levähdyshetken hoitojemme parissa. 
            Pyrimme olemaan matalankynnyksen hoitola joten olet meille aina tervetullut juuri sellaisena kuin olet.
          </p> */}
