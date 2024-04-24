import React from 'react';
import { Heading, Text } from '@chakra-ui/react';

function About() {
  return (
    <div>
      <Heading as="h1" size="xl" mb={4}>About Todo App</Heading>
      <Text fontSize="lg" mb={2}>
        The Todo App helps you manage your daily tasks efficiently. Add, complete, or remove tasks with ease.
      </Text>
      <Text fontSize="lg">
        Features include: Adding new tasks, marking tasks as complete, and removing tasks from the list.
      </Text>
    </div>
  );
}

export default About;