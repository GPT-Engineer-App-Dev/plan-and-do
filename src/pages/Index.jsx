import { useState } from 'react';
import { Box, Heading, Input, Button, List, ListItem, ListIcon, IconButton } from '@chakra-ui/react';
import { FaPlus, FaTrash, FaCheckCircle, FaRegCircle } from 'react-icons/fa';

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTask = () => {
    if (input.trim() !== '') {
      const newTask = { id: Date.now(), text: input, isComplete: false };
      setTasks([...tasks, newTask]);
      setInput('');
    }
  };

  const handleRemoveTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, isComplete: !task.isComplete } : task));
  };

  return (
    <Box p={5}>
      <Heading mb={4}>Todo App</Heading>
      <Box mb={4}>
        <Input
          placeholder="Add a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
        />
        <Button leftIcon={<FaPlus />} ml={2} onClick={handleAddTask} colorScheme="blue">
          Add Task
        </Button>
      </Box>
      <List spacing={3}>
        {tasks.map(task => (
          <ListItem key={task.id} display="flex" alignItems="center">
            <ListIcon
              as={task.isComplete ? FaCheckCircle : FaRegCircle}
              color={task.isComplete ? 'green.500' : 'gray.500'}
              cursor="pointer"
              onClick={() => handleToggleComplete(task.id)}
            />
            <Box flex="1" as="span" textDecoration={task.isComplete ? 'line-through' : 'none'}>
              {task.text}
            </Box>
            <IconButton
              icon={<FaTrash />}
              onClick={() => handleRemoveTask(task.id)}
              colorScheme="red"
              aria-label="Delete task"
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;