import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

const logos = [
  "/home-page/company-logos/1.webp",
  "/home-page/company-logos/2.webp",
  "/home-page/company-logos/3.webp",
  "/home-page/company-logos/4.webp",
  "/home-page/company-logos/5.webp",
  "/home-page/company-logos/6.webp",
];

const LogoCard = ({ src }: { src: string }) => {
  return (
    <div className="relative mx-8 flex h-24 w-40 items-center justify-center">
      <Image src={src} alt="Company Logo" fill className="object-center" />
    </div>
  );
};

export function CompanyLogosMarquee() {
  return (
    <section className="relative flex w-[700px] flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover={false} className="[--duration:25s]">
        {logos.map((logo, index) => (
          <LogoCard key={index} src={logo} />
        ))}
      </Marquee>
    </section>
  );
}
