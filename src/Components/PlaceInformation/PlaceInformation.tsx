import React from "react";
import { Response, Schedule } from "../../helpers/types";

interface Props {
  responseData: Response;
}

interface DaySchedule {
  day: string;
  schedule: string;
}

const PlaceInformation: React.FC<Props> = ({ responseData }) => {
  const createScheduleArr = (schedules: Schedule[]): string => {
    return schedules
      .map((schedule) => `${schedule.start} - ${schedule.end}`)
      .join(" ");
  };

  const createDayScheduleArr = () => {
    const daySchedules = responseData.data!.openingHours.days;
    const dayScheduleArr = [];

    for (const daySchedule in daySchedules) {
      let dayScheduleObj: DaySchedule = { day: "", schedule: "" };
      dayScheduleObj["day"] = daySchedule;
      dayScheduleObj["schedule"] = createScheduleArr(
        daySchedules[daySchedule as keyof typeof daySchedules]
      );
      dayScheduleArr.push(dayScheduleObj);
    }

    return dayScheduleArr;
  };

  const groupBy = () => {
    const dayScheduleArr = createDayScheduleArr();
    let groupedObj: { [schedule: string]: string[] } = {};
    dayScheduleArr.forEach((daySchedule) => {
      //   const unitId = exercise.cohortExercise.exercise.unitId;
      //   const unitKey = `unit${unitId}`;
      const { day, schedule } = daySchedule;
      if (!groupedObj[schedule as keyof typeof groupedObj]) {
        groupedObj[schedule as keyof typeof groupedObj] = [];
      }

      groupedObj[schedule].push(day);
    });
    return groupedObj;
  };

  console.log(groupBy());

  const groupedObj = groupBy();
  const groupedArr = Object.entries(groupedObj);

  console.log(groupedArr);

  return (
    <div>
      <h1>{responseData.data!.what}</h1>
      <h2>{responseData.data!.where}</h2>
      <ul>
        {groupedArr.map((schedule) => (
          <li>{schedule[0]}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlaceInformation;
