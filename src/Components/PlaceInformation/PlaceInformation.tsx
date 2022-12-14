import React from "react";
import TimeTable from "../TimeTable/TimeTable";
import {
  Response,
  Time,
  Day,
  DayTime,
  GroupedByTime,
} from "../../helpers/types";
import "./PlaceInformation.css";

interface Props {
  responseData: Response;
}

const PlaceInformation: React.FC<Props> = ({ responseData }) => {
  const formatTime = (times: Time[]): string => {
    if (!times.length) return "CLOSED";
    return times.map((time) => `${time.start} - ${time.end}`).join(", ");
  };

  const createDayTimeArr = (): DayTime[] => {
    const dayTimes: Day = responseData.data!.openingHours.days;
    const dayTimesArr: DayTime[] = [];

    for (const dayTime in dayTimes) {
      let dayTimeObj: DayTime = { day: "", time: "" };
      dayTimeObj["day"] = dayTime;
      dayTimeObj["time"] = formatTime(
        dayTimes[dayTime as keyof typeof dayTimes]
      );
      dayTimesArr.push(dayTimeObj);
    }

    return dayTimesArr;
  };

  const groupByTime = (): GroupedByTime => {
    const dayTimeArr: DayTime[] = createDayTimeArr();

    let groupedByTimeObj: GroupedByTime = {};

    dayTimeArr.forEach((daySchedule: DayTime) => {
      const { day, time } = daySchedule;

      if (!groupedByTimeObj[time as keyof typeof groupedByTimeObj]) {
        groupedByTimeObj[time as keyof typeof groupedByTimeObj] = [];
      }

      groupedByTimeObj[time].push(day);
    });
    return groupedByTimeObj;
  };

  const groupedByTimeObj: GroupedByTime = groupByTime();
  const groupedByTimeArr = Object.entries(groupedByTimeObj);

  return (
    <div className='place-information_container'>
      <div className='name-address_container'>
        <h1>{responseData.data!.what}</h1>
        <h2>{responseData.data!.where}</h2>
      </div>
      <div className='day-time_container'>
        <ul>
          {groupedByTimeArr.map((dayTime, index) => (
            <TimeTable key={index} dayTime={dayTime} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlaceInformation;
