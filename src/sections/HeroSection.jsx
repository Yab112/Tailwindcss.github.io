import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/shoeCard";
import { useState } from "react";

const HeroSection = () => {
  const [bigShoeImg,setbigShoeImg] = useState(bigShoe1)
  return (
    <div>
      <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
          <p className="text-xl font-montserrat text-coral-red">
            Our Summer Collections
          </p>

          <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
            <span className="xl:bg-white xl:whitespace-nowrap z-10 pr-10">The New Arrival</span>
            <br />
            <span className="text-coral-red inline-block mt-3">Nike </span>Shoes
          </h1>

          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-8 mb-14 sm:max-w-sm">
            Discover Stylish Nike Arrival, Quality comfort, and innovation for your active life.
          </p>
          <Button label="Shop now" iconURL={arrowRight} />

          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {statistics.map((stat, index) => (
              <div key={index}>
                <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className=" flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
          <img src={bigShoeImg} alt="shoe" width={610} height={500} className="z-9 object-contain" />
        </div>

        <div className="flex absolute xl:top-[650px] xl:left-[900px] md:top-[1550px] md:right-[70px] sm:top-[150px] sm:right-[7px] top-[1590px]
        lg:top-[1400px] ">
          {shoes.map((img, index) => (
            <div key={index}>
              <ShoeCard 
                index={index}
                imgURL={img}
                changeBigShoeImage={(shoe) => {setbigShoeImg(shoe)}}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
