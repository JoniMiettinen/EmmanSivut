import React from 'react';
import emma from '../assets/emma.jpg';
import hoidot from '../assets/hoidot.jpg';
import meikkaukset from '../assets/meikkaukset.jpg';
import kynnet from '../assets/kynnet.jpg';
import ripset from '../assets/ripset.jpg';
import { HashLink } from 'react-router-hash-link';

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
          <div className="flex flex-col md:flex-row md:space-x-4 mb-16 text-justify w-full max-w-3xl mx-auto">
            <div className="flex flex-col items-center space-y-2 text-sm mb-4 md:mb-0">
              <HashLink to="/about#meikkaukset">
                <img src={meikkaukset} alt="meikkaukset" className="h-48 w-48 rounded-full object-cover" />
              </HashLink>
              <ul className="list-none">
                <li>Meikkaukset</li>
              </ul>
            </div>
            <div className="flex flex-col items-center space-y-2 text-sm mb-4 md:mb-0">
              <HashLink to="/about#sokeroinnit">
                <img src={hoidot} alt="Sokeroinnit" className="h-48 w-48 rounded-full object-cover cursor-pointer" />
              </HashLink>
              <ul className="list-none">
                <li>Sokeroinnit</li>
              </ul>
            </div>
            <div className="flex flex-col items-center space-y-2 text-sm mb-4 md:mb-0">
              <HashLink to="/about#kynnet">
                <img src={kynnet} alt="Kynnet" className="h-48 w-48 rounded-full object-cover cursor-pointer" />
              </HashLink>
              <ul className="list-none">
                <li>Geelikynnet,</li>
                <li>Geelilakkaukset sormiin,</li>
                <li>Geelilakkaukset varpaisiin,</li>
                <li>Manikyyrit</li>
              </ul>
            </div>
            <div className="flex flex-col items-center space-y-2 text-sm mb-4 md:mb-0">
              <HashLink to="/about#ripset">
                <img src={ripset} alt="Ripset" className="h-48 w-48 rounded-full object-cover cursor-pointer" />
              </HashLink>
              <ul className="list-none">
                <li>Ripsienpidennykset</li>
              </ul>
            </div>
          </div>
          <h1 className="text-2xl text-black"> EMMA | PERUSTAJA </h1>
          <h2 className="text-2xl text-black mb-6"> Sky-kosmetologi & koulutettu ripsi- sekä kynsiteknikko  </h2>
          <p className='text-justify w-full max-w-3xl mx-auto mb-12'>
            Olen pienestä pitäen ollut hyvin esteettinen ihminen sekä pitänyt kauniista asioista ehkä se voisi olla yksi syy mikä sai heti
            peruskoulun käytyä lähteä kauneudenhoitoalalle ja tämä vetäisi kyllä heti mukaansa.
            Työssäni tärkeintä ovat asiakaskohtaamiset, tuloksellisuus, iho-ongelmissa auttaminen sekä työn laadukkuus.
            Kouluttaudun jatkuvasti syventääkseni ammattitaitoa sekä pidän tärkeänä pysyä ajantasalla alan uusimmista tiedoista.
            Luonteeltani sekä asiakaspalvelijana koen että olen helposti lähestyttyvä, iloinen sekä lempeä.
            Toivon sekä pyrin siihen että jokainen asiakas tuntee olonsa kauniiksi ja itsevarmaksi lähtiessään ovestamme ulos.
          </p>
          <div className="flex flex-col items-center space-y-2 text-sm mb-4 md:mb-0">
            <img src={emma} alt="emma" className="h-56 w-56 object-cover" />
            <ul className="list-none">
              <li>Emma</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
