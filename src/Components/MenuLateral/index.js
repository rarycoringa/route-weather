import { Box, Button, ButtonGroup, HStack, Text } from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { WiDayCloudy } from "react-icons/wi";
import { WiSnow } from "react-icons/wi";


const MenuLateral = () => {
    return (
        <Box
            display='flex'
            justifyContent='start'
            alignItems='center'
            flexDirection='column'
            height='100vh'
        >
            <Box 
                display='flex' 
                flexDirection='row' 
                alignItems='center'
                m='10% 0%'
            >
                <HStack spacing='10%'>
                    <Avatar bg='gray'/>
                    <Text fontSize='20px'> Username </Text>
                </HStack>  
            </Box>
            <Divider m='0 0 10% 10%'/>
            <ButtonGroup
                variant='solid'
                colorScheme='blackAlpha'
                size='lg' 
                ml='15px' 
                display='flex' 
                flexDirection='column'
                alignItems='center'
                width='80%'
            >
                <Button 
                    leftIcon={<WiDayCloudy/>} 
                    isActive='true'
                    mb='10px'
                >
                    Planejador Climático
                </Button>
                <Button 
                    leftIcon={<WiSnow/>} 
                >
                    Snow Hunter
                </Button>
            </ButtonGroup>
            <Box
                m='auto 0 0 0'
                width='115%'
                textAlign='center'
                p='10px'
                backgroundColor='gray'
            >
                <Text fontSize='12px' color='white'>
                    Route Weather ©️ 2024
                </Text>
                <Text fontSize='12px' color='white'>
                    Developed by Gabriel and Rary
                </Text>
            </Box>
        </Box>
    )
}

export default MenuLateral