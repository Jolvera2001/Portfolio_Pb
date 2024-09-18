import PocketBase from 'pocketbase'
import { useEffect, useState } from 'react';
import {
    Box, 
    Stack,
    Center,
    Heading,
    Divider,
    Text,
    CircularProgress
} from '@chakra-ui/react'

function Aboutme() {
    const pb = new PocketBase('http://127.0.0.1:8090');
    const [Personal, setPersonal] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const record = await pb.collection('introduction').getFullList({})
                console.log(record);
                setPersonal(record[0]);
            } catch(err) {
                console.error(err);
            }
        };

        fetchData();
    }, [])

    return (
        <>
            <Box p={5} m={5}>
                { Personal 
                ? (
                    <Stack spacing={5}>
                        <Center>
                            <Heading>About Me</Heading>
                        </Center>
                        <Divider borderWidth='1.5px' borderColor='black' />
                        <Center>
                            <Text fontSize='3xl' my={5} >{Personal.intro}</Text>
                        </Center>
                        <Text fontSize='xl'>{Personal.body}</Text>
                        <Text fontSize='xl'>{Personal.closing}</Text>
                    </Stack>
                )
                :(
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

export default Aboutme