import { GraphNode } from "../graph-nodes/graph-node.model";

export interface Warehouse {
    id: number;
    name: string;
    coordinate: GraphNode;
    inactive: boolean;
  }