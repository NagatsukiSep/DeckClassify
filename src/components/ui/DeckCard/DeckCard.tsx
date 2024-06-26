import { useState } from "react";
import { Code2Image } from "../../../utils/Code2Image";
import ImageModal from "../ImageModal/ImageModal";

export const DeckCard = (props: { deckCode: string, deckType: string,ace: string }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (imageUrl: string) => {
    // setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    // setSelectedImage(null);
  };

  return (
    <div className="w-full bg-[#C8F2FF] p-3 rounded-lg shadow-xl">
      <img
        className="w-full h-auto"
        src={Code2Image(props.deckCode)}
        alt={props.deckCode}
        onClick={() => openModal(Code2Image(props.deckCode))}
      />
      {props.deckType === "エラー" && (
        <div className="text-center font-m-plus-1p mt-2 text-red-600">
          {props.deckType}
        </div>
      )}
      {props.deckType !== "エラー" && (
        <div className="text-center font-m-plus-1p mt-2">
          {props.deckType}
        </div>
      )}
      <div className="text-center font-m-plus-1p text-xs underline">
        <a href={`https://www.pokemon-card.com/deck/confirm.html/deckID/${props.deckCode}`} target="_blank" rel="noreferrer">
          {props.deckCode}
        </a>
      </div>
      {/* {props.ace} */}
      {modalIsOpen && (
        <ImageModal isOpen={modalIsOpen} onClose={closeModal} imageUrl={Code2Image(props.deckCode)} />
      )}
    </div>
  );
}