import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private router: Router) { }

  public imagesUrl;
  public imagescorporate;

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.imagesUrl = [
    'https://holidaybazaar.s3-us-west-2.amazonaws.com/dpsnram.jpg',
    'https://holidaybazaar.s3-us-west-2.amazonaws.com/dpswarangal.jpg',
    'https://holidaybazaar.s3-us-west-2.amazonaws.com/hyd.jpg',
    'https://holidaybazaar.s3-us-west-2.amazonaws.com/hyd2.jpg',
    'https://holidaybazaar.s3-us-west-2.amazonaws.com/jalgoan.jpg',
    'https://holidaybazaar.s3-us-west-2.amazonaws.com/montfort.jpg',
    'https://holidaybazaar.s3-us-west-2.amazonaws.com/nirajpublic.jpg',
    'https://holidaybazaar.s3-us-west-2.amazonaws.com/savesnellore.jpg',
    'https://holidaybazaar.s3-us-west-2.amazonaws.com/sp.jpg'
    ];

    this.imagescorporate = [
      '../assets/images/corporate/accenture.jpg',
      '../assets/images/corporate/aditya birla.jpg',
      '../assets/images/corporate/aristro pharmacy.jpg',
      '../assets/images/corporate/bajaj.jpg',
      '../assets/images/corporate/bank of america.jpg',
      '../assets/images/corporate/dell.jpg',
      '../assets/images/corporate/deloitte.jpg',
      '../assets/images/corporate/digicable.jpg',
      '../assets/images/corporate/fame.jpg',
      '../assets/images/corporate/gangakavari.jpg',
      '../assets/images/corporate/goldmedal.jpg',
      '../assets/images/corporate/google.jpg',
      '../assets/images/corporate/hdfc.jpg',
      '../assets/images/corporate/indiacme.jpg',
      '../assets/images/corporate/jll.jpg',
      '../assets/images/corporate/marico.jpg',
      '../assets/images/corporate/rambol.jpg',
      '../assets/images/corporate/shivashakti.jpg',
      '../assets/images/corporate/skanda.jpg',
      '../assets/images/corporate/spectra.jpg',
      '../assets/images/corporate/suntv.jpg',
      '../assets/images/corporate/suratdreams.jpg',
      '../assets/images/corporate/tubecorporation.jpg'
      ];
  }

  backToHome() {
    this.router.navigate(['/']);
  }

}
