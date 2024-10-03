import { Button, Menu, MenuButton, MenuItem, MenuList, StatDownArrow } from "@chakra-ui/react";
import { Dropdown } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { useReactFlow } from "reactflow";

const PAYMENT_PROVIDERS = [
    { code: "St", name: "Stripe" },
    { code: "Gp", name: "Google Pay" },
    { code: "Ap", name: "Apple Pay" },
    { code: "Pp", name: "Paypal" },
    { code: "Am", name: "AmazonPay" }
]

export default function PaymentProviderSelect() {

    const { setNodes } = useReactFlow()


    const onProviderClick = ({ name, code }: { name: string, code: string }) => {

        const location = Math.random() * 500;

        setNodes(prevNodes => {

            let node = [
                ...prevNodes, {
                    id: `${prevNodes.length + 1}`,
                    data: { name, code },
                    type: "paymentProvider",
                    position: { x: location, y: location }
                },
            ]
            console.log({ new_node: node })
            return node
        }
        )
    }

    return (
        <div >
            <Dropdown appearance="primary" menuStyle={{ fontSize: "15.5px" }} title="Add Payment Provider">
                {PAYMENT_PROVIDERS.map((provider) =>
                    <Dropdown.Item onClick={() => onProviderClick(provider)}>{provider.name}</Dropdown.Item>)}
            </Dropdown>
        </div>

    )
}