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
  const [scrollDirection2, setScrollDirection2] = useState<"down" | "up">("up");
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
          if (container.scrollTop >= maxScrollTop - 1) {
            // setCurrentIndex((prevIndex) => 0);
            setScrollDirection("up");
          }
        } else {
          container.scrollTop -= 2; // Change scrolling speed as needed
          if (container.scrollTop <= 0) {
            setCurrentIndex(
              (prevIndex) => (prevIndex + 1) % testimonials1.length
            );
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

        if (scrollDirection2 === "down") {
          container.scrollTop -= 2;
          if (container.scrollTop <= 0) {
            setCurrentIndex(
              (prevIndex) => (prevIndex + 1) % testimonials2.length
            );
            setScrollDirection2("up");
          }
        } else {
          container.scrollTop += 2;
          if (container.scrollTop >= maxScrollTop - 1) {
            setScrollDirection2("down");
          }
        }
      }
    }, 80);

    return () => clearInterval(intervalId);
  }, [testimonials2.length, scrollDirection2]);

  return {
    currentIndex,
    testimonials1,
    testimonials2,
    containerRef1,
    containerRef2,
  };
};
