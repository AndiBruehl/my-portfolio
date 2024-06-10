import React, { useState } from "react";
import styled from "styled-components";
import PageHeader from "../PageHeader/PageHeader";
import images from "./ImageImport";

const CertsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto); /* Default layout */
  gap: 100px;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 975px) {
    grid-template-columns: repeat(
      2,
      auto
    ); /* Adjusted layout for screens less than 875px wide */
    margin: 50px;
  }

  @media (max-width: 575px) {
    grid-template-columns: repeat(
      1,
      auto
    ); /* Adjusted layout for screens less than 875px wide */
    margin: 50px;
  }
`;

const RoundedImage = styled.img`
  border-radius: 15px;
  transition: transform 0.3s ease;
  max-width: 200px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const Header = styled.h2`
  text-align: center;
  color: azure;
  padding: 2%;
  margin-top: -5%;
  font-family: "Playfair Display", serif;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`;

const ModalImage = styled.img`
  max-width: 900px;
  max-height: 900px;
`;

const Certs = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage("");
  };

  return (
    <div className="container" style={{ backgroundColor: "black" }}>
      <div id="certs">
        <PageHeader title={"Certificates"} />
        <Header>Meine aktuellen Zertifikate</Header>
        <CertsContainer>
          {images.map((image, index) => (
            <RoundedImage
              key={index}
              src={image}
              alt={`slide_image_${index + 1}`}
              onClick={() => openModal(image)}
            />
          ))}
        </CertsContainer>
        {modalOpen && (
          <ModalBackground onClick={closeModal}>
            <ModalContent>
              <ModalImage src={selectedImage} alt="modal_image" />
            </ModalContent>
          </ModalBackground>
        )}
      </div>
    </div>
  );
};

export default Certs;
