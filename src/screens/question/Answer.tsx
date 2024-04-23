import cn from "classnames";
import { Dispatch, FC, SetStateAction } from "react";

interface IAnswer {
  idx: number;
  text: string;
  selectedIdx: number | null;
  setSelectedIdx: Dispatch<SetStateAction<number | null>>;
}

const getLetter = (idx: number) =>
  idx === 0 ? "A" : idx === 1 ? "B" : idx === 2 ? "C" : "D";

const Answer: FC<IAnswer> = ({ idx, text, selectedIdx, setSelectedIdx }) => {
  return (
    <button
      className={cn("Answer-btn", {
        "Answer-btn-active": selectedIdx === idx,
      })}
      onClick={() => setSelectedIdx(idx)}
    >
      <span className="Answer-letter">{getLetter(idx)}</span>
      <p>{text}</p>
    </button>
  );
};

export default Answer;
