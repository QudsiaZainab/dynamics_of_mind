import { Box, Flex, Heading, IconButton, Text } from '@chakra-ui/react'
import React from 'react'

interface StatsCardProps {
    name: string;
    amount: number;
    prevAmount?: number;
    icon: JSX.Element;
}

export default function StatsCard({name,amount,icon}:StatsCardProps) {
  return (
    <Flex 
    bg={"white"}
    padding={5}
    borderRadius={10}
    gap={4}
    alignItems="center"
    >
        <Box>
            <Heading variant="h5" size="sm" color="gray.300">
                {name}
            </Heading>
            <Text>
                Rs {amount.toLocaleString()}
            </Text>
        </Box>
        <IconButton  colorScheme="brand" aria-label={name}>
            {icon}
        </IconButton>
    </Flex>
  )
}
