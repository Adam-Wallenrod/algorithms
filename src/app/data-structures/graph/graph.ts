export class GraphNode {

  private name: string;
  private links: Link[] = [];
  readonly id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }


  public addLink(weight: number, nodeId: number): void {
    const newLink: Link = new Link(weight, nodeId);
    this.links.push(newLink);
  }

}


export class Link {
  private weight: number;
  private secondNodeId: number;

  constructor(weight: number, secondNodeId: number) {
    this.weight = weight;
    this.secondNodeId = secondNodeId;

  }

}


export class Graph {

  private static id = 1;
  private nodes: GraphNode[] = [];
  private graphName: string;

  constructor(graphName: string) {
    this.graphName = graphName;
  }

  public addNode(name: string): void {
    const node: GraphNode = new GraphNode(name, Graph.id);
    this.nodes.push(node);
    Graph.id++;

  }


  public addLink(firstNodeId: number, secondNodeId: number, weight: number) {
    const firstNode: GraphNode = this.nodes.find(node => node.id === firstNodeId);
    if (!firstNode) {
      throw Error('firstNodeId is incorrect!');
    }

    const secondNode: GraphNode = this.nodes.find(node => node.id === secondNodeId);
    if (!secondNode) {
      throw Error('secondNodeId is incorrect!');
    }

    // if both provided ids are correct, create a link between nodes
    firstNode.addLink(weight, secondNodeId);
    secondNode.addLink(weight, firstNodeId);

  }

  public displayNodes(): void {
    console.log('all Nodes: ', this.nodes);
  }

}
