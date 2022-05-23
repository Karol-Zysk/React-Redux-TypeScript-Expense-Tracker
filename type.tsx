export type State = {
  expense: List;
};

export type List = {
  list: [];
};

export type CourseProps = {
  course: number;
  loading: boolean;
  error: string;
};

export interface INBPState {
  loading: any | null;
  error: any | null;
  course: any | null;
}
