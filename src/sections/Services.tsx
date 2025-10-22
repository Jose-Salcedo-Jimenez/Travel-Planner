import { Playfair_Display_SC, Playfair } from "next/font/google";
import ServicesCard from "@/components/ServicesCard";
import Image from "next/image";
const playfair_Display_SC = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["italic", "normal"],
  variable: "--font-playfair",
});
const playfair = Playfair({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["italic", "normal"],
  variable: "--font-playfair",
});
export default function Services() {
  return (
    <section className="bg-[#FBF9F3]/90 p-12 flex flex-col gap-2 overflow-hidden ">
      <div className="w-fit flex flex-col justify-center items-center gap-1 pb-8">
        <h2
          className={`${playfair_Display_SC.className} text-[#56585B] text-3xl`}
        >
          our services
        </h2>
        <hr className="border-[0.1em] border-[#56585B]/50 w-full" />
      </div>{" "}
      <div className="grid grid-cols-[auto_1fr_auto] gap-2">
        <div className="flex flex-col gap-2">
          <ServicesCard
            url="/Card 1.png"
            alt="Primera imagen de los servicios"
          />
          <ServicesCard
            url="/Card 2.png"
            alt="Primera imagen de los servicios"
          />
          <ServicesCard
            url="/Card 3.png"
            alt="Primera imagen de los servicios"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          {" "}
          <Image
            src={"/Fondo services.png"}
            alt="Imagen de fondo de los servicios"
            width={700}
            height={400}
            className="object-cover"
          />
          <p className={`${playfair.className} text-black/80 pl-10 pr-10 pt-2 pb-2 tracking-[0.5]`}>
            At <strong>MJ Travel Planner</strong>, we design tailor-made
            experiences for travelers looking to discover the best of Cartagena,
            worry-free.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <ServicesCard
            url="/Card 4.png"
            alt="Primera imagen de los servicios"
          />
          <ServicesCard
            url="/Card 5.png"
            alt="Primera imagen de los servicios"
          />
          <ServicesCard
            url="/Card 6.1.png"
            alt="Primera imagen de los servicios"
          />
        </div>
      </div>
    </section>
  );
}
