import { HStack, Image, Spacer } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
const Navbar = () => {
  return (
    <HStack p="10px">
      <Image src={logo} boxSize="60px" />
      <Spacer />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
