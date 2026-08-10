"use client"
import React, { useState } from 'react'
import { Carousel, useCarousel } from "@chakra-ui/react"
import DoctorsJSON from '@/assets/JSONs/doctors.json'
import DoctorCard from './DoctorCard'

const Doctors = ({ doctors, header }) => {

    

    // index into DoctorsJSON (0 = first doctor). Start on the SECOND doctor.
    const [middleDocIndex, setMiddleDocIndex] = useState(1);

    const carousel = useCarousel({
        slideCount: DoctorsJSON.length + 2,
        slidesPerPage: 3,
        slidesPerMove: 1,
        defaultPage: middleDocIndex, 
        onPageChange: (details) => {
            
            const clamped = Math.min(Math.max(details.page, 0), DoctorsJSON.length - 1);
            setMiddleDocIndex(clamped);
        },
    });

    const goToDoctor = (index) => {
        setMiddleDocIndex(index);
        carousel.scrollTo(index); 
    };

    return (
        <div
            className="
                bg-white
                h-[80vh]
                items-center
                flex
                flex-col
                gap-5
            "
            style={{
                padding: '20px'
            }}
        >

            <h1 className="main_header">
                {header}
            </h1>

            <div
                className="
                    h-full
                    w-[80%]
                    mask-l-from-90%
                    mask-l-to-100%
                    mask-r-from-90%
                    mask-r-to-100%
                    flex
                    items-center
                    justify-center
                "
            >

                <Carousel.RootProvider
                    value={carousel}
                    className="
                        h-full
                        flex
                        w-full
                    "
                >

                    <Carousel.ItemGroup
                        className="
                            h-full
                            w-full
                        "
                    >

                        {/* filler */}
                        <Carousel.Item
                            index={0}
                            className="h-full w-full"
                        >
                            <DoctorCard
                                isFillerCard={true}
                            />
                        </Carousel.Item>

                        {doctors.map((doctor, index) => (
                            <Carousel.Item
                                key={index}
                                index={index + 1}
                                className="h-full w-full"
                                onClick={() => goToDoctor(index)}
                            >
                                <DoctorCard
                                    doctor={doctor}
                                    index={index}
                                    isMiddleDoc={middleDocIndex === index}
                                />
                            </Carousel.Item>
                        ))}

                        <Carousel.Item
                            index={DoctorsJSON.length + 1}
                            className="h-full w-full"
                        >
                            <DoctorCard
                                isFillerCard={true}
                            />
                        </Carousel.Item>

                    </Carousel.ItemGroup>

                </Carousel.RootProvider>

            </div>

        </div>
    )
}

export default Doctors