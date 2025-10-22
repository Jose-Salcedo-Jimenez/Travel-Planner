import Image from "next/image";
import { Playfair_Display_SC } from "next/font/google";
import { Playfair } from "next/font/google";
const playfair = Playfair({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["italic", "normal"],
  variable: "--font-playfair",
});
const playfair_Display_SC = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["italic", "normal"],
  variable: "--font-playfair",
});
export default function About() {
  return (
    <section className="bg-[#FBF9F3]/90 p-12 grid grid-cols-2">
      <div>
        {" "}
        <Image
          src={"/about.jpg"}
          alt="Imagen de itinerario"
          width={500}
          height={500}
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-8">
        <div className="w-fit flex flex-col justify-center items-center gap-1 p-4">
          <h2
            className={`${playfair_Display_SC.className} text-[#56585B] text-3xl`}
          >
            About
          </h2>
          <hr className="border-[0.1em] border-[#56585B]/50 w-full" />
        </div>
        <p
          className={`${playfair.className} text-[#56585B] font-normal tracking-[1] w-4/5 text-justify`}
        >
          To design, plan, and execute personalized tourism experiences with
          excellence, creativity, and warmth, connecting each traveler with the
          essence of Cartagena: its culture, its people, and its hidden
          treasures.
          <br />
          <br />
          To be the number one trusted Travel Planner in Cartagena, recognized
          for transforming ordinary trips into memorable, exclusive and deeply
          authentic experiences.
        </p>
      </div>
    </section>
  );
}
