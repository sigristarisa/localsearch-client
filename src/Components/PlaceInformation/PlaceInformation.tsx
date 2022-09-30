import React from "react";
import TimeTable from "../TimeTable/TimeTable";
import {
  Response,
  Time,
  Day,
  DayTime,
  GroupedByTime,
} from "../../helpers/types";

interface Props {
  responseData: Response;
}

const PlaceInformation: React.FC<Props> = ({ responseData }) => {
  const formatTime = (times: Time[]): string => {
    return times.map((time) => `${time.start} - ${time.end}`).join(" ");
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

  console.log(groupedByTimeArr);

  return (
    <div>
      <h1>{responseData.data!.what}</h1>
      <h2>{responseData.data!.where}</h2>
      <ul>
        {groupedByTimeArr.map((dayTime) => (
          <TimeTable dayTime={dayTime} />
        ))}
      </ul>
    </div>
  );
};

export default PlaceInformation;
