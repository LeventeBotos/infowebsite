import React from "react";

const Coding = () => {
  return (
    <div>
      <p className="text-lg md:text-xl font-bold pb-3 ">2, Programozás</p>
      <p>
        A konfigurációnál én a Typescript-et választottam, így mostantól .tsx
        fileokat fogunk csinálni, ami a React-Typescript.
      </p>
      <a href="https://react.dev/learn/your-first-component">
        Itt tudsz többet megtudni a jsx/tsx-ről.
      </a>
      <p>Először is, nézzük át a felépítését a weboldalunknak.</p>
      <img
        src="/layout.png"
        alt="felépítés"
        className="h-96 p-3 self-center w-full object-contain"
      />
      <p>2 fajta fontos file van az /app ban:</p>
      <ul className=" px-10 py-2 gap-5 list-disc">
        <li>layout.tsx</li>
        <li>page.tsx</li>
        <li>globals.css</li>
        <li>favicon.ico</li>
      </ul>
      <p>
        A layout.tsx fileban található az oldal metadataja, ami főleg a cím és
        nyelv és az első &lt;html&gt; tag.
      </p>
      <div className="flex flex-col w-full py-3 my-5 rounded-lg bg-black">
        <p className="text-gray-200 opacity-60 self-center">layout.tsx</p>
        <img
          src="/layoutfile.png"
          alt="layout"
          className="h-96 p-3 self-start object-contain"
        />
      </div>
      <p>A page.tsx fileban meg a componensekre bontott html található.</p>
      <div className="flex flex-col w-full p-3 my-5 rounded-lg bg-black">
        <p className="text-gray-200 opacity-60 self-center">page.tsx</p>
        <img
          src="/pagefile.png"
          alt="page"
          className="h-48 p-3 self-start object-contain"
        />
      </div>
      <p className="mb-3">
        A globals.css fileban a található az a css ami minden sub-oldalra
        érvényes.
      </p>
      <p>A favicon.ico fileban a található a weboldal iconja.</p>
    </div>
  );
};

export default Coding;
