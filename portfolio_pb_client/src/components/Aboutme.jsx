import {
    Box, 
    Stack,
    Center,
    Heading,
    Divider,
    Text
} from '@chakra-ui/react'

function Aboutme() {
    return (
        <>
            <Box p={5} m={5}>
                <Stack spacing={5}>
                    <Center>
                        <Heading>About Me</Heading>
                    </Center>
                    <Divider borderWidth='1.5px' borderColor='black' />
                    <Center>
                        <Text fontSize='3xl' my={5} >{personalData.aboutMeData.intro}</Text>
                    </Center>
                    <Text fontSize='xl'>{personalData.aboutMeData.body}</Text>
                    <Text fontSize='xl'>{personalData.aboutMeData.closing}</Text>
                </Stack>
            </Box>
        </>
    )
}

export default Aboutme