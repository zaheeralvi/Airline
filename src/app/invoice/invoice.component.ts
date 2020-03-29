import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LeadService } from '../lead/lead.service';
import { Post } from '../lead/lead.module';
import * as html2pdf from 'html2pdf.js';
import * as jsPDF from 'jspdf';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {


  selectedOption = '';
  leadtitle = '';
  customerName = '';
  requirement = '';
  shortNote = '';
  leadStatus = '';
  holidayType = '';
  noOfAdult = '';
  noOfKids = '';
  noOfInfants = '';
  hotelPerformance = '';
  personCouple = '';
  currency = '';
  amount = '';
  destination = '';
  groupTourPackage = '';
  customeremail = '';
  customermobile = '';
  customeraddress = '';
  startdate = '';
  enddate = '';
  hotelCheckIN = '';
  hotelCheckOut = '';
  cabTimeDate = '';
  transportation = '';
  hotelstay = '';
  sightseeing = '';
  visafees = '';
  governmentTax = '';
  surcharge = '';
  cruisestay = '';
  freegoodies = '';
  stayandmeals = '';
  passportfees = '';
  staybreakfast = '';
  tourmanager = '';
  breakfastanddinner = '';
  totaldayscount = '';
  itineraryType = '';
  itineraryName = '';
  citiesCovers = '';

  post: Post;
  isLoading = false;
  successalert = false;
  // tslint:disable-next-line: max-line-length
  vehicleType = ['Airplane', 'Auto', 'Boat', 'Bus', 'Bus (12 Seater)', 'Car (Indica or Equivalent 4 Seater)',
  'Car (Innova or Equivalent 6 Seater)', 'Suv (Big Car)', 'Tempo Traveller (26 Seater)', 'Tempo Traveller (9 Seater)', 'Train',
  'Tempo Traveller (22 Seater)', 'Tempo Traveller (14 Seater)', 'Tempo Traveller (17 Seater)', 'Tempo Traveller (19 Seater)',
  'Tuk Tuk',  'Water Crafts', 'Walk', 'Van'];

  private mode = 'create';
  private postId = null;


  selectChangeHandler(event: any) {
    this.selectedOption = event.target.value;
  }

  constructor(public postsService: LeadService, public route: ActivatedRoute, private router: Router, private titleService: Title ) { }

  total1 : number;
  total2 : number;
  subtotal: number;
  invoiceCGST: number;
  invoiceSGST: number;
  invoiceIGST: number;
  invoiceGrandTotal: number;

  currentLesson = true;

  sumValue() {
    var rate = (<HTMLInputElement>document.getElementById('invoiceRate1')).value;
    var quantity = (<HTMLInputElement>document.getElementById('invoiceQuantity1')).value;
    var discount = (<HTMLInputElement>document.getElementById('invoiceDiscount1')).value;
    var gst = (<HTMLInputElement>document.getElementById('invoiceGST1')).value;
    var hsn = (<HTMLInputElement>document.getElementById('invoiceHSN1')).value;

    var rate2 = (<HTMLInputElement>document.getElementById('invoiceRate2')).value;
    var quantity2 = (<HTMLInputElement>document.getElementById('invoiceQuantity2')).value;
    var discount2 = (<HTMLInputElement>document.getElementById('invoiceDiscount2')).value;
    var gst2 = (<HTMLInputElement>document.getElementById('invoiceGST2')).value;
    var hsn2 = (<HTMLInputElement>document.getElementById('invoiceHSN2')).value;

    this.total1 = parseFloat(rate) + parseFloat(quantity) - parseFloat(discount) + parseFloat(gst) + parseFloat(hsn);
    this.total2 = parseFloat(rate2) + parseFloat(quantity2) - parseFloat(discount2) + parseFloat(gst2) + parseFloat(hsn2);
    this.subtotal = this.total1 + this.total2;
    this.invoiceCGST = this.subtotal * 5 / 100;
    this.invoiceSGST =  this.subtotal * 8 / 100;
    this.invoiceIGST = this.subtotal * 6 / 100;
    this.invoiceGrandTotal = this.subtotal + this.invoiceCGST + this.invoiceSGST + this.invoiceIGST;

    this.currentLesson = false;
  }

  addValues() {
    console.log('Clicked Add');
  }
  onSaveLead(form: NgForm) {
    form.value.userId = sessionStorage.getItem('USERID');
    form.value.email = sessionStorage.getItem('EMAIL');
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      // tslint:disable-next-line: max-line-length
      this.postsService.addPost(form.value);
    } else {
      this.isLoading = false;
      form.value.id = this.postId;
      this.postsService.updatePost(this.postId, form.value);
    }
    form.resetForm();
    this.successalert = true;
    setTimeout(() => { this.successalert = false; }, 1000);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
        this.isLoading = true;
        this.post = this.postsService.getPost(this.postId);
        this.isLoading = false;
      } else {
        this.mode = 'create';
        this.postId = null;
      }
    });
  }

  downloadInvoicePDF() {
    this.titleService.setTitle('Invoice_' + this.post.leadtitle + '_' + this.post.invoicedate);
    window.print();
    this.router.navigate(['viewlead']);
    this.titleService.setTitle('Angular App');
  }
  backToLeadView() {
    this.router.navigate(['viewlead']);
  }
  backToCreateLead() {
    this.router.navigate(['create']);
  }

}
