import { Box, Divider, Text } from "@chakra-ui/react"
import CityCard from "./CityCard"
import MenuAddCard from "../Components/MenuAddCard"


const DayContainer = () => {
    return (
        <Box
        w={'50%'}
        h={'auto'}
        display={'flex'}
        flex={'1'}
        flexDirection={'column'}
        mt={'1%'}
        >
            <Text 
                fontSize={'30px'}
                ml={'1rem'}
            >
                May 11, 2024
            </Text>
            <CityCard/>
            <Divider orientation="vertical" position={'sticky'} ml={'2rem'}/>
            <MenuAddCard/>
        </Box>
    )
}

export default DayContainer
