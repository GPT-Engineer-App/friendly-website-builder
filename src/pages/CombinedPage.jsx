import { Box, Flex, VStack, Text, Link, Spacer, Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { FaTruck, FaGavel, FaLayerGroup, FaBoxes, FaUser } from "react-icons/fa";

const CombinedPage = () => {
  return (
    <Flex height="100vh" direction="column">
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
      <Flex flex="1">
        <Box width="250px" bg="gray.800" color="white" p={4}>
          <VStack align="start" spacing={4}>
            <Link href="#supplier" style={{ textDecoration: 'none' }}>
              <Flex align="center">
                <FaTruck />
                <Text ml={2}>Supplier</Text>
              </Flex>
            </Link>
            <Link href="#bid" style={{ textDecoration: 'none' }}>
              <Flex align="center">
                <FaGavel />
                <Text ml={2}>Bid</Text>
              </Flex>
            </Link>
            <Link href="#bid-groups" style={{ textDecoration: 'none' }}>
              <Flex align="center">
                <FaLayerGroup />
                <Text ml={2}>Bid Groups</Text>
              </Flex>
            </Link>
            <Link href="#inventory" style={{ textDecoration: 'none' }}>
              <Flex align="center">
                <FaBoxes />
                <Text ml={2}>Inventory</Text>
              </Flex>
            </Link>
          </VStack>
        </Box>
        <Box flex="1" p={4}>
          <Text fontSize="2xl">Content Area</Text>
          <Text>Click on the links in the sidebar to navigate.</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CombinedPage;