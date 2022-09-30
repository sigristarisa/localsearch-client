export type Time = {
  start: string;
  end: string;
  type: string;
};

export type Day = {
  monday: Time[];
  tuesday: Time[];
  wednesday: Time[];
  thursday: Time[];
  friday: Time[];
  saturday: Time[];
  sunday: Time[];
};

type OpeningHours = {
  days: Day;
};

export type PlaceData = {
  placeId: string;
  what: string;
  where: string;
  openingHours: OpeningHours;
};

export type Response = {
  status: string;
  data?: PlaceData;
  message?: string;
};

export type DayTime = {
  day: string;
  time: string;
};

export type GroupedByTime = {
  [time: string]: string[];
};
