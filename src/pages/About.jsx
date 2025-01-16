import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-6 flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl p-6">HINNASTO</h1>
        <h2 className="text-xl p-6">KYNNET | HARJOITTELUHINNASTO</h2>
        <div className="p-2">
          <ul className="list-none">
            <li className="flex justify-between">
              <span>Rakennekynnet uudet | S & M | 3h 30min</span>
              <span>70€</span>
            </li>
            <li className="flex justify-between">
              <span>Rakennekynnet uudet | L & XL | 4h 15min</span>
              <span>73€</span>
            </li>
            <li className="flex justify-between">
              <span>Rakennekynnet huolto | S & M | 3h</span>
              <span>65€</span>
            </li>
            <li className="flex justify-between">
              <span>Rakennekynnet huolto | L & XL | 3h 30min</span>
              <span>68€</span>
            </li>
            <li className="flex justify-between mt-6">
              <span>Luonnonkynnen vahvistus uusi | 2h 15min</span>
              <span>55€</span>
            </li>
            <li className="flex justify-between">
              <span>Luonnonkynnen vahvistus huolto | 2h</span>
              <span>52€</span>
            </li>
            <li className="flex justify-between mt-6">
              <span>Geelilakkaus uusi tai huolto | 1h 45min</span>
              <span>45€</span>
            </li>
            <li className="flex justify-between mt-6">
              <span>Rakennekynsien poisto | 1h 15min</span>
              <span>30€</span>
            </li>
            <li className="flex justify-between">
              <span>Vahvistuksen/geelilakan poisto | 45min</span>
              <span>23€</span>
            </li>
            <li className="flex justify-between mt-6">
              <span>Perus manikyyri | Sis. Kynsien viilaus, kynsinauhojen siistiminen, lakkaus sekä kynsinauhaöljy/voide</span>
              <span>32€</span>
            </li>
            <li className="flex justify-between mt-6">
              <span>Koristelut S | Ranskalainen lakkaus/häivytys kaikkiin kynsiin tai 1-2 kynnen yksinkertaiset koristeet</span>
              <span>3,5€</span>
            </li>
            <li className="flex justify-between">
              <span>Koristelut M | Ranskalainen lakkaus/häivytys + 1-2 kynnen koristelut</span>
              <span>6€</span>
            </li>
            <li className="flex justify-between">
              <span>KoristelutL | Vaativammat maalaustyöt tai näyttävät koristelut</span>
              <span>8€</span>
            </li>
            <li className="flex justify-between mt-6">
              <span>1-2 kynnen korjaus huoltojen välissä</span>
              <span>10€</span>
            </li>
            <li className="flex justify-between mt-4 text-xl">
              <span>Kaikkiin kynsipalveluihin sisältyy koneellinen manikyyri.</span>
            </li>
          </ul>
        </div>
        <h2 className="text-xl p-6">RIPSET & KULMAT</h2>
        <div className="p-2">
          <ul className="list-none">
            <li className="flex justify-between">
              <span>Ripsien tai kulmien värjäys 15min</span>
              <span>12€</span>
            </li>
            <li className="flex justify-between">
              <span>Ripsien & kulmien värjäys sekä muotoilu 45min</span>
              <span>32€</span>
            </li>
            <li className="flex justify-between">
              <span>Kulmien värjäys & muotoilu 30min</span>
              <span>23€</span>
            </li>
            <li className="flex justify-between">
              <span>Kulmien muotoilu 30min</span>
              <span>13€</span>
            </li>
            <li className="flex justify-between">
              <span>Kulmien laminointi (sis. Muotoilu) 1h</span>
              <span>45€</span>
            </li>
            <li className="flex justify-between">
              <span>Ripsien kestotaivutus (sis. Värjäys) 1h 30min</span>
              <span>70€</span>
            </li>
          </ul>
        </div>
        <h2 className="text-xl p-6">SOKEROINNIT</h2>
        <div className="p-2">
          <ul className="list-none">
            <li className="flex justify-between">
              <span>Brassi (ensikerta tai yli 6vko edellisestä) 1h</span>
              <span>65€</span>
            </li>
            <li className="flex justify-between">
              <span>Brassi huolto (alle 6vko edellisestä) 30min</span>
              <span>55€</span>
            </li>
            <li className="flex justify-between">
              <span>Sääret tai reidet 45min</span>
              <span>45€</span>
            </li>
            <li className="flex justify-between">
              <span>Sääret + reidet 1h.</span>
              <span>60€</span>
            </li>
            <li className="flex justify-between">
              <span>Kainalot 15min</span>
              <span>14€</span>
            </li>
            <li className="flex justify-between">
              <span>Kasvot 30min</span>
              <span>27€</span>
            </li>
            <li className="flex justify-between">
              <span>Ylähuuli 15min</span>
              <span>12€</span>
            </li>
            <li className="flex justify-between">
              <span>Käsivarret 30min</span>
              <span>29€</span>
            </li>
            <li className="flex justify-between">
              <span>Bikinilinjan sokerointi</span>
              <span>45€</span>
            </li>
          </ul>
        </div>
        <h2 className="text-xl p-6">RIPSIENPIDENNYKSET | VOLYYMIT</h2>
        <div className="p-2">
          <ul className="list-none">
            <li className="flex justify-between">
              <span>Uudet volyymiripset 2h 45min</span>
              <span>115€</span>
            </li>
            <li className="flex justify-between">
              <span>Volyymihuolto 2h</span>
              <span>81€</span>
            </li>
            <li className="flex justify-between">
              <span>Volyymihuolto 1h 30min</span>
              <span>71€</span>
            </li>
            <li className="flex justify-between">
              <span>Volyymihuolto 1h</span>
              <span>59,50€</span>
            </li>
            <li className="flex justify-between">
              <span>Volyymien pikahuolto 45min</span>
              <span>45€</span>
            </li>
          </ul>
        </div>
        <h2 className="text-xl p-6">RIPSIENPIDENNYKSET | KLASSISET</h2>
        <div className="p-2">
          <ul className="list-none">
            <li className="flex justify-between">
              <span>Uudet klassiset 2h 15min</span>
              <span>95€</span>
            </li>
            <li className="flex justify-between">
              <span>Klassisten huolto 1h 30min</span>
              <span>67€</span>
            </li>
            <li className="flex justify-between">
              <span>Klassisten huolto 1h</span>
              <span>57€</span>
            </li>
            <li className="flex justify-between">
              <span>Klassisten pikahuolto 30min</span>
              <span>32€</span>
            </li>
            <li className="flex justify-between">
              <span>Ripsienpidennysten poisto 30min</span>
              <span>21€</span>
            </li>
            <li className="flex justify-between mt-4 text-xl">
              <span>Eläkeläis- sekä opiskelija-alennus 10% palveluiden hinnoista. Alennusta ei pysty yhdistämään muihin tarjouksiin.</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-2xl p-6">PERUUTUSEHDOT</h1>
        <p className='text-justify w-full max-w-4xl mx-auto'>Peruutus on tehtävä edellisenä päivänä puhelimitse tai omista varauksistasi
          (esim.sähköpostin varausvahvistuksessa olevasta peruutuslinkistä) 24 h ennen ajanvarauksen alkua.
          Viikonloppuna (la, su) peruutukset voi tehdä myös sähköpostilla mikäli puhelimitse emme ole tavoitettavissa.
          Samana päivänä peruutetuista ajoista veloitamme 50% palvelun hinnasta ja peruuttamattomista ajoista koko palvelun hinnan.
          Muistathan tarvittaessa siis perua aikasi viimeistään 24 h ennen Sinulle varattua aikaa ja vapauttaa sen muille tarvitseville.
          Kiitos!
        </p>
      </div>
    </div>
  );
};

export default About;
