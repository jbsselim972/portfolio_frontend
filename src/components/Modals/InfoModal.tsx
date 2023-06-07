import Modal from "../UI/Modal/Modal";
import { images } from "@/constants";

import "@/styles/InfoModal.css";

const InfoModal = ({ work, isOpen, closeModal }: any) => {
  return (
    <Modal
      open={isOpen[work.id as keyof typeof isOpen]}
      onClose={() => closeModal(work.id)}
      key={work.imgUrl}
    >
      <h1 className="head-text">{work.title}</h1>
      <img src={images[work.imgUrl as keyof typeof images]} alt="work" />

      <p className="body-text">{work.description}</p>

      <p>Tags: </p>

      <div className="info-tags">
        {work.tags.map((tag: string, index: number) => (
          <span className="tag" key={index}>
            {tag}
          </span>
        ))}
      </div>
    </Modal>
  );
};

export default InfoModal;
