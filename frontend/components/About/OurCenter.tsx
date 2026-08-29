'use client'
import React from 'react'
import { Flex, Icon } from '@chakra-ui/react'
import { FaUserDoctor } from "react-icons/fa6";
import { FaRegSmile } from "react-icons/fa";
import { FaHospital } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";

const OurCenter = ({ 
	doctors, 
	ser, 
	center, 
	exp, 
	visitors 
} : 
{ 
	doctors : number, 
	ser : number,
	center : string,
	exp : string,
	visitors : string  
}) => {

	const centerstats = [

		{
			"key": "Doctors",
			"val": doctors,
			"icon": FaUserDoctor
		},

		{
			"key": "Visitors",
			"val": visitors,
			"icon":FaRegSmile

		},

		{
			"key": "Services",
			"val": ser,
			"icon": FaHospital
		},

		{
			"key": "Experience Years",
			"val":exp,
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
				{center}
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