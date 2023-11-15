import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGol } from "../App.tsx";

type CourseGoaListProps = {
  goals: CGol[];
};

const CourseGoaList = ({ goals }: CourseGoaListProps) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoaList;
