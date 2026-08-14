import React from 'react'
import { Flex } from '@chakra-ui/react'
import './PatientInformation.css'

const FirstVisit = () => {
  return (
    <div
        className='
            patientinformationcontainer
            p-10
        '
    >

        <Flex
            className='
                gap-5
            '
        >

            {/* content */}
            <Flex
                className='
                    flex-col
                    flex-1
                    gap-5
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
                    Your First Visit
                </h1>
                
                <Flex
                    className='
                        gap-5
                        flex-col
                    '
                >
                    <p>
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    </p>

                    <p>
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    </p>

                

                </Flex>
                

            </Flex>

            {/* image */}
            <Flex
                className='
                    w-1/3
                    relative
                    items-center
                    justify-center
                '
            >
                <img 
                    src={'/img/dentistandpatient.avif'}
                    className='
                        absolute
                        inset-0
                        h-full
                        w-full
                        rounded-full
                        aspect-square
                    '
                />

            </Flex>

        </Flex>
        
    </div>
  )
}

export default FirstVisit