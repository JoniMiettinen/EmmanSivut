import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto p-6 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl mb-6">YHTEYSTIEDOT</h1>
        <h2 className="text-xl mb-2">BEAUTYROOM BY EMMA</h2>
        <p className='text-red-950'>
          <a href="https://www.google.com/maps/search/?api=1&query=Asematie+7,+71800+Siilinjärvi" target="_blank" rel="noopener noreferrer"> Asematie 7, 71800 Siilinjärvi</a>
        </p>
        {/* <a href="tel:044 9710069"> <p className="text-2xl bg-red-300 text-black py-2 px-4 rounded-full hover:bg-red-950 hover:text-white cursor-pointer"> 044 9710069 </p> </a> */}
        <a href="tel:044 9710069"> <p> 044 9710069 </p> </a>
        <p>Beautyroombyemma@gmail.com</p>
        <h2 className="text-xl mb-2 mt-6">AUKIOLOAJAT</h2>
        <p className='mb-2'>Avoinna sopimuksen mukaan</p>
        <p>Ostoksille tai konsultaatioon tullessasi varaa ajanvarauksesta<br></br>"Ostos- tai konsultaatioaika"</p>
        <h2 className="text-xl mb-2 mt-6">MAKSUTAVAT</h2>
        <p>Meillä toimii käteis- ja korttimaksun lisäksi lahjakortit</p>
        <h1 className="text-2xl mt-16 mb-6">SAAPUMINEN</h1>
        <p className='text-justify w-full max-w-3xl mx-auto'>
          Kauneushoitola sijaitsee erinomaisella sijainnilla Siilinjärven keskustassa osoitteessa Asematie 7,
          liike on alapihan puolella (liikkeen ikkunat ovat rautatieseman suuntaan).
          Talon pihassa on asiakkaille kiekotonta & ilmaista parkkitilaa sekä Asematiellä on myös ilmaisia kadunvarsi paikkoja.
          Rautatieasemalta liikkeelle on matkaa 240m ja lähemmältä bussipysäkiltä 350m.
          Lähimmälle bussipysäkille kuljettavat linjat 31, 32, 35 sekä 40.
          Hoitojen aikana en vastaa puhelimeen, mutta soitan tai laitan viestiä takaisin heti hoidon päättymisen jälkeen.
          Hoitojen aikana ovi on usein lukossa varmentaakseni rauhallisen ja keskeytymättömän ajan asiakkaalle.
          Voit varata nettiajanvarauksesta tai puhelimitse ostos- tai konsultaatio ajan, jolloin palvelen sinua yksilöllisesti.
        </p>
      </div>
    </div>
  );
};

export default Contact;
