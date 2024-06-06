import { Code2Image } from "../../../utils/Code2Image";

export const DeckCard = (props: { deckCode: string, deckType: string }) => {
  return (
    <div className="w-full bg-[#C8F2FF] p-3 rounded-lg">
      <img
        className="w-full h-auto"
        src={Code2Image(props.deckCode)}
        alt={props.deckCode}
      />
      {props.deckType === "不正なデッキコード" && (
        <div className="text-center font-m-plus-1p mt-2 text-red-600">
          {props.deckType}
        </div>
      )}
      {props.deckType !== "不正なデッキコード" && (
        <div className="text-center font-m-plus-1p mt-2">
          {props.deckType}
        </div>
      )}
      <div className="text-center font-m-plus-1p text-xs">
        <a href={`https://www.pokemon-card.com/deck/confirm.html/deckID/${props.deckCode}`} target="_blank" rel="noreferrer">
          {props.deckCode}
        </a>
      </div>
    </div>
  );
}