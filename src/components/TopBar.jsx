import { Box, Flex, Spacer, Text, Menu, MenuButton, MenuList, MenuItem, Button, Avatar } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";

const TopBar = () => {
  return (
    <Box bg="gray.800" color="white" px={4} py={2}>
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold">MyLogo</Text>
        <Spacer />
        <Menu>
          <MenuButton as={Button} rightIcon={<FaUser />}>
            User
          </MenuButton>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default TopBar;