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

export type gameType = "turnTimer" | "durationTimer";
type GameSetting = {
  imposterCount: number;
  turnTimer: number;
  durationTimer: number;
  canImposterGetHint: boolean;
  gameType: gameType
};

export type Category = {
  id: string;
  name: string;
  imageId: string | null;
};

export type Word = {
  id: string;
  text: string;
  imageId: string | null;
  categoryId: string | null;
  hint: string;
};

export type Question = {
  id: string;
  text: string;
  imageId: string | null;
  categoryId: string | null;
  hint: string;
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
  imposterIds: string[] | null;
  previousWordId: string | null;
  previousQuestionId: string | null;
  previousImposterIds: string[] | null;
};
