import EventCard from "@/components/EventCard";
import Hero from "@/components/Hero";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* /*first section */}
      <section className="flex space-around flex-wrap w-full lg:p-20 gap-[30px] p-5 md:justify-center md:items-center sm:justify-center">
        <div className="flex items-center justify-center">
          <Image
            src="/HomePageImg1.png"
            width={600}
            height={400}
            alt="homepage_Image1"
            className="filter brightness-125
            object-cover"
          />
          <Image
            src="Video-icon.svg"
            alt="video-icon"
            width={100}
            height={100}
            className="absolute"
          />
        </div>
        <div className="lg:w-2/5 w-full flex flex-col gap-4 lg:p-10  sm:p-2">
          <h3 className="text-[#F00] text-[22px]">Who we are</h3>
          <h1 className="md:text-3xl xl:w-full sm:w-ful flex-wrap text-4xl font-semibold font-clash-display-bold">
            If you are thinking about Love, Family and Kingdom
          </h1>
          <p className="font-clash-display text-[15px] ">
            Welcome to GCCC (Glory Centre Community Church)! We are a vibrant
            and inclusive community of believers dedicated to spreading the love
            of Christ and making a positive impact in our local community and
            beyond. At GCCC, we are passionate about worshiping God, building
            strong relationships, and serving others with compassion.
          </p>
          <button className="bg-[#F00] py-2 px-6 text-white w-[120px] rounded text-sm font-Poppins">
            Read more
          </button>
        </div>
      </section>
      {/* second section */}
      <section className="bg-[#F9F9F9] flex flex-col space-around w-full lg:p-20 gap-[30px] p-5 md:justify-center md:items-center sm:justify-center">
        <header className="flex flex-wrap justify-between w-full sm:w-3/4 md:w-3/4 lg:w-3/4">
          <div className="flex flex-col">
            <span className="font-clash-display text-[21px]">
              Upcoming Events
            </span>
            <span className="text-[#72879F] text-[17px]">
              View all upcoming events.
            </span>
          </div>
          <div className="border rounded px-8 py-2 flex items-center bg-[#F9F9F9]">
            <select className=" flex items-center w-full outline-none bg-[#F9F9F9]">
              <option className="flex left">
                Ojodu,
                Berger&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </option>
            </select>
          </div>
        </header>
        <div className="flex gap-[30px] w-full lg:w-11/12 md:11/12 xl:11/12 overflow-x-scroll">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </section>
      {/* Third section */}
      <section className="flex p-5 sm:p-20 md:p-10 lg:p-20 justify-center lg:justify-between w-full gap-12 flex-wrap bg-gradient-to-b from-red-950 to-red-700">
        <div className="flex flex-col  md:p-20 lg:p-20 gap-6 w-11/12 lg:w-1/2">
          <p className="font-clash-display text-white text-slate-200 font-light">
            Latest Message
          </p>
          <h1 className="font-clash-display-bold text-3xl text-white">
            The Principles of Growth
          </h1>
          <p className="font-clash-display text-white text-slate-200 font-light">
            Pst Olakunle Zakariya
          </p>
          <p className="font-clash-display text-white text-slate-200 flex-wrap font-light">
            We believe that God has a timely message for you in every service.
            Open your heart, listen, and be ready to receive and be encouraged
            as you engage with this message.
          </p>
          <button className="bg-transparent py-2 px-6 w-[180px] text-slate-200 flex-wrap font-light text-sm rounded border border-slate-100  font-Poppins">
              View all messages
            </button>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/Papi'sQuote.png"
            width={500}
            height={360}
            alt="Quotes"
            className="filter brightness-110
            object-cover"
          />
          <Image
            src="Video-icon.svg"
            alt="video-icon"
            width={100}
            height={100}
            className="absolute"
          />
        </div>
      </section>
      {/* Fourth Section */}
      <section className="flex flex-wrap sm:p-[60px] md:p-[60px] p-[20px] lg:p-[60px] items-center justify-center">
        <div className="flex relative w-auto lg:p-0 md:p-0 items-center justify-center shrink p-20  sm:h-[560px] lg:h-[560px] ">
          <Image
            src="/Papi.png"
            alt="Senior Pastor Zach"
            width={400}
            height={560}
            className="w-[350px] lg:w-[400px]  sm:h-[560px] md:h-[560px] lg:h-[560px] h-[400px] shrink"
          />
          <Image
            src="/VideoShoot.png"
            alt="videoshoot"
            width={250}
            height={560}
            className="w-[180px] sm:w-[280px] md:w-[300px] lg:w-[300px] sm:h-[560px] md:h-[560px] lg:h-[560px] h-[400px] shrink"
          />
        </div>
        <div className="w-[450px] lg:h-[560px] sm:h-[560px] bg-[#F9F9F9] flex flex-col gap-6 p-5 sm:p-20 md:p-20 lg:p-20">
          <h1 className="md:text-3xl xl:w-full sm:w-ful flex-wrap text-4xl font-semibold font-clash-display-bold">
            Join Us In Church This Sunday
          </h1>
          <p>
            Community of believers dedicated to spreading the love of Christ and
            making.
          </p>
          <div className="flex flex-col gap-2">
            <span className="text-[#555] ">Select Location</span>
            <select className=" flex items-center px-2 py-3 w-full outline-none border rounded bg-[#F9F9F9]">
              <option className="flex left">
                Ojodu,
                Berger&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </option>
            </select>
            <p className="font-poppins-400 text-[#555] flex gap-[15px] items-center">
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7292 21.5965C6.05352 13.3684 5 12.5239 5 9.5C5 5.35785 8.35785 2 12.5 2C16.6421 2 20 5.35785 20 9.5C20 12.5239 18.9465 13.3684 13.2708 21.5965C12.8983 22.1345 12.1016 22.1345 11.7292 21.5965ZM12.5 12.625C14.2259 12.625 15.625 11.2259 15.625 9.5C15.625 7.7741 14.2259 6.375 12.5 6.375C10.7741 6.375 9.375 7.7741 9.375 9.5C9.375 11.2259 10.7741 12.625 12.5 12.625Z"
                  fill="#9BA5B0"
                />
              </svg>
              12 Efon Alaye Street, Off Sule Abore, Lagos. Nigeria.
            </p>
            <p className="font-poppins-400 text-[#555] flex gap-[15px] items-center">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5 0.3C4.4 0.3 0.3 4.4 0.3 9.5 0.3 14.6 4.4 18.7 9.5 18.7 14.6 18.7 18.7 14.6 18.7 9.5 18.7 4.4 14.6 0.3 9.5 0.3ZM11.6 13.3L8.3 10.9C8.2 10.8 8.2 10.7 8.2 10.6V4.3C8.2 4.1 8.4 3.9 8.6 3.9H10.4C10.6 3.9 10.8 4.1 10.8 4.3V9.4L13.2 11.1C13.4 11.3 13.4 11.6 13.3 11.8L12.2 13.2C12.1 13.4 11.8 13.4 11.6 13.3"
                  fill="#9BA5B0"
                />
              </svg>
              6:30 AM
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="bg-[#EC3237] py-2 px-6 text-sm text-white rounded text-sm font-Poppins">
              Contact Us
            </button>
            <button className="bg-white py-2 px-6  text-sm rounded border-2 border-[#F00] text-red-600  font-Poppins">
              Locate Venue
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
