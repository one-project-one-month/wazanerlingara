import data from "@/data/question-words.json";
import { getRandomItemExcluding } from "./get-random-item-excluding";

export const getWordAndQuestionByCategory = (categoryId: string, previousId?: string) => {
    const words = data.filter((word) => word.categoryId === categoryId);
    return getRandomItemExcluding(words, previousId)

}