import { Divider, Flex, Text } from "@chakra-ui/react";
import { CityCard } from "./CityCard";

function CitiesGroupDivider () {
    return (
        <Divider
            orientation="vertical"
            marginX={5} height={10}
            opacity={0.3}
        />
    );
}

export function CitiesGroup ({ date, cities, isLastGroup }) {
    const formattedDate = new Date(date).toLocaleDateString(
        "en-GB",
        {timeZone: "UTC", year: 'numeric', month: 'long', day: 'numeric'}
    )

    return (
        <Flex
            flexDirection="column"
            gap={2}
        >
            <Text fontSize="lg" as="b" color="gray.100">{formattedDate}</Text>

            <Flex
                flexDirection="column"
                gap={2}
            >
                {
                    cities.map(
                        city => (
                            <CityCard city={city} />
                        )
                    )
                }
            </Flex>

            {isLastGroup ? null : <CitiesGroupDivider />}
        </Flex>
    );
}