import React from 'react'
import ComponentSubheader from '../Misc/ComponentSubheader'
import { Legal } from '@/payload-types'

type LegalSection = NonNullable<Legal['privacyPolicy']>[number]

const headingClasses: Record<number, string> = {
  1: 'text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight',
  2: 'text-xl md:text-2xl font-semibold text-neutral-900 tracking-tight',
  3: 'text-lg md:text-xl font-semibold text-neutral-800',
  4: 'text-base md:text-lg font-semibold text-neutral-800',
}

const indentClasses: Record<number, string> = {
  0: '',
  1: '',
  2: 'md:ml-6',
  3: 'md:ml-12',
  4: 'md:ml-[4.5rem]',
}

const LegalPage = ({ heading, legalObj }: { heading: string; legalObj: LegalSection[] }) => {
  const counters = [0, 0, 0, 0, 0]

  return (
    <div className="w-full">
      <ComponentSubheader heading={heading} />

      <div className="w-full px-8 sm:px-12 lg:px-24 xl:px-32 py-10">
        <div className="flex flex-col ">
          {legalObj?.map((item, i) => {
            const level = Number(item.level ?? 0)

            let numberLabel = ''
            if (level > 0) {
              counters[level] += 1
              for (let l = level + 1; l <= 4; l++) counters[l] = 0
              numberLabel = counters.slice(1, level + 1).join('.')
            }

            const headingTag = level > 0 ? (`h${Math.min(level + 1, 6)}` as const) : undefined
            const isTopLevel = level <= 1

            return (
              <div
                key={i}
                className={[
                  'flex flex-col gap-3 py-6',
                  indentClasses[level] ?? '',
                  isTopLevel && i > 0 ? 'border-t border-neutral-200' : '',
                ].join(' ')}
              >
                {headingTag &&
                  item.heading &&
                  React.createElement(
                    headingTag,
                    {
                      className: `${headingClasses[level] ?? ''} flex items-baseline gap-2`,
                      style: { fontFamily: 'HelveticaNeue' },
                    },
                    numberLabel && (
                      <span className="tabular-nums text-neutral-400 font-medium">
                        {numberLabel}
                      </span>
                    ),
                    item.heading,
                  )}

                {item.text && (
                  <p className="text-left text-neutral-600 leading-relaxed">
                    {item.text}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default LegalPage