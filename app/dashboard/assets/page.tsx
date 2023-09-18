"use client"

import React, { useState } from 'react';
import {
  Box,
  Text,
  Button,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { asset } from '@/app/type/asset';

const AssetDashboard: React.FC = () => {
  // Initialize state to manage the list of todos
  const [assets, setAssets] = useState<asset[]>([]);

  return (
    <Box maxW="100vw" mx="auto" p={4}>
        <Flex justifyContent={"space-between"} mb={8}>
            <Text fontSize="2xl" fontWeight="bold" mb={1} >
                Assets
            </Text>
            <Button colorScheme='teal' size='md'>
                Add Asset
            </Button>
        </Flex>
        <TableContainer>
            <Table variant='simple'>
                <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Cost</Th>
                    <Th>Aquired Date</Th>
                    <Th>Asset Type</Th>
                    <Th>Current Value</Th>
                    <Th> Value</Th>
                </Tr>
                </Thead>
                <Tbody>
                <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td isNumeric>25.4</Td>
                </Tr>
                <Tr>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                    <Td isNumeric>30.48</Td>
                </Tr>
                <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td isNumeric>0.91444</Td>
                </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    </Box>
  );
};

export default AssetDashboard;
