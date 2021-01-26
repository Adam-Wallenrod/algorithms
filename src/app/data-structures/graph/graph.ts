export class GraphNode {

  private name: string;
  private links: Link[] = [];
  private id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }


  public addLink(weight: number, node: GraphNode) {
    const newLink: Link = new Link(weight, node);
    this.links.push(newLink);
  }

}


export class Link {
  private weight: number;
  private secondNode: GraphNode;

  constructor(weight: number, secondNode: GraphNode) {
    this.weight = weight;
    this.secondNode = secondNode;

  }

}


export class Graph {

  private static id = 0;
  private nodes: GraphNode[] = [];
  private graphName: string;

  constructor(graphName: string) {
    this.graphName = graphName;
  }

  public addNode(name: string) {
    const node: GraphNode = new GraphNode(name, Graph.id);
    this.nodes.push(node);
    Graph.id++;

  }

}
