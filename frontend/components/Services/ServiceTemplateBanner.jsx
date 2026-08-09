import Image from "next/image"

const ServiceTemplateBanner = ({item}) => {
  return (
    <div
        style={{
            padding:'20px',

        }}

        className='
            items-center
            flex
            relative
            overflow-hidden
            
        '
    >

        <img 
            src={item.banner}
            alt={item.name}
            className='absolute inset-0 z-0'
            style={{
            width: '100%',
            height: '100%',
            maxWidth: 'none',
            objectFit: 'cover',
            }}
        />

        <h1 
            className='
                main_header
                z-1
            ' 
            style={{
                color:'white',
                fontSize:'clamp(2rem, 8vw, 10rem)'
            }}
        >
            {item.name}
        </h1>
        
    </div>
  )
}

export default ServiceTemplateBanner