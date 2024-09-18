import {
    Box,
    Center,
    Heading,
    Divider,
    HStack,
    Image,
    Text,
    Stack
} from '@chakra-ui/react'

function Experience() {
    return (
        <>
            <Box p={5} m={5}>
                <Stack spacing={5}>
                    <Center>
                        <Heading>Experience</Heading>
                    </Center>
                    <Divider borderWidth='1.5px' borderColor='black' />
                    {personalData.experienceData.map((item) => (
                        <Box key={item.id}>
                            <HStack mb={2}>
                                <Image name='NI' boxSize='50px' objectFit='cover' />
                                <Heading size='lg'>{item.company}</Heading>
                            </HStack>
                            <Heading size='lg'>{item.name}</Heading>
                            <Text as='b' fontSize='xl'>{item.date}</Text>
                            <Heading size='md' mt={3} >Skills:</Heading>
                            <Text mb={3} fontSize='xl'>{item.skills}</Text>
                            <Heading size='md'>Description:</Heading>
                            <Text mb={3} fontSize='xl'>{item.description}</Text>
                            <Heading size='md'>Impact:</Heading>
                            <Text fontSize='xl'>{item.impact}</Text>
                            <Divider orientation='horizontal' borderColor="grey" mt={5} mr={2} />
                        </Box>
                    ))}
                </Stack>
            </Box>
        </>
    )
}

export default Experience