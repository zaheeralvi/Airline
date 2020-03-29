import { environment } from './../../environments/environment.prod';
////
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
////
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })

export class GeneratePdfService {
    _iCoverImg;
    createPdf(data) {
        const _coverImgUrl = environment.uploadUrl + data.itineraryImage;
        const fileName = data.itineraryImage.substring(data.itineraryImage.lastIndexOf('/') + 1)
        this.generateBase64Data(_coverImgUrl)
            .then(dataUrl => {
                this._iCoverImg = dataUrl;
                const _logo = this.logo();
                const documentDefinition = {
                    pageSize: 'LETTER',
                    // pageMargins: [0, 0, 0, 0],
                    // background: [
                    //     {
                    //         image: _iCoverImg,
                    //         width: 910,
                    //         height: 842,
                    //     }
                    //    ],
                    content: [
                        {
                            image: this._iCoverImg,
                            width: 610,
                            height: 842,
                            absolutePosition: { x: 1, y: 1 },
                        },
                        {
                            style: 'tableExample',
                            table: {
                                body: [
                                    [
                                        {
                                            border: [false, false, false, false],
                                            image: _logo,
                                            width: 120,
                                            height: 80,
                                            absolutePosition: { x: 10, y: 10 },
                                            fillColor: '#eeeeee',
                                        },
                                    ]
                                ]
                            },
                            layout: {
                                defaultBorder: false,
                            }
                            // pageBreak: 'after'
                        },
                        {
                            text: 'Text over image',
                            absolutePosition: { x: 400, y: 50 },
                            pageBreak: 'after'
                        },
                        {
                            text: 'DAY 1',
                            pageBreak: 'after'
                        },
                        {
                            text: 'DAY 2',
                            pageBreak: 'after'
                        },
                        {
                            text: 'DAY 3',
                        }

                    ],
                    styles: {
                        tableExample: {
                            margin: [0, 5, 0, 15]
                        },
                    }
                };
                //pdfMake.createPdf(documentDefinition).open();
                pdfMake.createPdf(documentDefinition).download();
            });
    }

    generateBase64Data = url => fetch(url)
        .then(response => response.blob())
        .then(blob => new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.onloadend = () => resolve(reader.result)
            reader.onerror = reject
            reader.readAsDataURL(blob)
        }));

    logo() {
      return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMsAAAK"
    }
}
