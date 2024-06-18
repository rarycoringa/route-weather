import { Box, Button, Divider, HStack, Text, VStack } from "@chakra-ui/react"



const CityCard = () => {
    return (
        <Box
            background={'white'}
            w={'100%'}
            h={'auto'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            borderRadius={'30px'}
            padding={'1rem'}
        >
            <HStack
                display={'flex'}
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                gap={'12rem'}
                mb={'1rem'}
                pt={'1rem'}
            >
                <VStack>
                    <Box
                        as="section"
                        display={'flex'}
                        alignItems={'center'}
                        gap={'0.5rem'}
                    >
                        <Box
                            as="figure"
                            borderRadius={'50px'}
                            h={'3rem'}
                            w={'3rem'}
                            background={'#FFD25E'}
                        />
                        <Text fontSize={'32px'}>24°C</Text>
                    </Box>
                    <Text fontSize={'20px'}>Clear Sky</Text>
                </VStack>
                <VStack gap={'0.010px'}>
                    <Text as={'b'} fontSize={'30px'}>London</Text>
                    <Text as={'b'} fontSize={'13px'}>United Kingdom</Text>
                </VStack>
            </HStack>
            <Divider size={'90%'} orientation="horizontal" />
            <HStack gap={'7rem'} mt={'0.5rem'}>
                <Button background={'none'} _hover={{ bg: 'none' }}>
                    <Text as={'b'} color={'gray'}>See detailed weather</Text>
                </Button>
                <Button background={'none'} _hover={{ bg: 'none' }}>
                    <Text as={'b'} color={'gray'}>See our recommendations</Text>
                </Button>
            </HStack>
        </Box>
    )
}

export default CityCard
