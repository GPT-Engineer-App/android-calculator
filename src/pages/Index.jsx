import React, { useState } from "react";
import { Box, Button, Container, Grid, Input, Text, VStack, useToast } from "@chakra-ui/react";
import { FaBackspace } from "react-icons/fa";

const Index = () => {
  const [input, setInput] = useState("");
  const toast = useToast();

  const appendValue = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      toast({
        title: "Invalid expression",
        description: "Please enter a valid mathematical expression.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      setInput("");
    }
  };

  const clearInput = () => {
    setInput("");
  };

  const backspaceInput = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <Container maxW="container.md" centerContent bg="black" color="white">
      <VStack spacing={4} mt="20">
        <Text fontSize="2xl" fontWeight="bold">
          Calculator
        </Text>
        <Input value={input} placeholder="Enter expression" size="lg" readOnly />
        <Grid templateColumns="repeat(4, 1fr)" gap={2} w="full">
          <Button onClick={() => appendValue("7")}>7</Button>
          <Button onClick={() => appendValue("8")}>8</Button>
          <Button onClick={() => appendValue("9")}>9</Button>
          <Button onClick={() => appendValue("/")}>/</Button>
          <Button onClick={() => appendValue("4")}>4</Button>
          <Button onClick={() => appendValue("5")}>5</Button>
          <Button onClick={() => appendValue("6")}>6</Button>
          <Button onClick={() => appendValue("*")}>*</Button>
          <Button onClick={() => appendValue("1")}>1</Button>
          <Button onClick={() => appendValue("2")}>2</Button>
          <Button onClick={() => appendValue("3")}>3</Button>
          <Button onClick={() => appendValue("-")}>-</Button>
          <Button onClick={() => appendValue("0")}>0</Button>
          <Button onClick={() => appendValue(".")}>.</Button>
          <Button onClick={calculateResult}>=</Button>
          <Button onClick={() => appendValue("+")}>+</Button>
        </Grid>
        <Box w="full">
          <Button w="full" onClick={clearInput} colorScheme="red">
            Clear
          </Button>
        </Box>
        <Box w="full">
          <Button w="full" onClick={backspaceInput} leftIcon={<FaBackspace />}>
            Backspace
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
