import React from "react";
import { Carousel } from "antd";
import { reviews } from "../Constants/Index";

const ACarousel = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
  return (
    <Carousel className=""  infinite={true}  autoplay>
      {reviews.map((item) => (
        <div key={item.id}>
          <div className="flex items-center justify-center flex-col text-neutral-300">
            <p>
              {item.speech}{" "}
              <span>
                <a
                  href={item.review_Url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400"
                >
                  {" "}
                  Link
                </a>
              </span>{" "}
            </p>
            <ul>
              <li>{item.li1}</li>
              <li>{item.li2}</li>
            </ul>

            <h5>
              -{" "}
              <a
                href={item.client_url}
                target="_blank"
                rel="noopener noreferrer"
                className="subHeading "
              >
                {item.name}
              </a>
            </h5>
          </div>
          <div className="flex items-center justify-center mb-5">
            {<img src={item.image} alt="" srcset="" className="rounded-full" width={300}/>}
          </div>
        </div>
      ))}
    </Carousel>
  );
};
export default ACarousel;
