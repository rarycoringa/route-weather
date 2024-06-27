import { Button, Card, CardBody, CardFooter, Divider, Flex, Text } from "@chakra-ui/react";
import { TiWeatherCloudy } from "react-icons/ti";

export function CityCard ({ city }) {
    return (
        <Card
            size="sm" width="100%"
            paddingY={1} paddingX={6}
            color="gray.50" bgColor="gray.700"
        >
            <CardBody>
                <Flex justifyContent="space-between">
                    <Flex alignItems="center" gap={2}>
                        <TiWeatherCloudy size={70}/>
                        <Flex flexDirection="column" justifyContent="center" alignItems="stretch">
                            <Text fontSize="3xl">24° F</Text>
                            <Text fontSize="sm" as="b" color="gray.300">Clear Sky</Text>
                        </Flex>
                    </Flex>
                    <Flex flexDirection="column" justifyContent="center" alignItems="end">
                        <Text fontSize="3xl">{city.name}</Text>
                        <Text fontSize="sm" as="b" color="gray.300">{city.country}</Text>
                    </Flex>
                </Flex>

            </CardBody>

            <Divider opacity={0.3}/>

            <CardFooter
                justifyContent="space-between"
            >
                <Button variant="ghost" color="gray.300" _hover={{color: "gray.50"}} isDisabled>
                    <Text fontSize="md" as="b">See Detailed Weather</Text>    
                </Button>
                <Button variant="ghost" color="gray.300" _hover={{color: "gray.50"}} isDisabled>
                    <Text fontSize="md" as="b">See Our Recommendation</Text>    
                </Button>
            </CardFooter>
        </Card>
    );
}