import './Services.css'




const ServiceTemplateBanner = ({ bannerurl, name } : {bannerurl : string, name : string}) => {

    

   
  return (
    <div
        

        className='
            items-center
            flex
            relative
            justify-center
            flex-col
            gap-5
            md:p-10
            p-5
            
        '
    >

        <img 
            src={bannerurl}
            alt={name}
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
            {name}
        </h1>

        <p className='z-1'>
            Short approved service introduction.
        </p>
        
    </div>
  )
}

export default ServiceTemplateBanner