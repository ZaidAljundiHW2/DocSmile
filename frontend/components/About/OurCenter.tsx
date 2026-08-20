'use client'
import React from 'react'
import { Flex, Icon, SimpleGrid } from '@chakra-ui/react'
import { FaUserDoctor } from "react-icons/fa6";
import { FaRegSmile } from "react-icons/fa";
import { FaHospital } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";

const OurCenter = () => {

	const centerstats = [

		{
			"key": "Doctors",
			"val": "50",
			"icon": FaUserDoctor
		},

		{
			"key": "Visitors",
			"val": "10,000",
			"icon":FaRegSmile

		},

		{
			"key": "Services",
			"val": "12",
			"icon": FaHospital
		},

		{
			"key": "Experience Years",
			"val":"84",
			"icon":FaRegThumbsUp
		}
		
	]

  return (
    <div
      	className='
			flex
			bg-white
			gap-5
			flex-col
			text-center

      	'
    >
		<Flex
			className='
				flex-col
				gap-5
				p-10
				
			'
		>
			<h1
				className='
					main_header
				'
				style={{
					color:'black'
				}}
			>
				Our Center

			</h1>

			<p className='secondary_text'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
			</p>

		</Flex>
		
		{/* stats grid */}
		<Flex
			style={{
				backgroundImage:`url(${'/img/Backgrounds/banner_placeholder.jpg'})`,
				backgroundSize:'cover'
			}}

			className='
				items-center
			'
		>
			

			{centerstats.map((item,i) => (
				<Flex
					className='
						items-center
						flex-col
						p-5
						flex-1
						
					'
					key={i}
				>
					<Icon 
						as={item.icon}
						className='secondary_header'
						color={'white'}
						
					/>

					<h2 
						className='
							secondary_header
							font-bold
						'
						style={{
							color:'white'
						}}
					>
						{item.key}
					</h2>

					<h2 
						className='
							secondary_header
						'
						style={{
							color:'white'
						}}
					>
						{item.val}
					</h2>
					
					

				</Flex>

			))}

				


		</Flex>
        
    </div>
  )
}

export default OurCenter