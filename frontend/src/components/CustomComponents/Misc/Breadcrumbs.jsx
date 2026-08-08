import { Flex } from '@chakra-ui/react'
import { useEffect } from 'react';
import { MdNavigateNext } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Breadcrumbs = ({pages}) => {

    const [routes, setRoutes] = useState([]);

    const genRoutes = async() => {

        const routes = [];

        for (let i = 0; i < pages.length; i++) {

            if (i == 0) {
                const route = "/" + pages[i];
                routes.push(route);
                continue;
            }

            const route = routes[i-1] + "/" + pages[i];
            routes.push(route);
        }

        setRoutes(routes);

    }

    useEffect(() => {

        const load = async() => {
            await genRoutes();

        }

        load();

    },[])


    return (
        <div
            className='
                flex
                gap-3
                bg-white
                
            '

            style={{
                padding:'20px'
            }}

        >
            {pages.map((item,i) => (

                <Flex
                    key={i}
                    className='
                        items-center
                        gap-5
                    '

                    style={{
                        fontSize:'clamp(1rem, 1.5vw, 2rem)'
                    }}
                >

                    <Link
                        to={routes[i]}
                    >
                        <h3
                            style={{
                                color:'#808080'
                            }}

                            className='
                                hover:underline
                            '
                        >
                            {item}
                        </h3>
                    </Link>
                    
                    
                    <MdNavigateNext 
                        display={i === pages.length ? 'none': 'block'}
                        color='#808080'
                    />


                </Flex>
                
            ))}
            
        </div>
    )
}

export default Breadcrumbs