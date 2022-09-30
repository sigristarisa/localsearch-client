import React from "react";
import "./TimeTable.css";

interface Props {
  dayTime: [string, string[]];
}

const TimeTable: React.FC<Props> = ({ dayTime }) => {
  const formatDay = (dayArr: string[]): string => {
    const firstDay: string = dayArr[0].substring(0, 3).toUpperCase();
    const lastDay: string = dayArr[dayArr.length - 1]
      .substring(0, 3)
      .toUpperCase();
    return dayArr.length === 1 ? firstDay : `${firstDay} – ${lastDay}`;
  };
  return (
    <li className='time-table_container grid-columns-two_extend-one'>
      <p>{formatDay(dayTime[1])}</p>
      <p>{dayTime[0]}</p>
    </li>
  );
};

export default TimeTable;
