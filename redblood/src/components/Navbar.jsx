import { Flex, HStack, Spacer,Center,Text,Box,Image,VStack,Stack} from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Link as RouterLink} from 'react-router-dom'



function Navbar(){
    return (
       <>
      <HStack pl="250px" spacing="44px" marginTop="5px">
  <h3>Mega Sale,Extra $50,$20,$10,or $3 off over $600,$300,$100</h3>

  <Button colorScheme='blue'>Shop Now</Button>
     </HStack>

     <HStack pl="700px" spacing="30px" bg="blue" width="90%">
        <h3>Save $50 with App</h3>
        <select >
    <option value="English">English</option>
    <option value="Hindi">Hindi</option>
    <option value="Italian">Italian</option>
    <option value="French">French</option>
   
        </select>
       
        <select >
    <option value="">Support Center</option>
    <option value="Live Ticket">Live Ticket</option>
    <option value="Chat">Chat</option>
    <option value="Call Us">Call Us</option>
   
        </select>


     </HStack>
     <hr />
        <HStack>
        <Box  pl="80px">
          <img src="https://tse4.mm.bing.net/th?id=OIP.cqvQVnmeLMUvmz5pHZ2MfgAAAA&pid=Api&P=0" alt="hlo" border="2px solid red" width="120px" height="60px"
         />
        </Box >
         <Box pl="100px" >
           
            <Input placeholder='medium size' height="35px" width="300px"  borderRadius="20px"/>
           </Box>

       <HStack spacing="30px" pl="60px">
        <h3>Ship to IND/INR</h3>
        <RouterLink to='signup'>SignIn</RouterLink>
       </HStack>
       </HStack>

       <HStack pl="80px" spacing="30px">
        <h3>Category</h3>
        <h3>New</h3>
        <h3>BestSelling</h3>
        <h3>Brand</h3>
        <h3>Clearance</h3>
        <h3>Deals</h3>
        <h3>Coupon</h3>
        <h3>App Only</h3>
        <h3>WhatGeeek</h3>
       </HStack>

       
     <HStack pl="80px">

        <Box   boxSize='700px' >
  <Image src='https://img.gkbcdn.com/bn/2303/740x670-6426bfca2b40c950141c8861._p1_.jpg' alt='Dan Abramov' />
</Box>

<Box boxSize='700px' >
  <Image src='https://img.gkbcdn.com/bn/2303/home-6422c9aa2b40c92c8c76431f._p1_.jpg' alt='Dan Abramov' />
</Box>
</HStack> 


<Text fontSize='4xl' >Popular Brands</Text>
<Box  pl="80px" pr="80px" >
<Image src='https://img.gkbcdn.com/bn/2212/5-63ac10cc2b40c966cc189a8e._p1_.jpg' alt='Dan Abramov' />
</Box>

<Stack direction='row' pl="80px">
  <Image
     boxSize='180px'
    objectFit='cover'
    src='https://img.gkbcdn.com/p/2022-03-10/DYU-C6-Electric-Bicycle-350W-Motor-36V-12-5AH---White-497642-0._w280_.jpg'
    alt='Dan Abramov'
   
  />
  <Image
      boxSize='180px'
    objectFit='cover'
    src='https://img.gkbcdn.com/p/2022-07-14/JOYOR-S5-Electric-Scooter-48V-13Ah-Battery-Black-508848-0._w280_.jpg'
    alt='Dan Abramov'
    
  />
 <Image
      boxSize='180px'
    objectFit='cover'
    src='https://img.gkbcdn.com/p/2021-11-16/Proscenic-T22-Oil-Free-Air-Fryer-478408-0._w280_.jpg'
    alt='Dan Abramov'
  />
   <Image
     boxSize='180px'
    objectFit='cover'
    src='https://img.gkbcdn.com/p/2022-07-26/5-in-1-multi-purpose-keyboard-cleaning-brush-facbef-1658828291052._w280_.jpg'
    alt='Dan Abramov'
  />
   <Image
      boxSize='180px'
    objectFit='cover'
   
    src='https://img.gkbcdn.com/p/2022-07-18/kaisda-k1-v-electric-bike-26-inch-mountain-bike-black-97b66e-1658145927142._w280_.jpg'
    alt='Dan Abramov'
  />
   <Image
      boxSize='180px'
    objectFit='cover'
   
    src='https://img.gkbcdn.com/p/2019-10-24/tronsmart-element-t6-max-60w-bluetooth-5-0-nfc-speaker-black-1574132858241._w280_.jpg'
    alt='Dan Abramov'
  />
   
</Stack>

<br />
<Box bg="blue" color="white" width="90%" pl="80px">
<Text fontSize='4xl' >Why buy from Geekbuying?</Text>
</Box>
<br />
<hr />
<HStack pl="300px">
<Input placeholder='Enter your Email' width="400px"/>
<Button colorScheme='blue'>Subscribe</Button>
</HStack>

 
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


export default Navbar;




