import './App.css'
import Products from './Products'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

function App() {
  return (
    <div className="swiper-wrapper-container">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        navigation={true}               // adds arrows
        pagination={{ clickable: true }} // adds pagination dots
        modules={[Navigation, Pagination]} // important for Swiper 10+
        style={{ width: "90%", margin: "auto" }}
      >

        <SwiperSlide>
          <Products
            title="خرید اکانت کانوا با قیمت مناسب"
            price="59000"
            image="/person1.webp"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Products
            title="خرید اکانات اسپاتیفای"
            price="88000"
            image="/person2.webp"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Products
            title="خرید اکانت کانوا با قیمت مناسب"
            price="24000"
            image="/person3.webp"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Products
            title="خرید اکانت"
            price="12000"
            image="/person4.webp"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Products
            title="خرید اکانت"
            price="12000"
            image="/person4.webp"
          />
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default App;
