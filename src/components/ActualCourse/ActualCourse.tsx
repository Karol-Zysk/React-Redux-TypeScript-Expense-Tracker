import axios from "axios";
import { useState, useEffect } from "react";
import { Courses, Date, TodaysCourse, Wrapper } from "./ActualCourse.style";

interface CourseInfo {
  ask: number;
  effectiveDate: string;
}

const ActualCourse = () => {
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://api.nbp.pl/api/exchangerates/rates/c/eur/today/?format=json"
      )
      .then((resp) => {
        setCourse(resp.data.rates);
        setLoading(false);
      })
      .catch(function (error) {
        setLoading(false);
        setError(true);
      });
  }, []);

  if (loading) return <p>Spinner</p>;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <Wrapper>
      {course.map((courseInfo: CourseInfo) => {
        return (
          <>
            <Date>
              <b>Today: </b>
              {courseInfo.effectiveDate}
            </Date>
            <Courses>
              <TodaysCourse>
                1 EUR = {(Math.round(courseInfo.ask * 100) / 100).toFixed(3)}{" "}
                PLN
              </TodaysCourse>
              <TodaysCourse>
                1 PLN ={" "}
                {(Math.round((1 / courseInfo.ask) * 100) / 100).toFixed(3)} EUR
              </TodaysCourse>
            </Courses>
          </>
        );
      })}
    </Wrapper>
  );
};

export default ActualCourse;
