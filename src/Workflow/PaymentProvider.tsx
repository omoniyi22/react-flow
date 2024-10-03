import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Handle, NodeProps, Position, useReactFlow } from "reactflow";
import CustomHandle from "./Customhandle";
import { X } from "react-bootstrap-icons";

const PAYMENT_PROVIDER_IMAGE_MAP: { [code: string]: string } = {
    St: "https://cdn.worldvectorlogo.com/logos/stripe-2.svg",
    Ap: "https://cdn.worldvectorlogo.com/logos/apple-14.svg",
    Gp: "https://cdn.worldvectorlogo.com/logos/google-g-2015.svg",
    Pp: "https://avatars.githubusercontent.com/u/476675?s=280&v=4",
    Am: "https://static.wixstatic.com/media/d2252d_4c1a1bda6a774bd68f789c0770fd16e5~mv2.png",
}

// const X = () => <div>x</div>


export default function PaymentProvider({ data: { name, code },
    id }:
    NodeProps<{ name: string, code: string }>) {
    const { setNodes } = useReactFlow();
    console.log({ id })
    return (
        <Flex
            borderRadius={"24px"}
            direction={"row"}
            border="2px solid #5e5eff"
            alignItems={"center"}
            justifyContent={"center"}
            alignContent={"center"}
            bg="white"
            p={4}
            py={14}
            pl={"12px"}
            gap={2}
            width="140px"
        >
            <Box border={"solid"} style={{ border: "white", alignContent: "center", justifyContent: "center", textAlign: "center", display: "flex" }}>
                <Image height="22px" width="22px" src={PAYMENT_PROVIDER_IMAGE_MAP[code]} />
            </Box>
            <Flex grow="1" marginLeft={"13px"} >
                <Text fontSize="small" fontWeight={"bold"} color={"#350554"} mt={"0px"}>
                    {name}
                </Text>
            </Flex>

            <IconButton
                aria-label="Delete Payment Provider"
                pointerEvents={"all"}
                icon={<X size="20" />}
                marginRight={"5px"}
                color="black"
                fontWeight={"bold"}
                cursor={"pointer"}
                border={"none"}
                bg="transparent"
                
                onClick={() => {
                    console.log({ idd: id })
                    setNodes((prevNodes) =>
                        prevNodes.filter((node) => {
                            console.log({ node_id: node.id, id: id })
                            return node.id !== id
                        })

                    )
                }}
            />
            <CustomHandle type="target" position={Position.Left} />
        </Flex>
    )
}