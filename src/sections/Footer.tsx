import Image from "next/image";
import { Playfair } from "next/font/google";

const playfair = Playfair({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["italic", "normal"],
  variable: "--font-playfair",
});
export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center gap-12 p-8 bg-[#FBF9F3]/90">
      <hr className="w-1/2 border border-[#CBB67C]/70" />
      <div className="flex justify-center items-center gap-12 mr-12">
        <ul className={`${playfair.className} flex text-[#56585B] gap-4`}>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Phone</a>
          </li>
          <li>
            <a href="#">WhatsApp</a>
          </li>
        </ul>
        <Image
          src={"/Logo-footer.png"}
          alt="Logo de MJ travel planner"
          width={90}
          height={90}
        />
        <div className="flex justify-center items-center gap-4">
          <Image
            src={"/gmail.png"}
            alt="Logo de MJ travel planner"
            width={30}
            height={30}
          />
          <Image
            src={"/Instagram.png"}
            alt="Logo de MJ travel planner"
            width={25}
            height={25}
          />
        </div>
      </div>
    </footer>
  );
}
