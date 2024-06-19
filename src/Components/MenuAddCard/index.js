import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
  } from '@chakra-ui/react'

import { useDisclosure} from '@chakra-ui/react'

import AddCardButton from '../../DayContainer/AddCardButton'


const MenuAddCard = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
      <>
        <AddCardButton onOpen={onOpen}/>
  
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Criar um card novo</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl isRequired>
                <FormLabel> Pesquise a cidade desejada:</FormLabel>
                <Input placeholder='Nome da Cidade' />
                <FormLabel> Data inicial:</FormLabel>
                <Input placeholder='Select Date and Time' size='md' type='datetime-local' />
                <FormLabel> Data final:</FormLabel>
                <Input placeholder='Select Date and Time' size='md' type='datetime-local' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose} type='submit'>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default MenuAddCard 