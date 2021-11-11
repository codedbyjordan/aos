import "animate.css";

export const defaultOptions = {
  threshold: 0.15,
  animation: "fade",
  duration: "2s",
};

const buildAnimationProperty = (element) => {
  const anim =
    element.getAttribute("data-aos-animate") || defaultOptions.animation;
  const duration =
    element.getAttribute("data-aos-duration") || defaultOptions.duration;

  const property = `${anim} ${duration}`;

  return property;
};

export const aosObserve = (toObserve, options) => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const value = buildAnimationProperty(element);
        element.style.animation = value;
        // set opacity back to 1 so when the animation finishes the element doesn't disappear
        toObserve.style.opacity = 1;
        if (element.getAttribute("data-aos-repeat") != "") {
          observer.disconnect();
        }
      } else {
        toObserve.style.opacity = 0;
        entry.target.style.animation = "";
      }
    });
  }, options);

  observer.observe(toObserve);
};

export const aos = {
  init: () => {
    const aosElements = document.querySelectorAll("[data-aos-animate]");
    aosElements.forEach((element) => {
      const options = {
        threshold:
          element.getAttribute("data-aos-threshold") ||
          defaultOptions.threshold,
      };
      aosObserve(element, options);
    });
  },
};
