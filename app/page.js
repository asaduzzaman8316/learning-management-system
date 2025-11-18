import Image from "next/image";
import Hero from "./HomeComponents/Hero/Hero";
import SectionSecond from "./HomeComponents/Over10Years/SectionSecond";
import Categories from "./HomeComponents/Categories/Categories";

export default function Home() {
  return (
    <div className="overflow-x-clip">
      <Hero />
      <SectionSecond />
      <Categories/>
    </div>
  );
}
