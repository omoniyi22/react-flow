import { Box, Text } from "@chakra-ui/react"
import React from "react"
import { Handle, NodeProps, Position } from "reactflow"
import CustomHandle from "./Customhandle"

export default function PaymentInit({ data: { amount } }: NodeProps<{ amount: number }>) {
    return (
        <Box bg="white" border="1px solid #aa1fff" py={0}>
            <Box bg="#410566" p={10} mt={-7} py="12" >
                <Text fontSize="large" color="white">
                    Payment Initialized
                </Text>
            </Box>
            <Box p={2} my={10}>
                <Text fontSize={17} color="blue.600">
                    ${amount}
                </Text>
            </Box>
            <CustomHandle type="source" position={Position.Right} />
        </Box>
    )
}