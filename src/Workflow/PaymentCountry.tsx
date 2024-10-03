import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import ReactCountryFlag from "react-country-flag";
import { Handle, NodeProps, Position } from "reactflow";
import CustomHandle from "./Customhandle";

export default function PaymentCountry({ data: { currency, country, countryCode } }: NodeProps<{
    currency: string,
    country: string,
    countryCode: string;
}>) {
    return (
        <Flex
            alignItems={"center"}
            borderRadius={"8px"}
            bg="#e2e8f0"
            border="2px solid #bbbdbf"
            p={3}
            px={"10px"}
            gap={6}
            width="155px"
        >
            <Box style={{padding: "3px"}}>
                <ReactCountryFlag
                    countryCode={countryCode} svg aria-label={country}
                    style={{ fontSize: "2em", lineHeight: "2em" }}
                />
            </Box>
            <Flex grow="1">
                <Box fontSize={"17px"} paddingY={"4px"} >
                    <Text fontWeight={"medium"}> {country}</Text>
                    <Text   fontSize="large" mt={"2px"} textAlign={"left"}> {currency}</Text>
                </Box>
            </Flex>
            <CustomHandle type="source" position={Position.Right} />
            <CustomHandle type="target" position={Position.Left} />
        </Flex>
    )
}