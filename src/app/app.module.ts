import { BrowserModule } from '@angular/platform-browser';
import { FileUploadModule } from 'ng2-file-upload';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgDatepickerModule } from 'ng2-datepicker';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule, MatNativeDateModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeadComponent } from './lead/lead.component';
import { ViewLeadComponent } from './view-lead/view-lead.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { MonitorPageComponent } from './monitor-page/monitor-page.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomePageFooterComponent } from './home-page-footer/home-page-footer.component';
import { AdminComponent } from './admin/admin.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { ProductsComponent } from './products/products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { Prod1Component } from './product-pages/prod1/prod1.component';
import { Prod2Component } from './product-pages/prod2/prod2.component';
import { Prod3Component } from './product-pages/prod3/prod3.component';
import { Prod4Component } from './product-pages/prod4/prod4.component';
import { Prod5Component } from './product-pages/prod5/prod5.component';
import { Prod6Component } from './product-pages/prod6/prod6.component';
import { CorporateSliderComponent } from './corporate-slider/corporate-slider.component';
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
import { SearchBookingComponent } from './search-booking/search-booking.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';



@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeadComponent,
    ViewLeadComponent,
    LoginComponent,
    MonitorPageComponent,
    SignupComponent,
    DashboardComponent,
    InvoiceComponent,
    ItineraryComponent,
    HomepageComponent,
    HomePageFooterComponent,
    AdminComponent,
    ProductsComponent,
    ContactUsComponent,
    AboutUsComponent,
    Prod1Component,
    Prod2Component,
    Prod3Component,
    Prod4Component,
    Prod5Component,
    Prod6Component,
    CorporateSliderComponent,
    AddHotelComponent,
    AddNewHotelComponent,
    HotelVoucherComponent,
    ViewPDFComponent,
    DomesticProductsComponent,
    InternationalProductsComponent,
    CruiseProductsComponent,
    CruiseProd1Component,
    CruiseProd2Component,
    CruiseProd3Component,
    CruiseProd4Component,
    DomesticProd1Component,
    DomesticProd2Component,
    DomesticProd3Component,
    DomesticProd4Component,
    DomesticProd5Component,
    DomesticProd6Component,
    DomesticProd7Component,
    DomesticProd8Component,
    DomesticProd9Component,
    DomesticProd10Component,
    DomesticProd11Component,
    DomesticProd12Component,
    DomesticProd13Component,
    InternationalProd1Component,
    InternationalProd2Component,
    InternationalProd3Component,
    InternationalProd4Component,
    InternationalProd5Component,
    InternationalProd6Component,
    InternationalProd7Component,
    InternationalProd8Component,
    InternationalProd9Component,
    InternationalProd10Component,
    InternationalProd11Component,
    InternationalProd12Component,
    InternationalProd13Component,
    SearchBookingComponent,
    HotelDetailComponent,
  ],
  imports: [
    NgSelectModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgDatepickerModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    DragDropModule,
    Ng2SearchPipeModule,
    MatSelectModule,
    FileUploadModule
  ],

  providers: [
    MatDatepickerModule,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [
    AppComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
