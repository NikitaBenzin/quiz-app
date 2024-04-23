import { FC } from "react";
import Button from "../ui/Button";
import Heading from "../ui/Heading";

interface IStart {
  cb: () => void;
}

const Start: FC<IStart> = ({ cb }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Heading title="QUIZ: Which country is it?" />

      <Button onClick={() => cb()}>Start</Button>
    </div>
  );
};

export default Start;
