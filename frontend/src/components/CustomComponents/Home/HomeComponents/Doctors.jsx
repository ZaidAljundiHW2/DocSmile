import React, { useState } from 'react'
import { Carousel, useCarouselContext } from "@chakra-ui/react"
import DoctorsJSON from '@/assets/JSONs/doctors.json'
import DoctorCard from './DoctorCard'


const DoctorCarouselItem = ({
    doctor,
    index,
    middleDocIndex,
    setMiddleDocIndex
}) => {

    const carousel = useCarouselContext()

    const handleClick = () => {
        setMiddleDocIndex(index)
        carousel.scrollTo(index)
    }

    return (
        <Carousel.Item
            index={index + 1}
            className="
                h-full
                items-center
                flex
                justify-center
                w-full
                cursor-pointer
            "
            onClick={handleClick}
        >
            <DoctorCard
                doctor={doctor}
                isMiddleDoc={index === middleDocIndex}
            />
        </Carousel.Item>
    )
}


const Doctors = () => {

    const [middleDocIndex, setMiddleDocIndex] = useState(1)

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
                padding:'20px'
            }}
        >

            <h1 className="main_header">
                Our Doctors
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

                <Carousel.Root
                    slideCount={DoctorsJSON.length + 2}
                    defaultPage={1}
                    onIndexChange={(details)=>{

                        // Left visible card + 1 = middle card
                        const middleIndex = details.index + 1

                        if(
                            middleIndex >= 0 &&
                            middleIndex < DoctorsJSON.length
                        ){
                            setMiddleDocIndex(middleIndex)
                        }

                    }}
                    className="
                        h-full
                        flex
                        w-full
                    "
                    slidesPerPage={3}
                    slidesPerMove={1}
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


                        {DoctorsJSON.map((doctor,index)=>(
                            <DoctorCarouselItem
                                key={index}
                                doctor={doctor}
                                index={index}
                                middleDocIndex={middleDocIndex}
                                setMiddleDocIndex={setMiddleDocIndex}
                            />
                        ))}


                        {/* filler */}
                        <Carousel.Item
                            index={DoctorsJSON.length + 1}
                            className="h-full w-full"
                        >
                            <DoctorCard
                                isFillerCard={true}
                            />
                        </Carousel.Item>


                    </Carousel.ItemGroup>

                </Carousel.Root>

            </div>

        </div>
    )
}

export default Doctors