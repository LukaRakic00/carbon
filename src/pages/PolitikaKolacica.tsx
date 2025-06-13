import React from 'react';

const PolitikaKolacica = () => (
  <div className="max-w-3xl mx-auto py-12 px-4 bg-white rounded-xl shadow-md mt-8 mb-16">
    <h1 className="text-3xl font-bold mb-6 text-blue-700">Politika kolačića</h1>
    <p className="mb-4 text-lg text-gray-800">
      Na sajtu <b>carbon.co.rs</b> koristimo kolačiće (cookies) i slične tehnologije kako bismo omogućili osnovne funkcionalnosti sajta, poboljšali vaše korisničko iskustvo i analizirali saobraćaj.
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-600">Vrste kolačića koje koristimo</h2>
    <ul className="list-disc ml-6 mb-4 text-gray-800">
      <li><b>Neophodni kolačići:</b> Omogućavaju osnovno funkcionisanje sajta i ne mogu se isključiti u našim sistemima.</li>
      <li><b>Analitički kolačići:</b> Pomažu nam da razumemo kako korisnici koriste sajt i omogućavaju nam da ga unapredimo.</li>
      <li><b>Marketinški kolačići:</b> Koriste se za personalizaciju reklama i praćenje korisnika kroz više sajtova.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-600">Vaša prava</h2>
    <p className="mb-4 text-gray-800">
      U svakom trenutku možete promeniti podešavanja kolačića u svom pregledaču ili povući saglasnost za marketinške kolačiće. Više informacija o tome kako upravljamo vašim podacima možete pronaći u našoj <a href="/politika-privatnosti" className="text-blue-600 underline">Politici privatnosti</a>.
    </p>
    <p className="text-gray-700 mt-8">Za sva pitanja pišite nam na <a href="mailto:servis@smarttehnologysolution.co.rs" className="text-blue-600 underline">servis@smarttehnologysolution.co.rs</a>.</p>
  </div>
);

export default PolitikaKolacica; 