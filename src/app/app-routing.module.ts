import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { LeadComponent } from './lead/lead.component';
import { ViewLeadComponent } from './view-lead/view-lead.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MonitorPageComponent } from './monitor-page/monitor-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductsComponent } from './products/products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { Prod1Component } from './product-pages/prod1/prod1.component';
import { Prod2Component } from './product-pages/prod2/prod2.component';
import { Prod3Component } from './product-pages/prod3/prod3.component';
import { Prod4Component } from './product-pages/prod4/prod4.component';
import { Prod5Component } from './product-pages/prod5/prod5.component';
import { Prod6Component } from './product-pages/prod6/prod6.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { AddNewHotelComponent } from './add-new-hotel/add-new-hotel.component';
import { HotelVoucherComponent } from './hotel-voucher/hotel-voucher.component';
import { ViewPDFComponent } from './view-pdf/view-pdf.component';
import { DomesticProductsComponent } from './products/domestic-products/domestic-products.component';
import { InternationalProductsComponent } from './products/international-products/international-products.component';
import { CruiseProductsComponent } from './products/cruise-products/cruise-products.component';
import { CruiseProd1Component } from './product-pages/cruise-prod1/cruise-prod1.component';
import { CruiseProd2Component } from './product-pages/cruise-prod2/cruise-prod2.component';
import { CruiseProd3Component } from './product-pages/cruise-prod3/cruise-prod3.component';
import { CruiseProd4Component } from './product-pages/cruise-prod4/cruise-prod4.component';
import { DomesticProd1Component } from './product-pages/domestic-prod1/domestic-prod1.component';
import { DomesticProd2Component } from './product-pages/domestic-prod2/domestic-prod2.component';
import { DomesticProd3Component } from './product-pages/domestic-prod3/domestic-prod3.component';
import { DomesticProd4Component } from './product-pages/domestic-prod4/domestic-prod4.component';
import { DomesticProd5Component } from './product-pages/domestic-prod5/domestic-prod5.component';
import { DomesticProd6Component } from './product-pages/domestic-prod6/domestic-prod6.component';
import { DomesticProd7Component } from './product-pages/domestic-prod7/domestic-prod7.component';
import { DomesticProd8Component } from './product-pages/domestic-prod8/domestic-prod8.component';
import { DomesticProd9Component } from './product-pages/domestic-prod9/domestic-prod9.component';
import { DomesticProd10Component } from './product-pages/domestic-prod10/domestic-prod10.component';
import { DomesticProd11Component } from './product-pages/domestic-prod11/domestic-prod11.component';
import { DomesticProd12Component } from './product-pages/domestic-prod12/domestic-prod12.component';
import { DomesticProd13Component } from './product-pages/domestic-prod13/domestic-prod13.component';
import { InternationalProd1Component } from './product-pages/international-prod1/international-prod1.component';
import { InternationalProd2Component } from './product-pages/international-prod2/international-prod2.component';
import { InternationalProd3Component } from './product-pages/international-prod3/international-prod3.component';
import { InternationalProd4Component } from './product-pages/international-prod4/international-prod4.component';
import { InternationalProd5Component } from './product-pages/international-prod5/international-prod5.component';
import { InternationalProd6Component } from './product-pages/international-prod6/international-prod6.component';
import { InternationalProd7Component } from './product-pages/international-prod7/international-prod7.component';
import { InternationalProd8Component } from './product-pages/international-prod8/international-prod8.component';
import { InternationalProd9Component } from './product-pages/international-prod9/international-prod9.component';
import { InternationalProd10Component } from './product-pages/international-prod10/international-prod10.component';
import { InternationalProd11Component } from './product-pages/international-prod11/international-prod11.component';
import { InternationalProd12Component } from './product-pages/international-prod12/international-prod12.component';
import { InternationalProd13Component } from './product-pages/international-prod13/international-prod13.component';
import {SearchBookingComponent} from './search-booking/search-booking.component'

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'create', component: LeadComponent },
  { path: 'viewlead', component: ViewLeadComponent },
  { path: 'editlead/:postId', component: LeadComponent },
  { path: 'invoice/:postId', component: InvoiceComponent },
  { path: 'itinerary/:postId', component: ItineraryComponent },
  { path: 'viewpdf', component: ViewPDFComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'monitor', component: MonitorPageComponent },
  // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'domesticproduct', component: DomesticProductsComponent },
  { path: 'internationalproduct', component: InternationalProductsComponent },
  { path: 'cruiseproducts', component: CruiseProductsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'prodOne', component: Prod1Component },
  { path: 'prodTwo', component: Prod2Component },
  { path: 'prodThree', component: Prod3Component },
  { path: 'prodFour', component: Prod4Component },
  { path: 'prodFive', component: Prod5Component },
  { path: 'prodSix', component: Prod6Component },
  { path: 'cruiseProd1', component: CruiseProd1Component },
  { path: 'cruiseProd2', component: CruiseProd2Component },
  { path: 'cruiseProd3', component: CruiseProd3Component },
  { path: 'cruiseProd4', component: CruiseProd4Component },
  { path: 'domestic1', component: DomesticProd1Component },
  { path: 'domestic2', component: DomesticProd2Component },
  { path: 'domestic3', component: DomesticProd3Component },
  { path: 'domestic4', component: DomesticProd4Component },
  { path: 'domestic5', component: DomesticProd5Component },
  { path: 'domestic6', component: DomesticProd6Component },
  { path: 'domestic7', component: DomesticProd7Component },
  { path: 'domestic8', component: DomesticProd8Component },
  { path: 'domestic9', component: DomesticProd9Component },
  { path: 'domestic10', component: DomesticProd10Component },
  { path: 'domestic11', component: DomesticProd11Component },
  { path: 'domestic12', component: DomesticProd12Component },
  { path: 'domestic13', component: DomesticProd13Component },
  { path: 'international1', component: InternationalProd1Component },
  { path: 'international2', component: InternationalProd2Component },
  { path: 'international3', component: InternationalProd3Component },
  { path: 'international4', component: InternationalProd4Component },
  { path: 'international5', component: InternationalProd5Component },
  { path: 'international6', component: InternationalProd6Component },
  { path: 'international7', component: InternationalProd7Component },
  { path: 'international8', component: InternationalProd8Component },
  { path: 'international9', component: InternationalProd9Component },
  { path: 'international10', component: InternationalProd10Component },
  { path: 'international11', component: InternationalProd11Component },
  { path: 'international12', component: InternationalProd12Component },
  { path: 'international13', component: InternationalProd13Component },
  { path: 'airline/search', component: SearchBookingComponent },
  { path: 'addHotel', component: AddHotelComponent },
  { path: 'addNewHotel', component: AddNewHotelComponent },
  { path: 'hotelVoucher', component: HotelVoucherComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
   appRoutes: Routes = [];
}
