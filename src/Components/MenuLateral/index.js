import { Box, Button, ButtonGroup, HStack, Text, } from '@chakra-ui/react'
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

/*
    <MenuContainer>
        <PerfilContainer>
            <PerfilImg/>
            <PerfilName> {name} </PerfilName> verificar localmente
        </PerfilContainer>
        <Linhaqueesquecionome>
        <PlanejadorClimButtom/> buttom com navigate, detectar se já estiver na pagina para ficar "selecionado"
        <SnowHunter/> buttom sem nada por enquanto
    </MenuContainer>
*/