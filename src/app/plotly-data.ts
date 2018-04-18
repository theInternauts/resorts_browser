export class PlotlyData {
  x: array;
  y: array;
  name: string;
  type: string;

  constructor (args: <any>){
    this.x = args.x;
    this.y = args.y;
    this.name = args.name;
    this.type = args.type;
  }
}