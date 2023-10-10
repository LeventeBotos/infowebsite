import Image from "next/image";
import Choose from "./Choose";
import Coding from "./Coding";
import Deploy from "./Deploy";
import Footer from "./Footer";

export default function Home() {
  return (
    <main className="flex md:w-2/3 xl:w-1/2 p-3 self-center flex-col gap-5">
      <p className="text-2xl w-full gradient  text-center self-center p-5 font-extrabold md:text-3xl">
        Weboldalak kreálása és publikálása
      </p>
      <Choose />
      <Coding />
      <Deploy />
      <p>Gratulálok, megcsináltad és feltöltötted a weboldaladat!</p>
    </main>
  );
}
