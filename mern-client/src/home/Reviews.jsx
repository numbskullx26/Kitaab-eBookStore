import React, { useRef, useState } from "react";
import { Avatar } from "flowbite-react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import profilePic from "../assets/profile.jpg";

//React icons
import { FaStar } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

const Reviews = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-5xl text-black text-center font-bold mb-10 leading-snug">
        Our Customers
      </h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="shadow-2xl bg-teal-100 py-8 px-4 md:m-5 rounded-lg border">
            <div className="sapce-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* Text */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  alias ipsa incidunt, repellendus soluta ea nobis maiores modi,
                  perferendis architecto possimus! Voluptate quo eligendi
                  dolorem?
                </p>
                <Avatar
                  img={profilePic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-teal-100 py-8 px-4 md:m-5 rounded-lg border">
            <div className="sapce-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* Text */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  alias ipsa incidunt, repellendus soluta ea nobis maiores modi,
                  perferendis architecto possimus! Voluptate quo eligendi
                  dolorem?
                </p>
                <Avatar
                  img={profilePic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-teal-100 py-8 px-4 md:m-5 rounded-lg border">
            <div className="sapce-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* Text */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  alias ipsa incidunt, repellendus soluta ea nobis maiores modi,
                  perferendis architecto possimus! Voluptate quo eligendi
                  dolorem?
                </p>
                <Avatar
                  img={profilePic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-teal-100 py-8 px-4 md:m-5 rounded-lg border">
            <div className="sapce-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* Text */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  alias ipsa incidunt, repellendus soluta ea nobis maiores modi,
                  perferendis architecto possimus! Voluptate quo eligendi
                  dolorem?
                </p>
                <Avatar
                  img={profilePic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-teal-100 py-8 px-4 md:m-5 rounded-lg border">
            <div className="sapce-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* Text */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  alias ipsa incidunt, repellendus soluta ea nobis maiores modi,
                  perferendis architecto possimus! Voluptate quo eligendi
                  dolorem?
                </p>
                <Avatar
                  img={profilePic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-teal-100 py-8 px-4 md:m-5 rounded-lg border">
            <div className="sapce-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* Text */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  alias ipsa incidunt, repellendus soluta ea nobis maiores modi,
                  perferendis architecto possimus! Voluptate quo eligendi
                  dolorem?
                </p>
                <Avatar
                  img={profilePic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-teal-100 py-8 px-4 md:m-5 rounded-lg border">
            <div className="sapce-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* Text */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  alias ipsa incidunt, repellendus soluta ea nobis maiores modi,
                  perferendis architecto possimus! Voluptate quo eligendi
                  dolorem?
                </p>
                <Avatar
                  img={profilePic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-teal-100 py-8 px-4 md:m-5 rounded-lg border">
            <div className="sapce-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* Text */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  alias ipsa incidunt, repellendus soluta ea nobis maiores modi,
                  perferendis architecto possimus! Voluptate quo eligendi
                  dolorem?
                </p>
                <Avatar
                  img={profilePic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-teal-100 py-8 px-4 md:m-5 rounded-lg border">
            <div className="sapce-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* Text */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  alias ipsa incidunt, repellendus soluta ea nobis maiores modi,
                  perferendis architecto possimus! Voluptate quo eligendi
                  dolorem?
                </p>
                <Avatar
                  img={profilePic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
