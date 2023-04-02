
import React from 'react'
import { Flex, HStack, Spacer,Center,Text,Box,Image,VStack,Stack} from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import Footer from '../components/Footer'


const Home = () => {
  return (
  <>
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
<Footer/>
  </>
  )
}

export default Home