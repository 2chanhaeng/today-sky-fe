export interface DateParams {
  params: Dates;
}

export interface Dates {
  year: number;
  month: number;
  date?: number;
}

export enum App {
  "todo" = "todo",
  "diary" = "diary",
}

export interface AppDates extends Dates {
  app?: App;
}
