import React from 'react'
import { Flex, HStack, Spacer,Center,Text,Box,Image,VStack,Stack} from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'

const Footer = () => {
  return (

    <>
 

<hr />
<br />

<HStack pl="80px" spacing="40px">
  <VStack>
    <h2 >Order Status</h2>
    <h4>About Us</h4>
    <h4>Contact Us</h4>
    <h4>Warranty</h4>
    <h4>FAQs</h4>
  </VStack>

  <VStack>
    <h2>WhatGeek</h2>
    <h4>Shipping guide</h4>
    <h4>Payment Method</h4>
    <h4>Wholesale</h4>
    <h4>Blog</h4>
  </VStack>


  <VStack>
    <h2>Policies</h2>
    <h4>Return Policies</h4>
    <h4>Privacy</h4>
    <h4>Declaration</h4>
    <h4>Customs</h4>
  </VStack>

  <Box  >
    <h3>Download The App</h3>
<Image src='https://content1.geekbuying.com/V1.4/en/images/index_images/android_app.png' alt='Dan Abramov' />
</Box>

<Box  >
<Image src='https://content1.geekbuying.com/V1.4/en/images/index_images/app_store.jpg' alt='Dan Abramov' />
<Image src='https://content1.geekbuying.com/V1.4/en/images/index_images/google_play.jpg' alt='Dan Abramov' />
<Image src='https://content1.geekbuying.com/V1.4/en/images/index_images/gallery.jpg' alt='Dan Abramov' />

</Box>


</HStack>
<br />
<hr />
<h3>Copyright © 2012-2023 Geekbuying.com. All rights reserved.</h3>
  
</>
  )
}

export default Footer