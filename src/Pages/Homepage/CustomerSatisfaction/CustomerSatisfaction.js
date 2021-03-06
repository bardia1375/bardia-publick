import React, { useState } from "react";
import CustomerSatisfactionCard from "../../../components/Card/CustomerSatisfactionCard/CustomerSatisfactionCard";
import "./CustomerSatisfaction.css";
import Slider from "react-slick";

const CustomerSatisfaction = () => {
  const [cards, setCards] = useState([
    {
      logo: "./nahoor home page/Icons/quotes.png",
      paragraph:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینان را می",
      img: "./nahoor home page/man2.png",
      name: "رضا سلکی",
      job: "وارد کننده نفت",
    },
    {
      logo: "./nahoor home page/Icons/quotes.png",
      paragraph:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می",
      img: "./nahoor home page/man2.png",
      name: "رضا سلکی",
      job: "وارد کننده نفت",
    },
    {
      logo: "./nahoor home page/Icons/quotes.png",
      paragraph:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درخترا می",
      img: "./nahoor home page/man2.png",
      name: "رضا سلکی",
      job: "وارد کننده نفت",
    },
    {
      logo: "./nahoor home page/Icons/quotes.png",
      paragraph:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فرا می",
      img: "./nahoor home page/man2.png",
      name: "رضا سلکی",
      job: "وارد کننده نفت",
    },
  ]);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="Customer-main">
      <h2>رضایت مشتریان ما</h2>
      <Slider className="Customer-slider" {...settings}>
        {cards.map((card) => {
          return (
            <div>
              <CustomerSatisfactionCard
                logo={card.logo}
                paragraph={card.paragraph}
                img={card.img}
                name={card.name}
                job={card.job}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default CustomerSatisfaction;
