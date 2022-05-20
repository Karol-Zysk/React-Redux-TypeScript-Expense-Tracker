import { useState, useEffect } from "react";
import axios from "axios";
import { Date } from "../components/ActualCourse/ActualCourse.style";

const useAxios = () => {
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);
  const [course, setCourse] = useState<number>(0);
  const [courseDate, setCourseDate] = useState<string>("");

  const fetchData = () => {
    axios
      .get(
        "https://api.nbp.pl/api/exchangerates/rates/c/eur/today/?format=json"
      )
      .then((res) => {
        setCourse(res.data.rates[0].ask.toFixed(2));
        setCourseDate(res.data.rates[0].effectiveDate || Date);
      })
      .catch((err) => {
        setError(err);
        setCourse(4.7);
        setCourseDate("NBP server off");
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { course, courseDate, error, loading };
};

export default useAxios;
