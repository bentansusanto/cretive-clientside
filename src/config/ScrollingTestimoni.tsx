import { Testimoni } from "@/utils/types";
import { Mobile } from "./MediaQuery";
import { dataTestimoni } from "@/libs/HomeData";
import { useEffect, useRef, useState } from "react";

export const AnimateScrolling = () => {
  const { isMobile } = Mobile();
  const [testimonials1, setTestimonials1] = useState<Testimoni[]>([]);
  const [testimonials2, setTestimonials2] = useState<Testimoni[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("down");
  const [scrollDirection1, setScrollDirection1] = useState<"left" | "right">(
    "left"
  );
  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const halfIndex = Math.ceil(dataTestimoni.testimoni.length / 2);
    const firstHalf = dataTestimoni.testimoni.slice(0, halfIndex);
    const secondHalf = dataTestimoni.testimoni.slice(halfIndex);

    setTestimonials1(firstHalf);
    setTestimonials2(secondHalf);
  }, []);

  // Scrolling down to top
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (containerRef1.current) {
        const container = containerRef1.current;
        const maxScrollTop = container.scrollHeight - container.clientHeight;

        if (scrollDirection === "down") {
          container.scrollTop += 2; // Change scrolling speed as needed
          if (container.scrollTop >= maxScrollTop) {
            setCurrentIndex((prevIndex) => 0);
            setScrollDirection("up");
          }
        } else {
          container.scrollTop -= 2; // Change scrolling speed as needed
          if (container.scrollTop === 0) {
            setCurrentIndex((prevIndex) => testimonials1.length - 1);
            setScrollDirection("down");
          }
        }
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [testimonials1.length, scrollDirection]);

  // Scrolling top to down
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (containerRef2.current) {
        const container = containerRef2.current;
        const maxScrollTop = container.scrollHeight - container.clientHeight;

        if (scrollDirection === "down") {
          container.scrollTop -= 2; // Change scrolling speed as needed
          if (container.scrollTop >= maxScrollTop) {
            setCurrentIndex((prevIndex) => 1);
            setScrollDirection("up");
          }
        } else {
          container.scrollTop += 2; // Change scrolling speed as needed
          if (container.scrollTop === 0) {
            setCurrentIndex((prevIndex) => testimonials2.length - 1);
            setScrollDirection("down");
          }
        }
      }
    }, 50); // Change interval time as needed

    return () => clearInterval(intervalId);
  }, [testimonials2.length, scrollDirection]);

  return {
    currentIndex,
    testimonials1,
    testimonials2,
    containerRef1,
    containerRef2,
  };
};
