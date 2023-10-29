export interface Config {
  api: string;
}

export default interface Configs {
  [key: string]: Config;
}