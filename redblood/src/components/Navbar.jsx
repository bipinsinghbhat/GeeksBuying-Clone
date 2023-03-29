import { Stack,HStack ,Flex } from "@chakra-ui/react"
import { Button, ButtonGroup } from '@chakra-ui/react'

function Navbar(){
    return (
       <>
       <Stack spacing='44px' ml="250px" border="2px solid red"
       direction='row' align='center'>
        <h3>Mega Sale,Extra $50,$20,$10,or $3 off over $600,$300,$100,or $30 </h3>
        <Button colorScheme='red' variant='solid'  size='md'>Shop Now</Button>
       </Stack>

      
  

      
        
        </>
    )
}


export default Navbar;