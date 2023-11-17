import CourseGoal from "./CourseGoal.tsx";
import { type CourseGoal as CGol } from "../App.tsx";

type CourseGoaListProps = {
  goals: CGol[];
  onDeleteGoal: (id: number) => void;
};

const CourseGoaList = ({ goals, onDeleteGoal }: CourseGoaListProps) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoaList;
