import {formatCurrency} from './utils.js';

let dripCalculatorIndex = 0;
const getDripCalculatorIndex = () => dripCalculatorIndex;
const updateDripCalculatorIndex = () => {
    dripCalculatorIndex = (dripCalculatorIndex % 5) + 1;
}

const calculateDrip = (index) => {
    const price = document.getElementById(`price${index}`).value;
    const dividendYield = document.getElementById(`dividendYield${index}`).value / 100;
    const dividendPayoutFrequency = document.getElementById(`dividendPayoutFrequency${index}`).value;
    const ownedShares = document.getElementById(`ownedShares${index}`).value;

    console.log(index, price, dividendYield, dividendPayoutFrequency, ownedShares);
    if(price <= 0 || dividendYield <= 0) {
        return;
    }

    const dividendPayoutsPerShare = (price * dividendYield) / dividendPayoutFrequency;
    const nextDividendPayout = ownedShares * dividendPayoutsPerShare;
    const annualDividendPayout = nextDividendPayout * dividendPayoutFrequency;
    const totalSharesForDrip = Math.ceil(price / dividendPayoutsPerShare);
    const remainingSharesForDrip = Math.max(0, Math.ceil(totalSharesForDrip - ownedShares));
    const totalCost = price * remainingSharesForDrip;

    document.getElementById(`dividendPayoutsPerShare${index}`).value = formatCurrency(dividendPayoutsPerShare);
    document.getElementById(`nextDividendPayout${index}`).value = formatCurrency(nextDividendPayout);
    document.getElementById(`annualDividendPayout${index}`).value = formatCurrency(annualDividendPayout);
    document.getElementById(`totalSharesForDrip${index}`).value = totalSharesForDrip;
    document.getElementById(`remainingSharesForDrip${index}`).value = remainingSharesForDrip;
    document.getElementById(`totalCost${index}`).value = formatCurrency(totalCost);
};

const updateStockInfo = (index, ticker, price, dividendYield, dividendPayoutFrequency, ownedShares) => {
    document.getElementById(`ticker${index}`).value = ticker;
    document.getElementById(`price${index}`).value = price;
    document.getElementById(`dividendYield${index}`).value = dividendYield;
    document.getElementById(`dividendPayoutFrequency${index}`).value = dividendPayoutFrequency;
    document.getElementById(`ownedShares${index}`).value = ownedShares;
};

$('[data-toggle="tooltip"]').tooltip();

$('#price1, #dividendYield1, #dividendPayoutFrequency1, #ownedShares1').on('change keyup', function() { calculateDrip(1); });
$('#price2, #dividendYield2, #dividendPayoutFrequency2, #ownedShares2').on('change keyup', function() { calculateDrip(2); });
$('#price3, #dividendYield3, #dividendPayoutFrequency3, #ownedShares3').on('change keyup', function() { calculateDrip(3); });
$('#price4, #dividendYield4, #dividendPayoutFrequency4, #ownedShares4').on('change keyup', function() { calculateDrip(4); });
$('#price5, #dividendYield5, #dividendPayoutFrequency5, #ownedShares5').on('change keyup', function() { calculateDrip(5); });

$('#TD').on('click', function() {
    updateDripCalculatorIndex();
    updateStockInfo(getDripCalculatorIndex(), 'TD', 95, 3.33, 4, 30);
    calculateDrip(getDripCalculatorIndex());
});

$('#RY').on('click', function() {
    updateDripCalculatorIndex();
    updateStockInfo(getDripCalculatorIndex(), 'RY', 130, 3.31, 4, 0);
    calculateDrip(getDripCalculatorIndex());
});

$('#ENB').on('click', function() {
    updateDripCalculatorIndex();
    updateStockInfo(getDripCalculatorIndex(), 'ENB', 55, 6.56, 4, 75);
    calculateDrip(getDripCalculatorIndex());
});

$('#AAPL').on('click', function() {
    updateDripCalculatorIndex();
    updateStockInfo(getDripCalculatorIndex(), 'AAPL', 160, 0.5, 4, 27);
    calculateDrip(getDripCalculatorIndex());
});

$('#MFC').on('click', function() {
    updateDripCalculatorIndex();
    updateStockInfo(getDripCalculatorIndex(), 'MFC', 25, 4.88, 4, 0);
    calculateDrip(getDripCalculatorIndex());
});

$('#SU').on('click', function() {
    updateDripCalculatorIndex();
    updateStockInfo(getDripCalculatorIndex(), 'SU', 36, 4.46, 4, 0);
    calculateDrip(getDripCalculatorIndex());
});
