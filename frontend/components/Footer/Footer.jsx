import FooterBot from './FooterBot'
import MapsPrev from './MapsPrev'

const Footer = ({ socials, genDetails }) => {
  return (
    <div>

        <MapsPrev socials={socials} genDetails={genDetails}/>

        <FooterBot />
      
    </div>
  )
}

export default Footer
