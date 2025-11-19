'use client'
import Hero from "./HomeComponents/Hero/Hero";
import SectionSecond from "./HomeComponents/Over10Years/SectionSecond";
import Categories from "./HomeComponents/Categories/Categories";
import Explorer from "./HomeComponents/Explorer/Explorer";
import Courses from "./HomeComponents/Courses/Courses";
import Status from "./HomeComponents/Status/Status";
import Question from "./HomeComponents/QuestionSection/Question";
import Instructors from "./HomeComponents/InStructors/Instructors";
import Journey from "./HomeComponents/Journey/Journey";
import Newsletter from "./HomeComponents/Newslatter/Newsletter";
import Blog from "./HomeComponents/Blogs/Blog";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const initAOS = async () => {
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: false,
        anchorPlacement: 'bottom-top'
      })
    }
    initAOS()
  }, [])
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
      <Newsletter />
      <Blog />
    </div>
  );
}
