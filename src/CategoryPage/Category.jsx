import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const categories = [
  { src: "/images/image 36.png", alt: "Brand 1", label: "T-Shirts" },
  { src: "/images/image 33.png", alt: "Brand 2", label: "T-Shirts" },
  { src: "/images/image 34.png", alt: "Brand 3", label: "T-Shirts" },
  { src: "/images/image 43.png", alt: "Brand 4", label: "T-Shirts" },
  { src: "/images/image 42.png", alt: "Brand 5", label: "T-Shirts" },
  { src: "/images/image 20.png", alt: "Brand 6", label: "T-Shirts" },
  { src: "/images/image 27.png", alt: "Brand 7", label: "T-Shirts" },
  { src: "/images/image 75(2).png", alt: "Brand 8", label: "T-Shirts" },
  { src: "/images/image 45.png", alt: "Brand 9", label: "T-Shirts" },
  { src: "/images/image 46.png", alt: "Brand 10", label: "T-Shirts" },
  { src: "/images/image 41.png", alt: "Brand 11", label: "T-Shirts" },
  { src: "/images/image 37.png", alt: "Brand 12", label: "T-Shirts" },
  { src: "/images/image 50.png", alt: "Brand 13", label: "T-Shirts" },
];

const Category = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "30px",
        margin: "20px 0",
        backgroundColor: "var(--Black-100, #E6E6E6)",
      }}
    >
      <h2 style={{ padding: "20px 0" }}>Shop By Categories</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={5} // المسافة بين العناصر
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 15 },
          640: { slidesPerView: 3, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 30 },
        }}
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index} style={{ borderRadius: "15px" }}>
            <img
              style={{
                backgroundColor: "#FFFAFA",
                borderRadius: "15px",
                padding: "20px 40px",
              }}
              src={category.src}
              width={150}
              alt={category.alt}
            />
            <p
              style={{
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "500",
                fontFamily: "Geist",
                textTransform: "capitalize",
              }}
            >
              {category.label}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Category;
