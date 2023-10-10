import React from "react";

const Choose = () => {
  return (
    <div>
      <p className="text-lg md:text-xl font-bold  pb-3 ">1, Előkészületek</p>
      <p>
        Először is, el kell döntenünk, hogy milyen környezetet szeretnénk
        használni a weboldal elkészítéséhez.
      </p>
      <p>
        Én most Next.js Javascript framework-kel fogom elkészíteni. A Next.js A
        React.js-re épül, ami a Javascript programozási nyelvre. Sok másik
        framework közül választhatunk, mint Vue, Svelte, Angular vagy a
        legeltejedtebb, React.
      </p>
      <p>
        A Javascript-hez kell egy compiler, ami futtatja a kódot. Ez a Node.js
        lesz nekünk. Ezt le tudjuk tölteni a{" "}
        <a href="https://www.nodejs.org">Node.js weboldaláról</a> az összes
        elterjedt OS-re.
      </p>
      <p>
        Amint ez megvan, meg is kreálhatjuk a weboldalunk boilerplate kódját,
        ami kell a működéshez.
      </p>
      <p className="code"> $ npx create-next-app</p>
      <p>Ezek után meg fog kérdezni pár konfigurációs döntésben:</p>
      <img src="/terminal.png" alt="kerdesek" className="mt-3" />
      <p className="text-gray-300 text-sm mb-3">
        *nekem ezek a preferált beállításaim
      </p>
      <p>Ezek után meg tudjuk nyitni ezt a projektet egy kód szerkeztőben.</p>
      <p>
        Én a Visual Studio Code-ot fogom használni, amit{" "}
        <a href="https://code.visualstudio.com/">innen</a> lehet letölteni.
      </p>
      <p>A terminálban belemegyegyünk az új projektbe</p>
      <p className="code">$ cd test</p>
      <p>és megnyitjuk vscodeban.</p>
      <p className="code">$ code .</p>
    </div>
  );
};

export default Choose;
