import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../Counter/Counter";
import {
  ButtonWrapper,
  Courses,
  Date,
  ErrorText,
  TextWrapper,
  TodaysCourse,
  Wrapper,
} from "./ActualCourse.style";
import { INBPState } from "../../../type";
import { loadDataAsync } from "../../app/actions/nbpApiactions";
import { Button, Stack } from "@chakra-ui/react";

const ActualCourse = () => {
  const [coursePLN, setCoursePLN] = useState(0.2);
  const [courseEUR, setCourseEUR] = useState(4.6);
  const [showInfo, setShowInfo] = useState(false);
  const dispatch = useDispatch();
  const { isLoading, course, errorMessage } = useSelector(
    (state: INBPState) => state.course
  );

  useEffect(() => {
    setCourseEUR(parseFloat((Math.round((1 / course) * 100) / 100).toFixed(2)));
    setCoursePLN(parseFloat((Math.round(course * 100) / 100).toFixed(2)));
  }, [course]);

  const fetchNBP = () => {
    dispatch(loadDataAsync());
    setShowInfo(true);
  };

  const [from] = useState(0);

  return (
    <Wrapper>
      {isLoading ? (
        <Date>Loading...</Date>
      ) : errorMessage ? (
        <Stack direction="column">
          <ErrorText>{errorMessage}</ErrorText>
          <ErrorText>Default Course 4.6</ErrorText>
        </Stack>
      ) : (
        <TextWrapper>
          <Date>
            {showInfo ? (
              <>
                Latest data from
                <b> NBP: </b>
              </>
            ) : (
              <>Default Value:</>
            )}
          </Date>
          <Courses>
            <TodaysCourse>
              1 <b>EUR</b> = <Counter from={from} to={courseEUR} /> PLN
            </TodaysCourse>
            <TodaysCourse>
              1 <b>PLN</b> = <Counter from={from} to={coursePLN} /> EUR
            </TodaysCourse>
            <TodaysCourse></TodaysCourse>
          </Courses>
        </TextWrapper>
      )}
      <ButtonWrapper>
        <Button
          colorScheme="gray"
          fontSize={{ base: "10px ", md: "15px", lg: "18px" }}
          padding={{ base: " 2px 5px ", md: "12px", lg: "14px" }}
          onClick={fetchNBP}
        >
          Actual Course
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default ActualCourse;
