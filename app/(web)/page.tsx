import HeroSection from "@/components/web/home-page/hero-section";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="">
      <HeroSection />
      <section className="relative mt-12 h-[200vh] w-screen">
        {/* <Image
          src={"/sample-img.jpg"}
          className="object-cover object-center"
          alt="img"
          fill
        /> */}
      </section>
    </main>
  );
}
