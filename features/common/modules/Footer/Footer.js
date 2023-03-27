import { Box, SimpleGrid, Flex, Text } from "@chakra-ui/react";
import { Link } from '@chakra-ui/react';
import { HiHomeModern } from "react-icons/hi2";
import { services, about, ourOffices, workWithUs} from "./footerConsts";

const Footer = () => {
  return (
    <Box backgroundColor="blue.600">
        <Box
            maxWidth="1280px"
            margin="0 auto"
            paddingY="3rem"
            paddingX={ {base:'2rem', sm:'0'}}
        >
            <SimpleGrid column="4" color="whiteAlpha.700" gap="1.7rem" minChildWidth="150px">
                <Flex flexDirection="column">
                    <FooterHeader title="Services" />
                    {services.map( (service) => (
                        <FooterLink key={service.name} {...service} />
                    ))}
                </Flex>
                <Flex flexDirection="column">
                    <FooterHeader title="About" />
                    {about.map( (service) => (
                        <FooterLink key={service.name} {...service} />
                    ))}
                </Flex>
                <Flex flexDirection="column">
                    <FooterHeader title="Our Offices" />
                    {ourOffices.map( (service) => (
                        <FooterLink key={service.name} {...service} />
                    ))}
                </Flex>
                <Flex flexDirection="column">
                    <FooterHeader title="Work With Us" />
                    {workWithUs.map( (service) => (
                        <FooterLink key={service.name} {...service} />
                    ))}
                </Flex>
            </SimpleGrid>
        </Box>
        <Box 
            backgroundColor="blue.900" 
            display="flex" 
            padding="2rem" 
            justifyContent="center" 
            alignItems="center" 
            flexDirection="column"
            color="white"
        >
            <Box display="flex" gap='2' alignItems="center">
                <HiHomeModern />
                <Text fontSize="xl" fontWeight="black">
                    NGAI
                </Text>
            </Box>
                <Text marginTop="1rem" fontSize="xs" textAlign='center'>
                    All rights reserved - Copyright NGAI
                </Text>
        </Box>
    </Box>
  )
}

export default Footer

const FooterLink = ( { name, link}) => {
    return (
        <Text>
            <Link href={link}>
                {name}
            </Link>
        </Text>
    )
}

const FooterHeader = ( { title } ) => {
    return (
        <Text as="h4" fontWeight="light" fontSize="xl" marginBottom='1rem'>
            {title}
        </Text>
    )
} 