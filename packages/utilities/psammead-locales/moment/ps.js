/* eslint-disable func-names */
const moment = require('moment');
const jalaaliHelper = require('./helpers/jalaali');
const stringHelper = require('./helpers/stringHelper');

const pashtoJalaliMonths = [
  'وری',
  'غویی',
  'غبرګولی',
  'چنګاښ',
  'زمری',
  'وږی',
  'تله',
  'لړم',
  'لیندۍ',
  'مرغومی',
  'سلواغه',
  'کب',
];

// Moment formats that should have the Jalali date added
const jalaliFormats = ['D MMMM YYYY', 'LL'];

moment.defineLocale('ps', {
  // Gregorian Months
  months: 'جنوري_فبروري_مارچ_اپریل_می_جون_جولاې_اګست_سپتمبر_اکتوبر_نومبر_ډیسمبر'.split(
    '_',
  ),
  postformat(string) {
    const str = jalaaliHelper.addJalaliDate(
      'ps',
      pashtoJalaliMonths,
      jalaliFormats,
      string,
    );

    return stringHelper.useEasternNumerals(str);
  },
});
