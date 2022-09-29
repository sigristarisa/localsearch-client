import React from "react";
import { Response, Schedule } from "../../helpers/types";

interface Props {
  responseData: Response;
}

const PlaceInformation: React.FC<Props> = ({ responseData }) => {
  const createScheduleArr = (schedules: Schedule[]): string[] => {
    return schedules.map((schedule) => `${schedule.start} - ${schedule.end}`);
  };

  const renderDays = (): string[] => {
    const dayScheduleArr = Object.entries(responseData.data!.openingHours.days);
    console.log("dayScheduleArr", dayScheduleArr);

    return dayScheduleArr.map((day) => {
      return `${day[0]}: ${createScheduleArr(day[1])}`;
    });
  };

  console.log(renderDays());
  return (
    <div>
      <h1>{responseData.data!.what}</h1>
      <h2>{responseData.data!.where}</h2>
      <ul>
        {renderDays().map((day) => (
          <li>{day}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlaceInformation;
