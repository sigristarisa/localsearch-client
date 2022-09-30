import React from "react";

interface Props {
  dayTime: [string, string[]];
}

const TimeTable: React.FC<Props> = ({ dayTime }) => {
  const formatDay = (dayArr: string[]): string => {
    return dayArr.length === 1
      ? dayArr[0]
      : `${dayArr[0]} - ${dayArr[dayArr.length - 1]}`;
  };
  return (
    <li>
      <p>{formatDay(dayTime[1])}</p>
      <p>{dayTime[0]}</p>
    </li>
  );
};

export default TimeTable;
