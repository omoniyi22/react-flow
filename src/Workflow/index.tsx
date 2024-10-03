import './../App.css';
import { ReactFlow, addEdge, applyNodeChanges, Background, Connection, Controls, Edge, MiniMap, Node, useEdgesState, useNodesState } from "reactflow";
import "reactflow/dist/style.css";
import { Box } from "@chakra-ui/react";
import { useCallback } from 'react';
import PaymentInit from './PaymentInit';
import { initialNodes } from './Webflow.constants';
import PaymentCountry from './PaymentCountry';
import PaymentProvider from './PaymentProvider';
import PaymentProviderSelect from './PaymentProviderSelect';
import CustomEdge from './CustomEdge';
import '@xyflow/react/dist/style.css';


const nodeTypes = {
  paymentInit: PaymentInit,
  paymentCountry: PaymentCountry,
  paymentProvider: PaymentProvider,
  paymentProviderSelect: PaymentProviderSelect
}

const edgeTypes = {
  "custom-edge": CustomEdge
}


const initialEdges: Edge[] = [
  // { id: "1-2", source: "1", target: "2", animated: true, }
];

function WorkFlow() {

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback((connection: Connection) => {
    const edge = { ...connection, animated: true, id: `${edges.length} + 1`, type: "custom-edge" };
    setEdges(prevEdges => addEdge(edge, prevEdges))
  }, [edges])

  // const onNodesChange = (changes: any) => {
  //   setNodes((nds) => applyNodeChanges(changes, nds));
  // };

  return (
    <div className="App box-center">
      <Box height={"500px"} width="500px" border="1px solid black">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onEdgesChange={onEdgesChange}
          fitView
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          onConnect={onConnect}
          onNodesChange={onNodesChange}
        >
          <Background />
          <Controls />
        </ReactFlow>
      </Box>
    </div>
  );
}

export default WorkFlow;
