const wholeNumberFormatter = new Intl.NumberFormat('en-US', {
   minimumFractionDigits: 0,      
   maximumFractionDigits: 0,
});

const twoDecimalFormatter = new Intl.NumberFormat('en-US', {
   minimumFractionDigits: 2,      
   maximumFractionDigits: 2,
});

export const formatToWholeNumber = (value: number): number => parseInt(wholeNumberFormatter.format(value));

export const formatToTwoDecimals = (value: number): number => parseFloat(twoDecimalFormatter.format(value));

export const formatAsCurrency = (value: number): string => `$${twoDecimalFormatter.format(value).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;