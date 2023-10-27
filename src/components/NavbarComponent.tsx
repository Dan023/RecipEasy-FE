import { SunIcon, MoonIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
  IconButton,
  useColorMode,
  LightMode,
  DarkMode,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { SideMenuComponent } from "./SideMenuComponent";
import { Link } from "react-router-dom";

export const NavbarComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  return (
    <>
      <Flex
        width={"100%"}
        height={"4.5em"}
        bgColor={"black"}
        color={"white"}
        align={"center"}
        paddingInline={5}
        paddingBottom={1}
      >
        <DarkMode>
          <IconButton
            aria-label="menù"
            variant={"ghost"}
            size={"lg"}
            icon={<HamburgerIcon />}
            onClick={onOpen}
          ></IconButton>
        </DarkMode>
        <Heading marginLeft={5}>
          <Link to={"/"}>RecipEasy</Link>
        </Heading>
        <Spacer />
        <ButtonGroup>
          <DarkMode>
            <IconButton
              aria-label="Color Mode"
              isRound
              variant={"ghost"}
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
            />
          </DarkMode>
          <LightMode>
            <Button
              variant={"solid"}
              colorScheme="orange"
              onClick={() => navigate("/login")}
            >
              Log in
            </Button>
          </LightMode>
          <DarkMode>
            <Button variant={"ghost"} onClick={() => navigate("/signup")}>
              Sign up
            </Button>
          </DarkMode>
        </ButtonGroup>
      </Flex>
      <SideMenuComponent isOpen={isOpen} onClose={onClose} />
    </>
  );
};
