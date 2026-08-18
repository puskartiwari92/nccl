// import { PEOPLE_URL } from "@/constants";
// import Image from "next/image";

// interface CampProps {
//   backgroundImage: string;
//   title: string;
//   subtitle: string;
//   peopleJoined: string;
// }

// const CampSite = ({
//   backgroundImage,
//   title,
//   subtitle,
//   peopleJoined,
// }: CampProps) => {
//   return (
//     <div
//       className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
//       <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
//         <div className="flexCenter gap-4">
//           <div className="rounded-full bg-blue-500 p-4">
//             <Image src="/folded-map.svg" alt="map" width={28} height={28} />
//           </div>
//           <div className="flex flex-col gap-1">
//             <h4 className="bold-18 text-white">{title}</h4>
//             <p className="regular-14 text-white">{subtitle}</p>
//           </div>
//         </div>

//         <div className="flexCenter gap-6">
//           <span className="flex -space-x-4 overflow-hidden">
//             {PEOPLE_URL.map((url) => (
//               <Image
//                 className="inline-block h-10 w-10 rounded-full"
//                 src={url}
//                 key={url}
//                 alt="person"
//                 width={100}
//                 height={100}
//               />
//             ))}
//           </span>
//           <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Camp = () => {
//   return (
//     <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
//       <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
//         <CampSite
//           backgroundImage="bg-bg-img-1"
//           title="Putuk Truno Camp"
//           subtitle="Prigen, Pasuruan"
//           peopleJoined="500+ Joined"
//         />
//         <CampSite
//           backgroundImage="bg-bg-img-2"
//           title="Mountain View Camp"
//           subtitle="Somewhere in the Wilderness"
//           peopleJoined="50+ Joined"
//         />
//       </div>

//       <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
//         <div className="bg-blue-500 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
//           <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
//             <strong>Feeling Lost</strong> And Not Knowing The Way?
//           </h2>
//           <p className="regular-14 xl:regular-16 mt-5 text-white">
//             Starting from the anxiety of the climbers when visiting a new
//             climbing location, the possibility of getting lost is very large.
//             That's why we are here for those of you who want to start an
//             adventure
//           </p>
//           <Image
//             src="/quote.svg"
//             alt="camp-2"
//             width={186}
//             height={219}
//             className="camp-quote"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Camp;

"use client";

import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampProps) => {
  return (
    <div
      className={`relative w-full h-full min-w-[300px] ${backgroundImage} bg-cover bg-no-repeat rounded-3xl`}>
      {/* Background overlay for opacity */}
      <div className="absolute inset-0 bg-black/70 rounded-3xl"></div>

      {/* Content stays on top */}
      <div className="relative z-10 flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-blue-500 p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                src={url}
                key={url}
                alt="person"
                width={100}
                height={100}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="px-20 2xl:max-container relative flex flex-col py-5 lg:mb-10 lg:py-7 xl:mb-20">
      {/* <div>Our Courses</div> */}
      <h1 className="text-3xl font-bold text-center mb-10">Research Center</h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 24 },
          1280: { slidesPerView: 2, spaceBetween: 32 },
        }}
        className="w-full h-[340px] lg:h-[400px] xl:h-[440px]">
        <SwiperSlide>
          <CampSite
            backgroundImage="bg-bg-img-1"
            title="Center For Analytical Sciences"
            subtitle="Tribhuvan University"
            peopleJoined="500+ Joined"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CampSite
            backgroundImage="bg-bg-img-2"
            title="Center For Conservation Biologoy"
            subtitle="Tribhuvan University"
            peopleJoined="50+ Joined"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CampSite
            backgroundImage="bg-bg-img-3"
            title="Center For Water And Atmospheric Research"
            subtitle="Tribhuvan University"
            peopleJoined="500+ Joined"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CampSite
            backgroundImage="bg-bg-img-4"
            title="National Young Academy of Nepal "
            subtitle="Tribhuvan University"
            peopleJoined="50+ Joined"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CampSite
            backgroundImage="bg-bg-img-5"
            title="Organisation of Women Scientist in Nepal"
            subtitle="Tribhuvan University"
            peopleJoined="50+ Joined"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CampSite
            backgroundImage="bg-bg-img-6"
            title="Society for Conservation Biology"
            subtitle="Tribhuvan University"
            peopleJoined="50+ Joined"
          />
        </SwiperSlide>
      </Swiper>

      <div className="flex justify-end z-20 px-4 lg:-mt-60 lg:mr-6">
        <div className="bg-blue-500 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-8 xl:py-10 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            Exploring the{" "}
            <strong>RESEARCH, INNOVATION, DISCOVERY, AND OUTREACH </strong>{" "}
            through its three active research centers
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            To provide an intellectual leadership to the society by fostering
            innovations in science and technology.
          </p>
          {/* <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Camp;
