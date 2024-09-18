import { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Button,
  Flex,
  VStack,
  Tabs,
  TabList,
  Tab,
  SlideFade,
  HStack,
  Icon,
  Link,
  Tooltip,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import CurrentResume from "./assets/current_resume.pdf"
import Aboutme from './components/Aboutme';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  const [activeTab, setActiveTab] = useState("aboutMe");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  }

  return (
    <>
      <Flex>
        <Box w='30%' height="100vh" bg='red.400' pt={20} boxShadow='lg' display='flex' alignContent='center' justifyContent='center'>
          <VStack spacing={5}>
            <Heading>Johan Olvera</Heading>
            <Tabs isLazy orientation='vertical' variant='soft-rounded' size='lg' colorScheme='orange'>
              <TabList>
                <Tab onClick={() => handleTabClick('aboutMe')} isSelected={activeTab === 'aboutMe'}>About Me</Tab>
                <Tab onClick={() => handleTabClick('experience')} isSelected={activeTab === 'experience'}>Experience</Tab>
                <Tab onClick={() => handleTabClick('projects')} isSelected={activeTab === 'projects'}>Projects</Tab>
              </TabList>
            </Tabs>
            <HStack spacing={5}>
              <Tooltip label="My GitHub">
                <Link href='https://github.com/Jolvera2001' target='_blank'>
                  <Icon as={FaGithub} boxSize={12} />
                </Link>
              </Tooltip>
              <Tooltip label='My LinkedIn'>
                <Link href='https://www.linkedin.com/in/johan-olvera-b47a9b205/' target='_blank'>
                  <Icon as={FaLinkedin} boxSize={12} />
                </Link>
              </Tooltip>
            </HStack>
            <Tooltip label="Downloads a PDF of my resume">
              <Button variant='ghost' as='a' href={CurrentResume} download="Johan_Resume.pdf" >Current Resume</Button>
            </Tooltip>
          </VStack>
        </Box>
        <Box w="70%" p={5} overflowY='auto' maxH='100vh'>
          <Container maxW='4xl'>
            {activeTab === 'aboutMe' &&
              <SlideFade in={activeTab === 'aboutMe'}>
                <Aboutme />
              </SlideFade>
            }
            {activeTab === 'experience' &&
              <SlideFade in={activeTab === 'experience'}>
                <Experience />
              </SlideFade>
            }
            {activeTab === 'projects' &&
              <SlideFade in={activeTab === 'projects'}>
                <Projects />
              </SlideFade>
            }
          </Container>
        </Box>
      </Flex>
    </>
  )
}

export default App
