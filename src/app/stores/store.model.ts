import { GraphNode } from "../graph-nodes/graph-node.model";

export interface Store {
  id: number;
  name: string;
  coordinate: GraphNode;
  inactive: boolean;
}
