import { FaGithub } from 'react-icons/fa6'
import {
    Box,
    Stack,
    Center,
    Heading,
    Divider,
    Text,
    HStack,
    Link,
    Icon
} from '@chakra-ui/react'

function Projects() {
    return(
        <>
            <Box p={5} m={5}>
                <Stack spacing={4}>
                    <Center>
                        <Heading>Projects</Heading>
                    </Center>
                    <Divider borderWidth='1.5px' borderColor='black' />
                    {personalData.projectsData.map((item) => (
                        <Box key={item.id}>
                            <Heading size='lg'>{item.name}</Heading>
                            <Text as='b' fontSize='xl'>{item.date}</Text>
                            <Text mb={3} fontSize='xl'>Status: {item.status}</Text>
                            <Heading size='md'>Skills:</Heading>
                            <Text mb={3} fontSize='xl'>{item.skills}</Text>
                            <Heading size='md'>Description:</Heading>
                            <Text mb={6} fontSize='xl'>{item.description}</Text>
                            <HStack>
                                <Link href={item.link} target='_blank'>
                                    <Icon as={FaGithub} boxSize={10} />
                                </Link>
                            </HStack>
                            <Text as='i'>Note: {item.linkDesc}</Text>
                            <Divider orientation='horizontal' borderColor="grey" mt={5} mr={2} />
                        </Box>
                    ))}
                </Stack>
            </Box>
        </>
    )
}

export default Projects