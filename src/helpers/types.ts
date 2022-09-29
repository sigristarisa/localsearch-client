type Schedule = {
  start: string;
  end: string;
  type: string;
};

type Day = {
  tuesday: Schedule[];
  wednesday: Schedule[];
  thursday: Schedule[];
  friday: Schedule[];
  saturday: Schedule[];
  sunday: Schedule[];
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
