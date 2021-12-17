import { createSelector } from 'reselect';
import moment from 'moment';

const getOrders = (state) => state.order.items || [];

// interface Order {
//   client: string,
//   total: number,
//   products: [
//     {
//       productId: string,
//       quantity: number,
//       name: string,
//       price: number,
//     }
//   ],
//   date: string,
//   status: string,
//   createdAt: string,
// }

export const getOrderForYear = createSelector(
  [
    getOrders,
  ],
  (
    list,
  ) => {
    let firstMonth = 0;
    let secondMonth = 0;
    let thirdMonth = 0;
    let fourthMonth = 0;
    let fiveMonth = 0;
    let sixMonth = 0;
    let sevenMonth = 0;
    let eightMonth = 0;
    let nineMonth = 0;
    let tenMonth = 0;
    let elevenMonth = 0;
    let twelveMonth = 0;
    const array = [];
    list.forEach((order) => {
      const dateOrder = moment(order.createdAt).format('YYYY-MM-DD');

      const isFirstMonth = moment(dateOrder).isBetween('2021-01-01', '2021-01-31');
      const isSecondMonth = moment(dateOrder).isBetween('2021-02-01', '2021-02-28');
      const isThirdMonth = moment(dateOrder).isBetween('2021-03-01', '2021-03-31');
      const isFourthMonth = moment(dateOrder).isBetween('2021-04-01', '2021-04-30');
      const isFiveMonth = moment(dateOrder).isBetween('2021-05-01', '2021-05-31');
      const isSixMonth = moment(dateOrder).isBetween('2021-06-01', '2021-06-31');
      const isSevenMonth = moment(dateOrder).isBetween('2021-07-01', '2021-07-31');
      const isEightMonth = moment(dateOrder).isBetween('2021-08-01', '2021-08-31');
      const isNineMonth = moment(dateOrder).isBetween('2021-09-01', '2021-09-31');
      const isTenMonth = moment(dateOrder).isBetween('2021-10-01', '2021-10-31');
      const isElevenMonth = moment(dateOrder).isBetween('2021-11-01', '2021-11-31');
      const isTwelveMonth = moment(dateOrder).isBetween('2021-12-01', '2021-12-31');

      if (isFirstMonth) {
        firstMonth += 1;
      } else if (isSecondMonth) {
        secondMonth += 1;
      } else if (isThirdMonth) {
        thirdMonth += 1;
      } else if (isFourthMonth) {
        fourthMonth += 1;
      } else if (isFiveMonth) {
        fiveMonth += 1;
      } else if (isSixMonth) {
        sixMonth += 1;
      } else if (isSevenMonth) {
        sevenMonth += 1;
      } else if (isEightMonth) {
        eightMonth += 1;
      } else if (isNineMonth) {
        nineMonth += 1;
      } else if (isTenMonth) {
        tenMonth += 1;
      } else if (isElevenMonth) {
        elevenMonth += 1;
      } else if (isTwelveMonth) {
        twelveMonth += 1;
      }
    });

    array.push(
      { label: 'Enero', count: firstMonth },
      { label: 'Febrero', count: secondMonth },
      { label: 'Marzo', count: thirdMonth },
      { label: 'Abril', count: fourthMonth },
      { label: 'Mayo', count: fiveMonth },
      { label: 'Junio', count: sixMonth },
      { label: 'Julio', count: sevenMonth },
      { label: 'Agosto', count: eightMonth },
      { label: 'Septiembre', count: nineMonth },
      { label: 'Octubre', count: tenMonth },
      { label: 'Noviembre', count: elevenMonth },
      { label: 'Diciembre', count: twelveMonth },
    )

    return array;
  },
);