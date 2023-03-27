import { Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { partners } from './partnerConsts'

const Partner = () => {
  return (
    <SimpleGrid columns={partners.length} margin='0 auto' minChildWidth='150px'>
        {partners.map( (partner) => (
            <Image 
            key={partner}
            src={partner}
            alignSelf="center"
            padding={{base:'2rem', sm:'3rem'}}
            filter="grayscale(1)"
            opacity='0.4'
            />
        ))}
    </SimpleGrid>
  )
}

export default Partner