import { Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { CitiesGroup } from "./components/CitiesGroup";
import { useState } from "react";
import { MdAddLocationAlt } from "react-icons/md";
import { AddCityModal } from "./components/AddCityModal";

export function Timeline () {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [citiesGroupMap, setCitiesGroupMap] = useState(new Map())

    function addCity ( city ) {
        if (!citiesGroupMap.has(city.date)) {
            citiesGroupMap.set(city.date, []);
        }
        citiesGroupMap.get(city.date).push(city);
        
        const sortedCitiesGroupMap = new Map([...citiesGroupMap.entries()].sort())

        setCitiesGroupMap(sortedCitiesGroupMap)
    }

    function isLastGroup ( date ) {
        return date === Array.from(citiesGroupMap.keys()).pop();
    }

    return (
        <Flex
            flexDirection="column" justifyContent="flex-start" alignItems="stretch" overflowY="scroll"
            gap={2} height="100vh" width="100%" paddingX="18em" paddingY="3em"
            bgColor="gray.900"
        >
            {
                [...citiesGroupMap.entries()].map(
                    ([date, cities]) => (
                        <CitiesGroup date={date} cities={cities} isLastGroup={isLastGroup(date)}/>
                    )
                )
            }
            
            <Button
                onClick={onOpen}
                leftIcon={<MdAddLocationAlt size={20} />}
                color="gray.50" bgColor="gray.700" _hover={{bgColor: "gray.600"}}
                position="absolute" bottom={10} right={20} borderRadius={20}
            >
                <Text>Add City</Text>                    
            </Button>

            <AddCityModal isOpen={isOpen} onClose={onClose} addCity={addCity} />

        </Flex>
    );
}