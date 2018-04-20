export class PlotlyData {
  x: Array<any>;
  y: Array<any>;
  name: string;
  type: string;

  constructor (args: any){
    this.x = args.x;
    this.y = args.y;
    this.name = args.name;
    this.type = args.type;
  }
}