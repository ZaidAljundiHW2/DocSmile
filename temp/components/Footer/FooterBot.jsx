import { Flex, Box } from "@chakra-ui/react"

const FooterBot = () => {
  return (
    <div
		className='
			bg-white
			flex
		'

		style={{
			padding:"20px 20px 20px 20px"
		}}
    >

		<Flex
			className="
				flex-1
				justify-center
				items-center
			"
		>
			<h1>
				@ 2026 Doctor Smile Dental Center. All Rights Reserved
			</h1>
		</Flex>

		<Box className="w-[1px] bg-gray-500 opacity-25" style={{margin: "0 20px"}}/>


		<Flex
			className="
				flex-1
			"

			justify={'end'}
		>

			<h1>
				Terms of Service
			</h1>

			<Box className="w-[1px] bg-gray-500 opacity-25" style={{margin: "0 20px"}}/>

			<h1>
				Privacy Policy
			</h1>

			<Box className="w-[1px] bg-gray-500 opacity-25" style={{margin: "0 20px"}}/>

			<h1>
				Cookie Policy
			</h1>

		</Flex>
      
    </div>
  )
}

export default FooterBot
