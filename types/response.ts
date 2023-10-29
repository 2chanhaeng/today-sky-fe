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

export interface Todo {
  id: string;
  content: string;
  checked: boolean;
  comment: Comment[];
}

export interface Comment {
  id: string;
  content: string;
}
