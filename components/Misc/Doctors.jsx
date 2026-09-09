"use client"
import React, { useState } from 'react'
import { Carousel, useCarousel, useBreakpointValue } from "@chakra-ui/react"
import DoctorCard from './DoctorCard'

const Doctors = ({ doctors, header }) => {

    const [middleDocIndex, setMiddleDocIndex] = useState(doctors.length > 2 ? 1 : 0);

    const slidesPerPage = useBreakpointValue({ base: 1, md: 3 }, { fallback: "md" });
    const peekPadding = useBreakpointValue({ base: "18%", sm: "14%", md: "0%" }, { fallback: "md" });

    const toSlideIndex = (doctorIndex) =>
        slidesPerPage === 3 ? doctorIndex : doctorIndex + 1;

    const carousel = useCarousel({
        slideCount: doctors.length + 2,
        slidesPerPage,
        slidesPerMove: 1,
        spacing: "1rem",
        padding: peekPadding,
        page: toSlideIndex(middleDocIndex),
        onPageChange: (details) => {
            const doctorIndex = slidesPerPage === 3 ? details.page : details.page - 1;
            const clamped = Math.min(Math.max(doctorIndex, 0), doctors.length - 1);
            setMiddleDocIndex(clamped);
        },
    });

    const goToDoctor = (index) => {
        setMiddleDocIndex(index);
    };

    return (
        <div className="bg-white items-center flex flex-col gap-5 md:p-10 p-5 text-center md:text-start">

            <h1 className="main_header">{header}</h1>

            <div className="h-full md:w-[80%] w-full mask-l-from-90% mask-l-to-100% mask-r-from-90% mask-r-to-100% flex items-center justify-center">

                {doctors.length > 1 && (
                    <Carousel.RootProvider value={carousel} className="h-full flex w-full">
                        <Carousel.ItemGroup className="h-full w-full">

                            <Carousel.Item index={0} className="h-full w-full">
                                <DoctorCard isFillerCard={true} />
                            </Carousel.Item>

                            {doctors.map((doctor, index) => (
                                <Carousel.Item
                                    key={index}
                                    index={index + 1}
                                    className="h-full w-full md:py-10 py-5"
                                    onClick={() => goToDoctor(index)}
                                >
                                    <DoctorCard
                                        doctor={doctor}
                                        index={index}
                                        isMiddleDoc={middleDocIndex === index}
                                    />
                                </Carousel.Item>
                            ))}

                            <Carousel.Item index={doctors.length + 1} className="h-full w-full">
                                <DoctorCard isFillerCard={true} />
                            </Carousel.Item>

                        </Carousel.ItemGroup>
                    </Carousel.RootProvider>
                )}

                {doctors.length === 1 && (
                    <div className="w-full flex p-5 justify-center gap-4">
                        <div className="hidden md:block md:w-1/3">
                            <DoctorCard isFillerCard={true} />
                        </div>

                        <div className="w-full md:w-1/3 md:py-10 py-5">
                            <DoctorCard doctor={doctors[0]} isMiddleDoc={true} />
                        </div>

                        <div className="hidden md:block md:w-1/3">
                            <DoctorCard isFillerCard={true} />
                        </div>
                    </div>
                )}

            </div>

        </div>
    )
}

export default Doctors