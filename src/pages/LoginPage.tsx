import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <Center
      width={"50%"}
      height={"25em"}
      marginInline={"25%"}
      marginTop={"8em"}
      borderRadius={10}
      boxShadow={"0 3px 10px rgb(0 0 0 / 0.2)"}
    >
      <Box width={"70%"}>
        <Center>
          <Heading color={"orange"}>Log in</Heading>
        </Center>
        <FormControl marginTop={5} isRequired>
          <FormLabel>Username</FormLabel>
          <Input ref={username} isRequired />
          <FormLabel marginTop={3}>Password</FormLabel>
          <InputGroup>
            <Input
              ref={password}
              type={showPassword ? "text" : "password"}
              isRequired
            />
            <InputRightElement>
              <IconButton
                aria-label="Show password"
                h="1.75rem"
                size="sm"
                variant={"ghost"}
                icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                onClick={() => setShowPassword(!showPassword)}
              ></IconButton>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <SimpleGrid columns={2} spacing={3} marginTop={5}>
          <Button variant={"outline"} onClick={() => navigate("/signup")}>
            Sign up
          </Button>
          <Button variant={"solid"} colorScheme="orange">
            Log in
          </Button>
        </SimpleGrid>
      </Box>
    </Center>
  );
};
