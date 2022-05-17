import useAxios from "../../hooks/useAxios";
import { Courses, Date, TodaysCourse, Wrapper } from "./ActualCourse.style";

const ActualCourse = () => {
  const { course, courseDate, loading, error } = useAxios();

  if (loading) return <p>Spinner</p>;

  return (
    <>
      {error && <p>Something Went Wrong</p>}
      <Wrapper>
        <Date>
          <b>Today: </b>
          {courseDate}
        </Date>
        <Courses>
          <TodaysCourse>
            1 EUR = {(Math.round(course * 1000) / 1000).toFixed(3)} PLN
          </TodaysCourse>
          <TodaysCourse>
            1 PLN = {(Math.round((1 / course) * 1000) / 1000).toFixed(3)} EUR
          </TodaysCourse>
        </Courses>
      </Wrapper>
    </>
  );
};

export default ActualCourse;
