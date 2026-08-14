import './Services.css'

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
            justify-center
            flex-col
            gap-5
            
        '
    >

        <img 
            src={item.banner}
            alt={item.name}
            className='absolute inset-0 z-0 absolute-image'
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

        <p className='z-1'>
            Short approved service introduction.
        </p>
        
    </div>
  )
}

export default ServiceTemplateBanner