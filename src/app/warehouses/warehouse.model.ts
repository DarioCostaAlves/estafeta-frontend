import { GraphNode } from "../graph-nodes/graph-node.model";
import { ParsedCoordinates } from "../graph-nodes/graph-node.service";

export interface Warehouse {    
  id: number;
  name: string;
  coordinate: GraphNode;
  parsedCoordinate: ParsedCoordinates; // Novo atributo para armazenar as coordenadas analisadas
  inactive: boolean;
}