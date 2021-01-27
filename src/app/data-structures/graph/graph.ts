export class GraphNode {

  public readonly name: string;
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

  public getLinks(): Link[] {
    return this.links;
  }

}


export class Link {
  readonly weight: number;
  readonly secondNodeId: number;

  constructor(weight: number, secondNodeId: number) {
    this.weight = weight;
    this.secondNodeId = secondNodeId;

  }

}


export class Graph {

  private static id = 1;
  private nodes: GraphNode[] = [];
  private graphName: string;
  private rootNode: GraphNode;

  constructor(graphName: string) {
    this.graphName = graphName;

  }

  public addNode(name: string): void {
    const node: GraphNode = new GraphNode(name, Graph.id);
    if (!this.rootNode) {
      this.rootNode = node;
    }
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
    // secondNode.addLink(weight, firstNodeId);

  }

  public displayNodes(): void {
    console.log('all Nodes: ', this.nodes);
  }


  deepFirstSearch(node?: GraphNode) {
    if (!node) {
      node = this.rootNode;
    }
    console.log(node.name);
    const nodeLinks: Link[] = node.getLinks();
    if (nodeLinks) {
      nodeLinks.forEach(link => this.deepFirstSearch(this.getNodeById(link.secondNodeId)));
    }

  }


  getNodeById(id: number): GraphNode {
    return this.nodes.find(node => node.id === id);
  }


}

