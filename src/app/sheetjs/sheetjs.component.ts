/* Adapted almost verbatum from https://github.com/SheetJS/js-xlsx/blob/master/demos/angular2/src/app/sheetjs.component.ts */
import { Component, OnInit, Input }    from '@angular/core';
import * as XLSX                from 'xlsx';
import { Resort }               from '../resort';
import { ResortService }        from '../resort.service';
import { MessageService }       from '../message.service';

type AOA = any[][];

@Component({
  selector: 'app-sheetjs',
  templateUrl: './sheetjs.component.html',
  styleUrls: ['./sheetjs.component.css']
})
export class SheetjsComponent implements OnInit {
  @Input() resorts: Report[];
  @Input() data: AOA;
  private headers: string[];

  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'SheetJS.xlsx';

  constructor(
    private resortService: ResortService,
    private messageService: MessageService
  ) { }

  ngOnInit() { }

  ngOnChanges(): void {
    this.data = this.resortService.getData();
    this.resorts = this.resortService.getResorts();
  }

  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      let raw_AOA = <AOA>(XLSX.utils.sheet_to_json(ws, {header: 1}));
      let counter: number = 0;
      let keys = [];
      raw_AOA.map(function(r){
        if(counter == 0){
          r.unshift("ID");
          keys = r;
        } else {
          r.unshift(`${counter}`);
        }
        counter++;
      });

      this.resortService.setData(raw_AOA);
      this.resortService.setResorts(raw_AOA);
      // this.data = raw_AOA;
      // this.setListing();
    };
    reader.readAsBinaryString(target.files[0]);
  }

  export(): void {
    /* generate worksheet */
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.resortService.getData());

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }

  // convertToResorts(data: any): Resort[] {
  //   return data.map(function(r, index){
  //     if(r[0] !== "ID" && r[1] !== "NAME") {
  //       // console.log("convert: ", r, index);
  //       return new Resort(r);
  //     } else {
  //       // first row is the header
  //       return r;
  //     }
  //   });
  // }

  // setListing(): void {
  //   let data_no_header = this.data.slice(1);
  //   // console.log("pre-listing: ", this.listing);
  //   console.log("cast-listing: ", data_no_header);

  //   this.listing = this.resortService.convertToResorts(data_no_header);
  //   console.log("data: ", this.data);
  //   console.log("post-listing: ", this.listing);
  // }
}
