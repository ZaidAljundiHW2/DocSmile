"use client"
import React, { useState } from 'react'
import { Carousel, useCarousel, useBreakpointValue } from "@chakra-ui/react"
import DoctorsJSON from '@/assets/JSONs/doctors.json'
import DoctorCard from './DoctorCard'

const Doctors = ({ doctors, header }) => {

    const [middleDocIndex, setMiddleDocIndex] = useState(1);

    const slidesPerPage = useBreakpointValue({ base: 1, md: 3 }, { fallback: "md" });
    const peekPadding = useBreakpointValue({ base: "18%", sm: "14%", md: "0%" }, { fallback: "md" });

    const toSlideIndex = (doctorIndex) =>
        slidesPerPage === 3 ? doctorIndex : doctorIndex + 1;

    const carousel = useCarousel({
        slideCount: DoctorsJSON.length + 2,
        slidesPerPage,
        slidesPerMove: 1,
        spacing: "1rem",
        padding: peekPadding,
        // CONTROLLED: page is always derived from middleDocIndex, every render.
        // No defaultPage, no imperative scrollTo-on-mount correction needed.
        page: toSlideIndex(middleDocIndex),
        onPageChange: (details) => {
            const doctorIndex = slidesPerPage === 3 ? details.page : details.page - 1;
            const clamped = Math.min(Math.max(doctorIndex, 0), DoctorsJSON.length - 1);
            setMiddleDocIndex(clamped);
        },
    });

    const goToDoctor = (index) => {
        setMiddleDocIndex(index);
        // no scrollTo call needed — updating middleDocIndex updates the
        // controlled `page` prop above, which moves the carousel itself
    };

    return (
        <div className="bg-white items-center flex flex-col gap-5 md:p-10 p-5">

            <h1 className="main_header">{header}</h1>

            <div
                className="
                    h-full
                    md:w-[80%]
                    w-full
                    mask-l-from-90%
                    mask-l-to-100%
                    mask-r-from-90%
                    mask-r-to-100%
                    flex
                    items-center
                    justify-center
                "
            >
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

                        <Carousel.Item index={DoctorsJSON.length + 1} className="h-full w-full">
                            <DoctorCard isFillerCard={true} />
                        </Carousel.Item>

                    </Carousel.ItemGroup>
                </Carousel.RootProvider>
            </div>

        </div>
    )
}

export default Doctors