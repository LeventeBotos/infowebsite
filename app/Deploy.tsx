import React from "react";

const Deploy = () => {
  return (
    <div>
      <p className="text-lg md:text-xl font-bold pb-3 ">3, Publikálás</p>
      <p>
        Nagyon sok helyen tudsz egy weboldalt hostolni, a saját gépeden, a
        felhőben vagy akár egy linux serveren.
      </p>
      <p>
        Én most a felhős módszert fogom megmutatni, ami a leggyorsabb,
        legolcsóbb a számodra.
      </p>
      <p>A Google Firebase szolgálatatását fogjuk használni.</p>
      <p>
        Először is, töltsd le npm-mel a firebase-tools csomagot és tedd
        globálisan elérhetővé.
      </p>
      <p className="code "> $ npm i firebase-tools -g</p>
      <p>Ez után jelenkezz be a Google fiókoddal.</p>
      <p className="code">$ firebase login</p>
      <p>Utána initializálni kell a weboldalt firebase projektként.</p>
      <p className="code">$ firebase init</p>
      <p>Válasszuk ki a hosting opciót.</p>
      <img
        src="/firebaseinit.png"
        alt="firebase init"
        className="my-3 h-48 md:h-96 object-contain"
      />
      <p>Válasszuk az új projekt kreálása opciót.</p>
      <img
        src="/firebaseproj.png"
        alt="firebase project"
        className="my-3 h-20 object-contain"
      />
      <p>Nevezzük el a projektet.</p>
      <img
        src="/firebasename.png"
        alt="firebase name"
        className="my-3 h-32 object-contain"
      />
      <p>Végezzük el a konfigurációt</p>
      <img src="hostingsetup.png" alt="hosting setup" className="my-3" />
      <p>Most töltsük fel a weboldalt a felhőbe!</p>
      <p className="code">$ firebase deploy</p>
      <img src="/deployed.png" alt="deployed" className="my-3" />
      <p>
        Ott találod a URL-t amin eléred az admin panelt és az új weboldaladat.
      </p>
    </div>
  );
};

export default Deploy;
