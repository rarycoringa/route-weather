import { Button, ButtonGroup, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useToast } from "@chakra-ui/react";
import { useRef } from "react";
import { IoMdAdd } from "react-icons/io";

export function AddCityModal ({ isOpen, onClose, addCity }) {
    const nameRef = useRef(null);
    const countryRef = useRef(null);
    const dateRef = useRef(null);

    const toast = useToast();

    function onSubmit () {
        const city = {
            name: nameRef.current.value,
            country: countryRef.current.value,
            date: dateRef.current.value,
        };

        addCity(city);

        nameRef.current.value = null;
        countryRef.current.value = null;
        dateRef.current.value = null;

        onClose();
        
        toast({
            title: 'City Added',
            description: 'The city was successfully added into timeline.',
            status: 'success',
            duration: 9000,
            isClosable: true,
            position: 'bottom-left',
          })
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent color="gray.50" bgColor="gray.700">
                <ModalHeader>Add a new city into your timeline</ModalHeader>
                <ModalCloseButton />

                <ModalBody>
                    <FormControl marginY={5} isRequired>
                        <FormLabel>City Name:</FormLabel>
                        <Input 
                            type="text" ref={nameRef}
                            placeholder="London" variant="outline"
                        />
                    </FormControl>

                    <FormControl marginY={5} isRequired>
                        <FormLabel>City Country:</FormLabel>
                        <Input 
                            type="text" ref={countryRef}
                            placeholder="United Kingdom" variant="outline"
                        />
                    </FormControl>

                    <FormControl marginY={5} isRequired>
                        <FormLabel>Travel Date:</FormLabel>
                        <Input
                            type="date" ref={dateRef}
                            placeholder="Date" variant="outline"
                        />
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <ButtonGroup>
                        <Button type="submit"
                            onClick={onSubmit} leftIcon={<IoMdAdd size={20}/>}
                            color="gray.700" bgColor="gray.200" _hover={{bgColor: "gray.50"}}
                        >
                            Add
                        </Button>
                        <Button
                            onClick={onClose} variant="outline"
                            color="gray.200" borderColor="gray.200" _hover={{color: "gray.700", bgColor: "gray.200"}}
                        >
                            Cancel
                        </Button>
                    </ButtonGroup>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}