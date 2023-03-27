import React from 'react';
import { Link, Menu, MenuList, MenuButton, MenuItem, IconButton } from '@chakra-ui/react';
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { HiHomeModern} from "react-icons/hi2";
import { navigationLinks } from '../../navigationConsts';
import { HamburgerIcon } from '@chakra-ui/icons';

const NavigationMobile = () => {
  return (
    <Box 
      color="b.600" 
      padding="2rem" 
      backgroundColor="white"   
      display={ {base:"block", md:"none"}}>
        <Flex alignItems="center" justifyContent="space-between">
          <Link href="/">
            <Box display="flex" gap="2" alignItems="center">
              <HiHomeModern size="30" />
              <Text fontSize="2xl" fontWeight="black">
                NGAI
              </Text>
            </Box>
          </Link>

          <Menu>
            <MenuButton 
              as={IconButton} 
              aria-label="Options" 
              icon={<HamburgerIcon />} 
              variant="outline"
            />
            <MenuList>
              {navigationLinks.map( (item) => (
                <NavigationLink key={item.title} {...item} />
              ))} 
            </MenuList>
          </Menu>

        </Flex>
    </Box>  
  )
}

export default NavigationMobile


const NavigationLink = ( { title, link, icon} ) => {
  return ( 
    <Link href={link}>
      <MenuItem alignItems="center" gap="0.5rem">
        {icon}
        {title}
      </MenuItem>
    </Link>
  )
}