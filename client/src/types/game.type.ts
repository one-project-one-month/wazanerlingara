export type Player = {
  id: string;
  name: string;
  imageId: string | null;
};

export type Image = {
  id: string;
  url: string;
  name: string;
};

type GameSetting = {
  imposterCount: number;
  turnTimer: number;
  durationTimer: number;
  canImposterGetHint: boolean;
};

type Category = {
  id: string;
  name: string;
};

export type Word = {
  id: string;
  text: string;
  imageId: string | null;
};

type Question = {
  id: string;
  text: string;
  imageId: string | null;
};

export type GameConfig = {
  id: string;
  players: Player[];
  gameMode: "word" | "question";
  category?: Category;
  gameSetting: GameSetting;
  word: Word | null;
  question: Question | null;
  roundCount: number;
  imposterId: string | null;
};
