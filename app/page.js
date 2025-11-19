import Image from "next/image";
import Hero from "./HomeComponents/Hero/Hero";
import SectionSecond from "./HomeComponents/Over10Years/SectionSecond";
import Categories from "./HomeComponents/Categories/Categories";
import Explorer from "./HomeComponents/Explorer/Explorer";
import Courses from "./HomeComponents/Courses/Courses";
import Status from "./HomeComponents/Status/Status";
import Question from "./HomeComponents/QuestionSection/Question";
import Instructors from "./HomeComponents/InStructors/Instructors";
import Journey from "./HomeComponents/Journey/Journey";

export default function Home() {
  return (
    <div className="overflow-x-clip">
      <Hero />
      <SectionSecond />
      <Categories />
      <Explorer />
      <Courses />
      <Status />
      <Question />
      <Instructors />
      <Journey />
    </div>
  );
}
