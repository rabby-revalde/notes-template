import React from "react"
import Swiper from "react-id-swiper"
import { Navigation, Pagination } from "swiper/js/swiper.esm"
import "swiper/css/swiper.css"

class SwiperSample extends React.Component {
  render() {
    const { children, slidesperview } = this.props
    const params = {
      modules: [Pagination, Navigation],
      slidesPerView: slidesperview,
      spaceBetween: 30,
      containerClass: "swiper-container pb-5",
      nested: true,
      // autoplay: {
      // 	delay: 5000,
      // 	disableOnInteraction: false,
      // },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    }
    return <Swiper {...params}>{children}</Swiper>
  }
}

export default SwiperSample
