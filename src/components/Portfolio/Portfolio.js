import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import PageHeader from "../PageHeader/PageHeader";
import "./Portfolio.css";

import slide_image_1 from "./assets/images/image1.png";
import slide_image_2 from "./assets/images/image2.png";
import slide_image_3 from "./assets/images/image3.png";
import slide_image_4 from "./assets/images/image4.png";
import slide_image_5 from "./assets/images/image5.png";
import slide_image_6 from "./assets/images/image6.png";
import slide_image_7 from "./assets/images/image7.png";
import slide_image_8 from "./assets/images/image8.png";
import slide_image_9 from "./assets/images/image9.png";
import slide_image_10 from "./assets/images/image10.png";
import slide_image_11 from "./assets/images/image11.png";
import slide_image_12 from "./assets/images/image12.png";

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
  z-index: 9999;
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

const Portfolio = () => {
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
      <div id="portfolio">
        <PageHeader title={"Portfolio"} />
        <Header>Beispiele meiner Arbeiten:</Header>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide onClick={() => openModal(slide_image_1)}>
            <img src={slide_image_1} alt="slide_image_1" />
            <p style={{ textAlign: "center" }}>Sample Code in VSCode</p>
          </SwiperSlide>
          <SwiperSlide onClick={() => openModal(slide_image_2)}>
            <img src={slide_image_2} alt="slide_image_2" />
            <p style={{ textAlign: "center" }}>JavaScriptGames</p>
          </SwiperSlide>
          <SwiperSlide onClick={() => openModal(slide_image_3)}>
            <img src={slide_image_3} alt="slide_image_3" />
            <p style={{ textAlign: "center" }}>QuizTopia</p>
          </SwiperSlide>
          <SwiperSlide onClick={() => openModal(slide_image_4)}>
            <img src={slide_image_4} alt="slide_image_4" />
            <p style={{ textAlign: "center" }}>WeatherNow</p>
          </SwiperSlide>
          <SwiperSlide onClick={() => openModal(slide_image_5)}>
            <img src={slide_image_5} alt="slide_image_5" />
            <p style={{ textAlign: "center" }}>Fighting-Samurai</p>
          </SwiperSlide>
          <SwiperSlide onClick={() => openModal(slide_image_6)}>
            <img src={slide_image_6} alt="slide_image_6" />
            <p style={{ textAlign: "center" }}>PokemonStyle-Game</p>
          </SwiperSlide>
          <SwiperSlide onClick={() => openModal(slide_image_7)}>
            <img src={slide_image_7} alt="slide_image_7" />
            <p style={{ textAlign: "center" }}>bookiesList-Website</p>
          </SwiperSlide>
          <SwiperSlide onClick={() => openModal(slide_image_8)}>
            <img src={slide_image_8} alt="slide_image_8" />
            <p style={{ textAlign: "center" }}>LieferMax </p>
            <p style={{ textAlign: "center", marginTop: "-3.5rem" }}>
              - Dein LieferService! -
            </p>
          </SwiperSlide>
          <SwiperSlide onClick={() => openModal(slide_image_9)}>
            <img src={slide_image_9} alt="slide_image_9" />
            <p style={{ textAlign: "center" }}>Aktien-App mit Electron</p>
          </SwiperSlide>
          <SwiperSlide onClick={() => openModal(slide_image_10)}>
            <img src={slide_image_10} alt="slide_image_10" />
            <p style={{ textAlign: "center" }}>ACHAT</p>
          </SwiperSlide>
          <SwiperSlide onClick={() => openModal(slide_image_11)}>
            <img src={slide_image_11} alt="slide_image_11" />
            <p style={{ textAlign: "center" }}>Farbgenerator</p>
          </SwiperSlide>
          <SwiperSlide onClick={() => openModal(slide_image_12)}>
            <img src={slide_image_12} alt="slide_image_12" />
            <p style={{ textAlign: "center" }}>JobStar</p>
          </SwiperSlide>

          <div className="slider-controller">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back">Zurück</ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward">Vor</ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
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

export default Portfolio;
