export interface Diary {
  date?: number;
  content: string;
  image?: string;
  emotion?: string;
  emotionImage?: string;
}

export interface Diaries {
  [key: number]: Diary;
}
