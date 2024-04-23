import { FC, useState } from "react";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import Answer from "./Answer";

interface IQuestion {
  cb: () => void;
}

const Question: FC<IQuestion> = ({ cb }) => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Heading title="Budapest?" />
      <Answer
        idx={0}
        text={"Austria"}
        selectedIdx={selectedIdx}
        setSelectedIdx={setSelectedIdx}
      />
      <Answer
        idx={1}
        text={"Austria"}
        selectedIdx={selectedIdx}
        setSelectedIdx={setSelectedIdx}
      />
      <Answer
        idx={2}
        text={"Austria"}
        selectedIdx={selectedIdx}
        setSelectedIdx={setSelectedIdx}
      />

      {selectedIdx !== null ? (
        <Button onClick={() => cb()}>Send</Button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Question;
