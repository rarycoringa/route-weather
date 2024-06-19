import { Box, Button, Divider, Image, Stack, Text, VStack } from "@chakra-ui/react"



const AddCardButton = ({onOpen}) => {
    return (
        <VStack mb={'2rem'}>
            <Stack direction='row'>
                <Divider orientation='vertical' mr={'2rem'}/>
                <Text fontSize={'30px'} mr={'1rem'}>Add a new step into your travel!</Text>
            </Stack>
            <Box
            background={'#A1A1A1'}
            w={'100%'}
            h={'auto'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            borderRadius={'30px'}
            padding={'1.5rem'}
            >
                <Button background={'none'} _hover={{ bg: 'none' }} onClick={onOpen}>
                    <Image src="/Icons/AddCard.svg" />
                </Button>
            </Box>
        </VStack>
    )
}

export default AddCardButton