const currencyFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }); 

const formatCurrency = (value) => currencyFormat.format(value);

export {formatCurrency};