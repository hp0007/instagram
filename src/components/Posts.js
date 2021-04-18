import React from "react";
import storie1 from "../assets/images/photo-1.jpg";
import storie2 from "../assets/images/photo-2.jpg";
import storie3 from "../assets/images/photo-3.jpg";
import storie4 from "../assets/images/photo-4.jpg";
import storie5 from "../assets/images/photo-5.jpg";
import storie6 from "../assets/images/photo-6.jpg";
import storie7 from "../assets/images/photo-7.jpg";
import storie8 from "../assets/images/photo-8.jpg";
import storie9 from "../assets/images/photo-9.jpg";
import profile1 from "../assets/images/photo-1.jpg";
import profile2 from "../assets/images/photo-2.jpg";
import profile3 from "../assets/images/photo-3.jpg";
import profile4 from "../assets/images/photo-4.jpg";
import profile5 from "../assets/images/photo-5.jpg";
import profile6 from "../assets/images/photo-6.jpg";
import profile7 from "../assets/images/photo-7.jpg";
import profile8 from "../assets/images/photo-8.jpg";
import profile9 from "../assets/images/photo-9.jpg";
import profile10 from "../assets/images/photo-10.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import Post from "./Post";

const Posts = (props) => {
  return (
    <div className="posts">
      <div className="all-posts">
        <div className="stories pt-2">
          <Swiper spaceBetween={10} slidesPerView={7}>
            {props.value.map((data) => {
              return (
                <SwiperSlide className="slide" key={data.id}>
                  <img src={data.img} className={data.classname} />
                  <h6>{data.name}</h6>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        {props.post.map((data) => {
          return (
            <Post
              id={data.id}
              src={data.img}
              name={data.name}
              likes={data.likes}
              comments={data.comments}
              heart={data.heartIcon}
              comment={data.commentIcon}
              share={data.shareIcon}
              save={data.saveIcon}
              more={data.moreIcon}
            />
          );
        })}
        {/* <Post src={profile1} name="David Bromen" likes="1250" comments="190" />
          <Post src={profile2} name="David Bromen" likes="2300" comments="400" />
          <Post src={profile3} name="David Bromen" likes="300" comments="250" /> */}
      </div>
    </div>
  );
};

export default Posts;
