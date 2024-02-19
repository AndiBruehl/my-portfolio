import React, { useState } from "react";
import styled from 'styled-components';
import PageHeader from '../PageHeader/PageHeader';

import slide_image_1 from './assets/images/image1.png';
import slide_image_2 from './assets/images/image2.png';
import slide_image_3 from './assets/images/image3.png';
import slide_image_4 from './assets/images/image4.png';
import slide_image_5 from './assets/images/image5.png';
import slide_image_6 from './assets/images/image6.png';
import slide_image_7 from './assets/images/image7.png';
import slide_image_8 from './assets/images/image8.png';
import slide_image_9 from './assets/images/image9.png';
import slide_image_10 from './assets/images/image10.png';
import slide_image_11 from './assets/images/image11.png';
import slide_image_12 from './assets/images/image12.png';
import slide_image_13 from './assets/images/image13.png';
import slide_image_14 from './assets/images/image14.png';
import slide_image_15 from './assets/images/image15.png';
import slide_image_16 from './assets/images/image16.png';
import slide_image_17 from './assets/images/image17.png';
import slide_image_18 from './assets/images/image18.png';
import slide_image_19 from './assets/images/image19.png';
import slide_image_20 from './assets/images/image20.png';
import slide_image_21 from './assets/images/image21.png';
import slide_image_22 from './assets/images/image22.png';

const CertsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto); /* Default layout */
  gap: 100px;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 975px) {
    grid-template-columns: repeat(2, auto); /* Adjusted layout for screens less than 875px wide */
    margin: 50px;
  }

  @media (max-width: 575px) {
    grid-template-columns: repeat(1, auto); /* Adjusted layout for screens less than 875px wide */
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
    font-family: 'Playfair Display', serif;
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

const images = [
  slide_image_1, slide_image_2, slide_image_3, slide_image_4, slide_image_5,
  slide_image_6, slide_image_7, slide_image_8, slide_image_9, slide_image_10,
  slide_image_11, slide_image_12, slide_image_13, slide_image_14, slide_image_15,
  slide_image_16, slide_image_17, slide_image_18, slide_image_19, slide_image_20,
  slide_image_21, slide_image_22
];

const Certs = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage('');
  };

  return (
    <div className="container" style={{ backgroundColor: 'black' }}>
      <div id="certs">
        <PageHeader title={'Certificates'} />
        <Header>Meine aktuellen Zertifikate</Header>
        <CertsContainer>
          {images.map((image, index) => (
            <RoundedImage key={index} src={image} alt={`slide_image_${index + 1}`} onClick={() => openModal(image)} />
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
