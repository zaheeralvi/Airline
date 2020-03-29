import { environment } from './../../environments/environment';
import { FileUploader } from 'ng2-file-upload';
import { HotelService } from './../add-new-hotel/hotel.service';
import {
  Component,
  OnInit,
  SimpleChanges,
  OnChanges,
  ViewChild,
  ElementRef,
  HostListener,
  AfterContentInit,
  AfterViewInit,
  AfterContentChecked,
  AfterViewChecked
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { LeadService } from './lead.service';
import { Post } from '../lead/lead.module';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

const URL = `${environment.apiUrl}/uploads`;

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css']
})
export class LeadComponent implements OnInit, AfterContentInit, AfterViewInit, AfterContentChecked, AfterViewChecked {

  public uploader: FileUploader = new FileUploader({
    url: URL,
    itemAlias: 'image'
  });

  selectedOption = '';
  welcomeOption = '';
  selectedOptionDays = '';
  thankYouOption = '';
  dayPlanOption = '';

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
  invoicenumber = '';
  invoicedate = '';
  invoiceBilling = '';
  invoiceCustomerGSTIN = '';
  invoiceStateCode = '';
  invoiceCustmerPAN = '';
  invoiceAddress = '';
  invoiceSupply = '';
  invoicecomment1 = '';
  invoicecomment2 = '';
  inclusionnote = '';
  exclusionnote = '';
  itineraryCustomer = '';
  itineraryEmail = '';
  itineraryContact = '';
  itineraryAddress = '';
  flightTrips = '';
  itineraryWelcome = '';
  sightseeingSearchValue = '';


  post: Post;
  isLoading = false;
  successalert = false;
  searchText;

  editLeadButton = false;
  // tslint:disable-next-line: no-inferrable-types
  status: boolean = false;
  firstRowAdded: boolean = false;
  secondRowAdded: boolean = false;
  statusOption: boolean = false;
  statusOption1: boolean = false;
  statusOption2: boolean = false;
  statusOption3: boolean = false;
  statusOption4: boolean = false;
  statusOption5: boolean = false;
  statusOption6: boolean = false;
  statusOption7: boolean = false;
  statusOption8: boolean = false;
  statusOption9: boolean = false;
  statusOption10: boolean = false;
  statusOption11: boolean = false;
  statusOption12: boolean = false;
  statusOption13: boolean = false;
  statusOption14: boolean = false;
  statusOption15: boolean = false;
  statusOption16: boolean = false;
  statusOption17: boolean = false;
  statusOption18: boolean = false;
  statusOption19: boolean = false;
  statusOption20: boolean = false;
  statusOption21: boolean = false;
  statusOption22: boolean = false;
  pathRoute: string;


  // tslint:disable-next-line: max-line-length
  vehicleType = ['Airplane', 'Auto', 'Boat', 'Bus', 'Bus (12 Seater)', 'Car (Indica or Equivalent 4 Seater)',
    'Car (Innova or Equivalent 6 Seater)', 'Suv (Big Car)', 'Tempo Traveller (26 Seater)', 'Tempo Traveller (9 Seater)', 'Train',
    'Tempo Traveller (22 Seater)', 'Tempo Traveller (14 Seater)', 'Tempo Traveller (17 Seater)', 'Tempo Traveller (19 Seater)',
    'Tuk Tuk', 'Water Crafts', 'Walk', 'Van'];

  // tslint:disable-next-line: max-line-length
  country = ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua And Barbuda',
    'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas The', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin',
    'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Bouvet Island', 'Brazil', 'British Indian Ocean Territory', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi',
    'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros',
    'Congo', 'Congo The Democratic Republic Of The', 'Cook Islands', 'Costa Rica', 'Cote D"Ivoire (Ivory Coast)', 'Croatia (Hrvatska)', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica',
    'Dominican Republic ', 'East Timor ', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'External Territories of Australia', 'Falkland Islands', 'Faroe Islands', 'Fiji Islands',
    'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern Territories', 'Gabon', 'Gambia The', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala',
    'Guernsey and Alderney', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard and McDonald Islands', 'Honduras', 'Hong Kong S.A.R.', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan',
    'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea North', 'Korea South', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau S.A.R.', 'Macedonia', 'Madagascar',
    'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Man (Isle of)', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru',
    'Nepal', 'Netherlands Antilles', 'Netherlands The', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestinian Territory Occupied', 'Panama', 'Papua new Guinea', 'Paraguay',
    'Peru', 'Philippines', 'Pitcairn Island', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Helena', 'Saint Kitts And Nevis', 'Saint Lucia', 'Saint Pierre and Miquelon', 'Saint Vincent And The Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe',
    'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Smaller Territories of the UK', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard And Jan Mayen Islands', 'Swaziland',
    'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad And Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks And Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates',
    'United Kingdom', 'United States', 'United States Minor Outlying Islands', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City State (Holy See)', 'Venezuela', 'Vietnam', 'Virgin Islands (British)', 'Virgin Islands (US)', 'Wallis And Futuna Islands', 'Western Sahara', 'Yemen',
    'Yugoslavia', 'Zambia', 'Zimbabwe'];

  indiaState = ['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Pondicherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', '', 'Tamilnadu', 'Talengana', 'Pndicherry', 'Andrapradesh', 'Madhyapradesh'];

  private mode = 'create';
  private postId = null;

  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Attack of the Clones'
  ];

  statusOptionDay1: boolean = false;
  transportationDay1: boolean = false;
  hotelCheckInnDay1: boolean = false;
  transportationReturnDay1: boolean = false;
  hotelCheckOutDay1: boolean = false;
  sightseeingDay1: boolean = false;
  mealFoodDay1: boolean = false;
  showsightseeingTwo: boolean = false;
  showsightseeingThree: boolean = false;
  showsightseeingFour: boolean = false;
  showsightseeingFive: boolean = false;
  showsightseeingSix: boolean = false;
  showsightseeingSaven: boolean = false;
  showsightseeingEight: boolean = false;
  showsightseeingNine: boolean = false;
  showsightseeingTen: boolean = false;
  showsightseeing11: boolean = false;
  showsightseeing12: boolean = false;
  showsightseeing13: boolean = false;
  showsightseeing14: boolean = false;
  showsightseeing15: boolean = false;
  showsightseeing16: boolean = false;
  showsightseeing17: boolean = false;
  showsightseeing18: boolean = false;
  showsightseeing19: boolean = false;
  showsightseeing20: boolean = false;

  showsightseeingDay2_01: boolean = false;
  showsightseeingDay2_02: boolean = false;
  showsightseeingDay2_03: boolean = false;
  showsightseeingDay2_04: boolean = false;
  showsightseeingDay2_05: boolean = false;
  showsightseeingDay2_06: boolean = false;
  showsightseeingDay2_07: boolean = false;
  showsightseeingDay2_08: boolean = false;
  showsightseeingDay2_09: boolean = false;
  showsightseeingDay2_10: boolean = false;

  showsightseeingDay3_01: boolean = false;
  showsightseeingDay3_02: boolean = false;
  showsightseeingDay3_03: boolean = false;
  showsightseeingDay3_04: boolean = false;
  showsightseeingDay3_05: boolean = false;
  showsightseeingDay3_06: boolean = false;
  showsightseeingDay3_07: boolean = false;
  showsightseeingDay3_08: boolean = false;
  showsightseeingDay3_09: boolean = false;
  showsightseeingDay3_10: boolean = false;

  showsightseeingDay4_01: boolean = false;
  showsightseeingDay4_02: boolean = false;
  showsightseeingDay4_03: boolean = false;
  showsightseeingDay4_04: boolean = false;
  showsightseeingDay4_05: boolean = false;
  showsightseeingDay4_06: boolean = false;
  showsightseeingDay4_07: boolean = false;
  showsightseeingDay4_08: boolean = false;
  showsightseeingDay4_09: boolean = false;
  showsightseeingDay4_10: boolean = false;

  showsightseeingDay5_01: boolean = false;
  showsightseeingDay5_02: boolean = false;
  showsightseeingDay5_03: boolean = false;
  showsightseeingDay5_04: boolean = false;
  showsightseeingDay5_05: boolean = false;
  showsightseeingDay5_06: boolean = false;
  showsightseeingDay5_07: boolean = false;
  showsightseeingDay5_08: boolean = false;
  showsightseeingDay5_09: boolean = false;
  showsightseeingDay5_10: boolean = false;

  showsightseeingDay6_01: boolean = false;
  showsightseeingDay6_02: boolean = false;
  showsightseeingDay6_03: boolean = false;
  showsightseeingDay6_04: boolean = false;
  showsightseeingDay6_05: boolean = false;
  showsightseeingDay6_06: boolean = false;
  showsightseeingDay6_07: boolean = false;
  showsightseeingDay6_08: boolean = false;
  showsightseeingDay6_09: boolean = false;
  showsightseeingDay6_10: boolean = false;

  showsightseeingDay7_01: boolean = false;
  showsightseeingDay7_02: boolean = false;
  showsightseeingDay7_03: boolean = false;
  showsightseeingDay7_04: boolean = false;
  showsightseeingDay7_05: boolean = false;
  showsightseeingDay7_06: boolean = false;
  showsightseeingDay7_07: boolean = false;
  showsightseeingDay7_08: boolean = false;
  showsightseeingDay7_09: boolean = false;
  showsightseeingDay7_10: boolean = false;

  showsightseeingDay8_01: boolean = false;
  showsightseeingDay8_02: boolean = false;
  showsightseeingDay8_03: boolean = false;
  showsightseeingDay8_04: boolean = false;
  showsightseeingDay8_05: boolean = false;
  showsightseeingDay8_06: boolean = false;
  showsightseeingDay8_07: boolean = false;
  showsightseeingDay8_08: boolean = false;
  showsightseeingDay8_09: boolean = false;
  showsightseeingDay8_10: boolean = false;

  showsightseeingDay9_01: boolean = false;
  showsightseeingDay9_02: boolean = false;
  showsightseeingDay9_03: boolean = false;
  showsightseeingDay9_04: boolean = false;
  showsightseeingDay9_05: boolean = false;
  showsightseeingDay9_06: boolean = false;
  showsightseeingDay9_07: boolean = false;
  showsightseeingDay9_08: boolean = false;
  showsightseeingDay9_09: boolean = false;
  showsightseeingDay9_10: boolean = false;

  showsightseeingDay10_01: boolean = false;
  showsightseeingDay10_02: boolean = false;
  showsightseeingDay10_03: boolean = false;
  showsightseeingDay10_04: boolean = false;
  showsightseeingDay10_05: boolean = false;
  showsightseeingDay10_06: boolean = false;
  showsightseeingDay10_07: boolean = false;
  showsightseeingDay10_08: boolean = false;
  showsightseeingDay10_09: boolean = false;
  showsightseeingDay10_10: boolean = false;

  showsightseeingDay11_01: boolean = false;
  showsightseeingDay11_02: boolean = false;
  showsightseeingDay11_03: boolean = false;
  showsightseeingDay11_04: boolean = false;
  showsightseeingDay11_05: boolean = false;
  showsightseeingDay11_06: boolean = false;
  showsightseeingDay11_07: boolean = false;
  showsightseeingDay11_08: boolean = false;
  showsightseeingDay11_09: boolean = false;
  showsightseeingDay11_10: boolean = false;

  showsightseeingDay12_01: boolean = false;
  showsightseeingDay12_02: boolean = false;
  showsightseeingDay12_03: boolean = false;
  showsightseeingDay12_04: boolean = false;
  showsightseeingDay12_05: boolean = false;
  showsightseeingDay12_06: boolean = false;
  showsightseeingDay12_07: boolean = false;
  showsightseeingDay12_08: boolean = false;
  showsightseeingDay12_09: boolean = false;
  showsightseeingDay12_10: boolean = false;

  showsightseeingDay13_01: boolean = false;
  showsightseeingDay13_02: boolean = false;
  showsightseeingDay13_03: boolean = false;
  showsightseeingDay13_04: boolean = false;
  showsightseeingDay13_05: boolean = false;
  showsightseeingDay13_06: boolean = false;
  showsightseeingDay13_07: boolean = false;
  showsightseeingDay13_08: boolean = false;
  showsightseeingDay13_09: boolean = false;
  showsightseeingDay13_10: boolean = false;

  showsightseeingDay14_01: boolean = false;
  showsightseeingDay14_02: boolean = false;
  showsightseeingDay14_03: boolean = false;
  showsightseeingDay14_04: boolean = false;
  showsightseeingDay14_05: boolean = false;
  showsightseeingDay14_06: boolean = false;
  showsightseeingDay14_07: boolean = false;
  showsightseeingDay14_08: boolean = false;
  showsightseeingDay14_09: boolean = false;
  showsightseeingDay14_10: boolean = false;

  showsightseeingDay15_01: boolean = false;
  showsightseeingDay15_02: boolean = false;
  showsightseeingDay15_03: boolean = false;
  showsightseeingDay15_04: boolean = false;
  showsightseeingDay15_05: boolean = false;
  showsightseeingDay15_06: boolean = false;
  showsightseeingDay15_07: boolean = false;
  showsightseeingDay15_08: boolean = false;
  showsightseeingDay15_09: boolean = false;
  showsightseeingDay15_10: boolean = false;

  showsightseeingDay16_01: boolean = false;
  showsightseeingDay16_02: boolean = false;
  showsightseeingDay16_03: boolean = false;
  showsightseeingDay16_04: boolean = false;
  showsightseeingDay16_05: boolean = false;
  showsightseeingDay16_06: boolean = false;
  showsightseeingDay16_07: boolean = false;
  showsightseeingDay16_08: boolean = false;
  showsightseeingDay16_09: boolean = false;
  showsightseeingDay16_10: boolean = false;

  showsightseeingDay17_01: boolean = false;
  showsightseeingDay17_02: boolean = false;
  showsightseeingDay17_03: boolean = false;
  showsightseeingDay17_04: boolean = false;
  showsightseeingDay17_05: boolean = false;
  showsightseeingDay17_06: boolean = false;
  showsightseeingDay17_07: boolean = false;
  showsightseeingDay17_08: boolean = false;
  showsightseeingDay17_09: boolean = false;
  showsightseeingDay17_10: boolean = false;

  showsightseeingDay18_01: boolean = false;
  showsightseeingDay18_02: boolean = false;
  showsightseeingDay18_03: boolean = false;
  showsightseeingDay18_04: boolean = false;
  showsightseeingDay18_05: boolean = false;
  showsightseeingDay18_06: boolean = false;
  showsightseeingDay18_07: boolean = false;
  showsightseeingDay18_08: boolean = false;
  showsightseeingDay18_09: boolean = false;
  showsightseeingDay18_10: boolean = false;

  showsightseeingDay19_01: boolean = false;
  showsightseeingDay19_02: boolean = false;
  showsightseeingDay19_03: boolean = false;
  showsightseeingDay19_04: boolean = false;
  showsightseeingDay19_05: boolean = false;
  showsightseeingDay19_06: boolean = false;
  showsightseeingDay19_07: boolean = false;
  showsightseeingDay19_08: boolean = false;
  showsightseeingDay19_09: boolean = false;
  showsightseeingDay19_10: boolean = false;

  showsightseeingDay20_01: boolean = false;
  showsightseeingDay20_02: boolean = false;
  showsightseeingDay20_03: boolean = false;
  showsightseeingDay20_04: boolean = false;
  showsightseeingDay20_05: boolean = false;
  showsightseeingDay20_06: boolean = false;
  showsightseeingDay20_07: boolean = false;
  showsightseeingDay20_08: boolean = false;
  showsightseeingDay20_09: boolean = false;
  showsightseeingDay20_10: boolean = false;

  showsightseeingDay21_01: boolean = false;
  showsightseeingDay21_02: boolean = false;
  showsightseeingDay21_03: boolean = false;
  showsightseeingDay21_04: boolean = false;
  showsightseeingDay21_05: boolean = false;
  showsightseeingDay21_06: boolean = false;
  showsightseeingDay21_07: boolean = false;
  showsightseeingDay21_08: boolean = false;
  showsightseeingDay21_09: boolean = false;
  showsightseeingDay21_10: boolean = false;

  showsightseeingDay22_01: boolean = false;
  showsightseeingDay22_02: boolean = false;
  showsightseeingDay22_03: boolean = false;
  showsightseeingDay22_04: boolean = false;
  showsightseeingDay22_05: boolean = false;
  showsightseeingDay22_06: boolean = false;
  showsightseeingDay22_07: boolean = false;
  showsightseeingDay22_08: boolean = false;
  showsightseeingDay22_09: boolean = false;
  showsightseeingDay22_10: boolean = false;




  sightseeingData = ['Bangalore', 'Hyderabad', 'Delhi', 'Goa', 'Kurnool'];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  addOptionDay1() {
    this.statusOptionDay1 = !this.statusOptionDay1;
  }

  transportationShowDay1() {
    this.transportationDay1 = !this.transportationDay1;
  }
  hotelCheckInShowDay1() {
    this.hotelCheckInnDay1 = !this.hotelCheckInnDay1;
  }
  transportationReturnShowDay1() {
    this.transportationReturnDay1 = !this.transportationReturnDay1;
  }
  hotelCheckOutShowDay1() {
    this.hotelCheckOutDay1 = !this.hotelCheckOutDay1;
  }
  sightseeingShowDay1() {
    this.sightseeingDay1 = !this.sightseeingDay1;
  }
  mealFoodShowDay1() {
    this.mealFoodDay1 = !this.mealFoodDay1;
  }

  sightseeingTwo() {
    this.showsightseeingTwo = !this.showsightseeingTwo;
  }

  sightseeingThree() {
    this.showsightseeingThree = !this.showsightseeingThree;
  }

  sightseeingFour() {
    this.showsightseeingFour = !this.showsightseeingFour;
  }

  sightseeingFive() {
    this.showsightseeingFive = !this.showsightseeingFive;
  }

  sightseeingSix() {
    this.showsightseeingSix = !this.showsightseeingSix;
  }

  sightseeingSaven() {
    this.showsightseeingSaven = !this.showsightseeingSaven;
  }

  sightseeingEight() {
    this.showsightseeingEight = !this.showsightseeingEight;
  }

  sightseeingNine() {
    this.showsightseeingNine = !this.showsightseeingNine;
  }

  sightseeingTen() {
    this.showsightseeingTen = !this.showsightseeingTen;
  }

  sightseeing11() {
    this.showsightseeing11 = !this.showsightseeing11;
  }

  sightseeing12() {
    this.showsightseeing12 = !this.showsightseeing12;
  }

  sightseeing13() {
    this.showsightseeing13 = !this.showsightseeing13;
  }

  sightseeing14() {
    this.showsightseeing14 = !this.showsightseeing14;
  }

  sightseeing15() {
    this.showsightseeing15 = !this.showsightseeing15;
  }

  sightseeing16() {
    this.showsightseeing16 = !this.showsightseeing16;
  }

  sightseeing17() {
    this.showsightseeing17 = !this.showsightseeing17;
  }

  sightseeing18() {
    this.showsightseeing18 = !this.showsightseeing18;
  }

  sightseeing19() {
    this.showsightseeing19 = !this.showsightseeing19;
  }

  sightseeing20() {
    this.showsightseeing20 = !this.showsightseeing20;
  }

  sightseeingDay2_01() {
    this.showsightseeingDay2_01 = !this.showsightseeingDay2_01;
  }
  sightseeingDay2_02() {
    this.showsightseeingDay2_02 = !this.showsightseeingDay2_02;
  }
  sightseeingDay2_03() {
    this.showsightseeingDay2_03 = !this.showsightseeingDay2_03;
  }
  sightseeingDay2_04() {
    this.showsightseeingDay2_04 = !this.showsightseeingDay2_04;
  }
  sightseeingDay2_05() {
    this.showsightseeingDay2_05 = !this.showsightseeingDay2_05;
  }
  sightseeingDay2_06() {
    this.showsightseeingDay2_06 = !this.showsightseeingDay2_06;
  }
  sightseeingDay2_07() {
    this.showsightseeingDay2_07 = !this.showsightseeingDay2_07;
  }
  sightseeingDay2_08() {
    this.showsightseeingDay2_08 = !this.showsightseeingDay2_08;
  }
  sightseeingDay2_09() {
    this.showsightseeingDay2_09 = !this.showsightseeingDay2_09;
  }
  sightseeingDay2_10() {
    this.showsightseeingDay2_10 = !this.showsightseeingDay2_10;
  }

  sightseeingDay3_01() {
    this.showsightseeingDay3_01 = !this.showsightseeingDay3_01;
  }
  sightseeingDay3_02() {
    this.showsightseeingDay3_02 = !this.showsightseeingDay3_02;
  }
  sightseeingDay3_03() {
    this.showsightseeingDay3_03 = !this.showsightseeingDay3_03;
  }
  sightseeingDay3_04() {
    this.showsightseeingDay3_04 = !this.showsightseeingDay3_04;
  }
  sightseeingDay3_05() {
    this.showsightseeingDay3_05 = !this.showsightseeingDay3_05;
  }
  sightseeingDay3_06() {
    this.showsightseeingDay3_06 = !this.showsightseeingDay3_06;
  }
  sightseeingDay3_07() {
    this.showsightseeingDay3_07 = !this.showsightseeingDay3_07;
  }
  sightseeingDay3_08() {
    this.showsightseeingDay3_08 = !this.showsightseeingDay3_08;
  }
  sightseeingDay3_09() {
    this.showsightseeingDay3_09 = !this.showsightseeingDay3_09;
  }
  sightseeingDay3_10() {
    this.showsightseeingDay3_10 = !this.showsightseeingDay3_10;
  }
  sightseeingDay4_01() {
    this.showsightseeingDay4_01 = !this.showsightseeingDay4_01;
  }
  sightseeingDay4_02() {
    this.showsightseeingDay4_02 = !this.showsightseeingDay4_02;
  }
  sightseeingDay4_03() {
    this.showsightseeingDay4_03 = !this.showsightseeingDay4_03;
  }
  sightseeingDay4_04() {
    this.showsightseeingDay4_04 = !this.showsightseeingDay4_04;
  }
  sightseeingDay4_05() {
    this.showsightseeingDay4_05 = !this.showsightseeingDay4_05;
  }
  sightseeingDay4_06() {
    this.showsightseeingDay4_06 = !this.showsightseeingDay4_06;
  }
  sightseeingDay4_07() {
    this.showsightseeingDay4_07 = !this.showsightseeingDay4_07;
  }
  sightseeingDay4_08() {
    this.showsightseeingDay4_08 = !this.showsightseeingDay4_08;
  }
  sightseeingDay4_09() {
    this.showsightseeingDay4_09 = !this.showsightseeingDay4_09;
  }
  sightseeingDay4_10() {
    this.showsightseeingDay4_10 = !this.showsightseeingDay4_10;
  }

  sightseeingDay5_01() {
    this.showsightseeingDay5_01 = !this.showsightseeingDay5_01;
  }
  sightseeingDay5_02() {
    this.showsightseeingDay5_02 = !this.showsightseeingDay5_02;
  }
  sightseeingDay5_03() {
    this.showsightseeingDay5_03 = !this.showsightseeingDay5_03;
  }
  sightseeingDay5_04() {
    this.showsightseeingDay5_04 = !this.showsightseeingDay5_04;
  }
  sightseeingDay5_05() {
    this.showsightseeingDay5_05 = !this.showsightseeingDay5_05;
  }
  sightseeingDay5_06() {
    this.showsightseeingDay5_06 = !this.showsightseeingDay5_06;
  }
  sightseeingDay5_07() {
    this.showsightseeingDay5_07 = !this.showsightseeingDay5_07;
  }
  sightseeingDay5_08() {
    this.showsightseeingDay5_08 = !this.showsightseeingDay5_08;
  }
  sightseeingDay5_09() {
    this.showsightseeingDay5_09 = !this.showsightseeingDay5_09;
  }
  sightseeingDay5_10() {
    this.showsightseeingDay5_10 = !this.showsightseeingDay5_10;
  }

  sightseeingDay6_01() {
    this.showsightseeingDay6_01 = !this.showsightseeingDay6_01;
  }
  sightseeingDay6_02() {
    this.showsightseeingDay6_02 = !this.showsightseeingDay6_02;
  }
  sightseeingDay6_03() {
    this.showsightseeingDay6_03 = !this.showsightseeingDay6_03;
  }
  sightseeingDay6_04() {
    this.showsightseeingDay6_04 = !this.showsightseeingDay6_04;
  }
  sightseeingDay6_05() {
    this.showsightseeingDay6_05 = !this.showsightseeingDay6_05;
  }
  sightseeingDay6_06() {
    this.showsightseeingDay6_06 = !this.showsightseeingDay6_06;
  }
  sightseeingDay6_07() {
    this.showsightseeingDay6_07 = !this.showsightseeingDay6_07;
  }
  sightseeingDay6_08() {
    this.showsightseeingDay6_08 = !this.showsightseeingDay6_08;
  }
  sightseeingDay6_09() {
    this.showsightseeingDay6_09 = !this.showsightseeingDay6_09;
  }
  sightseeingDay6_10() {
    this.showsightseeingDay6_10 = !this.showsightseeingDay6_10;
  }

  sightseeingDay7_01() {
    this.showsightseeingDay7_01 = !this.showsightseeingDay7_01;
  }
  sightseeingDay7_02() {
    this.showsightseeingDay7_02 = !this.showsightseeingDay7_02;
  }
  sightseeingDay7_03() {
    this.showsightseeingDay7_03 = !this.showsightseeingDay7_03;
  }
  sightseeingDay7_04() {
    this.showsightseeingDay7_04 = !this.showsightseeingDay7_04;
  }
  sightseeingDay7_05() {
    this.showsightseeingDay7_05 = !this.showsightseeingDay7_05;
  }
  sightseeingDay7_06() {
    this.showsightseeingDay7_06 = !this.showsightseeingDay7_06;
  }
  sightseeingDay7_07() {
    this.showsightseeingDay7_07 = !this.showsightseeingDay7_07;
  }
  sightseeingDay7_08() {
    this.showsightseeingDay7_08 = !this.showsightseeingDay7_08;
  }
  sightseeingDay7_09() {
    this.showsightseeingDay7_09 = !this.showsightseeingDay7_09;
  }
  sightseeingDay7_10() {
    this.showsightseeingDay7_10 = !this.showsightseeingDay7_10;
  }

  sightseeingDay8_01() {
    this.showsightseeingDay8_01 = !this.showsightseeingDay8_01;
  }
  sightseeingDay8_02() {
    this.showsightseeingDay8_02 = !this.showsightseeingDay8_02;
  }
  sightseeingDay8_03() {
    this.showsightseeingDay8_03 = !this.showsightseeingDay8_03;
  }
  sightseeingDay8_04() {
    this.showsightseeingDay8_04 = !this.showsightseeingDay8_04;
  }
  sightseeingDay8_05() {
    this.showsightseeingDay8_05 = !this.showsightseeingDay8_05;
  }
  sightseeingDay8_06() {
    this.showsightseeingDay8_06 = !this.showsightseeingDay8_06;
  }
  sightseeingDay8_07() {
    this.showsightseeingDay8_07 = !this.showsightseeingDay8_07;
  }
  sightseeingDay8_08() {
    this.showsightseeingDay8_08 = !this.showsightseeingDay8_08;
  }
  sightseeingDay8_09() {
    this.showsightseeingDay8_09 = !this.showsightseeingDay8_09;
  }
  sightseeingDay8_10() {
    this.showsightseeingDay8_10 = !this.showsightseeingDay8_10;
  }

  sightseeingDay9_01() {
    this.showsightseeingDay9_01 = !this.showsightseeingDay9_01;
  }
  sightseeingDay9_02() {
    this.showsightseeingDay9_02 = !this.showsightseeingDay9_02;
  }
  sightseeingDay9_03() {
    this.showsightseeingDay9_03 = !this.showsightseeingDay9_03;
  }
  sightseeingDay9_04() {
    this.showsightseeingDay9_04 = !this.showsightseeingDay9_04;
  }
  sightseeingDay9_05() {
    this.showsightseeingDay9_05 = !this.showsightseeingDay9_05;
  }
  sightseeingDay9_06() {
    this.showsightseeingDay9_06 = !this.showsightseeingDay9_06;
  }
  sightseeingDay9_07() {
    this.showsightseeingDay9_07 = !this.showsightseeingDay9_07;
  }
  sightseeingDay9_08() {
    this.showsightseeingDay9_08 = !this.showsightseeingDay9_08;
  }
  sightseeingDay9_09() {
    this.showsightseeingDay9_09 = !this.showsightseeingDay9_09;
  }
  sightseeingDay9_10() {
    this.showsightseeingDay9_10 = !this.showsightseeingDay9_10;
  }

  sightseeingDay10_01() {
    this.showsightseeingDay10_01 = !this.showsightseeingDay10_01;
  }
  sightseeingDay10_02() {
    this.showsightseeingDay10_02 = !this.showsightseeingDay10_02;
  }
  sightseeingDay10_03() {
    this.showsightseeingDay10_03 = !this.showsightseeingDay10_03;
  }
  sightseeingDay10_04() {
    this.showsightseeingDay10_04 = !this.showsightseeingDay10_04;
  }
  sightseeingDay10_05() {
    this.showsightseeingDay10_05 = !this.showsightseeingDay10_05;
  }
  sightseeingDay10_06() {
    this.showsightseeingDay10_06 = !this.showsightseeingDay10_06;
  }
  sightseeingDay10_07() {
    this.showsightseeingDay10_07 = !this.showsightseeingDay10_07;
  }
  sightseeingDay10_08() {
    this.showsightseeingDay10_08 = !this.showsightseeingDay10_08;
  }
  sightseeingDay10_09() {
    this.showsightseeingDay10_09 = !this.showsightseeingDay10_09;
  }
  sightseeingDay10_10() {
    this.showsightseeingDay10_10 = !this.showsightseeingDay10_10;
  }

  sightseeingDay11_01() {
    this.showsightseeingDay11_01 = !this.showsightseeingDay11_01;
  }
  sightseeingDay11_02() {
    this.showsightseeingDay11_02 = !this.showsightseeingDay11_02;
  }
  sightseeingDay11_03() {
    this.showsightseeingDay11_03 = !this.showsightseeingDay11_03;
  }
  sightseeingDay11_04() {
    this.showsightseeingDay11_04 = !this.showsightseeingDay11_04;
  }
  sightseeingDay11_05() {
    this.showsightseeingDay11_05 = !this.showsightseeingDay11_05;
  }
  sightseeingDay11_06() {
    this.showsightseeingDay11_06 = !this.showsightseeingDay11_06;
  }
  sightseeingDay11_07() {
    this.showsightseeingDay11_07 = !this.showsightseeingDay11_07;
  }
  sightseeingDay11_08() {
    this.showsightseeingDay11_08 = !this.showsightseeingDay11_08;
  }
  sightseeingDay11_09() {
    this.showsightseeingDay11_09 = !this.showsightseeingDay11_09;
  }
  sightseeingDay11_10() {
    this.showsightseeingDay11_10 = !this.showsightseeingDay11_10;
  }

  sightseeingDay12_01() {
    this.showsightseeingDay12_01 = !this.showsightseeingDay12_01;
  }
  sightseeingDay12_02() {
    this.showsightseeingDay12_02 = !this.showsightseeingDay12_02;
  }
  sightseeingDay12_03() {
    this.showsightseeingDay12_03 = !this.showsightseeingDay12_03;
  }
  sightseeingDay12_04() {
    this.showsightseeingDay12_04 = !this.showsightseeingDay12_04;
  }
  sightseeingDay12_05() {
    this.showsightseeingDay12_05 = !this.showsightseeingDay12_05;
  }
  sightseeingDay12_06() {
    this.showsightseeingDay12_06 = !this.showsightseeingDay12_06;
  }
  sightseeingDay12_07() {
    this.showsightseeingDay12_07 = !this.showsightseeingDay12_07;
  }
  sightseeingDay12_08() {
    this.showsightseeingDay12_08 = !this.showsightseeingDay12_08;
  }
  sightseeingDay12_09() {
    this.showsightseeingDay12_09 = !this.showsightseeingDay12_09;
  }
  sightseeingDay12_10() {
    this.showsightseeingDay12_10 = !this.showsightseeingDay12_10;
  }

  sightseeingDay13_01() {
    this.showsightseeingDay13_01 = !this.showsightseeingDay13_01;
  }
  sightseeingDay13_02() {
    this.showsightseeingDay13_02 = !this.showsightseeingDay13_02;
  }
  sightseeingDay13_03() {
    this.showsightseeingDay13_03 = !this.showsightseeingDay13_03;
  }
  sightseeingDay13_04() {
    this.showsightseeingDay13_04 = !this.showsightseeingDay13_04;
  }
  sightseeingDay13_05() {
    this.showsightseeingDay13_05 = !this.showsightseeingDay13_05;
  }
  sightseeingDay13_06() {
    this.showsightseeingDay13_06 = !this.showsightseeingDay13_06;
  }
  sightseeingDay13_07() {
    this.showsightseeingDay13_07 = !this.showsightseeingDay13_07;
  }
  sightseeingDay13_08() {
    this.showsightseeingDay13_08 = !this.showsightseeingDay13_08;
  }
  sightseeingDay13_09() {
    this.showsightseeingDay13_09 = !this.showsightseeingDay13_09;
  }
  sightseeingDay13_10() {
    this.showsightseeingDay13_10 = !this.showsightseeingDay13_10;
  }

  sightseeingDay14_01() {
    this.showsightseeingDay14_01 = !this.showsightseeingDay14_01;
  }
  sightseeingDay14_02() {
    this.showsightseeingDay14_02 = !this.showsightseeingDay14_02;
  }
  sightseeingDay14_03() {
    this.showsightseeingDay14_03 = !this.showsightseeingDay14_03;
  }
  sightseeingDay14_04() {
    this.showsightseeingDay14_04 = !this.showsightseeingDay14_04;
  }
  sightseeingDay14_05() {
    this.showsightseeingDay14_05 = !this.showsightseeingDay14_05;
  }
  sightseeingDay14_06() {
    this.showsightseeingDay14_06 = !this.showsightseeingDay14_06;
  }
  sightseeingDay14_07() {
    this.showsightseeingDay14_07 = !this.showsightseeingDay14_07;
  }
  sightseeingDay14_08() {
    this.showsightseeingDay14_08 = !this.showsightseeingDay14_08;
  }
  sightseeingDay14_09() {
    this.showsightseeingDay14_09 = !this.showsightseeingDay14_09;
  }
  sightseeingDay14_10() {
    this.showsightseeingDay14_10 = !this.showsightseeingDay14_10;
  }

  sightseeingDay15_01() {
    this.showsightseeingDay15_01 = !this.showsightseeingDay15_01;
  }
  sightseeingDay15_02() {
    this.showsightseeingDay15_02 = !this.showsightseeingDay15_02;
  }
  sightseeingDay15_03() {
    this.showsightseeingDay15_03 = !this.showsightseeingDay15_03;
  }
  sightseeingDay15_04() {
    this.showsightseeingDay15_04 = !this.showsightseeingDay15_04;
  }
  sightseeingDay15_05() {
    this.showsightseeingDay15_05 = !this.showsightseeingDay15_05;
  }
  sightseeingDay15_06() {
    this.showsightseeingDay15_06 = !this.showsightseeingDay15_06;
  }
  sightseeingDay15_07() {
    this.showsightseeingDay15_07 = !this.showsightseeingDay15_07;
  }
  sightseeingDay15_08() {
    this.showsightseeingDay15_08 = !this.showsightseeingDay15_08;
  }
  sightseeingDay15_09() {
    this.showsightseeingDay15_09 = !this.showsightseeingDay15_09;
  }
  sightseeingDay15_10() {
    this.showsightseeingDay15_10 = !this.showsightseeingDay15_10;
  }

  sightseeingDay16_01() {
    this.showsightseeingDay16_01 = !this.showsightseeingDay16_01;
  }
  sightseeingDay16_02() {
    this.showsightseeingDay16_02 = !this.showsightseeingDay16_02;
  }
  sightseeingDay16_03() {
    this.showsightseeingDay16_03 = !this.showsightseeingDay16_03;
  }
  sightseeingDay16_04() {
    this.showsightseeingDay16_04 = !this.showsightseeingDay16_04;
  }
  sightseeingDay16_05() {
    this.showsightseeingDay16_05 = !this.showsightseeingDay16_05;
  }
  sightseeingDay16_06() {
    this.showsightseeingDay16_06 = !this.showsightseeingDay16_06;
  }
  sightseeingDay16_07() {
    this.showsightseeingDay16_07 = !this.showsightseeingDay16_07;
  }
  sightseeingDay16_08() {
    this.showsightseeingDay16_08 = !this.showsightseeingDay16_08;
  }
  sightseeingDay16_09() {
    this.showsightseeingDay16_09 = !this.showsightseeingDay16_09;
  }
  sightseeingDay16_10() {
    this.showsightseeingDay16_10 = !this.showsightseeingDay16_10;
  }

  sightseeingDay17_01() {
    this.showsightseeingDay17_01 = !this.showsightseeingDay17_01;
  }
  sightseeingDay17_02() {
    this.showsightseeingDay17_02 = !this.showsightseeingDay17_02;
  }
  sightseeingDay17_03() {
    this.showsightseeingDay17_03 = !this.showsightseeingDay17_03;
  }
  sightseeingDay17_04() {
    this.showsightseeingDay17_04 = !this.showsightseeingDay17_04;
  }
  sightseeingDay17_05() {
    this.showsightseeingDay17_05 = !this.showsightseeingDay17_05;
  }
  sightseeingDay17_06() {
    this.showsightseeingDay17_06 = !this.showsightseeingDay17_06;
  }
  sightseeingDay17_07() {
    this.showsightseeingDay17_07 = !this.showsightseeingDay17_07;
  }
  sightseeingDay17_08() {
    this.showsightseeingDay17_08 = !this.showsightseeingDay17_08;
  }
  sightseeingDay17_09() {
    this.showsightseeingDay17_09 = !this.showsightseeingDay17_09;
  }
  sightseeingDay17_10() {
    this.showsightseeingDay17_10 = !this.showsightseeingDay17_10;
  }

  sightseeingDay18_01() {
    this.showsightseeingDay18_01 = !this.showsightseeingDay18_01;
  }
  sightseeingDay18_02() {
    this.showsightseeingDay18_02 = !this.showsightseeingDay18_02;
  }
  sightseeingDay18_03() {
    this.showsightseeingDay18_03 = !this.showsightseeingDay18_03;
  }
  sightseeingDay18_04() {
    this.showsightseeingDay18_04 = !this.showsightseeingDay18_04;
  }
  sightseeingDay18_05() {
    this.showsightseeingDay18_05 = !this.showsightseeingDay18_05;
  }
  sightseeingDay18_06() {
    this.showsightseeingDay18_06 = !this.showsightseeingDay18_06;
  }
  sightseeingDay18_07() {
    this.showsightseeingDay18_07 = !this.showsightseeingDay18_07;
  }
  sightseeingDay18_08() {
    this.showsightseeingDay18_08 = !this.showsightseeingDay18_08;
  }
  sightseeingDay18_09() {
    this.showsightseeingDay18_09 = !this.showsightseeingDay18_09;
  }
  sightseeingDay18_10() {
    this.showsightseeingDay18_10 = !this.showsightseeingDay18_10;
  }

  sightseeingDay19_01() {
    this.showsightseeingDay19_01 = !this.showsightseeingDay19_01;
  }
  sightseeingDay19_02() {
    this.showsightseeingDay19_02 = !this.showsightseeingDay19_02;
  }
  sightseeingDay19_03() {
    this.showsightseeingDay19_03 = !this.showsightseeingDay19_03;
  }
  sightseeingDay19_04() {
    this.showsightseeingDay19_04 = !this.showsightseeingDay19_04;
  }
  sightseeingDay19_05() {
    this.showsightseeingDay19_05 = !this.showsightseeingDay19_05;
  }
  sightseeingDay19_06() {
    this.showsightseeingDay19_06 = !this.showsightseeingDay19_06;
  }
  sightseeingDay19_07() {
    this.showsightseeingDay19_07 = !this.showsightseeingDay19_07;
  }
  sightseeingDay19_08() {
    this.showsightseeingDay19_08 = !this.showsightseeingDay19_08;
  }
  sightseeingDay19_09() {
    this.showsightseeingDay19_09 = !this.showsightseeingDay19_09;
  }
  sightseeingDay19_10() {
    this.showsightseeingDay19_10 = !this.showsightseeingDay19_10;
  }

  sightseeingDay20_01() {
    this.showsightseeingDay20_01 = !this.showsightseeingDay20_01;
  }
  sightseeingDay20_02() {
    this.showsightseeingDay20_02 = !this.showsightseeingDay20_02;
  }
  sightseeingDay20_03() {
    this.showsightseeingDay20_03 = !this.showsightseeingDay20_03;
  }
  sightseeingDay20_04() {
    this.showsightseeingDay20_04 = !this.showsightseeingDay20_04;
  }
  sightseeingDay20_05() {
    this.showsightseeingDay20_05 = !this.showsightseeingDay20_05;
  }
  sightseeingDay20_06() {
    this.showsightseeingDay20_06 = !this.showsightseeingDay20_06;
  }
  sightseeingDay20_07() {
    this.showsightseeingDay20_07 = !this.showsightseeingDay20_07;
  }
  sightseeingDay20_08() {
    this.showsightseeingDay20_08 = !this.showsightseeingDay20_08;
  }
  sightseeingDay20_09() {
    this.showsightseeingDay20_09 = !this.showsightseeingDay20_09;
  }
  sightseeingDay20_10() {
    this.showsightseeingDay20_10 = !this.showsightseeingDay20_10;
  }

  sightseeingDay21_01() {
    this.showsightseeingDay21_01 = !this.showsightseeingDay21_01;
  }
  sightseeingDay21_02() {
    this.showsightseeingDay21_02 = !this.showsightseeingDay21_02;
  }
  sightseeingDay21_03() {
    this.showsightseeingDay21_03 = !this.showsightseeingDay21_03;
  }
  sightseeingDay21_04() {
    this.showsightseeingDay21_04 = !this.showsightseeingDay21_04;
  }
  sightseeingDay21_05() {
    this.showsightseeingDay21_05 = !this.showsightseeingDay21_05;
  }
  sightseeingDay21_06() {
    this.showsightseeingDay21_06 = !this.showsightseeingDay21_06;
  }
  sightseeingDay21_07() {
    this.showsightseeingDay21_07 = !this.showsightseeingDay21_07;
  }
  sightseeingDay21_08() {
    this.showsightseeingDay21_08 = !this.showsightseeingDay21_08;
  }
  sightseeingDay21_09() {
    this.showsightseeingDay21_09 = !this.showsightseeingDay21_09;
  }
  sightseeingDay21_10() {
    this.showsightseeingDay21_10 = !this.showsightseeingDay21_10;
  }

  sightseeingDay22_01() {
    this.showsightseeingDay22_01 = !this.showsightseeingDay22_01;
  }
  sightseeingDay22_02() {
    this.showsightseeingDay22_02 = !this.showsightseeingDay22_02;
  }
  sightseeingDay22_03() {
    this.showsightseeingDay22_03 = !this.showsightseeingDay22_03;
  }
  sightseeingDay22_04() {
    this.showsightseeingDay22_04 = !this.showsightseeingDay22_04;
  }
  sightseeingDay22_05() {
    this.showsightseeingDay22_05 = !this.showsightseeingDay22_05;
  }
  sightseeingDay22_06() {
    this.showsightseeingDay22_06 = !this.showsightseeingDay22_06;
  }
  sightseeingDay22_07() {
    this.showsightseeingDay22_07 = !this.showsightseeingDay22_07;
  }
  sightseeingDay22_08() {
    this.showsightseeingDay22_08 = !this.showsightseeingDay22_08;
  }
  sightseeingDay22_09() {
    this.showsightseeingDay22_09 = !this.showsightseeingDay22_09;
  }
  sightseeingDay22_10() {
    this.showsightseeingDay22_10 = !this.showsightseeingDay22_10;
  }


  clickEvent() {
    this.status = !this.status;
  }

  clickOptionEvent() {
    this.statusOption = !this.statusOption;
  }

  clickOptionEvent1() {
    this.statusOption1 = !this.statusOption1;
  }
  clickOptionEvent2() {
    this.statusOption2 = !this.statusOption2;
  }
  clickOptionEvent3() {
    this.statusOption3 = !this.statusOption3;
  }
  clickOptionEvent4() {
    this.statusOption4 = !this.statusOption4;
  }
  clickOptionEvent5() {
    this.statusOption5 = !this.statusOption5;
  }
  clickOptionEvent6() {
    this.statusOption6 = !this.statusOption6;
  }
  clickOptionEvent7() {
    this.statusOption7 = !this.statusOption7;
  }
  clickOptionEvent8() {
    this.statusOption8 = !this.statusOption8;
  }
  clickOptionEvent9() {
    this.statusOption9 = !this.statusOption9;
  }
  clickOptionEvent10() {
    this.statusOption10 = !this.statusOption10;
  }
  clickOptionEvent11() {
    this.statusOption11 = !this.statusOption11;
  }
  clickOptionEvent12() {
    this.statusOption12 = !this.statusOption12;
  }
  clickOptionEvent13() {
    this.statusOption13 = !this.statusOption13;
  }
  clickOptionEvent14() {
    this.statusOption14 = !this.statusOption14;
  }
  clickOptionEvent15() {
    this.statusOption15 = !this.statusOption15;
  }
  clickOptionEvent16() {
    this.statusOption16 = !this.statusOption16;
  }
  clickOptionEvent17() {
    this.statusOption17 = !this.statusOption17;
  }
  clickOptionEvent18() {
    this.statusOption18 = !this.statusOption18;
  }
  clickOptionEvent19() {
    this.statusOption19 = !this.statusOption19;
  }
  clickOptionEvent20() {
    this.statusOption20 = !this.statusOption20;
  }
  clickOptionEvent21() {
    this.statusOption21 = !this.statusOption21;
  }
  clickOptionEvent22() {
    this.statusOption22 = !this.statusOption22;
  }

  addFirstRow() {
    this.firstRowAdded = true;
  }

  removeFirstRow() {
    this.firstRowAdded = false;
  }

  addSecondRow() {
    this.secondRowAdded = true;
  }

  removeSecondRow() {
    this.secondRowAdded = false;
  }

  selectChangeHandler(event: any) {
    this.selectedOption = event.target.value;
  }

  selectDaysChangeHandler(event: any) {
    this.selectedOptionDays = event.target.value;
  }

  selectwelcomeHandler(event: any) {
    this.welcomeOption = event.target.value;
  }

  selectThankYouHandler(event: any) {
    this.thankYouOption = event.target.value;
  }

  selectDayPlanHandler(event: any) {
    this.dayPlanOption = event.target.value;
  }


  invoiceRate1: string = '0';
  invoiceQuantity1: string = '0';
  invoiceDiscount1: string = '0';
  invoiceGST1: string = '0';
  invoiceHSN1: string = '0';
  total1: number;

  invoiceRate2: string = '0';
  invoiceQuantity2: string = '0';
  invoiceDiscount2: string = '0';
  invoiceGST2: string = '0';
  invoiceHSN2: string = '0';
  total2: number;

  subtotal: number;
  invoiceCGST: number;
  invoiceSGST: number;
  invoiceIGST: number;
  invoiceGrandTotal: number;

  addValues() {

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

    this.total1 = parseFloat(rate) + parseFloat(quantity) + parseFloat(discount) + parseFloat(gst) + parseFloat(hsn);
    this.total2 = parseFloat(rate2) + parseFloat(quantity2) + parseFloat(discount2) + parseFloat(gst2) + parseFloat(hsn2);
    this.subtotal = this.total1 + this.total2;
    this.invoiceCGST = this.subtotal * 5 / 100;
    this.invoiceSGST = this.subtotal * 8 / 100;
    this.invoiceIGST = this.subtotal * 6 / 100;
    this.invoiceGrandTotal = this.subtotal + this.invoiceCGST + this.invoiceSGST + this.invoiceIGST;

  }
  invoiceSumValue() {
    alert('RRR');
  }

  constructor(public postsService: LeadService, public route: ActivatedRoute, private router: Router, location: Location, private sanitizer: DomSanitizer, public hotelService: HotelService) {

  }

  onSaveLead(form: NgForm) {
    form.value.itineraryImage = this.imagePath;
    form.value.userId = sessionStorage.getItem('USERID');
    form.value.email = sessionStorage.getItem('EMAIL');
    // if (form.invalid) {
    //   return;
    // }
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

  imageUrl: any = '';
  imagePath = '';
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
        this.isLoading = true;
        this.post = this.postsService.getPost(this.postId);
        this.isLoading = false;
        this.editLeadButton = true;
        if(this.post.itineraryImage !=''){
            this.imageUrl= environment.uploadUrl+this.post.itineraryImage;
        }
        
        this.selectedOption = this.post.requirement;
        this.welcomeOption = this.post.itineraryWelcome;
        this.thankYouOption = this.post.itinerarythankyou;
        this.dayPlanOption = this.post.itineraryDayPlans;
        this.sightseeingSearchValue = this.post.sightseeingSearch;
      } else {
        this.mode = 'create';
        this.postId = null;
        this.editLeadButton = false;
      }
    });
    this.uploader.onAfterAddingFile = (file) => {
      this.imageUrl = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(file.file.rawFile)));
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (item: any, status: any) => {
      this.imagePath = JSON.parse(status).path;
    };
    this.getHotels();


  }
  hotels: any = [];
  hotelList: any = [];
  getHotels() {
    this.hotelService.getHotels().subscribe(results => {
      this.hotels = results.data;
    });
  }
  getHotelDetails(event) {
    this.hotelService.getHotel(event.value.toString()).subscribe(hotel => {
      this.hotelList = hotel.data;
    });
  }
  // hotelFilter(val: string) {
  //   let search = val.toLowerCase();
  //   let _hotels = this.hotels.filter(h => {
  //     return h.addHotelName.toLowerCase().indexOf(search) !== -1;
  //   });
  //   console.log(_hotels);
  //   this.hotels = _hotels;
  // }
  backToLeadView() {
    this.router.navigate(['viewlead']);
  }
  backToCreateLead() {
    this.router.navigate(['create']);
  }
  clearAll() {
    this.router.navigate(['create']);
  }
  ngAfterContentInit() {


  }
  ngAfterViewInit() {


  }
  ngAfterContentChecked() {


  }
  ngAfterViewChecked() {


  }

}
