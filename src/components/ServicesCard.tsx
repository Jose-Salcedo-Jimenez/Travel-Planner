import Image from "next/image";
import { Playfair } from "next/font/google";
const playfair = Playfair({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["italic", "normal"],
  variable: "--font-playfair",
});
interface servicesCardProp {
  url: string;
  alt: string;
}
export default function ServicesCard({ url, alt }: servicesCardProp) {
  return (
    <div className="relative w-[250px] h-[166] flex justify-center items-start overflow-hidden">
      <div className="w-full h-full absolute bg-black/34">
        <h3 className={`${playfair.className} italic text-xl text-[#FBF9F3]/80 text-center`}>Lorem</h3>
      </div>
      <Image src={url} width={250} height={150}  alt={alt} />
    </div>
  );
}
