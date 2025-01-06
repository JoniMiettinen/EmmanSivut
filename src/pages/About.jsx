import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-6 flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl p-6">HINNASTO</h1>
        <p>Hinnasto? Onko tämä joku kuva vai?</p>
      </div>
      <div className="text-center">
        <h1 className="text-2xl p-6">PERUUTUSEHDOT</h1>
        <p className='text-justify w-full max-w-2xl mx-auto'>Peruutus on tehtävä edellisenä päivänä puhelimitse tai omista varauksistasi 
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
