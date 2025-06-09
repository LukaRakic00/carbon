import React from 'react';

const PolitikaPrivatnosti = () => (
  <div className="bg-white min-h-screen py-8 px-2 sm:px-8">
    <button className="download-btn fixed top-5 right-5 bg-blue-700 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-800 z-50 print:hidden" onClick={() => window.print()}>
      📄 Preuzmi PDF
    </button>
    <div className="header text-center border-b-4 border-blue-700 pb-5 mb-8">
      <div className="company-name text-2xl font-bold text-blue-700 mb-2">Smart Technology Solution d.o.o.</div>
      <div className="document-title text-xl font-bold text-gray-900 mb-1">POLITIKA PRIVATNOSTI</div>
    </div>
    <div className="section mb-6 p-4 bg-gray-50 border-l-4 border-blue-700 rounded">
      <div className="section-title text-lg font-bold text-blue-700 mb-2 pb-1 border-b border-gray-200">1. OPŠTE ODREDBE</div>
      <div className="section-content text-justify text-base leading-relaxed">
        <span className="highlight bg-blue-50 px-1 rounded">Smart Technology Solution d.o.o.</span> Vaše lične podatke obrađuje u skladu sa zakonom i uz maksimalno poštovanje načela zaštite privatnosti. Posvećeni smo zaštiti svih prikupljenih podataka o Vama.
      </div>
    </div>
    <div className="section mb-6 p-4 bg-gray-50 border-l-4 border-blue-700 rounded">
      <div className="section-title text-lg font-bold text-blue-700 mb-2 pb-1 border-b border-gray-200">2. PRIKUPLJANJE LIČNIH PODATAKA</div>
      <div className="section-content text-justify text-base leading-relaxed">
        Vaša poseta našem sajtu omogućava nam pristup određenim ličnim podacima. U cilju uspešnog i kvalitetnog pružanja usluga, prikupljamo isključivo neophodne i osnovne podatke o korisnicima, kao što su:
        <br /><br />
        • ime i prezime<br />
        • adresa<br />
        • kontakt telefon<br />
        • e-mail adresa<br />
        • druge relevantne informacije
      </div>
    </div>
    <div className="section mb-6 p-4 bg-gray-50 border-l-4 border-blue-700 rounded">
      <div className="section-title text-lg font-bold text-blue-700 mb-2 pb-1 border-b border-gray-200">3. ZAŠTITA I POVERLJIVOST PODATAKA</div>
      <div className="section-content text-justify text-base leading-relaxed">
        Vaše lične podatke nećemo učiniti dostupnim trećim licima bez Vašeg izričitog pristanka. Prema Zakonu o zaštiti podataka o ličnosti, ličnim podatkom smatra se svaka informacija koja se odnosi na fizičko lice, bez obzira na oblik u kojem je izražena i na nosač informacije, kao i bez obzira na to po čijem nalogu, u čije ime i kada je informacija nastala, način njenog pribavljanja i slično.
      </div>
    </div>
    <div className="section mb-6 p-4 bg-gray-50 border-l-4 border-blue-700 rounded">
      <div className="section-title text-lg font-bold text-blue-700 mb-2 pb-1 border-b border-gray-200">4. PRAVNI OSNOV ZA OBRADU PODATAKA</div>
      <div className="section-content text-justify text-base leading-relaxed">
        Pravni osnov za obradu podataka o ličnosti jeste zakon ili saglasnost lica na koje se podaci odnose. Prikupljene podatke o registrovanim korisnicima/kupcima obrađujemo i čuvamo u skladu sa odredbama <span className="highlight bg-blue-50 px-1 rounded">Zakona o zaštiti podataka o ličnosti</span> (Sl. glasnik RS, br. 97/2008, 104/2009, 68/2012).
      </div>
    </div>
    <div className="section mb-6 p-4 bg-gray-50 border-l-4 border-blue-700 rounded">
      <div className="section-title text-lg font-bold text-blue-700 mb-2 pb-1 border-b border-gray-200">5. SAGLASNOST I OPOZIV</div>
      <div className="section-content text-justify text-base leading-relaxed">
        Popunjavanjem polja na obrascu za registraciju i ostavljanjem ličnih podataka, dajete nam saglasnost za njihovo prikupljanje i dalju obradu u skladu sa važećim zakonskim propisima. Podaci će se koristiti i obrađivati isključivo u svrhe za koje su prikupljeni. <span className="highlight bg-blue-50 px-1 rounded">Datu saglasnost možete opozvati u bilo kom trenutku.</span> Sve lične podatke koje nam dostavite tretiramo kao strogo poverljive i čuvamo ih trajno, odnosno do opoziva saglasnosti.
      </div>
    </div>
    <div className="section mb-6 p-4 bg-gray-50 border-l-4 border-blue-700 rounded">
      <div className="section-title text-lg font-bold text-blue-700 mb-2 pb-1 border-b border-gray-200">6. BEZBEDNOSNE MERE</div>
      <div className="section-content text-justify text-base leading-relaxed">
        <span className="highlight bg-blue-50 px-1 rounded">Smart Technology Solution d.o.o.</span> preduzima sve potrebne mere predostrožnosti – uključujući administrativne, tehničke i fizičke mere – kako bi zaštitila Vaše lične podatke od gubitka, krađe, zloupotrebe, kao i od neovlašćenog pristupa, otkrivanja ili izmene. Vašim podacima mogu pristupiti, unositi ih i obrađivati samo lica ovlašćena za takve aktivnosti. Takođe, pristup podacima koji se unose ručno i čuvaju u papirnoj formi imaju isključivo ovlašćena lica. Svi zaposleni u Smart Technology Solution d.o.o. obavezni su da poštuju načela zaštite privatnosti.
      </div>
    </div>
    <div className="footer mt-10 pt-6 border-t text-center text-sm text-gray-500">
      <strong>Smart Technology Solution d.o.o.</strong><br />
      Ovaj dokument predstavlja zvaničnu Politiku privatnosti kompanije<br />
      Za dodatne informacije kontaktirajte nas na zvaničnim kanalima komunikacije
    </div>
    <style>{`
      @media print {
        .download-btn { display: none !important; }
        body { margin: 0; padding: 0; }
        .section { break-inside: avoid; }
      }
    `}</style>
  </div>
);

export default PolitikaPrivatnosti; 