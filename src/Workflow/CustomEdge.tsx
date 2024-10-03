import { IconButton } from '@chakra-ui/react';
import React from 'react';
import { X } from 'react-bootstrap-icons';
import { BezierEdge, EdgeLabelRenderer, EdgeProps, getBezierPath, Handle, Position, useReactFlow } from 'reactflow';

export default function CustomEdge(props: EdgeProps) {
    const { id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition } = props;

    const [edgePath, labelX, labelY] = getBezierPath({
        sourceX,
        sourceY,
        targetX,
        targetY,
        sourcePosition,
        targetPosition,
    });

    const { setEdges } = useReactFlow();

    const handleDeleteEdge = (event: React.MouseEvent) => {
        event.stopPropagation(); // Prevent triggering other events
        setEdges((prevEdges) => {
            console.log({ id })
            let pedge = prevEdges.filter((edge) => edge.id != id)
            console.log({ prevEdges, pedge: id })
            return pedge
        }
        )
    };


    return (
        <>
            <BezierEdge {...props} />
            <EdgeLabelRenderer>
                <IconButton
                    background={"black"}
                    aria-label='Delete Edge'
                    border={"1px solid border"}
                    borderRadius={"11px"}
                    pos="absolute"
                    fontSize={"12px"}
                    cursor={"pointer"}
                    icon={<X style={{ border: "1px solid border" }} fontSize={20} />} // Custom icon
                    // icon={<div style={{ color: 'red', fontSize:"14px" }}>x</div>} // Custom icon
                    color="red"
                    transform={`translate(-1300%, -30%) translate(${labelX}px, ${labelY}px)`}
                    pointerEvents="all"
                    bg="transparent"
                    size="lg"
                    onClick={handleDeleteEdge}
                />
                <Handle type="target" position={Position.Left}></Handle>
            </EdgeLabelRenderer >
        </>
    );
}
