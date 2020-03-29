const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  userid: {
    type: String
  },
  email: {
    type: String
  },
  leadtitle: {
    type: String
  },
  customerName: {
    type: String
  },
  requirement: {
    type: String
  },
  shortNote: {
    type: String
  },
  airfare: {
    type: String
  },
  leadStatus: {
    type: String
  },
  holidayType: {
    type: String
  },
  noOfAdult: {
    type: String
  },
  noOfKids: {
    type: String
  },
  noOfInfants: {
    type: String
  },
  hotelPerformance: {
    type: String
  },
  personCouple: {
    type: String
  },
  currency: {
    type: String
  },
  amount: {
    type: String
  },
  destination: {
    type: String
  },
  groupTourPackage: {
    type: String
  },
  customeremail: {
    type: String
  },
  customermobile: {
    type: String
  },
  customeraddress: {
    type: String
  },
  startdate: {
    type: String
  },
  enddate: {
    type: String
  },
  hotelCheckIN: {
    type: String
  },
  hotelCheckOut: {
    type: String
  },
  cabTimeDate: {
    type: String
  },
  transportation: {
    type: String
  },
  hotelstay: {
    type: String
  },
  sightseeing: {
    type: String
  },
  visafees: {
    type: String
  },
  governmentTax: {
    type: String
  },
  surcharge: {
    type: String
  },
  hotelstay: {
    type: String
  },
  sightseeing: {
    type: String
  },
  visafees: {
    type: String
  },
  governmentTax: {
    type: String
  },
  surcharge: {
    type: String
  },
  cruisestay: {
    type: String
  },
  freegoodies: {
    type: String
  },
  stayandmeals: {
    type: String
  },
  passportfees: {
    type: String
  },
  staybreakfast: {
    type: String
  },
  tourmanager: {
    type: String
  },
  breakfastanddinner: {
    type: String
  },
  totaldayscount: {
    type: String
  },
  itineraryType: {
    type: String
  },
  itineraryName: {
    type: String
  },
  citiesCovers: {
    type: String
  },
  invoicenumber: {
    type: String
  },
  invoicedate: {
    type: String
  },
  invoiceBilling: {
    type: String
  },
  invoiceCustomerGSTIN: {
    type: String
  },
  invoiceStateCode: {
    type: String
  },
  invoiceCustmerPAN: {
    type: String
  },
  invoiceAddress: {
    type: String
  },
  invoiceSupply: {
    type: String
  },
  invoicecomment1: {
    type: String
  },
  invoicecomment2: {
    type: String
  },
  invoiceRate1: {
    type: String
  },
  invoiceQuantity1: {
    type: String
  },
  invoiceDiscount1: {
    type: String
  },
  invoiceGST1: {
    type: String
  },
  invoiceHSN1: {
    type: String
  },
  invoiceRate2: {
    type: String
  },
  invoiceQuantity2: {
    type: String
  },
  invoiceDiscount2: {
    type: String
  },
  invoiceGST2: {
    type: String
  },
  invoiceHSN2: {
    type: String
  },
  inclusionnote: {
    type: String
  },
  exclusionnote: {
    type: String
  },
  itineryCost: {
    type: String
  },
  itineryterms: {
    type: String
  },
  itineryCancel: {
    type: String
  },
  itinerytips: {
    type: String
  },
  itineryVisaInfo: {
    type: String
  },
  itineraryCustomer: {
    type: String
  },
  itineraryEmail: {
    type: String
  },
  itineraryContact: {
    type: String
  },
  itineraryAddress: {
    type: String
  },
  itineraryCountry: {
    type: String
  },
  itineraryState: {
    type: String
  },
  itineraryCity: {
    type: String
  },
  itineraryPostalCode: {
    type: String
  },
  itineraryBirthDate: {
    type: String
  },
  itineraryAnniversary: {
    type: String
  },
  itineraryNote: {
    type: String
  },
  itineraryTitle: {
    type: String
  },
  itineraryHolidays: {
    type: String
  },
  itineraryAdults: {
    type: String
  },
  itineraryChild: {
    type: String
  },
  itineraryStartDate: {
    type: String
  },
  itineraryEndDate: {
    type: String
  },
  itineraryNights: {
    type: String
  },
  itineraryTraveller: {
    type: String
  },
  itineraryBudgetCost: {
    type: String
  },
  itineraryCostFor: {
    type: String
  },
  itineraryAirfare: {
    type: String
  },
  itineraryHotelStay: {
    type: String
  },
  itineraryVisa: {
    type: String
  },
  itinerarySurcharge: {
    type: String
  },
  itineraryGoodies: {
    type: String
  },
  itineraryPassport: {
    type: String
  },
  itineraryTourManager: {
    type: String
  },
  itineraryTransport: {
    type: String
  },
  itinerarySightseeing: {
    type: String
  },
  itineraryGovtTax: {
    type: String
  },
  itineraryCruise: {
    type: String
  },
  itineraryAPAI: {
    type: String
  },
  itineraryCP: {
    type: String
  },
  itineraryMAP: {
    type: String
  },
  itineraryImage: {
    type: String
  },
  flightTrips: {
    type: String
  },
  noOfRooms: {
    type: String
  },
  trainTrips: {
    type: String
  },
  startingPoint: {
    type: String
  },
  endingPoint: {
    type: String
  },
  cabPickUp: {
    type: String
  },
  cabDrop: {
    type: String
  },
  flightClass: {
    type: String
  },
  trainClass: {
    type: String
  },
  cabVehicleType: {
    type: String
  },
  itineraryWelcome: {
    type: String
  },
  itinerarythankyou: {
    type: String
  },
  itineraryDayPlans: {
    type: String
  },
  dayTitleDay1: {
    type: String
  },
  dayPlanDay1: {
    type: String
  },
  dayTitleDay2: {
    type: String
  },
  dayPlanDay2: {
    type: String
  },
  dayTitleDay3: {
    type: String
  },
  dayPlanDay3: {
    type: String
  },
  dayTitleDay4: {
    type: String
  },
  dayPlanDay4: {
    type: String
  },
  dayTitleDay5: {
    type: String
  },
  dayPlanDay5: {
    type: String
  },
  foodTimeDay1: {
    type: String
  },
  foodBreakfastDay1: {
    type: String
  },
  foodLunchDay1: {
    type: String
  },
  foodDinnerDay1: {
    type: String
  },
  foodSnacksDay1: {
    type: String
  },
  foodNoteDay1: {
    type: String
  },
  foodTimeDay2: {
    type: String
  },
  foodBreakfastDay2: {
    type: String
  },
  foodLunchDay2: {
    type: String
  },
  foodDinnerDay2: {
    type: String
  },
  foodSnacksDay2: {
    type: String
  },
  foodNoteDay2: {
    type: String
  },
  foodTimeDay3: {
    type: String
  },
  foodBreakfastDay3: {
    type: String
  },
  foodLunchDay3: {
    type: String
  },
  foodDinnerDay3: {
    type: String
  },
  foodSnacksDay3: {
    type: String
  },
  foodNoteDay3: {
    type: String
  },
  foodTimeDay4: {
    type: String
  },
  foodBreakfastDay4: {
    type: String
  },
  foodLunchDay4: {
    type: String
  },
  foodDinnerDay4: {
    type: String
  },
  foodSnacksDay4: {
    type: String
  },
  foodNoteDay4: {
    type: String
  },
  foodTimeDay5: {
    type: String
  },
  foodBreakfastDay5: {
    type: String
  },
  foodLunchDay5: {
    type: String
  },
  foodDinnerDay5: {
    type: String
  },
  foodSnacksDay5: {
    type: String
  },
  foodNoteDay5: {
    type: String
  },
  hotelCountryNameDay1: {
    type: String
  },
  hotelStateNameDay1: {
    type: String
  },
  hotelCityNameDay1: {
    type: String
  },
  hotelChoseHotelNameDay1: {
    type: String
  },
  hotelCheckInDateDay1: {
    type: String
  },
  hotelCheckInTimeDay1: {
    type: String
  },
  hotelNoOfNightsDay1: {
    type: String
  },
  hotelNoOfAdultsDay1: {
    type: String
  },
  hotelNoOfRoomsDay1: {
    type: String
  },
  hotelNoOfChildDay1: {
    type: String
  },
  hotelNoOfExtraBedDay1: {
    type: String
  },
  hotelRoomTypeDay1: {
    type: String
  },
  hotelNoteDay1: {
    type: String
  },
  hotelCountryNameDay2: {
    type: String
  },
  hotelStateNameDay2: {
    type: String
  },
  hotelCityNameDay2: {
    type: String
  },
  hotelChoseHotelNameDay2: {
    type: String
  },
  hotelCheckInDateDay2: {
    type: String
  },
  hotelCheckInTimeDay2: {
    type: String
  },
  hotelNoOfNightsDay2: {
    type: String
  },
  hotelNoOfAdultsDay2: {
    type: String
  },
  hotelNoOfRoomsDay2: {
    type: String
  },
  hotelNoOfChildDay2: {
    type: String
  },
  hotelNoOfExtraBedDay2: {
    type: String
  },
  hotelRoomTypeDay2: {
    type: String
  },
  hotelNoteDay2: {
    type: String
  },
  hotelCountryNameDay3: {
    type: String
  },
  hotelStateNameDay3: {
    type: String
  },
  hotelCityNameDay3: {
    type: String
  },
  hotelChoseHotelNameDay3: {
    type: String
  },
  hotelCheckInDateDay3: {
    type: String
  },
  hotelCheckInTimeDay3: {
    type: String
  },
  hotelNoOfNightsDay3: {
    type: String
  },
  hotelNoOfAdultsDay3: {
    type: String
  },
  hotelNoOfRoomsDay3: {
    type: String
  },
  hotelNoOfChildDay3: {
    type: String
  },
  hotelNoOfExtraBedDay3: {
    type: String
  },
  hotelRoomTypeDay3: {
    type: String
  },
  hotelNoteDay3: {
    type: String
  },
  hotelCountryNameDay4: {
    type: String
  },
  hotelStateNameDay4: {
    type: String
  },
  hotelCityNameDay4: {
    type: String
  },
  hotelChoseHotelNameDay4: {
    type: String
  },
  hotelCheckInDateDay4: {
    type: String
  },
  hotelCheckInTimeDay4: {
    type: String
  },
  hotelNoOfNightsDay4: {
    type: String
  },
  hotelNoOfAdultsDay4: {
    type: String
  },
  hotelNoOfRoomsDay4: {
    type: String
  },
  hotelNoOfChildDay4: {
    type: String
  },
  hotelNoOfExtraBedDay4: {
    type: String
  },
  hotelRoomTypeDay4: {
    type: String
  },
  hotelNoteDay4: {
    type: String
  },
  hotelCountryNameDay5: {
    type: String
  },
  hotelStateNameDay5: {
    type: String
  },
  hotelCityNameDay5: {
    type: String
  },
  hotelChoseHotelNameDay5: {
    type: String
  },
  hotelCheckInDateDay5: {
    type: String
  },
  hotelCheckInTimeDay5: {
    type: String
  },
  hotelNoOfNightsDay5: {
    type: String
  },
  hotelNoOfAdultsDay5: {
    type: String
  },
  hotelNoOfRoomsDay5: {
    type: String
  },
  hotelNoOfChildDay5: {
    type: String
  },
  hotelNoOfExtraBedDay5: {
    type: String
  },
  hotelRoomTypeDay5: {
    type: String
  },
  hotelNoteDay5: {
    type: String
  },
  transportTitleDay1: {
    type: String
  },
  transportModeDay1: {
    type: String
  },
  transDepartCountryDay1: {
    type: String
  },
  transArrivalCountryDay1: {
    type: String
  },
  transDepartCityDay1: {
    type: String
  },
  transArrivalCityDay1: {
    type: String
  },
  transStartingPointtDay1: {
    type: String
  },
  transEndingPointtDay1: {
    type: String
  },
  transDepartDateDay1: {
    type: String
  },
  transArrivalDateDay1: {
    type: String
  },
  transActualDepartureTimeDay1: {
    type: String
  },
  transReportingTimeDay1: {
    type: String
  },
  transActualArrivalTimeDay1: {
    type: String
  },
  transportationNoteDay1: {
    type: String
  },
  transportTitleDay2: {
    type: String
  },
  transportModeDay2: {
    type: String
  },
  transDepartCountryDay2: {
    type: String
  },
  transArrivalCountryDay2: {
    type: String
  },
  transDepartCityDay2: {
    type: String
  },
  transArrivalCityDay2: {
    type: String
  },
  transStartingPointtDay2: {
    type: String
  },
  transEndingPointtDay2: {
    type: String
  },
  transDepartDateDay2: {
    type: String
  },
  transArrivalDateDay2: {
    type: String
  },
  transActualDepartureTimeDay2: {
    type: String
  },
  transReportingTimeDay2: {
    type: String
  },
  transActualArrivalTimeDay2: {
    type: String
  },
  transportationNoteDay2: {
    type: String
  },
  transportTitleDay3: {
    type: String
  },
  transportModeDay3: {
    type: String
  },
  transDepartCountryDay3: {
    type: String
  },
  transArrivalCountryDay3: {
    type: String
  },
  transDepartCityDay3: {
    type: String
  },
  transArrivalCityDay3: {
    type: String
  },
  transStartingPointtDay3: {
    type: String
  },
  transEndingPointtDay3: {
    type: String
  },
  transDepartDateDay3: {
    type: String
  },
  transArrivalDateDay3: {
    type: String
  },
  transActualDepartureTimeDay3: {
    type: String
  },
  transReportingTimeDay3: {
    type: String
  },
  transActualArrivalTimeDay3: {
    type: String
  },
  transportationNoteDay3: {
    type: String
  },
  transportTitleDay4: {
    type: String
  },
  transportModeDay4: {
    type: String
  },
  transDepartCountryDay4: {
    type: String
  },
  transArrivalCountryDay4: {
    type: String
  },
  transDepartCityDay4: {
    type: String
  },
  transArrivalCityDay4: {
    type: String
  },
  transStartingPointtDay4: {
    type: String
  },
  transEndingPointtDay4: {
    type: String
  },
  transDepartDateDay4: {
    type: String
  },
  transArrivalDateDay4: {
    type: String
  },
  transActualDepartureTimeDay4: {
    type: String
  },
  transReportingTimeDay4: {
    type: String
  },
  transActualArrivalTimeDay4: {
    type: String
  },
  transportationNoteDay4: {
    type: String
  },
  transportTitleDay5: {
    type: String
  },
  transportModeDay5: {
    type: String
  },
  transDepartCountryDay5: {
    type: String
  },
  transArrivalCountryDay5: {
    type: String
  },
  transDepartCityDay5: {
    type: String
  },
  transArrivalCityDay5: {
    type: String
  },
  transStartingPointtDay5: {
    type: String
  },
  transEndingPointtDay5: {
    type: String
  },
  transDepartDateDay5: {
    type: String
  },
  transArrivalDateDay5: {
    type: String
  },
  transActualDepartureTimeDay5: {
    type: String
  },
  transReportingTimeDay5: {
    type: String
  },
  transActualArrivalTimeDay5: {
    type: String
  },
  transportationNoteDay5: {
    type: String
  },
  visaCountry: {
    type: String
  },
  visaNoOfDays: {
    type: String
  },
  visaType: {
    type: String
  },
  visaRequiredDocuments: {
    type: String
  },
  guestNamme: {
    type: String
  },
  hotelpackage: {
    type: String
  },
  noOfGuest: {
    type: String
  },
  hotelmealPlan: {
    type: String
  },
  hotelbookThrough: {
    type: String
  },
  hotelissueBy: {
    type: String
  },
  voucherNumber: {
    type: String
  },
  hotelissueDate: {
    type: String
  },
  voucherCountry: {
    type: String
  },
  voucherState: {
    type: String
  },
  voucherCity: {
    type: String
  },
  emergencyContantPersonName1: {
    type: String
  },
  emergencyContantPersonName2: {
    type: String
  },
  emergencyContantPersonName3: {
    type: String
  },
  emergencyContantPersonNumber1: {
    type: String
  },
  emergencyContantPersonNumber2: {
    type: String
  },
  emergencyContantPersonNumber3: {
    type: String
  },
  emerencyNote: {
    type: String
  },
  enabledCheckout: {
    type: String
  },
  enabledReturnJourney: {
    type: String
  },
  sightseeingSearchField: {
    type: String
  },
  sightseeingSearchNote: {
    type: String
  },
  sightseeingSearch: {
    type: String
  },
  sightseeingCityNameDay1: {
    type: String
  },
  sightseeingCountryDay1: {
    type: String
  },
  checkOuthotelCountryNameDay1: {
    type: String
  },
  checkOuthotelStateNameDay1: {
    type: String
  },
  checkOuthotelCityNameDay1: {
    type: String
  },
  checkOuthotelChoseHotelNameDay1: {
    type: String
  },
  checkOuthotelDateDay1: {
    type: String
  },
  checkOuthotelTimeDay1: {
    type: String
  },
  checkOuthotelNoOfNightsDay1: {
    type: String
  },
  checkOuthotelNoOfAdultsDay1: {
    type: String
  },
  checkOuthotelNoOfRoomsDay1: {
    type: String
  },
  checkOuthotelNoOfChildDay1: {
    type: String
  },
  checkOuthotelNoOfExtraBedDay1: {
    type: String
  },
  checkOuthotelRoomTypeDay1: {
    type: String
  },
  checkOuthotelNoteDay1: {
    type: String
  },
  returnTransportTitleDay1: {
    type: String
  },
  returnTransportModeDay1: {
    type: String
  },
  returnTransDepartCountryDay1: {
    type: String
  },
  returnTransArrivalCountryDay1: {
    type: String
  },
  returnTransDepartCityDay1: {
    type: String
  },
  returnTransArrivalCityDay1: {
    type: String
  },
  returnTransStartingPointtDay1: {
    type: String
  },
  returnTransEndingPointtDay1: {
    type: String
  },
  returnTransDepartDateDay1: {
    type: String
  },
  returnTransArrivalDateDay1: {
    type: String
  },
  returnTransActualDepartureTimeDay1: {
    type: String
  },
  returnTransReportingTimeDay1: {
    type: String
  },
  returnTransActualArrivalTimeDay1: {
    type: String
  },
  returnTransportationNoteDay1: {
    type: String
  },
  sightseeingCountryDay2: {
    type: String
  },
  sightseeingCityNameDay2: {
    type: String
  },
  sightseeingSearchdDay2: {
    type: String
  },
  sightseeingSearchFieldDay2: {
    type: String
  },
  sightseeingCountryDay3: {
    type: String
  },
  sightseeingCityNameDay3: {
    type: String
  },
  sightseeingSearchdDay3: {
    type: String
  },
  sightseeingSearchFieldDay3: {
    type: String
  },
  sightseeingCountryDay4: {
    type: String
  },
  sightseeingCityNameDay4: {
    type: String
  },
  sightseeingSearchdDay4: {
    type: String
  },
  sightseeingSearchFieldDay4: {
    type: String
  },
  sightseeingCountryDay5: {
    type: String
  },
  sightseeingCityNameDay5: {
    type: String
  },
  sightseeingSearchdDay5: {
    type: String
  },
  sightseeingSearchFieldDay5: {
    type: String
  },
  sightseeingCountryDay6: {
    type: String
  },
  sightseeingCityNameDay6: {
    type: String
  },
  sightseeingSearchdDay6: {
    type: String
  },
  sightseeingSearchFieldDay6: {
    type: String
  },
  sightseeingCountryDay7: {
    type: String
  },
  sightseeingCityNameDay7: {
    type: String
  },
  sightseeingSearchdDay7: {
    type: String
  },
  sightseeingSearchFieldDay7: {
    type: String
  },
  sightseeingCountryDay8: {
    type: String
  },
  sightseeingCityNameDay8: {
    type: String
  },
  sightseeingSearchdDay8: {
    type: String
  },
  sightseeingSearchFieldDay8: {
    type: String
  },
  sightseeingCountryDay9: {
    type: String
  },
  sightseeingCityNameDay9: {
    type: String
  },
  sightseeingSearchdDay9: {
    type: String
  },
  sightseeingSearchFieldDay9: {
    type: String
  },
  sightseeingCountryDay10: {
    type: String
  },
  sightseeingCityNameDay10: {
    type: String
  },
  sightseeingSearchdDay10: {
    type: String
  },
  sightseeingSearchFieldDay10: {
    type: String
  },
  sightseeingCountryDay11: {
    type: String
  },
  sightseeingCityNameDay11: {
    type: String
  },
  sightseeingSearchdDay11: {
    type: String
  },
  sightseeingSearchFieldDay11: {
    type: String
  },
  sightseeingCountryDay12: {
    type: String
  },
  sightseeingCityNameDay12: {
    type: String
  },
  sightseeingSearchdDay12: {
    type: String
  },
  sightseeingSearchFieldDay12: {
    type: String
  },
  sightseeingCountryDay13: {
    type: String
  },
  sightseeingCityNameDay13: {
    type: String
  },
  sightseeingSearchdDay13: {
    type: String
  },
  sightseeingSearchFieldDay13: {
    type: String
  },
  sightseeingCountryDay14: {
    type: String
  },
  sightseeingCityNameDay14: {
    type: String
  },
  sightseeingSearchdDay14: {
    type: String
  },
  sightseeingSearchFieldDay14: {
    type: String
  },
  sightseeingCountryDay15: {
    type: String
  },
  sightseeingCityNameDay15: {
    type: String
  },
  sightseeingSearchdDay15: {
    type: String
  },
  sightseeingSearchFieldDay15: {
    type: String
  },
  sightseeingCountryDay16: {
    type: String
  },
  sightseeingCityNameDay16: {
    type: String
  },
  sightseeingSearchdDay16: {
    type: String
  },
  sightseeingSearchFieldDay16: {
    type: String
  },
  sightseeingCountryDay17: {
    type: String
  },
  sightseeingCityNameDay17: {
    type: String
  },
  sightseeingSearchdDay17: {
    type: String
  },
  sightseeingSearchFieldDay17: {
    type: String
  },
  sightseeingCountryDay18: {
    type: String
  },
  sightseeingCityNameDay18: {
    type: String
  },
  sightseeingSearchdDay18: {
    type: String
  },
  sightseeingSearchFieldDay18: {
    type: String
  },
  sightseeingCountryDay19: {
    type: String
  },
  sightseeingCityNameDay19: {
    type: String
  },
  sightseeingSearchdDay19: {
    type: String
  },
  sightseeingSearchFieldDay19: {
    type: String
  },
  sightseeingCountryDay20: {
    type: String
  },
  sightseeingCityNameDay20: {
    type: String
  },
  sightseeingSearchdDay20: {
    type: String
  },
  sightseeingSearchFieldDay20: {
    type: String
  },
  sightseeing2Checkbox: {
    type: String
  },
  sightseeing3Checkbox: {
    type: String
  },
  sightseeing4Checkbox: {
    type: String
  },
  sightseeing5Checkbox: {
    type: String
  },
  dayTitleDay6: {
    type: String
  },
  dayPlanDay6: {
    type: String
  },
  dayTitleDay7: {
    type: String
  },
  dayPlanDay7: {
    type: String
  },
  dayTitleDay8: {
    type: String
  },
  dayPlanDay8: {
    type: String
  },
  dayTitleDay9: {
    type: String
  },
  dayPlanDay9: {
    type: String
  },
  dayTitleDay10: {
    type: String
  },
  dayPlanDay10: {
    type: String
  },
  dayTitleDay11: {
    type: String
  },
  dayPlanDay11: {
    type: String
  },
  dayTitleDay12: {
    type: String
  },
  dayPlanDay12: {
    type: String
  },
  dayTitleDay13: {
    type: String
  },
  dayPlanDay13: {
    type: String
  },
  dayTitleDay14: {
    type: String
  },
  dayPlanDay14: {
    type: String
  },
  dayTitleDay15: {
    type: String
  },
  dayPlanDay15: {
    type: String
  },
  dayTitleDay16: {
    type: String
  },
  dayPlanDay16: {
    type: String
  },
  dayTitleDay17: {
    type: String
  },
  dayPlanDay17: {
    type: String
  },
  dayTitleDay18: {
    type: String
  },
  dayPlanDay18: {
    type: String
  },
  dayTitleDay19: {
    type: String
  },
  dayPlanDay19: {
    type: String
  },
  dayTitleDay20: {
    type: String
  },
  dayPlanDay20: {
    type: String
  },
  dayTitleDay21: {
    type: String
  },
  dayPlanDay21: {
    type: String
  },
  dayTitleDay22: {
    type: String
  },
  dayPlanDay22: {
    type: String
  },
  checkOuthotelCountryNameDay2: {
    type: String
  },
  checkOuthotelStateNameDay2: {
    type: String
  },
  checkOuthotelCityNameDay2: {
    type: String
  },
  checkOuthotelChoseHotelNameDay2: {
    type: String
  },
  checkOuthotelDateDay2: {
    type: String
  },
  checkOuthotelTimeDay2: {
    type: String
  },
  checkOuthotelNoOfNightsDay2: {
    type: String
  },
  checkOuthotelNoOfAdultsDay2: {
    type: String
  },
  checkOuthotelNoOfRoomsDay2: {
    type: String
  },
  checkOuthotelNoOfChildDay2: {
    type: String
  },
  checkOuthotelNoOfExtraBedDay2: {
    type: String
  },
  checkOuthotelRoomTypeDay2: {
    type: String
  },
  checkOuthotelNoteDay2: {
    type: String
  },
  checkOuthotelCountryNameDay3: {
    type: String
  },
  checkOuthotelStateNameDay3: {
    type: String
  },
  checkOuthotelCityNameDay3: {
    type: String
  },
  checkOuthotelChoseHotelNameDay3: {
    type: String
  },
  checkOuthotelDateDay3: {
    type: String
  },
  checkOuthotelTimeDay3: {
    type: String
  },
  checkOuthotelNoOfNightsDay3: {
    type: String
  },
  checkOuthotelNoOfAdultsDay3: {
    type: String
  },
  checkOuthotelNoOfRoomsDay3: {
    type: String
  },
  checkOuthotelNoOfChildDay3: {
    type: String
  },
  checkOuthotelNoOfExtraBedDay3: {
    type: String
  },
  checkOuthotelRoomTypeDay3: {
    type: String
  },
  checkOuthotelNoteDay3: {
    type: String
  },
  checkOuthotelCountryNameDay4: {
    type: String
  },
  checkOuthotelStateNameDay4: {
    type: String
  },
  checkOuthotelCityNameDay4: {
    type: String
  },
  checkOuthotelChoseHotelNameDay4: {
    type: String
  },
  checkOuthotelDateDay4: {
    type: String
  },
  checkOuthotelTimeDay4: {
    type: String
  },
  checkOuthotelNoOfNightsDay4: {
    type: String
  },
  checkOuthotelNoOfAdultsDay4: {
    type: String
  },
  checkOuthotelNoOfRoomsDay4: {
    type: String
  },
  checkOuthotelNoOfChildDay4: {
    type: String
  },
  checkOuthotelNoOfExtraBedDay4: {
    type: String
  },
  checkOuthotelRoomTypeDay4: {
    type: String
  },
  checkOuthotelNoteDay4: {
    type: String
  },
  checkOuthotelCountryNameDay5: {
    type: String
  },
  checkOuthotelStateNameDay5: {
    type: String
  },
  checkOuthotelCityNameDay5: {
    type: String
  },
  checkOuthotelChoseHotelNameDay5: {
    type: String
  },
  checkOuthotelDateDay5: {
    type: String
  },
  checkOuthotelTimeDay5: {
    type: String
  },
  checkOuthotelNoOfNightsDay5: {
    type: String
  },
  checkOuthotelNoOfAdultsDay5: {
    type: String
  },
  checkOuthotelNoOfRoomsDay5: {
    type: String
  },
  checkOuthotelNoOfChildDay5: {
    type: String
  },
  checkOuthotelNoOfExtraBedDay5: {
    type: String
  },
  checkOuthotelRoomTypeDay5: {
    type: String
  },
  checkOuthotelNoteDay5: {
    type: String
  },
  checkOuthotelCountryNameDay6: {
    type: String
  },
  checkOuthotelStateNameDay6: {
    type: String
  },
  checkOuthotelCityNameDay6: {
    type: String
  },
  checkOuthotelChoseHotelNameDay6: {
    type: String
  },
  checkOuthotelDateDay6: {
    type: String
  },
  checkOuthotelTimeDay6: {
    type: String
  },
  checkOuthotelNoOfNightsDay6: {
    type: String
  },
  checkOuthotelNoOfAdultsDay6: {
    type: String
  },
  checkOuthotelNoOfRoomsDay6: {
    type: String
  },
  checkOuthotelNoOfChildDay6: {
    type: String
  },
  checkOuthotelNoOfExtraBedDay6: {
    type: String
  },
  checkOuthotelRoomTypeDay6: {
    type: String
  },
  checkOuthotelNoteDay6: {
    type: String
  },
  checkOuthotelCountryNameDay7: {
    type: String
  },
  checkOuthotelStateNameDay7: {
    type: String
  },
  checkOuthotelCityNameDay7: {
    type: String
  },
  checkOuthotelChoseHotelNameDay7: {
    type: String
  },
  checkOuthotelDateDay7: {
    type: String
  },
  checkOuthotelTimeDay7: {
    type: String
  },
  checkOuthotelNoOfNightsDay7: {
    type: String
  },
  checkOuthotelNoOfAdultsDay7: {
    type: String
  },
  checkOuthotelNoOfRoomsDay7: {
    type: String
  },
  checkOuthotelNoOfChildDay7: {
    type: String
  },
  checkOuthotelNoOfExtraBedDay7: {
    type: String
  },
  checkOuthotelRoomTypeDay7: {
    type: String
  },
  checkOuthotelNoteDay7: {
    type: String
  },
  checkOuthotelCountryNameDay8: {
    type: String
  },
  checkOuthotelStateNameDay8: {
    type: String
  },
  checkOuthotelCityNameDay8: {
    type: String
  },
  checkOuthotelChoseHotelNameDay8: {
    type: String
  },
  checkOuthotelDateDay8: {
    type: String
  },
  checkOuthotelTimeDay8: {
    type: String
  },
  checkOuthotelNoOfNightsDay8: {
    type: String
  },
  checkOuthotelNoOfAdultsDay8: {
    type: String
  },
  checkOuthotelNoOfRoomsDay8: {
    type: String
  },
  checkOuthotelNoOfChildDay8: {
    type: String
  },
  checkOuthotelNoOfExtraBedDay8: {
    type: String
  },
  checkOuthotelRoomTypeDay8: {
    type: String
  },
  checkOuthotelNoteDay8: {
    type: String
  },
  checkOuthotelCountryNameDay9: {
    type: String
  },
  checkOuthotelStateNameDay9: {
    type: String
  },
  checkOuthotelCityNameDay9: {
    type: String
  },
  checkOuthotelChoseHotelNameDay9: {
    type: String
  },
  checkOuthotelDateDay9: {
    type: String
  },
  checkOuthotelTimeDay9: {
    type: String
  },
  checkOuthotelNoOfNightsDay9: {
    type: String
  },
  checkOuthotelNoOfAdultsDay9: {
    type: String
  },
  checkOuthotelNoOfRoomsDay9: {
    type: String
  },
  checkOuthotelNoOfChildDay9: {
    type: String
  },
  checkOuthotelNoOfExtraBedDay9: {
    type: String
  },
  checkOuthotelRoomTypeDay9: {
    type: String
  },
  checkOuthotelNoteDay9: {
    type: String
  },
  checkOuthotelCountryNameDay10: {
    type: String
  },
  checkOuthotelStateNameDay10: {
    type: String
  },
  checkOuthotelCityNameDay10: {
    type: String
  },
  checkOuthotelChoseHotelNameDay10: {
    type: String
  },
  checkOuthotelDateDay10: {
    type: String
  },
  checkOuthotelTimeDay10: {
    type: String
  },
  checkOuthotelNoOfNightsDay10: {
    type: String
  },
  checkOuthotelNoOfAdultsDay10: {
    type: String
  },
  checkOuthotelNoOfRoomsDay10: {
    type: String
  },
  checkOuthotelNoOfChildDay10: {
    type: String
  },
  checkOuthotelNoOfExtraBedDay10: {
    type: String
  },
  checkOuthotelRoomTypeDay10: {
    type: String
  },
  checkOuthotelNoteDay10: {
    type: String
  },
  checkOuthotelCountryNameDay11: {
    type: String
  },
  checkOuthotelStateNameDay11: {
    type: String
  },
  checkOuthotelCityNameDay11: {
    type: String
  },
  checkOuthotelChoseHotelNameDay11: {
    type: String
  },
  checkOuthotelDateDay11: {
    type: String
  },
  checkOuthotelTimeDay11: {
    type: String
  },
  checkOuthotelNoOfNightsDay11: {
    type: String
  },
  checkOuthotelNoOfAdultsDay11: {
    type: String
  },
  checkOuthotelNoOfRoomsDay11: {
    type: String
  },
  checkOuthotelNoOfChildDay11: {
    type: String
  },
  checkOuthotelNoOfExtraBedDay11: {
    type: String
  },
  checkOuthotelRoomTypeDay11: {
    type: String
  },
  checkOuthotelNoteDay11: {
    type: String
  },
  checkOuthotelCountryNameDay12: {
    type: String
  },
  checkOuthotelStateNameDay12: {
    type: String
  },
  checkOuthotelCityNameDay12: {
    type: String
  },
  checkOuthotelChoseHotelNameDay12: {
    type: String
  },
  checkOuthotelDateDay12: {
    type: String
  },
  checkOuthotelTimeDay12: {
    type: String
  },
  checkOuthotelNoOfNightsDay12: {
    type: String
  },
  checkOuthotelNoOfAdultsDay12: {
    type: String
  },
  checkOuthotelNoOfRoomsDay12: {
    type: String
  },
  checkOuthotelNoOfChildDay12: {
    type: String
  },
  checkOuthotelNoOfExtraBedDay12: {
    type: String
  },
  checkOuthotelRoomTypeDay12: {
    type: String
  },
  checkOuthotelNoteDay12: {
    type: String
  },
  checkOuthotelCountryNameDay13: {
    type: String
  },
  checkOuthotelStateNameDay13: {
    type: String
  },
  checkOuthotelCityNameDay13: {
    type: String
  },
  checkOuthotelChoseHotelNameDay13: {
    type: String
  },
  checkOuthotelDateDay13: {
    type: String
  },
  checkOuthotelTimeDay13: {
    type: String
  },
  checkOuthotelNoOfNightsDay13: {
    type: String
  },
  checkOuthotelNoOfAdultsDay13: {
    type: String
  },
  checkOuthotelNoOfRoomsDay13: {
    type: String
  },
  checkOuthotelNoOfChildDay13: {
    type: String
  },
  checkOuthotelNoOfExtraBedDay13: {
    type: String
  },
  checkOuthotelRoomTypeDay13: {
    type: String
  },
  checkOuthotelNoteDay13: {
    type: String
  },
  checkOuthotelCountryNameDay14: {
    type: String
  },
  checkOuthotelStateNameDay14: {
    type: String
  },
  checkOuthotelCityNameDay14: {
    type: String
  },
  checkOuthotelChoseHotelNameDay14: {
    type: String
  },
  checkOuthotelDateDay14: {
    type: String
  },
  checkOuthotelTimeDay14: {
    type: String
  },
  checkOuthotelNoOfNightsDay14: {
    type: String
  },
  checkOuthotelNoOfAdultsDay14: {
    type: String
  },
  checkOuthotelNoOfRoomsDay14: {
    type: String
  },
  checkOuthotelNoOfChildDay14: {
    type: String
  },
  checkOuthotelNoOfExtraBedDay14: {
    type: String
  },
  checkOuthotelRoomTypeDay14: {
    type: String
  },
  checkOuthotelNoteDay14: {
    type: String
  },
  checkOuthotelCountryNameDay15: {
    type: String
  },
  checkOuthotelStateNameDay15: {
    type: String
  },
  checkOuthotelCityNameDay15: {
    type: String
  },
  checkOuthotelChoseHotelNameDay15: {
    type: String
  },
  checkOuthotelDateDay15: {
    type: String
  },
  checkOuthotelTimeDay15: {
    type: String
  },
  checkOuthotelNoOfNightsDay15: {
    type: String
  },
  checkOuthotelNoOfAdultsDay15: {
    type: String
  },
  checkOuthotelNoOfRoomsDay15: {
    type: String
  },
  checkOuthotelNoOfChildDay15: {
    type: String
  },
  checkOuthotelNoOfExtraBedDay15: {
    type: String
  },
  checkOuthotelRoomTypeDay15: {
    type: String
  },
  checkOuthotelNoteDay15: {
    type: String
  },
  checkOuthotelCountryNameDay16: {
    type: String
  },
  checkOuthotelStateNameDay16: {
    type: String
  },
  checkOuthotelCityNameDay16: {
    type: String
  },
  checkOuthotelChoseHotelNameDay16: {
    type: String
  },
  checkOuthotelDateDay16: {
    type: String
  },
  checkOuthotelTimeDay16: {
    type: String
  },
  checkOuthotelNoOfNightsDay16: {
    type: String
  },
  checkOuthotelNoOfAdultsDay16: {
    type: String
  },
  checkOuthotelNoOfRoomsDay16: {
    type: String
  },
  checkOuthotelNoOfChildDay16: {
    type: String
  },
  checkOuthotelNoOfExtraBedDay16: {
    type: String
  },
  checkOuthotelRoomTypeDay16: {
    type: String
  },
  checkOuthotelNoteDay16: {
    type: String
  },
  checkOuthotelCountryNameDay17: {
    type: String
  },
  checkOuthotelStateNameDay17: {
    type: String
  },
  checkOuthotelCityNameDay17: {
    type: String
  },
  checkOuthotelChoseHotelNameDay17: {
    type: String
  },
  checkOuthotelDateDay17: {
    type: String
  },
  checkOuthotelTimeDay17: {
    type: String
  },
  checkOuthotelNoOfNightsDay17: {
    type: String
  },
  checkOuthotelNoOfAdultsDay17: {
    type: String
  },
  checkOuthotelNoOfRoomsDay17: {
    type: String
  },
  checkOuthotelNoOfChildDay17: {
    type: String
  },
  checkOuthotelNoOfExtraBedDay17: {
    type: String
  },
  checkOuthotelRoomTypeDay17: {
    type: String
  },
  checkOuthotelNoteDay17: {
    type: String
  },
  checkOuthotelCountryNameDay18: {
    type: String
  },
  checkOuthotelStateNameDay18: {
    type: String
  },
  checkOuthotelCityNameDay18: {
    type: String
  },
  checkOuthotelChoseHotelNameDay18: {
    type: String
  },
  checkOuthotelDateDay18: {
    type: String
  },
  checkOuthotelTimeDay18: {
    type: String
  },
  checkOuthotelNoOfNightsDay18: {
    type: String
  },
  checkOuthotelNoOfAdultsDay18: {
    type: String
  },
  checkOuthotelNoOfRoomsDay18: {
    type: String
  },
  checkOuthotelNoOfChildDay18: {
    type: String
  },
  checkOuthotelNoOfExtraBedDay18: {
    type: String
  },
  checkOuthotelRoomTypeDay18: {
    type: String
  },
  checkOuthotelNoteDay18: {
    type: String
  },
  checkOuthotelCountryNameDay19: {
    type: String
  },
  checkOuthotelStateNameDay19: {
    type: String
  },
  checkOuthotelCityNameDay19: {
    type: String
  },
  checkOuthotelChoseHotelNameDay19: {
    type: String
  },
  checkOuthotelDateDay19: {
    type: String
  },
  checkOuthotelTimeDay19: {
    type: String
  },
  checkOuthotelNoOfNightsDay19: {
    type: String
  },
  checkOuthotelNoOfAdultsDay19: {
    type: String
  },
  checkOuthotelNoOfRoomsDay19: {
    type: String
  },
  checkOuthotelNoOfChildDay19: {
    type: String
  },
  checkOuthotelNoOfExtraBedDay19: {
    type: String
  },
  checkOuthotelRoomTypeDay19: {
    type: String
  },
  checkOuthotelNoteDay19: {
    type: String
  },
  checkOuthotelCountryNameDay20: {
    type: String
  },
  checkOuthotelStateNameDay20: {
    type: String
  },
  checkOuthotelCityNameDay20: {
    type: String
  },
  checkOuthotelChoseHotelNameDay20: {
    type: String
  },
  checkOuthotelDateDay20: {
    type: String
  },
  checkOuthotelTimeDay20: {
    type: String
  },
  checkOuthotelNoOfNightsDay20: {
    type: String
  },
  checkOuthotelNoOfAdultsDay20: {
    type: String
  },
  checkOuthotelNoOfRoomsDay20: {
    type: String
  },
  checkOuthotelNoOfChildDay20: {
    type: String
  },
  checkOuthotelNoOfExtraBedDay20: {
    type: String
  },
  checkOuthotelRoomTypeDay20: {
    type: String
  },
  checkOuthotelNoteDay20: {
    type: String
  },
  checkOuthotelCountryNameDay21: {
    type: String
  },
  checkOuthotelStateNameDay21: {
    type: String
  },
  checkOuthotelCityNameDay21: {
    type: String
  },
  checkOuthotelChoseHotelNameDay21: {
    type: String
  },
  checkOuthotelDateDay21: {
    type: String
  },
  checkOuthotelTimeDay21: {
    type: String
  },
  checkOuthotelNoOfNightsDay21: {
    type: String
  },
  checkOuthotelNoOfAdultsDay21: {
    type: String
  },
  checkOuthotelNoOfRoomsDay21: {
    type: String
  },
  checkOuthotelNoOfChildDay21: {
    type: String
  },
  checkOuthotelNoOfExtraBedDay21: {
    type: String
  },
  checkOuthotelRoomTypeDay21: {
    type: String
  },
  checkOuthotelNoteDay21: {
    type: String
  },
  checkOuthotelCountryNameDay22: {
    type: String
  },
  checkOuthotelStateNameDay22: {
    type: String
  },
  checkOuthotelCityNameDay22: {
    type: String
  },
  checkOuthotelChoseHotelNameDay22: {
    type: String
  },
  checkOuthotelDateDay22: {
    type: String
  },
  checkOuthotelTimeDay22: {
    type: String
  },
  checkOuthotelNoOfNightsDay22: {
    type: String
  },
  checkOuthotelNoOfAdultsDay22: {
    type: String
  },
  checkOuthotelNoOfRoomsDay22: {
    type: String
  },
  checkOuthotelNoOfChildDay22: {
    type: String
  },
  checkOuthotelNoOfExtraBedDay22: {
    type: String
  },
  checkOuthotelRoomTypeDay22: {
    type: String
  },
  checkOuthotelNoteDay22: {
    type: String
  },
  transportTitleDay6: {
    type: String
  },
  transportModeDay6: {
    type: String
  },
  transDepartCountryDay6: {
    type: String
  },
  transArrivalCountryDay6: {
    type: String
  },
  transDepartCityDay6: {
    type: String
  },
  transArrivalCityDay6: {
    type: String
  },
  transStartingPointtDay6: {
    type: String
  },
  transEndingPointtDay6: {
    type: String
  },
  transDepartDateDay6: {
    type: String
  },
  transArrivalDateDay6: {
    type: String
  },
  transActualDepartureTimeDay6: {
    type: String
  },
  transReportingTimeDay6: {
    type: String
  },
  transActualArrivalTimeDay6: {
    type: String
  },
  transportationNoteDay6: {
    type: String
  },
  transportTitleDay7: {
    type: String
  },
  transportModeDay7: {
    type: String
  },
  transDepartCountryDay7: {
    type: String
  },
  transArrivalCountryDay7: {
    type: String
  },
  transDepartCityDay7: {
    type: String
  },
  transArrivalCityDay7: {
    type: String
  },
  transStartingPointtDay7: {
    type: String
  },
  transEndingPointtDay7: {
    type: String
  },
  transDepartDateDay7: {
    type: String
  },
  transArrivalDateDay7: {
    type: String
  },
  transActualDepartureTimeDay7: {
    type: String
  },
  transReportingTimeDay7: {
    type: String
  },
  transActualArrivalTimeDay7: {
    type: String
  },
  transportationNoteDay7: {
    type: String
  },
  transportTitleDay8: {
    type: String
  },
  transportModeDay8: {
    type: String
  },
  transDepartCountryDay8: {
    type: String
  },
  transArrivalCountryDay8: {
    type: String
  },
  transDepartCityDay8: {
    type: String
  },
  transArrivalCityDay8: {
    type: String
  },
  transStartingPointtDay8: {
    type: String
  },
  transEndingPointtDay8: {
    type: String
  },
  transDepartDateDay8: {
    type: String
  },
  transArrivalDateDay8: {
    type: String
  },
  transActualDepartureTimeDay8: {
    type: String
  },
  transReportingTimeDay8: {
    type: String
  },
  transActualArrivalTimeDay8: {
    type: String
  },
  transportationNoteDay8: {
    type: String
  },
  transportTitleDay9: {
    type: String
  },
  transportModeDay9: {
    type: String
  },
  transDepartCountryDay9: {
    type: String
  },
  transArrivalCountryDay9: {
    type: String
  },
  transDepartCityDay9: {
    type: String
  },
  transArrivalCityDay9: {
    type: String
  },
  transStartingPointtDay9: {
    type: String
  },
  transEndingPointtDay9: {
    type: String
  },
  transDepartDateDay9: {
    type: String
  },
  transArrivalDateDay9: {
    type: String
  },
  transActualDepartureTimeDay9: {
    type: String
  },
  transReportingTimeDay9: {
    type: String
  },
  transActualArrivalTimeDay9: {
    type: String
  },
  transportationNoteDay9: {
    type: String
  },
  transportTitleDay10: {
    type: String
  },
  transportModeDay10: {
    type: String
  },
  transDepartCountryDay10: {
    type: String
  },
  transArrivalCountryDay10: {
    type: String
  },
  transDepartCityDay10: {
    type: String
  },
  transArrivalCityDay10: {
    type: String
  },
  transStartingPointtDay10: {
    type: String
  },
  transEndingPointtDay10: {
    type: String
  },
  transDepartDateDay10: {
    type: String
  },
  transArrivalDateDay10: {
    type: String
  },
  transActualDepartureTimeDay10: {
    type: String
  },
  transReportingTimeDay10: {
    type: String
  },
  transActualArrivalTimeDay10: {
    type: String
  },
  transportationNoteDay10: {
    type: String
  },
  transportTitleDay11: {
    type: String
  },
  transportModeDay11: {
    type: String
  },
  transDepartCountryDay11: {
    type: String
  },
  transArrivalCountryDay11: {
    type: String
  },
  transDepartCityDay11: {
    type: String
  },
  transArrivalCityDay11: {
    type: String
  },
  transStartingPointtDay11: {
    type: String
  },
  transEndingPointtDay11: {
    type: String
  },
  transDepartDateDay11: {
    type: String
  },
  transArrivalDateDay11: {
    type: String
  },
  transActualDepartureTimeDay11: {
    type: String
  },
  transReportingTimeDay11: {
    type: String
  },
  transActualArrivalTimeDay11: {
    type: String
  },
  transportationNoteDay11: {
    type: String
  },
  transportTitleDay12: {
    type: String
  },
  transportModeDay12: {
    type: String
  },
  transDepartCountryDay12: {
    type: String
  },
  transArrivalCountryDay12: {
    type: String
  },
  transDepartCityDay12: {
    type: String
  },
  transArrivalCityDay12: {
    type: String
  },
  transStartingPointtDay12: {
    type: String
  },
  transEndingPointtDay12: {
    type: String
  },
  transDepartDateDay12: {
    type: String
  },
  transArrivalDateDay12: {
    type: String
  },
  transActualDepartureTimeDay12: {
    type: String
  },
  transReportingTimeDay12: {
    type: String
  },
  transActualArrivalTimeDay12: {
    type: String
  },
  transportationNoteDay12: {
    type: String
  },
  transportTitleDay13: {
    type: String
  },
  transportModeDay13: {
    type: String
  },
  transDepartCountryDay13: {
    type: String
  },
  transArrivalCountryDay13: {
    type: String
  },
  transDepartCityDay13: {
    type: String
  },
  transArrivalCityDay13: {
    type: String
  },
  transStartingPointtDay13: {
    type: String
  },
  transEndingPointtDay13: {
    type: String
  },
  transDepartDateDay13: {
    type: String
  },
  transArrivalDateDay13: {
    type: String
  },
  transActualDepartureTimeDay13: {
    type: String
  },
  transReportingTimeDay13: {
    type: String
  },
  transActualArrivalTimeDay13: {
    type: String
  },
  transportationNoteDay13: {
    type: String
  },
  transportTitleDay14: {
    type: String
  },
  transportModeDay14: {
    type: String
  },
  transDepartCountryDay14: {
    type: String
  },
  transArrivalCountryDay14: {
    type: String
  },
  transDepartCityDay14: {
    type: String
  },
  transArrivalCityDay14: {
    type: String
  },
  transStartingPointtDay14: {
    type: String
  },
  transEndingPointtDay14: {
    type: String
  },
  transDepartDateDay14: {
    type: String
  },
  transArrivalDateDay14: {
    type: String
  },
  transActualDepartureTimeDay14: {
    type: String
  },
  transReportingTimeDay14: {
    type: String
  },
  transActualArrivalTimeDay14: {
    type: String
  },
  transportationNoteDay14: {
    type: String
  },
  transportTitleDay15: {
    type: String
  },
  transportModeDay15: {
    type: String
  },
  transDepartCountryDay15: {
    type: String
  },
  transArrivalCountryDay15: {
    type: String
  },
  transDepartCityDay15: {
    type: String
  },
  transArrivalCityDay15: {
    type: String
  },
  transStartingPointtDay15: {
    type: String
  },
  transEndingPointtDay15: {
    type: String
  },
  transDepartDateDay15: {
    type: String
  },
  transArrivalDateDay15: {
    type: String
  },
  transActualDepartureTimeDay15: {
    type: String
  },
  transReportingTimeDay15: {
    type: String
  },
  transActualArrivalTimeDay15: {
    type: String
  },
  transportationNoteDay15: {
    type: String
  },
  transportTitleDay16: {
    type: String
  },
  transportModeDay16: {
    type: String
  },
  transDepartCountryDay16: {
    type: String
  },
  transArrivalCountryDay16: {
    type: String
  },
  transDepartCityDay16: {
    type: String
  },
  transArrivalCityDay16: {
    type: String
  },
  transStartingPointtDay16: {
    type: String
  },
  transEndingPointtDay16: {
    type: String
  },
  transDepartDateDay16: {
    type: String
  },
  transArrivalDateDay16: {
    type: String
  },
  transActualDepartureTimeDay16: {
    type: String
  },
  transReportingTimeDay16: {
    type: String
  },
  transActualArrivalTimeDay16: {
    type: String
  },
  transportationNoteDay16: {
    type: String
  },
  transportTitleDay17: {
    type: String
  },
  transportModeDay17: {
    type: String
  },
  transDepartCountryDay17: {
    type: String
  },
  transArrivalCountryDay17: {
    type: String
  },
  transDepartCityDay17: {
    type: String
  },
  transArrivalCityDay17: {
    type: String
  },
  transStartingPointtDay17: {
    type: String
  },
  transEndingPointtDay17: {
    type: String
  },
  transDepartDateDay17: {
    type: String
  },
  transArrivalDateDay17: {
    type: String
  },
  transActualDepartureTimeDay17: {
    type: String
  },
  transReportingTimeDay17: {
    type: String
  },
  transActualArrivalTimeDay17: {
    type: String
  },
  transportationNoteDay17: {
    type: String
  },
  transportTitleDay18: {
    type: String
  },
  transportModeDay18: {
    type: String
  },
  transDepartCountryDay18: {
    type: String
  },
  transArrivalCountryDay18: {
    type: String
  },
  transDepartCityDay18: {
    type: String
  },
  transArrivalCityDay18: {
    type: String
  },
  transStartingPointtDay18: {
    type: String
  },
  transEndingPointtDay18: {
    type: String
  },
  transDepartDateDay18: {
    type: String
  },
  transArrivalDateDay18: {
    type: String
  },
  transActualDepartureTimeDay18: {
    type: String
  },
  transReportingTimeDay18: {
    type: String
  },
  transActualArrivalTimeDay18: {
    type: String
  },
  transportationNoteDay18: {
    type: String
  },
  transportTitleDay19: {
    type: String
  },
  transportModeDay19: {
    type: String
  },
  transDepartCountryDay19: {
    type: String
  },
  transArrivalCountryDay19: {
    type: String
  },
  transDepartCityDay19: {
    type: String
  },
  transArrivalCityDay19: {
    type: String
  },
  transStartingPointtDay19: {
    type: String
  },
  transEndingPointtDay19: {
    type: String
  },
  transDepartDateDay19: {
    type: String
  },
  transArrivalDateDay19: {
    type: String
  },
  transActualDepartureTimeDay19: {
    type: String
  },
  transReportingTimeDay19: {
    type: String
  },
  transActualArrivalTimeDay19: {
    type: String
  },
  transportationNoteDay19: {
    type: String
  },
  transportTitleDay20: {
    type: String
  },
  transportModeDay20: {
    type: String
  },
  transDepartCountryDay20: {
    type: String
  },
  transArrivalCountryDay20: {
    type: String
  },
  transDepartCityDay20: {
    type: String
  },
  transArrivalCityDay20: {
    type: String
  },
  transStartingPointtDay20: {
    type: String
  },
  transEndingPointtDay20: {
    type: String
  },
  transDepartDateDay20: {
    type: String
  },
  transArrivalDateDay20: {
    type: String
  },
  transActualDepartureTimeDay20: {
    type: String
  },
  transReportingTimeDay20: {
    type: String
  },
  transActualArrivalTimeDay20: {
    type: String
  },
  transportationNoteDay20: {
    type: String
  },
  transportTitleDay21: {
    type: String
  },
  transportModeDay21: {
    type: String
  },
  transDepartCountryDay21: {
    type: String
  },
  transArrivalCountryDay21: {
    type: String
  },
  transDepartCityDay21: {
    type: String
  },
  transArrivalCityDay21: {
    type: String
  },
  transStartingPointtDay21: {
    type: String
  },
  transEndingPointtDay21: {
    type: String
  },
  transDepartDateDay21: {
    type: String
  },
  transArrivalDateDay21: {
    type: String
  },
  transActualDepartureTimeDay21: {
    type: String
  },
  transReportingTimeDay21: {
    type: String
  },
  transActualArrivalTimeDay21: {
    type: String
  },
  transportationNoteDay21: {
    type: String
  },
  transportTitleDay22: {
    type: String
  },
  transportModeDay22: {
    type: String
  },
  transDepartCountryDay22: {
    type: String
  },
  transArrivalCountryDay22: {
    type: String
  },
  transDepartCityDay22: {
    type: String
  },
  transArrivalCityDay22: {
    type: String
  },
  transStartingPointtDay22: {
    type: String
  },
  transEndingPointtDay22: {
    type: String
  },
  transDepartDateDay22: {
    type: String
  },
  transArrivalDateDay22: {
    type: String
  },
  transActualDepartureTimeDay22: {
    type: String
  },
  transReportingTimeDay22: {
    type: String
  },
  transActualArrivalTimeDay22: {
    type: String
  },
  transportationNoteDay22: {
    type: String
  },
  foodTimeDay6: {
    type: String
  },
  foodBreakfastDay6: {
    type: String
  },
  foodLunchDay6: {
    type: String
  },
  foodDinnerDay6: {
    type: String
  },
  foodSnacksDay6: {
    type: String
  },
  foodNoteDay6: {
    type: String
  },
  foodTimeDay7: {
    type: String
  },
  foodBreakfastDay7: {
    type: String
  },
  foodLunchDay7: {
    type: String
  },
  foodDinnerDay7: {
    type: String
  },
  foodSnacksDay7: {
    type: String
  },
  foodNoteDay7: {
    type: String
  },
  foodTimeDay8: {
    type: String
  },
  foodBreakfastDay8: {
    type: String
  },
  foodLunchDay8: {
    type: String
  },
  foodDinnerDay8: {
    type: String
  },
  foodSnacksDay8: {
    type: String
  },
  foodNoteDay8: {
    type: String
  },
  foodTimeDay9: {
    type: String
  },
  foodBreakfastDay9: {
    type: String
  },
  foodLunchDay9: {
    type: String
  },
  foodDinnerDay9: {
    type: String
  },
  foodSnacksDay9: {
    type: String
  },
  foodNoteDay9: {
    type: String
  },
  foodTimeDay10: {
    type: String
  },
  foodBreakfastDay10: {
    type: String
  },
  foodLunchDay10: {
    type: String
  },
  foodDinnerDay10: {
    type: String
  },
  foodSnacksDay10: {
    type: String
  },
  foodNoteDay10: {
    type: String
  },
  foodTimeDay11: {
    type: String
  },
  foodBreakfastDay11: {
    type: String
  },
  foodLunchDay11: {
    type: String
  },
  foodDinnerDay11: {
    type: String
  },
  foodSnacksDay11: {
    type: String
  },
  foodNoteDay11: {
    type: String
  },
  foodTimeDay12: {
    type: String
  },
  foodBreakfastDay12: {
    type: String
  },
  foodLunchDay12: {
    type: String
  },
  foodDinnerDay12: {
    type: String
  },
  foodSnacksDay12: {
    type: String
  },
  foodNoteDay12: {
    type: String
  },
  foodTimeDay13: {
    type: String
  },
  foodBreakfastDay13: {
    type: String
  },
  foodLunchDay13: {
    type: String
  },
  foodDinnerDay13: {
    type: String
  },
  foodSnacksDay13: {
    type: String
  },
  foodNoteDay13: {
    type: String
  },
  foodTimeDay14: {
    type: String
  },
  foodBreakfastDay14: {
    type: String
  },
  foodLunchDay14: {
    type: String
  },
  foodDinnerDay14: {
    type: String
  },
  foodSnacksDay14: {
    type: String
  },
  foodNoteDay14: {
    type: String
  },
  foodTimeDay15: {
    type: String
  },
  foodBreakfastDay15: {
    type: String
  },
  foodLunchDay15: {
    type: String
  },
  foodDinnerDay15: {
    type: String
  },
  foodSnacksDay15: {
    type: String
  },
  foodNoteDay15: {
    type: String
  },
  foodTimeDay16: {
    type: String
  },
  foodBreakfastDay16: {
    type: String
  },
  foodLunchDay16: {
    type: String
  },
  foodDinnerDay16: {
    type: String
  },
  foodSnacksDay16: {
    type: String
  },
  foodNoteDay16: {
    type: String
  },
  foodTimeDay17: {
    type: String
  },
  foodBreakfastDay17: {
    type: String
  },
  foodLunchDay17: {
    type: String
  },
  foodDinnerDay17: {
    type: String
  },
  foodSnacksDay17: {
    type: String
  },
  foodNoteDay17: {
    type: String
  },
  foodTimeDay18: {
    type: String
  },
  foodBreakfastDay18: {
    type: String
  },
  foodLunchDay18: {
    type: String
  },
  foodDinnerDay18: {
    type: String
  },
  foodSnacksDay18: {
    type: String
  },
  foodNoteDay18: {
    type: String
  },
  foodTimeDay19: {
    type: String
  },
  foodBreakfastDay19: {
    type: String
  },
  foodLunchDay19: {
    type: String
  },
  foodDinnerDay19: {
    type: String
  },
  foodSnacksDay19: {
    type: String
  },
  foodNoteDay19: {
    type: String
  },
  foodTimeDay20: {
    type: String
  },
  foodBreakfastDay20: {
    type: String
  },
  foodLunchDay20: {
    type: String
  },
  foodDinnerDay20: {
    type: String
  },
  foodSnacksDay20: {
    type: String
  },
  foodNoteDay20: {
    type: String
  },
  foodTimeDay21: {
    type: String
  },
  foodBreakfastDay21: {
    type: String
  },
  foodLunchDay21: {
    type: String
  },
  foodDinnerDay21: {
    type: String
  },
  foodSnacksDay21: {
    type: String
  },
  foodNoteDay21: {
    type: String
  },
  foodTimeDay22: {
    type: String
  },
  foodBreakfastDay22: {
    type: String
  },
  foodLunchDay22: {
    type: String
  },
  foodDinnerDay22: {
    type: String
  },
  foodSnacksDay22: {
    type: String
  },
  foodNoteDay22: {
    type: String
  },
  returnTransportTitleDay2: {
    type: String
  },
  returnTransportModeDay2: {
    type: String
  },
  returnTransDepartCountryDay2: {
    type: String
  },
  returnTransArrivalCountryDay2: {
    type: String
  },
  returnTransDepartCityDay2: {
    type: String
  },
  returnTransArrivalCityDay2: {
    type: String
  },
  returnTransStartingPointtDay2: {
    type: String
  },
  returnTransEndingPointtDay2: {
    type: String
  },
  returnTransDepartDateDay2: {
    type: String
  },
  returnTransArrivalDateDay2: {
    type: String
  },
  returnTransActualDepartureTimeDay2: {
    type: String
  },
  returnTransReportingTimeDay2: {
    type: String
  },
  returnTransActualArrivalTimeDay2: {
    type: String
  },
  returnTransportationNoteDay2: {
    type: String
  },
  returnTransportTitleDay3: {
    type: String
  },
  returnTransportModeDay3: {
    type: String
  },
  returnTransDepartCountryDay3: {
    type: String
  },
  returnTransArrivalCountryDay3: {
    type: String
  },
  returnTransDepartCityDay3: {
    type: String
  },
  returnTransArrivalCityDay3: {
    type: String
  },
  returnTransStartingPointtDay3: {
    type: String
  },
  returnTransEndingPointtDay3: {
    type: String
  },
  returnTransDepartDateDay3: {
    type: String
  },
  returnTransArrivalDateDay3: {
    type: String
  },
  returnTransActualDepartureTimeDay3: {
    type: String
  },
  returnTransReportingTimeDay3: {
    type: String
  },
  returnTransActualArrivalTimeDay3: {
    type: String
  },
  returnTransportationNoteDay3: {
    type: String
  },
  returnTransportTitleDay4: {
    type: String
  },
  returnTransportModeDay4: {
    type: String
  },
  returnTransDepartCountryDay4: {
    type: String
  },
  returnTransArrivalCountryDay4: {
    type: String
  },
  returnTransDepartCityDay4: {
    type: String
  },
  returnTransArrivalCityDay4: {
    type: String
  },
  returnTransStartingPointtDay4: {
    type: String
  },
  returnTransEndingPointtDay4: {
    type: String
  },
  returnTransDepartDateDay4: {
    type: String
  },
  returnTransArrivalDateDay4: {
    type: String
  },
  returnTransActualDepartureTimeDay4: {
    type: String
  },
  returnTransReportingTimeDay4: {
    type: String
  },
  returnTransActualArrivalTimeDay4: {
    type: String
  },
  returnTransportationNoteDay4: {
    type: String
  },
  returnTransportTitleDay5: {
    type: String
  },
  returnTransportModeDay5: {
    type: String
  },
  returnTransDepartCountryDay5: {
    type: String
  },
  returnTransArrivalCountryDay5: {
    type: String
  },
  returnTransDepartCityDay5: {
    type: String
  },
  returnTransArrivalCityDay5: {
    type: String
  },
  returnTransStartingPointtDay5: {
    type: String
  },
  returnTransEndingPointtDay5: {
    type: String
  },
  returnTransDepartDateDay5: {
    type: String
  },
  returnTransArrivalDateDay5: {
    type: String
  },
  returnTransActualDepartureTimeDay5: {
    type: String
  },
  returnTransReportingTimeDay5: {
    type: String
  },
  returnTransActualArrivalTimeDay5: {
    type: String
  },
  returnTransportationNoteDay5: {
    type: String
  },
  returnTransportTitleDay6: {
    type: String
  },
  returnTransportModeDay6: {
    type: String
  },
  returnTransDepartCountryDay6: {
    type: String
  },
  returnTransArrivalCountryDay6: {
    type: String
  },
  returnTransDepartCityDay6: {
    type: String
  },
  returnTransArrivalCityDay6: {
    type: String
  },
  returnTransStartingPointtDay6: {
    type: String
  },
  returnTransEndingPointtDay6: {
    type: String
  },
  returnTransDepartDateDay6: {
    type: String
  },
  returnTransArrivalDateDay6: {
    type: String
  },
  returnTransActualDepartureTimeDay6: {
    type: String
  },
  returnTransReportingTimeDay6: {
    type: String
  },
  returnTransActualArrivalTimeDay6: {
    type: String
  },
  returnTransportationNoteDay6: {
    type: String
  },
  returnTransportTitleDay7: {
    type: String
  },
  returnTransportModeDay7: {
    type: String
  },
  returnTransDepartCountryDay7: {
    type: String
  },
  returnTransArrivalCountryDay7: {
    type: String
  },
  returnTransDepartCityDay7: {
    type: String
  },
  returnTransArrivalCityDay7: {
    type: String
  },
  returnTransStartingPointtDay7: {
    type: String
  },
  returnTransEndingPointtDay7: {
    type: String
  },
  returnTransDepartDateDay7: {
    type: String
  },
  returnTransArrivalDateDay7: {
    type: String
  },
  returnTransActualDepartureTimeDay7: {
    type: String
  },
  returnTransReportingTimeDay7: {
    type: String
  },
  returnTransActualArrivalTimeDay7: {
    type: String
  },
  returnTransportationNoteDay7: {
    type: String
  },
  returnTransportTitleDay8: {
    type: String
  },
  returnTransportModeDay8: {
    type: String
  },
  returnTransDepartCountryDay8: {
    type: String
  },
  returnTransArrivalCountryDay8: {
    type: String
  },
  returnTransDepartCityDay8: {
    type: String
  },
  returnTransArrivalCityDay8: {
    type: String
  },
  returnTransStartingPointtDay8: {
    type: String
  },
  returnTransEndingPointtDay8: {
    type: String
  },
  returnTransDepartDateDay8: {
    type: String
  },
  returnTransArrivalDateDay8: {
    type: String
  },
  returnTransActualDepartureTimeDay8: {
    type: String
  },
  returnTransReportingTimeDay8: {
    type: String
  },
  returnTransActualArrivalTimeDay8: {
    type: String
  },
  returnTransportationNoteDay8: {
    type: String
  },
  returnTransportTitleDay9: {
    type: String
  },
  returnTransportModeDay9: {
    type: String
  },
  returnTransDepartCountryDay9: {
    type: String
  },
  returnTransArrivalCountryDay9: {
    type: String
  },
  returnTransDepartCityDay9: {
    type: String
  },
  returnTransArrivalCityDay9: {
    type: String
  },
  returnTransStartingPointtDay9: {
    type: String
  },
  returnTransEndingPointtDay9: {
    type: String
  },
  returnTransDepartDateDay9: {
    type: String
  },
  returnTransArrivalDateDay9: {
    type: String
  },
  returnTransActualDepartureTimeDay9: {
    type: String
  },
  returnTransReportingTimeDay9: {
    type: String
  },
  returnTransActualArrivalTimeDay9: {
    type: String
  },
  returnTransportationNoteDay9: {
    type: String
  },
  returnTransportTitleDay10: {
    type: String
  },
  returnTransportModeDay10: {
    type: String
  },
  returnTransDepartCountryDay10: {
    type: String
  },
  returnTransArrivalCountryDay10: {
    type: String
  },
  returnTransDepartCityDay10: {
    type: String
  },
  returnTransArrivalCityDay10: {
    type: String
  },
  returnTransStartingPointtDay10: {
    type: String
  },
  returnTransEndingPointtDay10: {
    type: String
  },
  returnTransDepartDateDay10: {
    type: String
  },
  returnTransArrivalDateDay10: {
    type: String
  },
  returnTransActualDepartureTimeDay10: {
    type: String
  },
  returnTransReportingTimeDay10: {
    type: String
  },
  returnTransActualArrivalTimeDay10: {
    type: String
  },
  returnTransportationNoteDay10: {
    type: String
  },
  returnTransportTitleDay11: {
    type: String
  },
  returnTransportModeDay11: {
    type: String
  },
  returnTransDepartCountryDay11: {
    type: String
  },
  returnTransArrivalCountryDay11: {
    type: String
  },
  returnTransDepartCityDay11: {
    type: String
  },
  returnTransArrivalCityDay11: {
    type: String
  },
  returnTransStartingPointtDay11: {
    type: String
  },
  returnTransEndingPointtDay11: {
    type: String
  },
  returnTransDepartDateDay11: {
    type: String
  },
  returnTransArrivalDateDay11: {
    type: String
  },
  returnTransActualDepartureTimeDay11: {
    type: String
  },
  returnTransReportingTimeDay11: {
    type: String
  },
  returnTransActualArrivalTimeDay11: {
    type: String
  },
  returnTransportationNoteDay11: {
    type: String
  },
  returnTransportTitleDay12: {
    type: String
  },
  returnTransportModeDay12: {
    type: String
  },
  returnTransDepartCountryDay12: {
    type: String
  },
  returnTransArrivalCountryDay12: {
    type: String
  },
  returnTransDepartCityDay12: {
    type: String
  },
  returnTransArrivalCityDay12: {
    type: String
  },
  returnTransStartingPointtDay12: {
    type: String
  },
  returnTransEndingPointtDay12: {
    type: String
  },
  returnTransDepartDateDay12: {
    type: String
  },
  returnTransArrivalDateDay12: {
    type: String
  },
  returnTransActualDepartureTimeDay12: {
    type: String
  },
  returnTransReportingTimeDay12: {
    type: String
  },
  returnTransActualArrivalTimeDay12: {
    type: String
  },
  returnTransportationNoteDay12: {
    type: String
  },
  returnTransportTitleDay13: {
    type: String
  },
  returnTransportModeDay13: {
    type: String
  },
  returnTransDepartCountryDay13: {
    type: String
  },
  returnTransArrivalCountryDay13: {
    type: String
  },
  returnTransDepartCityDay13: {
    type: String
  },
  returnTransArrivalCityDay13: {
    type: String
  },
  returnTransStartingPointtDay13: {
    type: String
  },
  returnTransEndingPointtDay13: {
    type: String
  },
  returnTransDepartDateDay13: {
    type: String
  },
  returnTransArrivalDateDay13: {
    type: String
  },
  returnTransActualDepartureTimeDay13: {
    type: String
  },
  returnTransReportingTimeDay13: {
    type: String
  },
  returnTransActualArrivalTimeDay13: {
    type: String
  },
  returnTransportationNoteDay13: {
    type: String
  },
  returnTransportTitleDay14: {
    type: String
  },
  returnTransportModeDay14: {
    type: String
  },
  returnTransDepartCountryDay14: {
    type: String
  },
  returnTransArrivalCountryDay14: {
    type: String
  },
  returnTransDepartCityDay14: {
    type: String
  },
  returnTransArrivalCityDay14: {
    type: String
  },
  returnTransStartingPointtDay14: {
    type: String
  },
  returnTransEndingPointtDay14: {
    type: String
  },
  returnTransDepartDateDay14: {
    type: String
  },
  returnTransArrivalDateDay14: {
    type: String
  },
  returnTransActualDepartureTimeDay14: {
    type: String
  },
  returnTransReportingTimeDay14: {
    type: String
  },
  returnTransActualArrivalTimeDay14: {
    type: String
  },
  returnTransportationNoteDay14: {
    type: String
  },
  returnTransportTitleDay15: {
    type: String
  },
  returnTransportModeDay15: {
    type: String
  },
  returnTransDepartCountryDay15: {
    type: String
  },
  returnTransArrivalCountryDay15: {
    type: String
  },
  returnTransDepartCityDay15: {
    type: String
  },
  returnTransArrivalCityDay15: {
    type: String
  },
  returnTransStartingPointtDay15: {
    type: String
  },
  returnTransEndingPointtDay15: {
    type: String
  },
  returnTransDepartDateDay15: {
    type: String
  },
  returnTransArrivalDateDay15: {
    type: String
  },
  returnTransActualDepartureTimeDay15: {
    type: String
  },
  returnTransReportingTimeDay15: {
    type: String
  },
  returnTransActualArrivalTimeDay15: {
    type: String
  },
  returnTransportationNoteDay15: {
    type: String
  },
  returnTransportTitleDay16: {
    type: String
  },
  returnTransportModeDay16: {
    type: String
  },
  returnTransDepartCountryDay16: {
    type: String
  },
  returnTransArrivalCountryDay16: {
    type: String
  },
  returnTransDepartCityDay16: {
    type: String
  },
  returnTransArrivalCityDay16: {
    type: String
  },
  returnTransStartingPointtDay16: {
    type: String
  },
  returnTransEndingPointtDay16: {
    type: String
  },
  returnTransDepartDateDay16: {
    type: String
  },
  returnTransArrivalDateDay16: {
    type: String
  },
  returnTransActualDepartureTimeDay16: {
    type: String
  },
  returnTransReportingTimeDay16: {
    type: String
  },
  returnTransActualArrivalTimeDay16: {
    type: String
  },
  returnTransportationNoteDay16: {
    type: String
  },
  returnTransportTitleDay17: {
    type: String
  },
  returnTransportModeDay17: {
    type: String
  },
  returnTransDepartCountryDay17: {
    type: String
  },
  returnTransArrivalCountryDay17: {
    type: String
  },
  returnTransDepartCityDay17: {
    type: String
  },
  returnTransArrivalCityDay17: {
    type: String
  },
  returnTransStartingPointtDay17: {
    type: String
  },
  returnTransEndingPointtDay17: {
    type: String
  },
  returnTransDepartDateDay17: {
    type: String
  },
  returnTransArrivalDateDay17: {
    type: String
  },
  returnTransActualDepartureTimeDay17: {
    type: String
  },
  returnTransReportingTimeDay17: {
    type: String
  },
  returnTransActualArrivalTimeDay17: {
    type: String
  },
  returnTransportationNoteDay17: {
    type: String
  },
  returnTransportTitleDay18: {
    type: String
  },
  returnTransportModeDay18: {
    type: String
  },
  returnTransDepartCountryDay18: {
    type: String
  },
  returnTransArrivalCountryDay18: {
    type: String
  },
  returnTransDepartCityDay18: {
    type: String
  },
  returnTransArrivalCityDay18: {
    type: String
  },
  returnTransStartingPointtDay18: {
    type: String
  },
  returnTransEndingPointtDay18: {
    type: String
  },
  returnTransDepartDateDay18: {
    type: String
  },
  returnTransArrivalDateDay18: {
    type: String
  },
  returnTransActualDepartureTimeDay18: {
    type: String
  },
  returnTransReportingTimeDay18: {
    type: String
  },
  returnTransActualArrivalTimeDay18: {
    type: String
  },
  returnTransportationNoteDay18: {
    type: String
  },
  returnTransportTitleDay19: {
    type: String
  },
  returnTransportModeDay19: {
    type: String
  },
  returnTransDepartCountryDay19: {
    type: String
  },
  returnTransArrivalCountryDay19: {
    type: String
  },
  returnTransDepartCityDay19: {
    type: String
  },
  returnTransArrivalCityDay19: {
    type: String
  },
  returnTransStartingPointtDay19: {
    type: String
  },
  returnTransEndingPointtDay19: {
    type: String
  },
  returnTransDepartDateDay19: {
    type: String
  },
  returnTransArrivalDateDay19: {
    type: String
  },
  returnTransActualDepartureTimeDay19: {
    type: String
  },
  returnTransReportingTimeDay19: {
    type: String
  },
  returnTransActualArrivalTimeDay19: {
    type: String
  },
  returnTransportationNoteDay19: {
    type: String
  },
  returnTransportTitleDay20: {
    type: String
  },
  returnTransportModeDay20: {
    type: String
  },
  returnTransDepartCountryDay20: {
    type: String
  },
  returnTransArrivalCountryDay20: {
    type: String
  },
  returnTransDepartCityDay20: {
    type: String
  },
  returnTransArrivalCityDay20: {
    type: String
  },
  returnTransStartingPointtDay20: {
    type: String
  },
  returnTransEndingPointtDay20: {
    type: String
  },
  returnTransDepartDateDay20: {
    type: String
  },
  returnTransArrivalDateDay20: {
    type: String
  },
  returnTransActualDepartureTimeDay20: {
    type: String
  },
  returnTransReportingTimeDay20: {
    type: String
  },
  returnTransActualArrivalTimeDay20: {
    type: String
  },
  returnTransportationNoteDay20: {
    type: String
  },
  returnTransportTitleDay21: {
    type: String
  },
  returnTransportModeDay21: {
    type: String
  },
  returnTransDepartCountryDay21: {
    type: String
  },
  returnTransArrivalCountryDay21: {
    type: String
  },
  returnTransDepartCityDay21: {
    type: String
  },
  returnTransArrivalCityDay21: {
    type: String
  },
  returnTransStartingPointtDay21: {
    type: String
  },
  returnTransEndingPointtDay21: {
    type: String
  },
  returnTransDepartDateDay21: {
    type: String
  },
  returnTransArrivalDateDay21: {
    type: String
  },
  returnTransActualDepartureTimeDay21: {
    type: String
  },
  returnTransReportingTimeDay21: {
    type: String
  },
  returnTransActualArrivalTimeDay21: {
    type: String
  },
  returnTransportationNoteDay21: {
    type: String
  },
  returnTransportTitleDay22: {
    type: String
  },
  returnTransportModeDay22: {
    type: String
  },
  returnTransDepartCountryDay22: {
    type: String
  },
  returnTransArrivalCountryDay22: {
    type: String
  },
  returnTransDepartCityDay22: {
    type: String
  },
  returnTransArrivalCityDay22: {
    type: String
  },
  returnTransStartingPointtDay22: {
    type: String
  },
  returnTransEndingPointtDay22: {
    type: String
  },
  returnTransDepartDateDay22: {
    type: String
  },
  returnTransArrivalDateDay22: {
    type: String
  },
  returnTransActualDepartureTimeDay22: {
    type: String
  },
  returnTransReportingTimeDay22: {
    type: String
  },
  returnTransActualArrivalTimeDay22: {
    type: String
  },
  returnTransportationNoteDay22: {
    type: String
  },
  hotelCountryNameDay6: {
    type: String
  },
  hotelStateNameDay6: {
    type: String
  },
  hotelCityNameDay6: {
    type: String
  },
  hotelChoseHotelNameDay6: {
    type: String
  },
  hotelDateDay6: {
    type: String
  },
  hotelTimeDay6: {
    type: String
  },
  hotelNoOfNightsDay6: {
    type: String
  },
  hotelNoOfAdultsDay6: {
    type: String
  },
  hotelNoOfRoomsDay6: {
    type: String
  },
  hotelNoOfChildDay6: {
    type: String
  },
  hotelNoOfExtraBedDay6: {
    type: String
  },
  hotelRoomTypeDay6: {
    type: String
  },
  hotelNoteDay6: {
    type: String
  },
  hotelCountryNameDay7: {
    type: String
  },
  hotelStateNameDay7: {
    type: String
  },
  hotelCityNameDay7: {
    type: String
  },
  hotelChoseHotelNameDay7: {
    type: String
  },
  hotelDateDay7: {
    type: String
  },
  hotelTimeDay7: {
    type: String
  },
  hotelNoOfNightsDay7: {
    type: String
  },
  hotelNoOfAdultsDay7: {
    type: String
  },
  hotelNoOfRoomsDay7: {
    type: String
  },
  hotelNoOfChildDay7: {
    type: String
  },
  hotelNoOfExtraBedDay7: {
    type: String
  },
  hotelRoomTypeDay7: {
    type: String
  },
  hotelNoteDay7: {
    type: String
  },
  hotelCountryNameDay8: {
    type: String
  },
  hotelStateNameDay8: {
    type: String
  },
  hotelCityNameDay8: {
    type: String
  },
  hotelChoseHotelNameDay8: {
    type: String
  },
  hotelDateDay8: {
    type: String
  },
  hotelTimeDay8: {
    type: String
  },
  hotelNoOfNightsDay8: {
    type: String
  },
  hotelNoOfAdultsDay8: {
    type: String
  },
  hotelNoOfRoomsDay8: {
    type: String
  },
  hotelNoOfChildDay8: {
    type: String
  },
  hotelNoOfExtraBedDay8: {
    type: String
  },
  hotelRoomTypeDay8: {
    type: String
  },
  hotelNoteDay8: {
    type: String
  },
  hotelCountryNameDay9: {
    type: String
  },
  hotelStateNameDay9: {
    type: String
  },
  hotelCityNameDay9: {
    type: String
  },
  hotelChoseHotelNameDay9: {
    type: String
  },
  hotelDateDay9: {
    type: String
  },
  hotelTimeDay9: {
    type: String
  },
  hotelNoOfNightsDay9: {
    type: String
  },
  hotelNoOfAdultsDay9: {
    type: String
  },
  hotelNoOfRoomsDay9: {
    type: String
  },
  hotelNoOfChildDay9: {
    type: String
  },
  hotelNoOfExtraBedDay9: {
    type: String
  },
  hotelRoomTypeDay9: {
    type: String
  },
  hotelNoteDay9: {
    type: String
  },
  hotelCountryNameDay10: {
    type: String
  },
  hotelStateNameDay10: {
    type: String
  },
  hotelCityNameDay10: {
    type: String
  },
  hotelChoseHotelNameDay10: {
    type: String
  },
  hotelDateDay10: {
    type: String
  },
  hotelTimeDay10: {
    type: String
  },
  hotelNoOfNightsDay10: {
    type: String
  },
  hotelNoOfAdultsDay10: {
    type: String
  },
  hotelNoOfRoomsDay10: {
    type: String
  },
  hotelNoOfChildDay10: {
    type: String
  },
  hotelNoOfExtraBedDay10: {
    type: String
  },
  hotelRoomTypeDay10: {
    type: String
  },
  hotelNoteDay10: {
    type: String
  },
  hotelCountryNameDay11: {
    type: String
  },
  hotelStateNameDay11: {
    type: String
  },
  hotelCityNameDay11: {
    type: String
  },
  hotelChoseHotelNameDay11: {
    type: String
  },
  hotelDateDay11: {
    type: String
  },
  hotelTimeDay11: {
    type: String
  },
  hotelNoOfNightsDay11: {
    type: String
  },
  hotelNoOfAdultsDay11: {
    type: String
  },
  hotelNoOfRoomsDay11: {
    type: String
  },
  hotelNoOfChildDay11: {
    type: String
  },
  hotelNoOfExtraBedDay11: {
    type: String
  },
  hotelRoomTypeDay11: {
    type: String
  },
  hotelNoteDay11: {
    type: String
  },
  hotelCountryNameDay12: {
    type: String
  },
  hotelStateNameDay12: {
    type: String
  },
  hotelCityNameDay12: {
    type: String
  },
  hotelChoseHotelNameDay12: {
    type: String
  },
  hotelDateDay12: {
    type: String
  },
  hotelTimeDay12: {
    type: String
  },
  hotelNoOfNightsDay12: {
    type: String
  },
  hotelNoOfAdultsDay12: {
    type: String
  },
  hotelNoOfRoomsDay12: {
    type: String
  },
  hotelNoOfChildDay12: {
    type: String
  },
  hotelNoOfExtraBedDay12: {
    type: String
  },
  hotelRoomTypeDay12: {
    type: String
  },
  hotelNoteDay12: {
    type: String
  },
  hotelCountryNameDay13: {
    type: String
  },
  hotelStateNameDay13: {
    type: String
  },
  hotelCityNameDay13: {
    type: String
  },
  hotelChoseHotelNameDay13: {
    type: String
  },
  hotelDateDay13: {
    type: String
  },
  hotelTimeDay13: {
    type: String
  },
  hotelNoOfNightsDay13: {
    type: String
  },
  hotelNoOfAdultsDay13: {
    type: String
  },
  hotelNoOfRoomsDay13: {
    type: String
  },
  hotelNoOfChildDay13: {
    type: String
  },
  hotelNoOfExtraBedDay13: {
    type: String
  },
  hotelRoomTypeDay13: {
    type: String
  },
  hotelNoteDay13: {
    type: String
  },
  hotelCountryNameDay14: {
    type: String
  },
  hotelStateNameDay14: {
    type: String
  },
  hotelCityNameDay14: {
    type: String
  },
  hotelChoseHotelNameDay14: {
    type: String
  },
  hotelDateDay14: {
    type: String
  },
  hotelTimeDay14: {
    type: String
  },
  hotelNoOfNightsDay14: {
    type: String
  },
  hotelNoOfAdultsDay14: {
    type: String
  },
  hotelNoOfRoomsDay14: {
    type: String
  },
  hotelNoOfChildDay14: {
    type: String
  },
  hotelNoOfExtraBedDay14: {
    type: String
  },
  hotelRoomTypeDay14: {
    type: String
  },
  hotelNoteDay14: {
    type: String
  },
  hotelCountryNameDay15: {
    type: String
  },
  hotelStateNameDay15: {
    type: String
  },
  hotelCityNameDay15: {
    type: String
  },
  hotelChoseHotelNameDay15: {
    type: String
  },
  hotelDateDay15: {
    type: String
  },
  hotelTimeDay15: {
    type: String
  },
  hotelNoOfNightsDay15: {
    type: String
  },
  hotelNoOfAdultsDay15: {
    type: String
  },
  hotelNoOfRoomsDay15: {
    type: String
  },
  hotelNoOfChildDay15: {
    type: String
  },
  hotelNoOfExtraBedDay15: {
    type: String
  },
  hotelRoomTypeDay15: {
    type: String
  },
  hotelNoteDay15: {
    type: String
  },
  hotelCountryNameDay16: {
    type: String
  },
  hotelStateNameDay16: {
    type: String
  },
  hotelCityNameDay16: {
    type: String
  },
  hotelChoseHotelNameDay16: {
    type: String
  },
  hotelDateDay16: {
    type: String
  },
  hotelTimeDay16: {
    type: String
  },
  hotelNoOfNightsDay16: {
    type: String
  },
  hotelNoOfAdultsDay16: {
    type: String
  },
  hotelNoOfRoomsDay16: {
    type: String
  },
  hotelNoOfChildDay16: {
    type: String
  },
  hotelNoOfExtraBedDay16: {
    type: String
  },
  hotelRoomTypeDay16: {
    type: String
  },
  hotelNoteDay16: {
    type: String
  },
  hotelCountryNameDay17: {
    type: String
  },
  hotelStateNameDay17: {
    type: String
  },
  hotelCityNameDay17: {
    type: String
  },
  hotelChoseHotelNameDay17: {
    type: String
  },
  hotelDateDay17: {
    type: String
  },
  hotelTimeDay17: {
    type: String
  },
  hotelNoOfNightsDay17: {
    type: String
  },
  hotelNoOfAdultsDay17: {
    type: String
  },
  hotelNoOfRoomsDay17: {
    type: String
  },
  hotelNoOfChildDay17: {
    type: String
  },
  hotelNoOfExtraBedDay17: {
    type: String
  },
  hotelRoomTypeDay17: {
    type: String
  },
  hotelNoteDay17: {
    type: String
  },
  hotelCountryNameDay18: {
    type: String
  },
  hotelStateNameDay18: {
    type: String
  },
  hotelCityNameDay18: {
    type: String
  },
  hotelChoseHotelNameDay18: {
    type: String
  },
  hotelDateDay18: {
    type: String
  },
  hotelTimeDay18: {
    type: String
  },
  hotelNoOfNightsDay18: {
    type: String
  },
  hotelNoOfAdultsDay18: {
    type: String
  },
  hotelNoOfRoomsDay18: {
    type: String
  },
  hotelNoOfChildDay18: {
    type: String
  },
  hotelNoOfExtraBedDay18: {
    type: String
  },
  hotelRoomTypeDay18: {
    type: String
  },
  hotelNoteDay18: {
    type: String
  },
  hotelCountryNameDay19: {
    type: String
  },
  hotelStateNameDay19: {
    type: String
  },
  hotelCityNameDay19: {
    type: String
  },
  hotelChoseHotelNameDay19: {
    type: String
  },
  hotelDateDay19: {
    type: String
  },
  hotelTimeDay19: {
    type: String
  },
  hotelNoOfNightsDay19: {
    type: String
  },
  hotelNoOfAdultsDay19: {
    type: String
  },
  hotelNoOfRoomsDay19: {
    type: String
  },
  hotelNoOfChildDay19: {
    type: String
  },
  hotelNoOfExtraBedDay19: {
    type: String
  },
  hotelRoomTypeDay19: {
    type: String
  },
  hotelNoteDay19: {
    type: String
  },
  hotelCountryNameDay20: {
    type: String
  },
  hotelStateNameDay20: {
    type: String
  },
  hotelCityNameDay20: {
    type: String
  },
  hotelChoseHotelNameDay20: {
    type: String
  },
  hotelDateDay20: {
    type: String
  },
  hotelTimeDay20: {
    type: String
  },
  hotelNoOfNightsDay20: {
    type: String
  },
  hotelNoOfAdultsDay20: {
    type: String
  },
  hotelNoOfRoomsDay20: {
    type: String
  },
  hotelNoOfChildDay20: {
    type: String
  },
  hotelNoOfExtraBedDay20: {
    type: String
  },
  hotelRoomTypeDay20: {
    type: String
  },
  hotelNoteDay20: {
    type: String
  },
  hotelCountryNameDay21: {
    type: String
  },
  hotelStateNameDay21: {
    type: String
  },
  hotelCityNameDay21: {
    type: String
  },
  hotelChoseHotelNameDay21: {
    type: String
  },
  hotelDateDay21: {
    type: String
  },
  hotelTimeDay21: {
    type: String
  },
  hotelNoOfNightsDay21: {
    type: String
  },
  hotelNoOfAdultsDay21: {
    type: String
  },
  hotelNoOfRoomsDay21: {
    type: String
  },
  hotelNoOfChildDay21: {
    type: String
  },
  hotelNoOfExtraBedDay21: {
    type: String
  },
  hotelRoomTypeDay21: {
    type: String
  },
  hotelNoteDay21: {
    type: String
  },
  hotelCountryNameDay22: {
    type: String
  },
  hotelStateNameDay22: {
    type: String
  },
  hotelCityNameDay22: {
    type: String
  },
  hotelChoseHotelNameDay22: {
    type: String
  },
  hotelDateDay22: {
    type: String
  },
  hotelTimeDay22: {
    type: String
  },
  hotelNoOfNightsDay22: {
    type: String
  },
  hotelNoOfAdultsDay22: {
    type: String
  },
  hotelNoOfRoomsDay22: {
    type: String
  },
  hotelNoOfChildDay22: {
    type: String
  },
  hotelNoOfExtraBedDay22: {
    type: String
  },
  hotelRoomTypeDay22: {
    type: String
  },
  hotelNoteDay22: {
    type: String
  },
  sightseeingCountryDay2_01: {
    type: String
  },
  sightseeingCityNameDay2_01: {
    type: String
  },
  sightseeingSearchdDay2_01: {
    type: String
  },
  sightseeingSearchFieldDay2_01: {
    type: String
  },
  sightseeing3CheckboxDay2_01: {
    type: String
  },
  sightseeingCountryDay2_02: {
    type: String
  },
  sightseeingCityNameDay2_02: {
    type: String
  },
  sightseeingSearchdDay2_02: {
    type: String
  },
  sightseeingSearchFieldDay2_02: {
    type: String
  },
  sightseeing3CheckboxDay2_02: {
    type: String
  },
  sightseeingCountryDay2_03: {
    type: String
  },
  sightseeingCityNameDay2_03: {
    type: String
  },
  sightseeingSearchdDay2_03: {
    type: String
  },
  sightseeingSearchFieldDay2_03: {
    type: String
  },
  sightseeing3CheckboxDay2_03: {
    type: String
  },
  sightseeingCountryDay2_04: {
    type: String
  },
  sightseeingCityNameDay2_04: {
    type: String
  },
  sightseeingSearchdDay2_04: {
    type: String
  },
  sightseeingSearchFieldDay2_04: {
    type: String
  },
  sightseeing3CheckboxDay2_04: {
    type: String
  },
  sightseeingCountryDay2_05: {
    type: String
  },
  sightseeingCityNameDay2_05: {
    type: String
  },
  sightseeingSearchdDay2_05: {
    type: String
  },
  sightseeingSearchFieldDay2_05: {
    type: String
  },
  sightseeing3CheckboxDay2_05: {
    type: String
  },
  sightseeingCountryDay2_06: {
    type: String
  },
  sightseeingCityNameDay2_06: {
    type: String
  },
  sightseeingSearchdDay2_06: {
    type: String
  },
  sightseeingSearchFieldDay2_06: {
    type: String
  },
  sightseeing3CheckboxDay2_06: {
    type: String
  },
  sightseeingCountryDay2_07: {
    type: String
  },
  sightseeingCityNameDay2_07: {
    type: String
  },
  sightseeingSearchdDay2_07: {
    type: String
  },
  sightseeingSearchFieldDay2_07: {
    type: String
  },
  sightseeing3CheckboxDay2_07: {
    type: String
  },
  sightseeingCountryDay2_08: {
    type: String
  },
  sightseeingCityNameDay2_08: {
    type: String
  },
  sightseeingSearchdDay2_08: {
    type: String
  },
  sightseeingSearchFieldDay2_08: {
    type: String
  },
  sightseeing3CheckboxDay2_08: {
    type: String
  },
  sightseeingCountryDay2_09: {
    type: String
  },
  sightseeingCityNameDay2_09: {
    type: String
  },
  sightseeingSearchdDay2_09: {
    type: String
  },
  sightseeingSearchFieldDay2_09: {
    type: String
  },
  sightseeing3CheckboxDay2_09: {
    type: String
  },
  sightseeingCountryDay2_10: {
    type: String
  },
  sightseeingCityNameDay2_10: {
    type: String
  },
  sightseeingSearchdDay2_10: {
    type: String
  },
  sightseeingSearchFieldDay2_10: {
    type: String
  },
  sightseeing3CheckboxDay2_10: {
    type: String
  },
  sightseeingCountryDay3_01: {
    type: String
  },
  sightseeingCityNameDay3_01: {
    type: String
  },
  sightseeingSearchdDay3_01: {
    type: String
  },
  sightseeingSearchFieldDay3_01: {
    type: String
  },
  sightseeing3CheckboxDay3_01: {
    type: String
  },
  sightseeingCountryDay3_02: {
    type: String
  },
  sightseeingCityNameDay3_02: {
    type: String
  },
  sightseeingSearchdDay3_02: {
    type: String
  },
  sightseeingSearchFieldDay3_02: {
    type: String
  },
  sightseeing3CheckboxDay3_02: {
    type: String
  },
  sightseeingCountryDay3_03: {
    type: String
  },
  sightseeingCityNameDay3_03: {
    type: String
  },
  sightseeingSearchdDay3_03: {
    type: String
  },
  sightseeingSearchFieldDay3_03: {
    type: String
  },
  sightseeing3CheckboxDay3_03: {
    type: String
  },
  sightseeingCountryDay3_04: {
    type: String
  },
  sightseeingCityNameDay3_04: {
    type: String
  },
  sightseeingSearchdDay3_04: {
    type: String
  },
  sightseeingSearchFieldDay3_04: {
    type: String
  },
  sightseeing3CheckboxDay3_04: {
    type: String
  },
  sightseeingCountryDay3_05: {
    type: String
  },
  sightseeingCityNameDay3_05: {
    type: String
  },
  sightseeingSearchdDay3_05: {
    type: String
  },
  sightseeingSearchFieldDay3_05: {
    type: String
  },
  sightseeing3CheckboxDay3_05: {
    type: String
  },
  sightseeingCountryDay3_06: {
    type: String
  },
  sightseeingCityNameDay3_06: {
    type: String
  },
  sightseeingSearchdDay3_06: {
    type: String
  },
  sightseeingSearchFieldDay3_06: {
    type: String
  },
  sightseeing3CheckboxDay3_06: {
    type: String
  },
  sightseeingCountryDay3_07: {
    type: String
  },
  sightseeingCityNameDay3_07: {
    type: String
  },
  sightseeingSearchdDay3_07: {
    type: String
  },
  sightseeingSearchFieldDay3_07: {
    type: String
  },
  sightseeing3CheckboxDay3_07: {
    type: String
  },
  sightseeingCountryDay3_08: {
    type: String
  },
  sightseeingCityNameDay3_08: {
    type: String
  },
  sightseeingSearchdDay3_08: {
    type: String
  },
  sightseeingSearchFieldDay3_08: {
    type: String
  },
  sightseeing3CheckboxDay3_08: {
    type: String
  },
  sightseeingCountryDay3_09: {
    type: String
  },
  sightseeingCityNameDay3_09: {
    type: String
  },
  sightseeingSearchdDay3_09: {
    type: String
  },
  sightseeingSearchFieldDay3_09: {
    type: String
  },
  sightseeing3CheckboxDay3_09: {
    type: String
  },
  sightseeingCountryDay3_10: {
    type: String
  },
  sightseeingCityNameDay3_10: {
    type: String
  },
  sightseeingSearchdDay3_10: {
    type: String
  },
  sightseeingSearchFieldDay3_10: {
    type: String
  },
  sightseeing3CheckboxDay3_10: {
    type: String
  },
  sightseeingCountryDay4_01: {
    type: String
  },
  sightseeingCityNameDay4_01: {
    type: String
  },
  sightseeingSearchdDay4_01: {
    type: String
  },
  sightseeingSearchFieldDay4_01: {
    type: String
  },
  sightseeing3CheckboxDay4_01: {
    type: String
  },
  sightseeingCountryDay4_02: {
    type: String
  },
  sightseeingCityNameDay4_02: {
    type: String
  },
  sightseeingSearchdDay4_02: {
    type: String
  },
  sightseeingSearchFieldDay4_02: {
    type: String
  },
  sightseeing3CheckboxDay4_02: {
    type: String
  },
  sightseeingCountryDay4_03: {
    type: String
  },
  sightseeingCityNameDay4_03: {
    type: String
  },
  sightseeingSearchdDay4_03: {
    type: String
  },
  sightseeingSearchFieldDay4_03: {
    type: String
  },
  sightseeing3CheckboxDay4_03: {
    type: String
  },
  sightseeingCountryDay4_04: {
    type: String
  },
  sightseeingCityNameDay4_04: {
    type: String
  },
  sightseeingSearchdDay4_04: {
    type: String
  },
  sightseeingSearchFieldDay4_04: {
    type: String
  },
  sightseeing3CheckboxDay4_04: {
    type: String
  },
  sightseeingCountryDay4_05: {
    type: String
  },
  sightseeingCityNameDay4_05: {
    type: String
  },
  sightseeingSearchdDay4_05: {
    type: String
  },
  sightseeingSearchFieldDay4_05: {
    type: String
  },
  sightseeing3CheckboxDay4_05: {
    type: String
  },
  sightseeingCountryDay4_06: {
    type: String
  },
  sightseeingCityNameDay4_06: {
    type: String
  },
  sightseeingSearchdDay4_06: {
    type: String
  },
  sightseeingSearchFieldDay4_06: {
    type: String
  },
  sightseeing3CheckboxDay4_06: {
    type: String
  },
  sightseeingCountryDay4_07: {
    type: String
  },
  sightseeingCityNameDay4_07: {
    type: String
  },
  sightseeingSearchdDay4_07: {
    type: String
  },
  sightseeingSearchFieldDay4_07: {
    type: String
  },
  sightseeing3CheckboxDay4_07: {
    type: String
  },
  sightseeingCountryDay4_08: {
    type: String
  },
  sightseeingCityNameDay4_08: {
    type: String
  },
  sightseeingSearchdDay4_08: {
    type: String
  },
  sightseeingSearchFieldDay4_08: {
    type: String
  },
  sightseeing3CheckboxDay4_08: {
    type: String
  },
  sightseeingCountryDay4_09: {
    type: String
  },
  sightseeingCityNameDay4_09: {
    type: String
  },
  sightseeingSearchdDay4_09: {
    type: String
  },
  sightseeingSearchFieldDay4_09: {
    type: String
  },
  sightseeing3CheckboxDay4_09: {
    type: String
  },
  sightseeingCountryDay4_10: {
    type: String
  },
  sightseeingCityNameDay4_10: {
    type: String
  },
  sightseeingSearchdDay4_10: {
    type: String
  },
  sightseeingSearchFieldDay4_10: {
    type: String
  },
  sightseeing3CheckboxDay4_10: {
    type: String
  },
  sightseeingCountryDay5_01: {
    type: String
  },
  sightseeingCityNameDay5_01: {
    type: String
  },
  sightseeingSearchdDay5_01: {
    type: String
  },
  sightseeingSearchFieldDay5_01: {
    type: String
  },
  sightseeing3CheckboxDay5_01: {
    type: String
  },
  sightseeingCountryDay5_02: {
    type: String
  },
  sightseeingCityNameDay5_02: {
    type: String
  },
  sightseeingSearchdDay5_02: {
    type: String
  },
  sightseeingSearchFieldDay5_02: {
    type: String
  },
  sightseeing3CheckboxDay5_02: {
    type: String
  },
  sightseeingCountryDay5_03: {
    type: String
  },
  sightseeingCityNameDay5_03: {
    type: String
  },
  sightseeingSearchdDay5_03: {
    type: String
  },
  sightseeingSearchFieldDay5_03: {
    type: String
  },
  sightseeing3CheckboxDay5_03: {
    type: String
  },
  sightseeingCountryDay5_04: {
    type: String
  },
  sightseeingCityNameDay5_04: {
    type: String
  },
  sightseeingSearchdDay5_04: {
    type: String
  },
  sightseeingSearchFieldDay5_04: {
    type: String
  },
  sightseeing3CheckboxDay5_04: {
    type: String
  },
  sightseeingCountryDay5_05: {
    type: String
  },
  sightseeingCityNameDay5_05: {
    type: String
  },
  sightseeingSearchdDay5_05: {
    type: String
  },
  sightseeingSearchFieldDay5_05: {
    type: String
  },
  sightseeing3CheckboxDay5_05: {
    type: String
  },
  sightseeingCountryDay5_06: {
    type: String
  },
  sightseeingCityNameDay5_06: {
    type: String
  },
  sightseeingSearchdDay5_06: {
    type: String
  },
  sightseeingSearchFieldDay5_06: {
    type: String
  },
  sightseeing3CheckboxDay5_06: {
    type: String
  },
  sightseeingCountryDay5_07: {
    type: String
  },
  sightseeingCityNameDay5_07: {
    type: String
  },
  sightseeingSearchdDay5_07: {
    type: String
  },
  sightseeingSearchFieldDay5_07: {
    type: String
  },
  sightseeing3CheckboxDay5_07: {
    type: String
  },
  sightseeingCountryDay5_08: {
    type: String
  },
  sightseeingCityNameDay5_08: {
    type: String
  },
  sightseeingSearchdDay5_08: {
    type: String
  },
  sightseeingSearchFieldDay5_08: {
    type: String
  },
  sightseeing3CheckboxDay5_08: {
    type: String
  },
  sightseeingCountryDay5_09: {
    type: String
  },
  sightseeingCityNameDay5_09: {
    type: String
  },
  sightseeingSearchdDay5_09: {
    type: String
  },
  sightseeingSearchFieldDay5_09: {
    type: String
  },
  sightseeing3CheckboxDay5_09: {
    type: String
  },
  sightseeingCountryDay5_10: {
    type: String
  },
  sightseeingCityNameDay5_10: {
    type: String
  },
  sightseeingSearchdDay5_10: {
    type: String
  },
  sightseeingSearchFieldDay5_10: {
    type: String
  },
  sightseeing3CheckboxDay5_10: {
    type: String
  },
  sightseeingCountryDay6_01: {
    type: String
  },
  sightseeingCityNameDay6_01: {
    type: String
  },
  sightseeingSearchdDay6_01: {
    type: String
  },
  sightseeingSearchFieldDay6_01: {
    type: String
  },
  sightseeing3CheckboxDay6_01: {
    type: String
  },
  sightseeingCountryDay6_02: {
    type: String
  },
  sightseeingCityNameDay6_02: {
    type: String
  },
  sightseeingSearchdDay6_02: {
    type: String
  },
  sightseeingSearchFieldDay6_02: {
    type: String
  },
  sightseeing3CheckboxDay6_02: {
    type: String
  },
  sightseeingCountryDay6_03: {
    type: String
  },
  sightseeingCityNameDay6_03: {
    type: String
  },
  sightseeingSearchdDay6_03: {
    type: String
  },
  sightseeingSearchFieldDay6_03: {
    type: String
  },
  sightseeing3CheckboxDay6_03: {
    type: String
  },
  sightseeingCountryDay6_04: {
    type: String
  },
  sightseeingCityNameDay6_04: {
    type: String
  },
  sightseeingSearchdDay6_04: {
    type: String
  },
  sightseeingSearchFieldDay6_04: {
    type: String
  },
  sightseeing3CheckboxDay6_04: {
    type: String
  },
  sightseeingCountryDay6_05: {
    type: String
  },
  sightseeingCityNameDay6_05: {
    type: String
  },
  sightseeingSearchdDay6_05: {
    type: String
  },
  sightseeingSearchFieldDay6_05: {
    type: String
  },
  sightseeing3CheckboxDay6_05: {
    type: String
  },
  sightseeingCountryDay6_06: {
    type: String
  },
  sightseeingCityNameDay6_06: {
    type: String
  },
  sightseeingSearchdDay6_06: {
    type: String
  },
  sightseeingSearchFieldDay6_06: {
    type: String
  },
  sightseeing3CheckboxDay6_06: {
    type: String
  },
  sightseeingCountryDay6_07: {
    type: String
  },
  sightseeingCityNameDay6_07: {
    type: String
  },
  sightseeingSearchdDay6_07: {
    type: String
  },
  sightseeingSearchFieldDay6_07: {
    type: String
  },
  sightseeing3CheckboxDay6_07: {
    type: String
  },
  sightseeingCountryDay6_08: {
    type: String
  },
  sightseeingCityNameDay6_08: {
    type: String
  },
  sightseeingSearchdDay6_08: {
    type: String
  },
  sightseeingSearchFieldDay6_08: {
    type: String
  },
  sightseeing3CheckboxDay6_08: {
    type: String
  },
  sightseeingCountryDay6_09: {
    type: String
  },
  sightseeingCityNameDay6_09: {
    type: String
  },
  sightseeingSearchdDay6_09: {
    type: String
  },
  sightseeingSearchFieldDay6_09: {
    type: String
  },
  sightseeing3CheckboxDay6_09: {
    type: String
  },
  sightseeingCountryDay6_10: {
    type: String
  },
  sightseeingCityNameDay6_10: {
    type: String
  },
  sightseeingSearchdDay6_10: {
    type: String
  },
  sightseeingSearchFieldDay6_10: {
    type: String
  },
  sightseeing3CheckboxDay6_10: {
    type: String
  },
  sightseeingCountryDay7_01: {
    type: String
  },
  sightseeingCityNameDay7_01: {
    type: String
  },
  sightseeingSearchdDay7_01: {
    type: String
  },
  sightseeingSearchFieldDay7_01: {
    type: String
  },
  sightseeing3CheckboxDay7_01: {
    type: String
  },
  sightseeingCountryDay7_02: {
    type: String
  },
  sightseeingCityNameDay7_02: {
    type: String
  },
  sightseeingSearchdDay7_02: {
    type: String
  },
  sightseeingSearchFieldDay7_02: {
    type: String
  },
  sightseeing3CheckboxDay7_02: {
    type: String
  },
  sightseeingCountryDay7_03: {
    type: String
  },
  sightseeingCityNameDay7_03: {
    type: String
  },
  sightseeingSearchdDay7_03: {
    type: String
  },
  sightseeingSearchFieldDay7_03: {
    type: String
  },
  sightseeing3CheckboxDay7_03: {
    type: String
  },
  sightseeingCountryDay7_04: {
    type: String
  },
  sightseeingCityNameDay7_04: {
    type: String
  },
  sightseeingSearchdDay7_04: {
    type: String
  },
  sightseeingSearchFieldDay7_04: {
    type: String
  },
  sightseeing3CheckboxDay7_04: {
    type: String
  },
  sightseeingCountryDay7_05: {
    type: String
  },
  sightseeingCityNameDay7_05: {
    type: String
  },
  sightseeingSearchdDay7_05: {
    type: String
  },
  sightseeingSearchFieldDay7_05: {
    type: String
  },
  sightseeing3CheckboxDay7_05: {
    type: String
  },
  sightseeingCountryDay7_06: {
    type: String
  },
  sightseeingCityNameDay7_06: {
    type: String
  },
  sightseeingSearchdDay7_06: {
    type: String
  },
  sightseeingSearchFieldDay7_06: {
    type: String
  },
  sightseeing3CheckboxDay7_06: {
    type: String
  },
  sightseeingCountryDay7_07: {
    type: String
  },
  sightseeingCityNameDay7_07: {
    type: String
  },
  sightseeingSearchdDay7_07: {
    type: String
  },
  sightseeingSearchFieldDay7_07: {
    type: String
  },
  sightseeing3CheckboxDay7_07: {
    type: String
  },
  sightseeingCountryDay7_08: {
    type: String
  },
  sightseeingCityNameDay7_08: {
    type: String
  },
  sightseeingSearchdDay7_08: {
    type: String
  },
  sightseeingSearchFieldDay7_08: {
    type: String
  },
  sightseeing3CheckboxDay7_08: {
    type: String
  },
  sightseeingCountryDay7_09: {
    type: String
  },
  sightseeingCityNameDay7_09: {
    type: String
  },
  sightseeingSearchdDay7_09: {
    type: String
  },
  sightseeingSearchFieldDay7_09: {
    type: String
  },
  sightseeing3CheckboxDay7_09: {
    type: String
  },
  sightseeingCountryDay7_10: {
    type: String
  },
  sightseeingCityNameDay7_10: {
    type: String
  },
  sightseeingSearchdDay7_10: {
    type: String
  },
  sightseeingSearchFieldDay7_10: {
    type: String
  },
  sightseeing3CheckboxDay7_10: {
    type: String
  },
  sightseeingCountryDay8_01: {
    type: String
  },
  sightseeingCityNameDay8_01: {
    type: String
  },
  sightseeingSearchdDay8_01: {
    type: String
  },
  sightseeingSearchFieldDay8_01: {
    type: String
  },
  sightseeing3CheckboxDay8_01: {
    type: String
  },
  sightseeingCountryDay8_02: {
    type: String
  },
  sightseeingCityNameDay8_02: {
    type: String
  },
  sightseeingSearchdDay8_02: {
    type: String
  },
  sightseeingSearchFieldDay8_02: {
    type: String
  },
  sightseeing3CheckboxDay8_02: {
    type: String
  },
  sightseeingCountryDay8_03: {
    type: String
  },
  sightseeingCityNameDay8_03: {
    type: String
  },
  sightseeingSearchdDay8_03: {
    type: String
  },
  sightseeingSearchFieldDay8_03: {
    type: String
  },
  sightseeing3CheckboxDay8_03: {
    type: String
  },
  sightseeingCountryDay8_04: {
    type: String
  },
  sightseeingCityNameDay8_04: {
    type: String
  },
  sightseeingSearchdDay8_04: {
    type: String
  },
  sightseeingSearchFieldDay8_04: {
    type: String
  },
  sightseeing3CheckboxDay8_04: {
    type: String
  },
  sightseeingCountryDay8_05: {
    type: String
  },
  sightseeingCityNameDay8_05: {
    type: String
  },
  sightseeingSearchdDay8_05: {
    type: String
  },
  sightseeingSearchFieldDay8_05: {
    type: String
  },
  sightseeing3CheckboxDay8_05: {
    type: String
  },
  sightseeingCountryDay8_06: {
    type: String
  },
  sightseeingCityNameDay8_06: {
    type: String
  },
  sightseeingSearchdDay8_06: {
    type: String
  },
  sightseeingSearchFieldDay8_06: {
    type: String
  },
  sightseeing3CheckboxDay8_06: {
    type: String
  },
  sightseeingCountryDay8_07: {
    type: String
  },
  sightseeingCityNameDay8_07: {
    type: String
  },
  sightseeingSearchdDay8_07: {
    type: String
  },
  sightseeingSearchFieldDay8_07: {
    type: String
  },
  sightseeing3CheckboxDay8_07: {
    type: String
  },
  sightseeingCountryDay8_08: {
    type: String
  },
  sightseeingCityNameDay8_08: {
    type: String
  },
  sightseeingSearchdDay8_08: {
    type: String
  },
  sightseeingSearchFieldDay8_08: {
    type: String
  },
  sightseeing3CheckboxDay8_08: {
    type: String
  },
  sightseeingCountryDay8_09: {
    type: String
  },
  sightseeingCityNameDay8_09: {
    type: String
  },
  sightseeingSearchdDay8_09: {
    type: String
  },
  sightseeingSearchFieldDay8_09: {
    type: String
  },
  sightseeing3CheckboxDay8_09: {
    type: String
  },
  sightseeingCountryDay8_10: {
    type: String
  },
  sightseeingCityNameDay8_10: {
    type: String
  },
  sightseeingSearchdDay8_10: {
    type: String
  },
  sightseeingSearchFieldDay8_10: {
    type: String
  },
  sightseeing3CheckboxDay8_10: {
    type: String
  },
  sightseeingCountryDay9_01: {
    type: String
  },
  sightseeingCityNameDay9_01: {
    type: String
  },
  sightseeingSearchdDay9_01: {
    type: String
  },
  sightseeingSearchFieldDay9_01: {
    type: String
  },
  sightseeing3CheckboxDay9_01: {
    type: String
  },
  sightseeingCountryDay9_02: {
    type: String
  },
  sightseeingCityNameDay9_02: {
    type: String
  },
  sightseeingSearchdDay9_02: {
    type: String
  },
  sightseeingSearchFieldDay9_02: {
    type: String
  },
  sightseeing3CheckboxDay9_02: {
    type: String
  },
  sightseeingCountryDay9_03: {
    type: String
  },
  sightseeingCityNameDay9_03: {
    type: String
  },
  sightseeingSearchdDay9_03: {
    type: String
  },
  sightseeingSearchFieldDay9_03: {
    type: String
  },
  sightseeing3CheckboxDay9_03: {
    type: String
  },
  sightseeingCountryDay9_04: {
    type: String
  },
  sightseeingCityNameDay9_04: {
    type: String
  },
  sightseeingSearchdDay9_04: {
    type: String
  },
  sightseeingSearchFieldDay9_04: {
    type: String
  },
  sightseeing3CheckboxDay9_04: {
    type: String
  },
  sightseeingCountryDay9_05: {
    type: String
  },
  sightseeingCityNameDay9_05: {
    type: String
  },
  sightseeingSearchdDay9_05: {
    type: String
  },
  sightseeingSearchFieldDay9_05: {
    type: String
  },
  sightseeing3CheckboxDay9_05: {
    type: String
  },
  sightseeingCountryDay9_06: {
    type: String
  },
  sightseeingCityNameDay9_06: {
    type: String
  },
  sightseeingSearchdDay9_06: {
    type: String
  },
  sightseeingSearchFieldDay9_06: {
    type: String
  },
  sightseeing3CheckboxDay9_06: {
    type: String
  },
  sightseeingCountryDay9_07: {
    type: String
  },
  sightseeingCityNameDay9_07: {
    type: String
  },
  sightseeingSearchdDay9_07: {
    type: String
  },
  sightseeingSearchFieldDay9_07: {
    type: String
  },
  sightseeing3CheckboxDay9_07: {
    type: String
  },
  sightseeingCountryDay9_08: {
    type: String
  },
  sightseeingCityNameDay9_08: {
    type: String
  },
  sightseeingSearchdDay9_08: {
    type: String
  },
  sightseeingSearchFieldDay9_08: {
    type: String
  },
  sightseeing3CheckboxDay9_08: {
    type: String
  },
  sightseeingCountryDay9_09: {
    type: String
  },
  sightseeingCityNameDay9_09: {
    type: String
  },
  sightseeingSearchdDay9_09: {
    type: String
  },
  sightseeingSearchFieldDay9_09: {
    type: String
  },
  sightseeing3CheckboxDay9_09: {
    type: String
  },
  sightseeingCountryDay9_10: {
    type: String
  },
  sightseeingCityNameDay9_10: {
    type: String
  },
  sightseeingSearchdDay9_10: {
    type: String
  },
  sightseeingSearchFieldDay9_10: {
    type: String
  },
  sightseeing3CheckboxDay9_10: {
    type: String
  },
  sightseeingCountryDay10_01: {
    type: String
  },
  sightseeingCityNameDay10_01: {
    type: String
  },
  sightseeingSearchdDay10_01: {
    type: String
  },
  sightseeingSearchFieldDay10_01: {
    type: String
  },
  sightseeing3CheckboxDay10_01: {
    type: String
  },
  sightseeingCountryDay10_02: {
    type: String
  },
  sightseeingCityNameDay10_02: {
    type: String
  },
  sightseeingSearchdDay10_02: {
    type: String
  },
  sightseeingSearchFieldDay10_02: {
    type: String
  },
  sightseeing3CheckboxDay10_02: {
    type: String
  },
  sightseeingCountryDay10_03: {
    type: String
  },
  sightseeingCityNameDay10_03: {
    type: String
  },
  sightseeingSearchdDay10_03: {
    type: String
  },
  sightseeingSearchFieldDay10_03: {
    type: String
  },
  sightseeing3CheckboxDay10_03: {
    type: String
  },
  sightseeingCountryDay10_04: {
    type: String
  },
  sightseeingCityNameDay10_04: {
    type: String
  },
  sightseeingSearchdDay10_04: {
    type: String
  },
  sightseeingSearchFieldDay10_04: {
    type: String
  },
  sightseeing3CheckboxDay10_04: {
    type: String
  },
  sightseeingCountryDay10_05: {
    type: String
  },
  sightseeingCityNameDay10_05: {
    type: String
  },
  sightseeingSearchdDay10_05: {
    type: String
  },
  sightseeingSearchFieldDay10_05: {
    type: String
  },
  sightseeing3CheckboxDay10_05: {
    type: String
  },
  sightseeingCountryDay10_06: {
    type: String
  },
  sightseeingCityNameDay10_06: {
    type: String
  },
  sightseeingSearchdDay10_06: {
    type: String
  },
  sightseeingSearchFieldDay10_06: {
    type: String
  },
  sightseeing3CheckboxDay10_06: {
    type: String
  },
  sightseeingCountryDay10_07: {
    type: String
  },
  sightseeingCityNameDay10_07: {
    type: String
  },
  sightseeingSearchdDay10_07: {
    type: String
  },
  sightseeingSearchFieldDay10_07: {
    type: String
  },
  sightseeing3CheckboxDay10_07: {
    type: String
  },
  sightseeingCountryDay10_08: {
    type: String
  },
  sightseeingCityNameDay10_08: {
    type: String
  },
  sightseeingSearchdDay10_08: {
    type: String
  },
  sightseeingSearchFieldDay10_08: {
    type: String
  },
  sightseeing3CheckboxDay10_08: {
    type: String
  },
  sightseeingCountryDay10_09: {
    type: String
  },
  sightseeingCityNameDay10_09: {
    type: String
  },
  sightseeingSearchdDay10_09: {
    type: String
  },
  sightseeingSearchFieldDay10_09: {
    type: String
  },
  sightseeing3CheckboxDay10_09: {
    type: String
  },
  sightseeingCountryDay10_10: {
    type: String
  },
  sightseeingCityNameDay10_10: {
    type: String
  },
  sightseeingSearchdDay10_10: {
    type: String
  },
  sightseeingSearchFieldDay10_10: {
    type: String
  },
  sightseeing3CheckboxDay10_10: {
    type: String
  },
  sightseeingCountryDay11_01: {
    type: String
  },
  sightseeingCityNameDay11_01: {
    type: String
  },
  sightseeingSearchdDay11_01: {
    type: String
  },
  sightseeingSearchFieldDay11_01: {
    type: String
  },
  sightseeing3CheckboxDay11_01: {
    type: String
  },
  sightseeingCountryDay11_02: {
    type: String
  },
  sightseeingCityNameDay11_02: {
    type: String
  },
  sightseeingSearchdDay11_02: {
    type: String
  },
  sightseeingSearchFieldDay11_02: {
    type: String
  },
  sightseeing3CheckboxDay11_02: {
    type: String
  },
  sightseeingCountryDay11_03: {
    type: String
  },
  sightseeingCityNameDay11_03: {
    type: String
  },
  sightseeingSearchdDay11_03: {
    type: String
  },
  sightseeingSearchFieldDay11_03: {
    type: String
  },
  sightseeing3CheckboxDay11_03: {
    type: String
  },
  sightseeingCountryDay11_04: {
    type: String
  },
  sightseeingCityNameDay11_04: {
    type: String
  },
  sightseeingSearchdDay11_04: {
    type: String
  },
  sightseeingSearchFieldDay11_04: {
    type: String
  },
  sightseeing3CheckboxDay11_04: {
    type: String
  },
  sightseeingCountryDay11_05: {
    type: String
  },
  sightseeingCityNameDay11_05: {
    type: String
  },
  sightseeingSearchdDay11_05: {
    type: String
  },
  sightseeingSearchFieldDay11_05: {
    type: String
  },
  sightseeing3CheckboxDay11_05: {
    type: String
  },
  sightseeingCountryDay11_06: {
    type: String
  },
  sightseeingCityNameDay11_06: {
    type: String
  },
  sightseeingSearchdDay11_06: {
    type: String
  },
  sightseeingSearchFieldDay11_06: {
    type: String
  },
  sightseeing3CheckboxDay11_06: {
    type: String
  },
  sightseeingCountryDay11_07: {
    type: String
  },
  sightseeingCityNameDay11_07: {
    type: String
  },
  sightseeingSearchdDay11_07: {
    type: String
  },
  sightseeingSearchFieldDay11_07: {
    type: String
  },
  sightseeing3CheckboxDay11_07: {
    type: String
  },
  sightseeingCountryDay11_08: {
    type: String
  },
  sightseeingCityNameDay11_08: {
    type: String
  },
  sightseeingSearchdDay11_08: {
    type: String
  },
  sightseeingSearchFieldDay11_08: {
    type: String
  },
  sightseeing3CheckboxDay11_08: {
    type: String
  },
  sightseeingCountryDay11_09: {
    type: String
  },
  sightseeingCityNameDay11_09: {
    type: String
  },
  sightseeingSearchdDay11_09: {
    type: String
  },
  sightseeingSearchFieldDay11_09: {
    type: String
  },
  sightseeing3CheckboxDay11_09: {
    type: String
  },
  sightseeingCountryDay11_10: {
    type: String
  },
  sightseeingCityNameDay11_10: {
    type: String
  },
  sightseeingSearchdDay11_10: {
    type: String
  },
  sightseeingSearchFieldDay11_10: {
    type: String
  },
  sightseeing3CheckboxDay11_10: {
    type: String
  },
  sightseeingCountryDay12_01: {
    type: String
  },
  sightseeingCityNameDay12_01: {
    type: String
  },
  sightseeingSearchdDay12_01: {
    type: String
  },
  sightseeingSearchFieldDay12_01: {
    type: String
  },
  sightseeing3CheckboxDay12_01: {
    type: String
  },
  sightseeingCountryDay12_02: {
    type: String
  },
  sightseeingCityNameDay12_02: {
    type: String
  },
  sightseeingSearchdDay12_02: {
    type: String
  },
  sightseeingSearchFieldDay12_02: {
    type: String
  },
  sightseeing3CheckboxDay12_02: {
    type: String
  },
  sightseeingCountryDay12_03: {
    type: String
  },
  sightseeingCityNameDay12_03: {
    type: String
  },
  sightseeingSearchdDay12_03: {
    type: String
  },
  sightseeingSearchFieldDay12_03: {
    type: String
  },
  sightseeing3CheckboxDay12_03: {
    type: String
  },
  sightseeingCountryDay12_04: {
    type: String
  },
  sightseeingCityNameDay12_04: {
    type: String
  },
  sightseeingSearchdDay12_04: {
    type: String
  },
  sightseeingSearchFieldDay12_04: {
    type: String
  },
  sightseeing3CheckboxDay12_04: {
    type: String
  },
  sightseeingCountryDay12_05: {
    type: String
  },
  sightseeingCityNameDay12_05: {
    type: String
  },
  sightseeingSearchdDay12_05: {
    type: String
  },
  sightseeingSearchFieldDay12_05: {
    type: String
  },
  sightseeing3CheckboxDay12_05: {
    type: String
  },
  sightseeingCountryDay12_06: {
    type: String
  },
  sightseeingCityNameDay12_06: {
    type: String
  },
  sightseeingSearchdDay12_06: {
    type: String
  },
  sightseeingSearchFieldDay12_06: {
    type: String
  },
  sightseeing3CheckboxDay12_06: {
    type: String
  },
  sightseeingCountryDay12_07: {
    type: String
  },
  sightseeingCityNameDay12_07: {
    type: String
  },
  sightseeingSearchdDay12_07: {
    type: String
  },
  sightseeingSearchFieldDay12_07: {
    type: String
  },
  sightseeing3CheckboxDay12_07: {
    type: String
  },
  sightseeingCountryDay12_08: {
    type: String
  },
  sightseeingCityNameDay12_08: {
    type: String
  },
  sightseeingSearchdDay12_08: {
    type: String
  },
  sightseeingSearchFieldDay12_08: {
    type: String
  },
  sightseeing3CheckboxDay12_08: {
    type: String
  },
  sightseeingCountryDay12_09: {
    type: String
  },
  sightseeingCityNameDay12_09: {
    type: String
  },
  sightseeingSearchdDay12_09: {
    type: String
  },
  sightseeingSearchFieldDay12_09: {
    type: String
  },
  sightseeing3CheckboxDay12_09: {
    type: String
  },
  sightseeingCountryDay12_10: {
    type: String
  },
  sightseeingCityNameDay12_10: {
    type: String
  },
  sightseeingSearchdDay12_10: {
    type: String
  },
  sightseeingSearchFieldDay12_10: {
    type: String
  },
  sightseeing3CheckboxDay12_10: {
    type: String
  },
  sightseeingCountryDay13_01: {
    type: String
  },
  sightseeingCityNameDay13_01: {
    type: String
  },
  sightseeingSearchdDay13_01: {
    type: String
  },
  sightseeingSearchFieldDay13_01: {
    type: String
  },
  sightseeing3CheckboxDay13_01: {
    type: String
  },
  sightseeingCountryDay13_02: {
    type: String
  },
  sightseeingCityNameDay13_02: {
    type: String
  },
  sightseeingSearchdDay13_02: {
    type: String
  },
  sightseeingSearchFieldDay13_02: {
    type: String
  },
  sightseeing3CheckboxDay13_02: {
    type: String
  },
  sightseeingCountryDay13_03: {
    type: String
  },
  sightseeingCityNameDay13_03: {
    type: String
  },
  sightseeingSearchdDay13_03: {
    type: String
  },
  sightseeingSearchFieldDay13_03: {
    type: String
  },
  sightseeing3CheckboxDay13_03: {
    type: String
  },
  sightseeingCountryDay13_04: {
    type: String
  },
  sightseeingCityNameDay13_04: {
    type: String
  },
  sightseeingSearchdDay13_04: {
    type: String
  },
  sightseeingSearchFieldDay13_04: {
    type: String
  },
  sightseeing3CheckboxDay13_04: {
    type: String
  },
  sightseeingCountryDay13_05: {
    type: String
  },
  sightseeingCityNameDay13_05: {
    type: String
  },
  sightseeingSearchdDay13_05: {
    type: String
  },
  sightseeingSearchFieldDay13_05: {
    type: String
  },
  sightseeing3CheckboxDay13_05: {
    type: String
  },
  sightseeingCountryDay13_06: {
    type: String
  },
  sightseeingCityNameDay13_06: {
    type: String
  },
  sightseeingSearchdDay13_06: {
    type: String
  },
  sightseeingSearchFieldDay13_06: {
    type: String
  },
  sightseeing3CheckboxDay13_06: {
    type: String
  },
  sightseeingCountryDay13_07: {
    type: String
  },
  sightseeingCityNameDay13_07: {
    type: String
  },
  sightseeingSearchdDay13_07: {
    type: String
  },
  sightseeingSearchFieldDay13_07: {
    type: String
  },
  sightseeing3CheckboxDay13_07: {
    type: String
  },
  sightseeingCountryDay13_08: {
    type: String
  },
  sightseeingCityNameDay13_08: {
    type: String
  },
  sightseeingSearchdDay13_08: {
    type: String
  },
  sightseeingSearchFieldDay13_08: {
    type: String
  },
  sightseeing3CheckboxDay13_08: {
    type: String
  },
  sightseeingCountryDay13_09: {
    type: String
  },
  sightseeingCityNameDay13_09: {
    type: String
  },
  sightseeingSearchdDay13_09: {
    type: String
  },
  sightseeingSearchFieldDay13_09: {
    type: String
  },
  sightseeing3CheckboxDay13_09: {
    type: String
  },
  sightseeingCountryDay13_10: {
    type: String
  },
  sightseeingCityNameDay13_10: {
    type: String
  },
  sightseeingSearchdDay13_10: {
    type: String
  },
  sightseeingSearchFieldDay13_10: {
    type: String
  },
  sightseeing3CheckboxDay13_10: {
    type: String
  },
  sightseeingCountryDay14_01: {
    type: String
  },
  sightseeingCityNameDay14_01: {
    type: String
  },
  sightseeingSearchdDay14_01: {
    type: String
  },
  sightseeingSearchFieldDay14_01: {
    type: String
  },
  sightseeing3CheckboxDay14_01: {
    type: String
  },
  sightseeingCountryDay14_02: {
    type: String
  },
  sightseeingCityNameDay14_02: {
    type: String
  },
  sightseeingSearchdDay14_02: {
    type: String
  },
  sightseeingSearchFieldDay14_02: {
    type: String
  },
  sightseeing3CheckboxDay14_02: {
    type: String
  },
  sightseeingCountryDay14_03: {
    type: String
  },
  sightseeingCityNameDay14_03: {
    type: String
  },
  sightseeingSearchdDay14_03: {
    type: String
  },
  sightseeingSearchFieldDay14_03: {
    type: String
  },
  sightseeing3CheckboxDay14_03: {
    type: String
  },
  sightseeingCountryDay14_04: {
    type: String
  },
  sightseeingCityNameDay14_04: {
    type: String
  },
  sightseeingSearchdDay14_04: {
    type: String
  },
  sightseeingSearchFieldDay14_04: {
    type: String
  },
  sightseeing3CheckboxDay14_04: {
    type: String
  },
  sightseeingCountryDay14_05: {
    type: String
  },
  sightseeingCityNameDay14_05: {
    type: String
  },
  sightseeingSearchdDay14_05: {
    type: String
  },
  sightseeingSearchFieldDay14_05: {
    type: String
  },
  sightseeing3CheckboxDay14_05: {
    type: String
  },
  sightseeingCountryDay14_06: {
    type: String
  },
  sightseeingCityNameDay14_06: {
    type: String
  },
  sightseeingSearchdDay14_06: {
    type: String
  },
  sightseeingSearchFieldDay14_06: {
    type: String
  },
  sightseeing3CheckboxDay14_06: {
    type: String
  },
  sightseeingCountryDay14_07: {
    type: String
  },
  sightseeingCityNameDay14_07: {
    type: String
  },
  sightseeingSearchdDay14_07: {
    type: String
  },
  sightseeingSearchFieldDay14_07: {
    type: String
  },
  sightseeing3CheckboxDay14_07: {
    type: String
  },
  sightseeingCountryDay14_08: {
    type: String
  },
  sightseeingCityNameDay14_08: {
    type: String
  },
  sightseeingSearchdDay14_08: {
    type: String
  },
  sightseeingSearchFieldDay14_08: {
    type: String
  },
  sightseeing3CheckboxDay14_08: {
    type: String
  },
  sightseeingCountryDay14_09: {
    type: String
  },
  sightseeingCityNameDay14_09: {
    type: String
  },
  sightseeingSearchdDay14_09: {
    type: String
  },
  sightseeingSearchFieldDay14_09: {
    type: String
  },
  sightseeing3CheckboxDay14_09: {
    type: String
  },
  sightseeingCountryDay14_10: {
    type: String
  },
  sightseeingCityNameDay14_10: {
    type: String
  },
  sightseeingSearchdDay14_10: {
    type: String
  },
  sightseeingSearchFieldDay14_10: {
    type: String
  },
  sightseeing3CheckboxDay14_10: {
    type: String
  },
  sightseeingCountryDay15_01: {
    type: String
  },
  sightseeingCityNameDay15_01: {
    type: String
  },
  sightseeingSearchdDay15_01: {
    type: String
  },
  sightseeingSearchFieldDay15_01: {
    type: String
  },
  sightseeing3CheckboxDay15_01: {
    type: String
  },
  sightseeingCountryDay15_02: {
    type: String
  },
  sightseeingCityNameDay15_02: {
    type: String
  },
  sightseeingSearchdDay15_02: {
    type: String
  },
  sightseeingSearchFieldDay15_02: {
    type: String
  },
  sightseeing3CheckboxDay15_02: {
    type: String
  },
  sightseeingCountryDay15_03: {
    type: String
  },
  sightseeingCityNameDay15_03: {
    type: String
  },
  sightseeingSearchdDay15_03: {
    type: String
  },
  sightseeingSearchFieldDay15_03: {
    type: String
  },
  sightseeing3CheckboxDay15_03: {
    type: String
  },
  sightseeingCountryDay15_04: {
    type: String
  },
  sightseeingCityNameDay15_04: {
    type: String
  },
  sightseeingSearchdDay15_04: {
    type: String
  },
  sightseeingSearchFieldDay15_04: {
    type: String
  },
  sightseeing3CheckboxDay15_04: {
    type: String
  },
  sightseeingCountryDay15_05: {
    type: String
  },
  sightseeingCityNameDay15_05: {
    type: String
  },
  sightseeingSearchdDay15_05: {
    type: String
  },
  sightseeingSearchFieldDay15_05: {
    type: String
  },
  sightseeing3CheckboxDay15_05: {
    type: String
  },
  sightseeingCountryDay15_06: {
    type: String
  },
  sightseeingCityNameDay15_06: {
    type: String
  },
  sightseeingSearchdDay15_06: {
    type: String
  },
  sightseeingSearchFieldDay15_06: {
    type: String
  },
  sightseeing3CheckboxDay15_06: {
    type: String
  },
  sightseeingCountryDay15_07: {
    type: String
  },
  sightseeingCityNameDay15_07: {
    type: String
  },
  sightseeingSearchdDay15_07: {
    type: String
  },
  sightseeingSearchFieldDay15_07: {
    type: String
  },
  sightseeing3CheckboxDay15_07: {
    type: String
  },
  sightseeingCountryDay15_08: {
    type: String
  },
  sightseeingCityNameDay15_08: {
    type: String
  },
  sightseeingSearchdDay15_08: {
    type: String
  },
  sightseeingSearchFieldDay15_08: {
    type: String
  },
  sightseeing3CheckboxDay15_08: {
    type: String
  },
  sightseeingCountryDay15_09: {
    type: String
  },
  sightseeingCityNameDay15_09: {
    type: String
  },
  sightseeingSearchdDay15_09: {
    type: String
  },
  sightseeingSearchFieldDay15_09: {
    type: String
  },
  sightseeing3CheckboxDay15_09: {
    type: String
  },
  sightseeingCountryDay15_10: {
    type: String
  },
  sightseeingCityNameDay15_10: {
    type: String
  },
  sightseeingSearchdDay15_10: {
    type: String
  },
  sightseeingSearchFieldDay15_10: {
    type: String
  },
  sightseeing3CheckboxDay15_10: {
    type: String
  },
  sightseeingCountryDay16_01: {
    type: String
  },
  sightseeingCityNameDay16_01: {
    type: String
  },
  sightseeingSearchdDay16_01: {
    type: String
  },
  sightseeingSearchFieldDay16_01: {
    type: String
  },
  sightseeing3CheckboxDay16_01: {
    type: String
  },
  sightseeingCountryDay16_02: {
    type: String
  },
  sightseeingCityNameDay16_02: {
    type: String
  },
  sightseeingSearchdDay16_02: {
    type: String
  },
  sightseeingSearchFieldDay16_02: {
    type: String
  },
  sightseeing3CheckboxDay16_02: {
    type: String
  },
  sightseeingCountryDay16_03: {
    type: String
  },
  sightseeingCityNameDay16_03: {
    type: String
  },
  sightseeingSearchdDay16_03: {
    type: String
  },
  sightseeingSearchFieldDay16_03: {
    type: String
  },
  sightseeing3CheckboxDay16_03: {
    type: String
  },
  sightseeingCountryDay16_04: {
    type: String
  },
  sightseeingCityNameDay16_04: {
    type: String
  },
  sightseeingSearchdDay16_04: {
    type: String
  },
  sightseeingSearchFieldDay16_04: {
    type: String
  },
  sightseeing3CheckboxDay16_04: {
    type: String
  },
  sightseeingCountryDay16_05: {
    type: String
  },
  sightseeingCityNameDay16_05: {
    type: String
  },
  sightseeingSearchdDay16_05: {
    type: String
  },
  sightseeingSearchFieldDay16_05: {
    type: String
  },
  sightseeing3CheckboxDay16_05: {
    type: String
  },
  sightseeingCountryDay16_06: {
    type: String
  },
  sightseeingCityNameDay16_06: {
    type: String
  },
  sightseeingSearchdDay16_06: {
    type: String
  },
  sightseeingSearchFieldDay16_06: {
    type: String
  },
  sightseeing3CheckboxDay16_06: {
    type: String
  },
  sightseeingCountryDay16_07: {
    type: String
  },
  sightseeingCityNameDay16_07: {
    type: String
  },
  sightseeingSearchdDay16_07: {
    type: String
  },
  sightseeingSearchFieldDay16_07: {
    type: String
  },
  sightseeing3CheckboxDay16_07: {
    type: String
  },
  sightseeingCountryDay16_08: {
    type: String
  },
  sightseeingCityNameDay16_08: {
    type: String
  },
  sightseeingSearchdDay16_08: {
    type: String
  },
  sightseeingSearchFieldDay16_08: {
    type: String
  },
  sightseeing3CheckboxDay16_08: {
    type: String
  },
  sightseeingCountryDay16_09: {
    type: String
  },
  sightseeingCityNameDay16_09: {
    type: String
  },
  sightseeingSearchdDay16_09: {
    type: String
  },
  sightseeingSearchFieldDay16_09: {
    type: String
  },
  sightseeing3CheckboxDay16_09: {
    type: String
  },
  sightseeingCountryDay16_10: {
    type: String
  },
  sightseeingCityNameDay16_10: {
    type: String
  },
  sightseeingSearchdDay16_10: {
    type: String
  },
  sightseeingSearchFieldDay16_10: {
    type: String
  },
  sightseeing3CheckboxDay16_10: {
    type: String
  },
  sightseeingCountryDay17_01: {
    type: String
  },
  sightseeingCityNameDay17_01: {
    type: String
  },
  sightseeingSearchdDay17_01: {
    type: String
  },
  sightseeingSearchFieldDay17_01: {
    type: String
  },
  sightseeing3CheckboxDay17_01: {
    type: String
  },
  sightseeingCountryDay17_02: {
    type: String
  },
  sightseeingCityNameDay17_02: {
    type: String
  },
  sightseeingSearchdDay17_02: {
    type: String
  },
  sightseeingSearchFieldDay17_02: {
    type: String
  },
  sightseeing3CheckboxDay17_02: {
    type: String
  },
  sightseeingCountryDay17_03: {
    type: String
  },
  sightseeingCityNameDay17_03: {
    type: String
  },
  sightseeingSearchdDay17_03: {
    type: String
  },
  sightseeingSearchFieldDay17_03: {
    type: String
  },
  sightseeing3CheckboxDay17_03: {
    type: String
  },
  sightseeingCountryDay17_04: {
    type: String
  },
  sightseeingCityNameDay17_04: {
    type: String
  },
  sightseeingSearchdDay17_04: {
    type: String
  },
  sightseeingSearchFieldDay17_04: {
    type: String
  },
  sightseeing3CheckboxDay17_04: {
    type: String
  },
  sightseeingCountryDay17_05: {
    type: String
  },
  sightseeingCityNameDay17_05: {
    type: String
  },
  sightseeingSearchdDay17_05: {
    type: String
  },
  sightseeingSearchFieldDay17_05: {
    type: String
  },
  sightseeing3CheckboxDay17_05: {
    type: String
  },
  sightseeingCountryDay17_06: {
    type: String
  },
  sightseeingCityNameDay17_06: {
    type: String
  },
  sightseeingSearchdDay17_06: {
    type: String
  },
  sightseeingSearchFieldDay17_06: {
    type: String
  },
  sightseeing3CheckboxDay17_06: {
    type: String
  },
  sightseeingCountryDay17_07: {
    type: String
  },
  sightseeingCityNameDay17_07: {
    type: String
  },
  sightseeingSearchdDay17_07: {
    type: String
  },
  sightseeingSearchFieldDay17_07: {
    type: String
  },
  sightseeing3CheckboxDay17_07: {
    type: String
  },
  sightseeingCountryDay17_08: {
    type: String
  },
  sightseeingCityNameDay17_08: {
    type: String
  },
  sightseeingSearchdDay17_08: {
    type: String
  },
  sightseeingSearchFieldDay17_08: {
    type: String
  },
  sightseeing3CheckboxDay17_08: {
    type: String
  },
  sightseeingCountryDay17_09: {
    type: String
  },
  sightseeingCityNameDay17_09: {
    type: String
  },
  sightseeingSearchdDay17_09: {
    type: String
  },
  sightseeingSearchFieldDay17_09: {
    type: String
  },
  sightseeing3CheckboxDay17_09: {
    type: String
  },
  sightseeingCountryDay17_10: {
    type: String
  },
  sightseeingCityNameDay17_10: {
    type: String
  },
  sightseeingSearchdDay17_10: {
    type: String
  },
  sightseeingSearchFieldDay17_10: {
    type: String
  },
  sightseeing3CheckboxDay17_10: {
    type: String
  },
  sightseeingCountryDay18_01: {
    type: String
  },
  sightseeingCityNameDay18_01: {
    type: String
  },
  sightseeingSearchdDay18_01: {
    type: String
  },
  sightseeingSearchFieldDay18_01: {
    type: String
  },
  sightseeing3CheckboxDay18_01: {
    type: String
  },
  sightseeingCountryDay18_02: {
    type: String
  },
  sightseeingCityNameDay18_02: {
    type: String
  },
  sightseeingSearchdDay18_02: {
    type: String
  },
  sightseeingSearchFieldDay18_02: {
    type: String
  },
  sightseeing3CheckboxDay18_02: {
    type: String
  },
  sightseeingCountryDay18_03: {
    type: String
  },
  sightseeingCityNameDay18_03: {
    type: String
  },
  sightseeingSearchdDay18_03: {
    type: String
  },
  sightseeingSearchFieldDay18_03: {
    type: String
  },
  sightseeing3CheckboxDay18_03: {
    type: String
  },
  sightseeingCountryDay18_04: {
    type: String
  },
  sightseeingCityNameDay18_04: {
    type: String
  },
  sightseeingSearchdDay18_04: {
    type: String
  },
  sightseeingSearchFieldDay18_04: {
    type: String
  },
  sightseeing3CheckboxDay18_04: {
    type: String
  },
  sightseeingCountryDay18_05: {
    type: String
  },
  sightseeingCityNameDay18_05: {
    type: String
  },
  sightseeingSearchdDay18_05: {
    type: String
  },
  sightseeingSearchFieldDay18_05: {
    type: String
  },
  sightseeing3CheckboxDay18_05: {
    type: String
  },
  sightseeingCountryDay18_06: {
    type: String
  },
  sightseeingCityNameDay18_06: {
    type: String
  },
  sightseeingSearchdDay18_06: {
    type: String
  },
  sightseeingSearchFieldDay18_06: {
    type: String
  },
  sightseeing3CheckboxDay18_06: {
    type: String
  },
  sightseeingCountryDay18_07: {
    type: String
  },
  sightseeingCityNameDay18_07: {
    type: String
  },
  sightseeingSearchdDay18_07: {
    type: String
  },
  sightseeingSearchFieldDay18_07: {
    type: String
  },
  sightseeing3CheckboxDay18_07: {
    type: String
  },
  sightseeingCountryDay18_08: {
    type: String
  },
  sightseeingCityNameDay18_08: {
    type: String
  },
  sightseeingSearchdDay18_08: {
    type: String
  },
  sightseeingSearchFieldDay18_08: {
    type: String
  },
  sightseeing3CheckboxDay18_08: {
    type: String
  },
  sightseeingCountryDay18_09: {
    type: String
  },
  sightseeingCityNameDay18_09: {
    type: String
  },
  sightseeingSearchdDay18_09: {
    type: String
  },
  sightseeingSearchFieldDay18_09: {
    type: String
  },
  sightseeing3CheckboxDay18_09: {
    type: String
  },
  sightseeingCountryDay18_10: {
    type: String
  },
  sightseeingCityNameDay18_10: {
    type: String
  },
  sightseeingSearchdDay18_10: {
    type: String
  },
  sightseeingSearchFieldDay18_10: {
    type: String
  },
  sightseeing3CheckboxDay18_10: {
    type: String
  },
  sightseeingCountryDay19_01: {
    type: String
  },
  sightseeingCityNameDay19_01: {
    type: String
  },
  sightseeingSearchdDay19_01: {
    type: String
  },
  sightseeingSearchFieldDay19_01: {
    type: String
  },
  sightseeing3CheckboxDay19_01: {
    type: String
  },
  sightseeingCountryDay19_02: {
    type: String
  },
  sightseeingCityNameDay19_02: {
    type: String
  },
  sightseeingSearchdDay19_02: {
    type: String
  },
  sightseeingSearchFieldDay19_02: {
    type: String
  },
  sightseeing3CheckboxDay19_02: {
    type: String
  },
  sightseeingCountryDay19_03: {
    type: String
  },
  sightseeingCityNameDay19_03: {
    type: String
  },
  sightseeingSearchdDay19_03: {
    type: String
  },
  sightseeingSearchFieldDay19_03: {
    type: String
  },
  sightseeing3CheckboxDay19_03: {
    type: String
  },
  sightseeingCountryDay19_04: {
    type: String
  },
  sightseeingCityNameDay19_04: {
    type: String
  },
  sightseeingSearchdDay19_04: {
    type: String
  },
  sightseeingSearchFieldDay19_04: {
    type: String
  },
  sightseeing3CheckboxDay19_04: {
    type: String
  },
  sightseeingCountryDay19_05: {
    type: String
  },
  sightseeingCityNameDay19_05: {
    type: String
  },
  sightseeingSearchdDay19_05: {
    type: String
  },
  sightseeingSearchFieldDay19_05: {
    type: String
  },
  sightseeing3CheckboxDay19_05: {
    type: String
  },
  sightseeingCountryDay19_06: {
    type: String
  },
  sightseeingCityNameDay19_06: {
    type: String
  },
  sightseeingSearchdDay19_06: {
    type: String
  },
  sightseeingSearchFieldDay19_06: {
    type: String
  },
  sightseeing3CheckboxDay19_06: {
    type: String
  },
  sightseeingCountryDay19_07: {
    type: String
  },
  sightseeingCityNameDay19_07: {
    type: String
  },
  sightseeingSearchdDay19_07: {
    type: String
  },
  sightseeingSearchFieldDay19_07: {
    type: String
  },
  sightseeing3CheckboxDay19_07: {
    type: String
  },
  sightseeingCountryDay19_08: {
    type: String
  },
  sightseeingCityNameDay19_08: {
    type: String
  },
  sightseeingSearchdDay19_08: {
    type: String
  },
  sightseeingSearchFieldDay19_08: {
    type: String
  },
  sightseeing3CheckboxDay19_08: {
    type: String
  },
  sightseeingCountryDay19_09: {
    type: String
  },
  sightseeingCityNameDay19_09: {
    type: String
  },
  sightseeingSearchdDay19_09: {
    type: String
  },
  sightseeingSearchFieldDay19_09: {
    type: String
  },
  sightseeing3CheckboxDay19_09: {
    type: String
  },
  sightseeingCountryDay19_10: {
    type: String
  },
  sightseeingCityNameDay19_10: {
    type: String
  },
  sightseeingSearchdDay19_10: {
    type: String
  },
  sightseeingSearchFieldDay19_10: {
    type: String
  },
  sightseeing3CheckboxDay19_10: {
    type: String
  },
  sightseeingCountryDay20_01: {
    type: String
  },
  sightseeingCityNameDay20_01: {
    type: String
  },
  sightseeingSearchdDay20_01: {
    type: String
  },
  sightseeingSearchFieldDay20_01: {
    type: String
  },
  sightseeing3CheckboxDay20_01: {
    type: String
  },
  sightseeingCountryDay20_02: {
    type: String
  },
  sightseeingCityNameDay20_02: {
    type: String
  },
  sightseeingSearchdDay20_02: {
    type: String
  },
  sightseeingSearchFieldDay20_02: {
    type: String
  },
  sightseeing3CheckboxDay20_02: {
    type: String
  },
  sightseeingCountryDay20_03: {
    type: String
  },
  sightseeingCityNameDay20_03: {
    type: String
  },
  sightseeingSearchdDay20_03: {
    type: String
  },
  sightseeingSearchFieldDay20_03: {
    type: String
  },
  sightseeing3CheckboxDay20_03: {
    type: String
  },
  sightseeingCountryDay20_04: {
    type: String
  },
  sightseeingCityNameDay20_04: {
    type: String
  },
  sightseeingSearchdDay20_04: {
    type: String
  },
  sightseeingSearchFieldDay20_04: {
    type: String
  },
  sightseeing3CheckboxDay20_04: {
    type: String
  },
  sightseeingCountryDay20_05: {
    type: String
  },
  sightseeingCityNameDay20_05: {
    type: String
  },
  sightseeingSearchdDay20_05: {
    type: String
  },
  sightseeingSearchFieldDay20_05: {
    type: String
  },
  sightseeing3CheckboxDay20_05: {
    type: String
  },
  sightseeingCountryDay20_06: {
    type: String
  },
  sightseeingCityNameDay20_06: {
    type: String
  },
  sightseeingSearchdDay20_06: {
    type: String
  },
  sightseeingSearchFieldDay20_06: {
    type: String
  },
  sightseeing3CheckboxDay20_06: {
    type: String
  },
  sightseeingCountryDay20_07: {
    type: String
  },
  sightseeingCityNameDay20_07: {
    type: String
  },
  sightseeingSearchdDay20_07: {
    type: String
  },
  sightseeingSearchFieldDay20_07: {
    type: String
  },
  sightseeing3CheckboxDay20_07: {
    type: String
  },
  sightseeingCountryDay20_08: {
    type: String
  },
  sightseeingCityNameDay20_08: {
    type: String
  },
  sightseeingSearchdDay20_08: {
    type: String
  },
  sightseeingSearchFieldDay20_08: {
    type: String
  },
  sightseeing3CheckboxDay20_08: {
    type: String
  },
  sightseeingCountryDay20_09: {
    type: String
  },
  sightseeingCityNameDay20_09: {
    type: String
  },
  sightseeingSearchdDay20_09: {
    type: String
  },
  sightseeingSearchFieldDay20_09: {
    type: String
  },
  sightseeing3CheckboxDay20_09: {
    type: String
  },
  sightseeingCountryDay20_10: {
    type: String
  },
  sightseeingCityNameDay20_10: {
    type: String
  },
  sightseeingSearchdDay20_10: {
    type: String
  },
  sightseeingSearchFieldDay20_10: {
    type: String
  },
  sightseeing3CheckboxDay20_10: {
    type: String
  },
  sightseeingCountryDay21_01: {
    type: String
  },
  sightseeingCityNameDay21_01: {
    type: String
  },
  sightseeingSearchdDay21_01: {
    type: String
  },
  sightseeingSearchFieldDay21_01: {
    type: String
  },
  sightseeing3CheckboxDay21_01: {
    type: String
  },
  sightseeingCountryDay21_02: {
    type: String
  },
  sightseeingCityNameDay21_02: {
    type: String
  },
  sightseeingSearchdDay21_02: {
    type: String
  },
  sightseeingSearchFieldDay21_02: {
    type: String
  },
  sightseeing3CheckboxDay21_02: {
    type: String
  },
  sightseeingCountryDay21_03: {
    type: String
  },
  sightseeingCityNameDay21_03: {
    type: String
  },
  sightseeingSearchdDay21_03: {
    type: String
  },
  sightseeingSearchFieldDay21_03: {
    type: String
  },
  sightseeing3CheckboxDay21_03: {
    type: String
  },
  sightseeingCountryDay21_04: {
    type: String
  },
  sightseeingCityNameDay21_04: {
    type: String
  },
  sightseeingSearchdDay21_04: {
    type: String
  },
  sightseeingSearchFieldDay21_04: {
    type: String
  },
  sightseeing3CheckboxDay21_04: {
    type: String
  },
  sightseeingCountryDay21_05: {
    type: String
  },
  sightseeingCityNameDay21_05: {
    type: String
  },
  sightseeingSearchdDay21_05: {
    type: String
  },
  sightseeingSearchFieldDay21_05: {
    type: String
  },
  sightseeing3CheckboxDay21_05: {
    type: String
  },
  sightseeingCountryDay21_06: {
    type: String
  },
  sightseeingCityNameDay21_06: {
    type: String
  },
  sightseeingSearchdDay21_06: {
    type: String
  },
  sightseeingSearchFieldDay21_06: {
    type: String
  },
  sightseeing3CheckboxDay21_06: {
    type: String
  },
  sightseeingCountryDay21_07: {
    type: String
  },
  sightseeingCityNameDay21_07: {
    type: String
  },
  sightseeingSearchdDay21_07: {
    type: String
  },
  sightseeingSearchFieldDay21_07: {
    type: String
  },
  sightseeing3CheckboxDay21_07: {
    type: String
  },
  sightseeingCountryDay21_08: {
    type: String
  },
  sightseeingCityNameDay21_08: {
    type: String
  },
  sightseeingSearchdDay21_08: {
    type: String
  },
  sightseeingSearchFieldDay21_08: {
    type: String
  },
  sightseeing3CheckboxDay21_08: {
    type: String
  },
  sightseeingCountryDay21_09: {
    type: String
  },
  sightseeingCityNameDay21_09: {
    type: String
  },
  sightseeingSearchdDay21_09: {
    type: String
  },
  sightseeingSearchFieldDay21_09: {
    type: String
  },
  sightseeing3CheckboxDay21_09: {
    type: String
  },
  sightseeingCountryDay21_10: {
    type: String
  },
  sightseeingCityNameDay21_10: {
    type: String
  },
  sightseeingSearchdDay21_10: {
    type: String
  },
  sightseeingSearchFieldDay21_10: {
    type: String
  },
  sightseeing3CheckboxDay21_10: {
    type: String
  },
  sightseeingCountryDay22_01: {
    type: String
  },
  sightseeingCityNameDay22_01: {
    type: String
  },
  sightseeingSearchdDay22_01: {
    type: String
  },
  sightseeingSearchFieldDay22_01: {
    type: String
  },
  sightseeing3CheckboxDay22_01: {
    type: String
  },
  sightseeingCountryDay22_02: {
    type: String
  },
  sightseeingCityNameDay22_02: {
    type: String
  },
  sightseeingSearchdDay22_02: {
    type: String
  },
  sightseeingSearchFieldDay22_02: {
    type: String
  },
  sightseeing3CheckboxDay22_02: {
    type: String
  },
  sightseeingCountryDay22_03: {
    type: String
  },
  sightseeingCityNameDay22_03: {
    type: String
  },
  sightseeingSearchdDay22_03: {
    type: String
  },
  sightseeingSearchFieldDay22_03: {
    type: String
  },
  sightseeing3CheckboxDay22_03: {
    type: String
  },
  sightseeingCountryDay22_04: {
    type: String
  },
  sightseeingCityNameDay22_04: {
    type: String
  },
  sightseeingSearchdDay22_04: {
    type: String
  },
  sightseeingSearchFieldDay22_04: {
    type: String
  },
  sightseeing3CheckboxDay22_04: {
    type: String
  },
  sightseeingCountryDay22_05: {
    type: String
  },
  sightseeingCityNameDay22_05: {
    type: String
  },
  sightseeingSearchdDay22_05: {
    type: String
  },
  sightseeingSearchFieldDay22_05: {
    type: String
  },
  sightseeing3CheckboxDay22_05: {
    type: String
  },
  sightseeingCountryDay22_06: {
    type: String
  },
  sightseeingCityNameDay22_06: {
    type: String
  },
  sightseeingSearchdDay22_06: {
    type: String
  },
  sightseeingSearchFieldDay22_06: {
    type: String
  },
  sightseeing3CheckboxDay22_06: {
    type: String
  },
  sightseeingCountryDay22_07: {
    type: String
  },
  sightseeingCityNameDay22_07: {
    type: String
  },
  sightseeingSearchdDay22_07: {
    type: String
  },
  sightseeingSearchFieldDay22_07: {
    type: String
  },
  sightseeing3CheckboxDay22_07: {
    type: String
  },
  sightseeingCountryDay22_08: {
    type: String
  },
  sightseeingCityNameDay22_08: {
    type: String
  },
  sightseeingSearchdDay22_08: {
    type: String
  },
  sightseeingSearchFieldDay22_08: {
    type: String
  },
  sightseeing3CheckboxDay22_08: {
    type: String
  },
  sightseeingCountryDay22_09: {
    type: String
  },
  sightseeingCityNameDay22_09: {
    type: String
  },
  sightseeingSearchdDay22_09: {
    type: String
  },
  sightseeingSearchFieldDay22_09: {
    type: String
  },
  sightseeing3CheckboxDay22_09: {
    type: String
  },
  sightseeingCountryDay22_10: {
    type: String
  },
  sightseeingCityNameDay22_10: {
    type: String
  },
  sightseeingSearchdDay22_10: {
    type: String
  },
  sightseeingSearchFieldDay22_10: {
    type: String
  },
  sightseeing3CheckboxDay22_10: {
    type: String
  },
});

module.exports = mongoose.model('Post', postSchema);
