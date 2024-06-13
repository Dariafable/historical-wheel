import React from "react";
import gsap from "gsap";

import { IFact, TVisibilityWrapperProps } from "../../../types";
import { useWindowSize } from "../../../customHooks";

const VisibilityWrapper = ({
  children,
  className,
  dependencies,
}: TVisibilityWrapperProps<IFact>) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const { isMobile } = useWindowSize();

  React.useLayoutEffect(() => {
    const element = ref.current;

    const ctx = gsap.context(() => {
      if (element) {
        const tl = gsap.timeline();
        tl.to(element, {
          opacity: 0,
          y: isMobile ? 15 : 0,
          duration: 0.3,
        });
        tl.to(element, {
          opacity: 1,
          y: 0,
          duration: 0.3,
        });
      }
    });
  }, [dependencies, isMobile]);

  return (
    <section className={className} ref={ref}>
      {children}
    </section>
  );
};

export default VisibilityWrapper;
