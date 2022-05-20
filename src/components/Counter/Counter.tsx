import { animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ from, to }: any) {
  const nodeRef = useRef() as React.MutableRefObject<HTMLParagraphElement>;

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate(value: number) {
        node.textContent = value.toFixed(2);
      },
    });
    return () => controls.stop();
  }, [from, to]);

  return <span ref={nodeRef} />;
}
export default Counter;
