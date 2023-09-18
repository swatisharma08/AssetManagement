import React from 'react';
import {
  Box,
  Flex,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import Link from 'next/link';

const SidebarWithTabs = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return (
    <Flex>
      {/* Sidebar */}
      <Box
        w="250px"
        h="100vh"
        bg="gray.200"
        p="4"
        boxShadow="2px 0px 5px rgba(0, 0, 0, 0.1)"
      >
        {/* Sidebar content */}
        <Tabs isFitted orientation="vertical" variant="solid-rounded">
          <TabList>
            <Link href={"/dashboard/assets"}>Assets</Link>
            <Link href={"/dashboard/addAsset"}>Properties</Link>
          </TabList>
        </Tabs>
      </Box>

      {/* Main content */}
      <Box p="4" flex="1">
        <Flex mb="4">
          <Spacer />
          {/* Any header content or actions */}
        </Flex>

       {children}
      </Box>
    </Flex>
  );
};

export default SidebarWithTabs;
