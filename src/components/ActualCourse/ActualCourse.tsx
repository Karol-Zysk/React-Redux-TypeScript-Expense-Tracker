import { animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { Courses, Date, TodaysCourse, Wrapper } from "./ActualCourse.style";

function Counter({ from, to }: any) {
  const nodeRef = useRef() as React.MutableRefObject<HTMLParagraphElement>;

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 5,
      ease: "easeOut",
      onUpdate(value) {
        node.textContent = value.toFixed(2);
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return <span ref={nodeRef} />;
}

const ActualCourse = () => {
  const { course, loading, error } = useAxios();
  let coursePLN = (Math.round(course * 100) / 100).toFixed(2);
  let courseEUR = (Math.round((1 / course) * 100) / 100).toFixed(2);

  const [from, setFrom] = useState(0);
  const [toEUR, setToEUR] = useState(0);
  const [toPLN, setToPLN] = useState(0);

  useEffect(() => {
    if (course !== 0) {
      const timeout = setTimeout(() => {
        setToEUR(parseFloat(coursePLN));
        setToPLN(parseFloat(courseEUR));
      }, 1000);
      
    }
  }, [course]);

  if (loading) return <h2>Loading..</h2>;

  return (
    <>
      {error && <p>Something went wrong</p>}
      <Wrapper>
        <Date>
          Latest data from
          <b> NBP: </b>
        </Date>
        <Courses>
          <TodaysCourse>
            1 <b>EUR</b> = <Counter from={from} to={toEUR} /> PLN
          </TodaysCourse>
          <TodaysCourse>
            1 <b>PLN</b> = <Counter from={from} to={toPLN} /> EUR
          </TodaysCourse>
          <TodaysCourse></TodaysCourse>
        </Courses>
      </Wrapper>
    </>
  );
};

export default ActualCourse;
