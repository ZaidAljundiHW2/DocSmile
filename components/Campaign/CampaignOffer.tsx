import React from 'react'
import { Flex } from '@chakra-ui/react'
import BookButton from '../Misc/BookButton'
import { Campaign } from '@/payload-types'

const CampaignOffer = ({ campaign } : { campaign : Campaign }) => {
  return (
    <div className="w-full p-5 py-10 bg-white">
      <Flex
        className="max-w-6xl mx-auto flex-col md:flex-row items-center"
        gap={{ base: '10', md: '16' }}
      >

        <div className="flex-1 flex flex-col gap-4 text-center md:text-start">
          <h2 className="main_header !text-[2.5rem] md:!text-[3.5rem]">
            {campaign.content?.header}
          </h2>

          <p className="secondary_text max-w-md mx-auto md:mx-0">
            {campaign.content?.text}
          </p>
        </div>

        <div
          className="
            flex-1
            w-full
            max-w-md
            bg-white
            border-2
            border-[#071f97]
            rounded-2xl
            shadow-lg
            p-8
            flex
            flex-col
            gap-6
          "
        >
          <div className="flex flex-col items-center gap-1">
            <span className="text-sm uppercase tracking-wide text-gray-400">
              Campaign Price
            </span>
            <span
              className="text-5xl font-bold"
              style={{ color: '#071f97', fontFamily: 'CGB' }}
            >
              ${campaign.content?.newPrice}
            </span>
            <span className="text-sm text-gray-400 line-through">
              Regular ${campaign.content?.originalPrice}
            </span>
          </div>

          <ul className="flex flex-col gap-3">
            {(campaign.content?.privileges ?? []).map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#071f97] font-bold">✓</span>
                <span className="text-black text-sm md:text-base">{item.privilege}</span>
              </li>
            ))}
          </ul>

          <BookButton />
        </div>

      </Flex>
    </div>
  )
}

export default CampaignOffer