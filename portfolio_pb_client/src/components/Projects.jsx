import PocketBase from 'pocketbase'
import parse from 'html-react-parser';
import { useState, useEffect } from 'react';
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
    Icon,
    CircularProgress
} from '@chakra-ui/react'

function Projects() {
    const pb = new PocketBase(`${window.location.protocol}:${window.location.hostname}`);
    const [Projects, setProjects] = useState(null);

    function formatDate(dateString) {
        const options = { year: "numeric", month: "long", day: "numeric" }
        const date = new Date(dateString)
        return date.toLocaleDateString(undefined, options);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const records = await pb.collection('projects').getFullList({ 
                    sort: '-date_started', 
                });
                console.log(records); 
                setProjects(records);
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, [])

    return(
        <>
            <Box p={5} m={5}>
                {Projects 
                ? (
                    <Stack spacing={4}>
                        <Center>
                            <Heading>Projects</Heading>
                        </Center>
                        <Divider borderWidth='1.5px' borderColor='black' />
                        {Projects.map((item) => (
                            <Box key={item.id}>
                                <Heading size='lg'>{item.name}</Heading>
                                <Text as='b' fontSize='xl'>Started on {formatDate(item.date_started)}</Text>
                                <Text mb={3} fontSize='xl'>Status: {item.status}</Text>
                                <Heading size='md'>Skills:</Heading>
                                <Text mb={3} fontSize='xl'>{item.skills}</Text>
                                <Heading size='md'>Description:</Heading>
                                <Text mb={6} fontSize='xl'>{parse(item.description)}</Text>
                                <HStack>
                                    <Link href={item.github_link} target='_blank'>
                                        <Icon as={FaGithub} boxSize={10} />
                                    </Link>
                                </HStack>
                                <Divider orientation='horizontal' borderColor="grey" mt={5} mr={2} />
                            </Box>
                        ))}
                    </Stack>
                ) 
                : (
                    <Stack>
                        <Center>
                            <CircularProgress isIndeterminate color='green.300' />
                        </Center>
                    </Stack>
                )}
            </Box>
        </>
    )
}

export default Projects