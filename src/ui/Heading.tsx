import { FC } from "react";

interface IHeading {
  title: string;
}

const Heading: FC<IHeading> = ({ title }) => {
  return <h1>{title}</h1>;
};

export default Heading;
