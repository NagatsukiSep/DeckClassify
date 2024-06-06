import { classifyDict } from "./ClassifyDict"
import { Code2Dict } from "./Code2Dict";

export async function Classify(code: string) {
  const deckList = await Code2Dict(code);
  for (const deckType in classifyDict) {
    const condition = classifyDict[deckType];
    let flag = true;
    for (const cardName in condition) {
      switch (condition[cardName].gl) {
        case "g":
          if (deckList[cardName] < condition[cardName].amount || deckList[cardName] === undefined) {
            flag = false;
          }
          break;
        case "l":
          if (deckList[cardName] >= condition[cardName].amount && deckList[cardName] !== undefined) {
            flag = false;
          }
          break;
        default:
          flag = false;
          break;
      }
    }
    if (flag) {
      return deckType;
    }
  }
  if (deckList && Object.keys(deckList).length === 0) {
    return "不正なデッキコード";
  }
  return "その他";
}