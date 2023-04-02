import { Flex, HStack, Spacer,Center,Text,Box,Image,VStack,Stack} from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Link, Link as RouterLink} from 'react-router-dom'
import {Icon} from '@chakra-ui/icons'
import { IconName ,HiOutlineShoppingBag} from "react-icons/hi";

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
         <a href="/"><img src="https://tse4.mm.bing.net/th?id=OIP.cqvQVnmeLMUvmz5pHZ2MfgAAAA&pid=Api&P=0" alt="hlo" border="2px solid red" width="120px" height="60px"
         /></a>
        </Box >
         <Box pl="100px" >
           
            <Input placeholder='Search' height="35px" width="300px"  borderRadius="20px"  />
           </Box>

       <HStack spacing="30px" pl="60px">
        <h3>Ship to IND/INR</h3>
       
        <Link to='/signup'>SignIn</Link>
        <Link to='/admin'>SignIn as Admin</Link>
        <Icon as={HiOutlineShoppingBag} />
       </HStack>
       </HStack>

       <HStack pl="80px" spacing="30px">
        <h3>Category</h3>
        <h3>New</h3>
        <Link to='/best'>BestSelling</Link>
        <h3>Brand</h3>
        <h3>Clearance</h3>
        <h3>Deals</h3>
        <h3>Coupon</h3>
        <h3>App Only</h3>
        <h3>WhatGeeek</h3>
       </HStack>

       
  

        
        </>
    )
}


export default Navbar;




