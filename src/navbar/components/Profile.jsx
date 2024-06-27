import { Avatar, Divider, Flex, Text } from "@chakra-ui/react";

export function Profile () {
    return (
        <Flex
            flexDirection="column" justifyContent="center" alignItems="center"
            gap={6}
        >
            <Flex
                flexDirection="row" justifyContent="center" alignItems="center"
                gap={3}
            >
                <Avatar size="md" bgColor="gray"/>
                <Text fontSize="lg" as="b">Olivia Martinez</Text>
            </Flex>

            <Divider opacity={0.3}/>
        </Flex>
    );
}