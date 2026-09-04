import React from 'react'
import { Button } from '@chakra-ui/react'
import { FaQuestionCircle } from "react-icons/fa";
import { getTranslations } from 'next-intl/server';

const AskQuestionButton = async() => {

  const t = await getTranslations('buttons');

  return (
    <Button
        className='
            button
        '

        style={{ "--button-bg": "#071f97" } as React.CSSProperties}
    >
        {t('askQuestion')}

        <FaQuestionCircle />

    </Button>
  )
}

export default AskQuestionButton
