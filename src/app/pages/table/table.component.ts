import { Component, OnInit } from '@angular/core';
import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';
@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit {
    // public tableData1: TableData;
    // public tableData2: TableData;
    // ngOnInit(){
    //     this.tableData1 = {
    //         headerRow: [ 'ID', 'Name', 'Country', 'City', 'Salary'],
    //         dataRows: [
    //             ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
    //             ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
    //             ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
    //             ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
    //             ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
    //             ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
    //         ]
    //     };
    //     this.tableData2 = {
    //         headerRow: [ 'ID', 'Name',  'Salary', 'Country', 'City' ],
    //         dataRows: [
    //             ['1', 'Dakota Rice','$36,738', 'Niger', 'Oud-Turnhout' ],
    //             ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
    //             ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux' ],
    //             ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park' ],
    //             ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten', ],
    //             ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester' ]
    //         ]
    //     };
    // }
    ngOnInit(): void  {
        modifyPdf();
    }

}

async function modifyPdf() {
    const url = 'https://pdf-lib.js.org/assets/with_update_sections.pdf'
    const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())
  
    const pdfDoc = await PDFDocument.load(existingPdfBytes)
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
  
    const pages = pdfDoc.getPages()
    const firstPage = pages[0]
    const { width, height } = firstPage.getSize()
    firstPage.drawText('This text was added with JavaScript!', {
      x: 5,
      y: height / 2 + 300,
      size: 50,
      font: helveticaFont,
      color: rgb(0.95, 0.1, 0.1),
      rotate: degrees(-45),
    })
    const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
  }