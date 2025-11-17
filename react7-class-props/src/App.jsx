import './App.css'
import Products from './Products'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

function App() {
  return (
    <div className="container">
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        loop={true}
        navigation={true}               // adds arrows
        pagination={{ clickable: true }} // adds pagination dots
        modules={[Navigation, Pagination]} // important for Swiper 10+
        style={{ width: "1580px", margin: "auto" }}
      >

        <SwiperSlide>
          <Products
            title="خرید اکانت کانوا با قیمت مناسب"
            price="59000"
            image="0.svg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Products
            title="خرید اکانات اسپاتیفای"
            price="88000"
            image="person2.webp"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Products
            title="خرید اکانت کانوا با قیمت مناسب"
            price="24000"
            image="person3.webp"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Products
            title="خرید اکانت"
            price="12000"
            image="person4.webp"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Products
            title="خرید اکانت کانوا با قیمت مناسب"
            price="24000"
            image="6.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Products
            title="خرید اکانت کانوا با قیمت مناسب"
            price="24000"
            image="7.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Products
            title="خرید اکانت کانوا با قیمت مناسب"
            price="24000"
            image="8.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Products
            title="خرید اکانت کانوا با قیمت مناسب"
            price="24000"
            image="9.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Products
            title="خرید اکانت کانوا با قیمت مناسب"
            price="24000"
            image="person3.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Products
            title="خرید اکانت کانوا با قیمت مناسب"
            price="24000"
            image="10.webp"
          />
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default App;
