# Impala API Javascript SDK

A port of https://github.com/GetImpala/impala-php

<!-- ## Installation

It's as simple as:

```bash
$ npm i impala-js
``` -->

## Tests

To run the tests you can run the following commands:

```bash
$ npm i
$ npm test
```

## Obtaining an API key

To use this library, you will need an Impala API key. More information can be
found in the ['Getting Started'][getting-started] section of the Impala developer documentation.

## Getting Started

After installation, you can create an impala client like this:

```javascript
const impala = ImpalaSDK.create('api-key');
```

### Working with a single hotel

If your application will only be dealing with a single hotel at a time,
you can instantiate the Impala API like this:

```javascript
const hotel = ImpalaSDK.create('api-key', 'hotelId');
```

### Working with multiple hotels

If your application will be dealing with multiple hotels, you can omit the `hotelId`
parameter, like so:

```javascript
const impala = ImpalaSDK.create('api-key');

// You can then pass the hotelId directly to the method
await impala.getBookings({hotelId: 'hotelId'});

// Or with extra parameters
await impala.getBookings({
  hotelId: 'hotelId',
  startDate: '2018-02-03',
  endDate: '2018-02-05'
});

// Or, you can call getHotel to return a single-hotel API instance
const hotel = impala.getHotel('hotelId')

// You can then call the API methods like normal
await hotel.getBookings();
```

## Making API calls

API methods accept an object as their first argument, containing the parameters for the API call. This can be omitted if there are no arguments to set.

API methods that take an ID have the ID as the first argument.

API methods that update a resource take the object representation of a [JSON merge patch](https://tools.ietf.org/html/rfc7386) as their second argument. 

For example:

```javascript
const impala = impalaSDK.create('api-key');
const hotel = impala.getHotel('hotelId')

await hotel.updateBookingById('bookingId', { start: 123456, roomIds: ['abc', 'cde']})
```

## API methods

| Name                     | HTTP API endpoint                                                             |
|:-------------------------|:------------------------------------------------------------------------------|
| `getAllocationById`      | [`GET /v2/hotel/:hotelId/allocation/:allocationId`][type-allocation]          |
| `getAllocations`         | [`GET /v2/hotel/:hotelId/allocation`][type-allocation]                        |
| `getAreaById`            | [`GET /v2/hotel/:hotelId/area/:areaId`][type-area]                            |
| `getAreas`               | [`GET /v2/hotel/:hotelId/area`][type-area]                                    |
| `getAreaTypeById`        | [`GET /v2/hotel/:hotelId/area-type/:areaTypeId`][type-areatype]               |
| `getAreaTypes`           | [`GET /v2/hotel/:hotelId/area-type`][type-area-type]                          |
| `getBillById`            | [`GET /v2/hotel/:hotelId/bill/:billId`][type-bill]                            |
| `getChargeByIdForBill`   | [`GET /v2/hotel/:hotelId/bill/:billId/charge/:chargeId`][type-bill]           |
| `getChargesForBill`      | [`GET /v2/hotel/:hotelId/bill/:billId/charge`][type-bill]                     |
| `createChargeForBill`    | [`POST /v2/hotel/:hotelId/bill/:billId/charge`][type-bill]                    |
| `refundChargeByIdForBill`| [`POST /v2/hotel/:hotelId/bill/:billId/charge/:chargeId/refund`][type-bill]   |
| `getPaymentByIdForBill`  | [`GET /v2/hotel/:hotelId/bill/:billId/payment/:paymentId`][type-bill]         |
| `getPaymentsForBill`     | [`GET /v2/hotel/:hotelId/bill/:billId/payment`][type-bill]                    |
| `createPaymentForBill`   | [`POST /v2/hotel/:hotelId/bill/:billId/payment`][type-bill]                   |
| `refundPaymentByIdForBill`| [`POST /v2/hotel/:hotelId/bill/:billId/payment/:paymentId/refund`][type-bill]|
| `getBookingById`         | [`GET /v2/hotel/:hotelId/booking/:bookingId`][type-booking]                   |
| `getBookings`            | [`GET /v2/hotel/:hotelId/booking`][type-booking]                              |
| `createBooking`          | [`POST /v2/hotel/:hotelId/booking`][type-booking]                             |
| `updateBookingById`      | [`PATCH /v2/hotel/:hotelId/booking/:bookingId`][type-booking]                 |
| `checkInBookingById`     | [`POST /v2/hotel/:hotelId/booking/:bookingId/check-in`][type-booking]         |
| `checkOutBookingById`    | [`POST /v2/hotel/:hotelId/booking/:bookingId/check-out`][type-booking]        |
| `cancelBookingById`      | [`POST /v2/hotel/:hotelId/booking/:bookingId/cancel`][type-booking]           |
| `getGuestsForBooking`    | [`GET /v2/hotel/:hotelId/booking/:bookingId/guest`][type-booking]             |
| `getBillsForBooking`     | [`GET /v2/hotel/:hotelId/booking/:bookingId/bill`][type-booking]              |
| `getBookingSets`         | [`GET /v2/hotel/:hotelId/booking-set`][type-bookingset]                       |
| `getBookingSetById`      | [`GET /v2/hotel/:hotelId/booking-set/:bookingSetId`][type-bookingset]         |
| `createBookingSet`       | [`POST /v2/hotel/:hotelId/booking-set`][type-bookingset]                      |
| `updateBookingSet`       | [`PATCH /v2/hotel/:hotelId/booking-set/:bookingSetId`][type-bookingset]       |
| `getExtraById`           | [`GET /v2/hotel/:hotelId/extra/:extraId`][type-extra]                         |
| `getExtras`              | [`GET /v2/hotel/:hotelId/extra`][type-extra]                                  |
| `getGuestById`           | [`GET /v2/hotel/:hotelId/guest/:guestId`][type-guest]                         |
| `getGuests`              | [`GET /v2/hotel/:hotelId/guest`][type-guest]                                  |
| `createGuest`            | [`POST /v2/hotel/:hotelId/guest`][type-guest]                                 |
| `updateGuest`            | [`PATCH /v2/hotel/:hotelId/guest/:guestId`][type-guest]                       |
| `getBillsForGuest`       | [`GET /v2/hotel/:hotelId/guest/:guestId/bill`][type-guest]                    |
| `getRatePlanById`        | [`GET /v2/hotel/:hotelId/rate-plan/:ratePlanId`][type-rateplan]               |
| `getRatePlans`           | [`GET /v2/hotel/:hotelId/rate-plan`][type-rateplan]                           |
| `getPriceForRatePlan`    | [`GET /v2/hotel/:hotelId/rate-plan/:ratePlanId/price`][type-rateplan]         |
| `updatePriceForRatePlan` | [`PUT /v2/hotel/:hotelId/rate-plan/:ratePlanId/price`][type-rateplan]         |
| `getRateSets`            | [`GET /v2/hotel/:hotelId/rate-set`][type-rateset]                             |

[getting-started]: https://docs.getimpala.com/#getting-started
[type-allocation]: https://docs.getimpala.com/#allocation-group-block
[type-area]: https://docs.getimpala.com/#area
[type-areatype]: https://docs.getimpala.com/#area-types
[type-bill]: https://docs.getimpala.com/#bill
[type-booking]: https://docs.getimpala.com/#booking
[type-booking]: https://docs.getimpala.com/#booking-set
[type-extra]: https://docs.getimpala.com/#extra
[type-guest]: https://docs.getimpala.com/#guest
[type-rateplan]: https://docs.getimpala.com/#rate-plan
[type-rateset]: https://docs.getimpala.com/#rate-set
