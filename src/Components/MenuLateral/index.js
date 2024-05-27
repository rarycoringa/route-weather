import { Box, Button, ButtonGroup, HStack, Text, VStack } from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { WiDayCloudy } from "react-icons/wi";
import { WiSnow } from "react-icons/wi";
import styled from "styled-components"

const MenuContainer = styled.div`
    width: 20%;
    margin: 0 auto;
    max-width: 20%;
    height: 100vh;

    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;

    Button {
       width: 90%;
       margin: 20% 10%;
    }
`

const MenuLateral = () => {
    return (
        <Box
            display='flex'
            justifyContent='start'
            alignItems='center'
            flexDirection='column'
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
        </Box>
    )
}

export default MenuLateral