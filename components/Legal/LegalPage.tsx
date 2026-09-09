import React from 'react'
import ComponentSubheader from '../Misc/ComponentSubheader'
import { Legal } from '@/payload-types'

type LegalSection = NonNullable<Legal['privacyPolicy']>[number]

const headingClasses: Record<number, string> = {
  1: 'text-2xl md:text-4xl font-bold text-black',
  2: 'text-xl md:text-3xl font-bold text-black',
  3: 'text-lg md:text-2xl font-semibold text-black',
  4: 'text-base md:text-xl font-semibold text-black',
}

const PrivacyPolicy = ({ heading, legalObj }: { heading: string; legalObj: LegalSection[] }) => {
  const counters = [0, 0, 0, 0, 0]

  return (
    <div>
      <ComponentSubheader heading={heading} />

      <div className="p-5 flex flex-col divide-y-2 divide-gray-200">
        {legalObj?.map((item, i) => {
          const level = Number(item.level ?? 0)

          let numberLabel = ''
          if (level > 0) {
            counters[level] += 1
            for (let l = level + 1; l <= 4; l++) counters[l] = 0
            numberLabel = counters.slice(1, level + 1).join('.')
          }

          const headingTag = level > 0 ? (`h${Math.min(level + 1, 6)}` as const) : undefined

          return (
            <div key={i} className="py-5 flex flex-col gap-5">
              {headingTag &&
                item.heading &&
                React.createElement(
                  headingTag,
                  {
                    className: headingClasses[level] ?? '',
                    style: { fontFamily: 'HelveticaNeue' },
                  },
                  numberLabel && `${numberLabel}. `,
                  item.heading,
                )}

              {item.text && (
                <p className="md:text-start text-center text-black">{item.text}</p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PrivacyPolicy