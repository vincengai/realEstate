import ContactForm from '@/features/common/modules/ContactForm'
import TextContentBox from '@/features/common/modules/TextContentBox'
import DefaultLayout from '@/features/Layouts/DefaultLayout'
import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'

const ContactPage = () => {
  return (
    <DefaultLayout>
        <Box backgroundColor='#f7f8f9' paddingY="3rem">
            <Grid templateColumns="repeat(6, 1fr)" gap='5' maxWidth="1280px" margin="0 auto">
                <GridItem colSpan={{base:6, sm:4}}>
                    <TextContentBox title="Contact Us">
                        {/* CONTACT FORM */}
                        <ContactForm />
                    </TextContentBox>
                </GridItem>

                <GridItem colSpan={{base:6, sm:2}}>
                    <TextContentBox title="For Inquiries Contact:">
                        <Text fontWeight="light" color="gray.600" fontSize="1rem" marginBottom='1rem'>
                            <b>John Smith</b> <br />
                            Public Relations Manager
                            777 Ne 8th St. Miami, FL 9081
                        </Text>

                        <Text fontWeight="light" color="gray.600" fontSize="1rem">
                            <b>Rodd Epson </b><br />
                            Public Relations Manager
                            777 Ne 8th St. Miami, FL 9081
                        </Text>
                    </TextContentBox>
                </GridItem>
            </Grid>
        </Box>
    </DefaultLayout>
  )
}

export default ContactPage
