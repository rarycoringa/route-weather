import { Flex } from "@chakra-ui/react";
import { Profile } from "./components/Profile";
import { Footer } from "./components/Footer";

export function Navbar () {
    return (
        <Flex
            flexDirection="column" justifyContent="space-between" alignItems="stretch"
            height="100vh" width="100%" padding={3}
        >
            <Profile />

            <Footer />
        </Flex>
    );
}