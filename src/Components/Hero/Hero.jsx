import React from "react";
import heroImage from "../../assets/hero-img.png";

const Hero = () => {
  return (
    <>
      <section className="flex flex-col-reverse items-center gap-20 py-10 px-5 bg-[#f3f3f3] rounded-3xl md:flex-row lg:px-[120px]">
        {/* Hero Contents */}
        <div>
          <h1 className="text-3xl font-bold leading-10 w-full max-w-[650px] lg:text-4xl xl:text-[56px] xl:leading-14">Books to freshen up your bookshelf</h1>
          <button className="btn mt-5 bg-[#23BE0A] shadow-none border-none hover-green lg:mt-10">
            View The List
          </button>
        </div>

        {/* Hero Image */}
        <div>
          <img
            src={heroImage}
            alt="It is an book cover image"
            className="w-[350px]"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
