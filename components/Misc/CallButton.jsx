import { Button } from "@chakra-ui/react"
import { FaPhoneAlt } from "react-icons/fa";

const CallButton = ({ number }) => {

	const telNumber = number;

	let cleanNum = telNumber.replace(/\s/g, "");

	if (cleanNum.includes('+965')) {

		cleanNum = cleanNum.replace('+965', "");
	}


	return (
		<div>

			<a href={`tel:+965${cleanNum}`}>

				<Button className="button" dir="ltr" style={{"--button-bg": "black"}}>
					+965 {cleanNum}
					<FaPhoneAlt />
				</Button>

			</a>
			
			
		</div>
  )
}

export default CallButton