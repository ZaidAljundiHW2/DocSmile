"use client"
import React, { useEffect } from 'react'
import { Flex, Box, SimpleGrid } from '@chakra-ui/react'
import DoctorsJSON from '@/assets/JSONs/doctors.json'
import DoctorCard from '../Misc/DoctorCard'
import { ButtonGroup, IconButton, Pagination } from "@chakra-ui/react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"
import { useState } from 'react'
import Link from 'next/link'

const DoctorGrid = ({ doctors }) => {

    const [allCollections, setAllCollections] = useState([]);
    const [currIndex, setCurrIndex] = useState(0);
    const DoctorsPerPage = 6;
    const Doctors = doctors;

    const [loading, setLoading] = useState(true); 

    const splitDoctors = async() => {

        const collections = [];

        for (let i = 0; i < Doctors.length; i+=DoctorsPerPage) {

            collections.push(Doctors.slice(i, i + DoctorsPerPage));

        }

        setAllCollections(collections);

    }

    useEffect(() => {
        const load = async() => {

            await splitDoctors();
            setLoading(false);
        }

        load();
    }, []);

    if (loading) return <div>Loading doctors...</div>;


  return (
    <div
        className='
            bg-white
            flex
            justify-center
            items-center
            p-10
            flex-col
            gap-5
        '
    >
        <h2
            className='
                secondary_header
            '
            style={{
                color:'black',
                borderWidth:'0px 0px 5px 0px',
                borderColor:'#071f97'
            }}
        >
            Dentists
        </h2>

        <Flex
            className='
                md:w-[80%]
                w-full
                flex-col
                items-center

            '
        >
            <SimpleGrid columns={{base:2, md:3}}>

                {allCollections[currIndex].map((item,i) => (
                    <Link href={`/Doctors/${item.slug}`} key={i}>
                        <DoctorCard 
                            doctor={item} 
                            
                        />
                    </Link>
                    
                ))}


            </SimpleGrid>

            <Pagination.Root count={allCollections.length * 2} pageSize={2} defaultPage={1}>
                <ButtonGroup variant="ghost" size="sm">
                    <Pagination.PrevTrigger 
                        asChild
                        onClick={() => setCurrIndex(prev => prev-1)}
                        color={'black'}
                    >
                        <IconButton>
                            <LuChevronLeft />
                        </IconButton>
                    </Pagination.PrevTrigger>

                    <Pagination.Items
                        render={(page) => (
                            <IconButton 
                                variant={{ 
                                    base: "ghost", 
                                    _selected: "outline" 
                                }}
                                color={'black'}
                                _hover={{color:'white'}}
                                // _selected={{color:'white'}}
                                onClick={() => setCurrIndex(page.value - 1)}
                            >
                                {page.value}
                            </IconButton>
                        )}
                    />

                    <Pagination.NextTrigger 
                        asChild
                        onClick={() => setCurrIndex(prev => prev+1)}
                        color={'black'}
                    >
                        <IconButton>
                            <LuChevronRight />
                        </IconButton>
                    </Pagination.NextTrigger>
                </ButtonGroup>
            </Pagination.Root>

            
             
        </Flex>
        
    </div>
  )
}

export default DoctorGrid