import React, { useEffect, useRef } from "react";
import { aosObserve, defaultOptions } from "./aos";

const AnimateOnScroll = (props) => {
  const elRef = useRef();

  useEffect(() => {
    aosObserve(elRef.current);
  }, [elRef]);

  return (
    <div
      ref={elRef}
      data-aos-animate={props.animation || defaultOptions.animation}
      data-aos-duration={props.duration || defaultOptions.duration}
      data-aos-threshold={defaultOptions.threshold}
    >
      {props.children}
    </div>
  );
};

export default AnimateOnScroll;
