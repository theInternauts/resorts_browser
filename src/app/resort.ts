export class Resort {
  id: number;
  name: string;
  url: string;
  trail_map_url: string;
  logo_url: string;
  address: string;
  phone: string;
  hours_of_operation: string;
  lifts: number;
  trails: number;
  acres: number;
  terrain_park: boolean;

  // constructor (
  //   id: number,
  //   name: string,
  //   url: string,
  //   trail_map_url: string,
  //   logo_url: string,
  //   address: string,
  //   phone: string,
  //   hours_of_operation: string,
  //   lifts: number,
  //   trails: number,
  //   acres: number,
  //   terrain_park: boolean
  // ){
  //   this.id = id;
  //   this.name = name;
  //   this.url = url;
  //   this.trail_map_url = trail_map_url;
  //   this.logo_url = logo_url;
  //   this.address = address;
  //   this.phone = phone;
  //   this.hours_of_operation = hours_of_operation;
  //   this.lifts = lifts;
  //   this.trails = trails;
  //   this.acres = acres;
  //   this.terrain_park = terrain_park;
  // }
  constructor (args: any[]){
    this.id = args[0];
    this.name = args[1];
    this.url = args[2];
    this.trail_map_url = args[3];
    this.logo_url = args[4];
    this.address = args[5];
    this.phone = args[6];
    this.hours_of_operation = args[7];
    this.lifts = args[8];
    this.trails = args[9];
    this.acres = args[10];
    this.terrain_park = args[11];
  }
}