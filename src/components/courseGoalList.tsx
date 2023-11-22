import CourseGoal from "./CourseGoal.tsx";
import { type CourseGoal as CGol } from "../App.tsx";
import Infobox from "./Infobox.tsx";
import { type ReactNode } from "react";

type CourseGoaListProps = {
  goals: CGol[];
  onDeleteGoal: (id: number) => void;
};

const CourseGoaList = ({ goals, onDeleteGoal }: CourseGoaListProps) => {
  if (goals.length === 0) {
    return (
      <Infobox mode="hint">You have no goals yet.Start adding some! </Infobox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <Infobox mode="warning">
        You're collecting to many goals. Don't put too much on your plate!{" "}
      </Infobox>
    );
  }
  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoaList;
