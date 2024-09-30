import PocketBase from 'pocketbase'
import parse from 'html-react-parser';
import { useState, useEffect } from 'react'
import {
    Box,
    Center,
    Heading,
    Divider,
    HStack,
    Image,
    Text,
    Stack,
    CircularProgress,
} from '@chakra-ui/react'

function Experience() {
    const pb = new PocketBase('https://portfolio-pb-long-pond-9559.fly.dev');
    const [Experience, setExperience] = useState(null);

    function formatDate(dateString) {
        const options = { year: "numeric", month: "long", day: "numeric"}
        const date = new Date(dateString)
        return date.toLocaleDateString(undefined, options);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const records = await pb.collection('experiences').getFullList({});
                console.log(records);
                setExperience(records);
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, [])

    return (
        <>
            <Box p={5} m={5}>
                { Experience 
                ? (
                    <Stack spacing={5}>
                        <Center>
                            <Heading>Experience</Heading>
                        </Center>
                        <Divider borderWidth='1.5px' borderColor='black' />
                        {Experience.map((item) => (
                            <Box key={item.id}>
                                <Heading>{item.title}</Heading>
                                <HStack my={2}>
                                    <Image boxSize='50px' objectFit='cover' src={
                                        `http://127.0.0.1:8090/api/files/experiences/${item.id}/${item.logo}`}/> 
                                    <Heading size='lg'>{item.company}</Heading>
                                </HStack>
                                <Text as='b' fontSize='xl'>{formatDate(item.date_start)} - {formatDate(item.date_end)}</Text>
                                <Heading size='md' mt={3} >Skills:</Heading>
                                <Text mb={3} fontSize='xl'>{item.skills}</Text>
                                <Heading size='md'>Description:</Heading>
                                <Text mb={3} fontSize='xl'>{parse(item.description)}</Text>
                                <Heading size='md'>Impact:</Heading>
                                <Text fontSize='xl'>{parse(item.impact)}</Text>
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

export default Experience