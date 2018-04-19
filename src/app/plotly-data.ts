export class PlotlyData {
  x: Array<any>;
  y: Array<any>;
  name: string;
  type: string;

  constructor (args: any[]){
    this.x = args[0];
    this.y = args[1];
    this.name = args[2];
    this.type = args[3];
  }
}