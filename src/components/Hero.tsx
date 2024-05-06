import React from "react";
import hero from "../assets/images/Hero.jpg";
import Motions from "./Motions";

function Hero() {
  return (
    <section className="bg-white dark:bg-white">
  <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="mr-auto place-self-center lg:col-span-7">
      <Motions>
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
        <span className="bg-green-400/50 italic"> Discover </span> users and their
          stories...
        </h1>
      </Motions>
      <Motions>
        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
          Welcome to this demonstration website showcasing my frontend skills. Here,
          you'll explore a curated collection of user profiles and their captivating
          stories sourced from a free API endpoint.
        </p>
      </Motions>
      <Motions>
        <a
          href="#userTable"
          className="hover:bg-green-300 animate-bounce inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
        >
          Get started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="ml-3 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
            />
          </svg>
        </a>
      </Motions>
    </div>
    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
      <Motions>
        <img src={`${hero}`} alt="hero" />
      </Motions>
    </div>
  </div>
</section>

  );
}

export default Hero;
