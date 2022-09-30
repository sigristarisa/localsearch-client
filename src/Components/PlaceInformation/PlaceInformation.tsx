import React from "react";
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

  const groupBySchedule = (): GroupedByTime => {
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

  const groupedByScheduleObj: GroupedByTime = groupBySchedule();
  const groupedByScheduleArr = Object.entries(groupedByScheduleObj);

  return (
    <div>
      <h1>{responseData.data!.what}</h1>
      <h2>{responseData.data!.where}</h2>
      <ul>
        {groupedByScheduleArr.map((schedule) => (
          <li>{schedule[0]}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlaceInformation;
