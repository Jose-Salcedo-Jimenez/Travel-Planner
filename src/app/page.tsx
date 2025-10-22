import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import About from "@/sections/About";
import Services from "@/sections/Services";
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});
export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen ">
        <Image
          src={"/Fondo.png"}
          alt="Imagen de cartagena de fondo"
          fill
          className="object-cover -z-10"
          priority
        />
        <main className="w-full h-full bg-black/45 p-12 ">
          <div className="w-1/2 h-full flex flex-col justify-center gap-4">
            <p
              className={`${playfairDisplay.className} italic font-light text-lg text-[#E7DECC]`}
            >
              Lorem ipsum dolor
            </p>
            <h1
              className={`${playfairDisplay.className} normal font-normal text-[55px]/17 text-[#E7DECC] tracking-[.8] `}
            >
              Cartagena, like you have{" "}
              <span className="italic">never herd about</span>
            </h1>
            <a
              href="#"
              className={`${playfairDisplay.className} w-[15vw] bg-[#E7DECC] text-sm tracking-[1] text-[#56585B] text-center p-3`}
            >
              Star planning your trip
            </a>
          </div>
        </main>
      </div>
      <About/>
      <Services/>
    </>
  );
}
