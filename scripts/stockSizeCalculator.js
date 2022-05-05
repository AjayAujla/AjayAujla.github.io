import {formatCurrency} from './utils.js';

let stockSizeCalculatorIndex = 0;
const getStockSizeCalculatorIndex = () => stockSizeCalculatorIndex;
const updateStockSizeCalculatorIndex = () => {
    stockSizeCalculatorIndex = (stockSizeCalculatorIndex % 5) + 1;
}

const calculateStockSize = (index) => {
    const balance = parseInt(document.getElementById(`balance${index}`).value);
    const dailyProfitTarget = parseInt(document.getElementById(`dailyProfitTarget${index}`).value);
    const dailyMaxLoss = parseInt(document.getElementById(`dailyMaxLoss${index}`).value);
    const stockPrice = parseFloat(document.getElementById(`stockPrice${index}`).value);

    console.log(balance, dailyProfitTarget, dailyMaxLoss, stockPrice);
    if(balance <= 0 || stockPrice <= 0) {
        return;
    }

    const maxShares = Math.round((balance / stockPrice) / 100) * 100;
    const profitTarget = (dailyProfitTarget + (maxShares * stockPrice)) / maxShares;
    const stopLoss = (dailyMaxLoss + (maxShares * stockPrice)) / maxShares;

    document.getElementById(`maxShares${index}`).value = maxShares;
    document.getElementById(`profitTarget${index}`).value = formatCurrency(profitTarget);
    document.getElementById(`stopLoss${index}`).value = formatCurrency(stopLoss);
};

const updateStockSizeInfo = (index, dailyProfitTarget, dailyMaxLoss) => {
    document.getElementById(`dailyProfitTarget${index}`).value = dailyProfitTarget;
    document.getElementById(`dailyMaxLoss${index}`).value = dailyMaxLoss;
};

$('[data-toggle="tooltip"]').tooltip();

$('#balance1, #dailyProfitTarget1, #dailyMaxLoss1, #stockPrice1').on('change keyup', function() { calculateStockSize(1); });
$('#balance2, #dailyProfitTarget2, #dailyMaxLoss2, #stockPrice2').on('change keyup', function() { calculateStockSize(2); });
$('#balance3, #dailyProfitTarget3, #dailyMaxLoss3, #stockPrice3').on('change keyup', function() { calculateStockSize(3); });
$('#balance4, #dailyProfitTarget4, #dailyMaxLoss4, #stockPrice4').on('change keyup', function() { calculateStockSize(4); });
$('#balance5, #dailyProfitTarget5, #dailyMaxLoss5, #stockPrice5').on('change keyup', function() { calculateStockSize(5); });

$('#5025').on('click', function() {
    updateStockSizeCalculatorIndex();
    updateStockSizeInfo(getStockSizeCalculatorIndex(), 50, -25);
    calculateStockSize(getStockSizeCalculatorIndex());
});

$('#5050').on('click', function() {
    updateStockSizeCalculatorIndex();
    updateStockSizeInfo(getStockSizeCalculatorIndex(), 50, -50);
    calculateStockSize(getStockSizeCalculatorIndex());
});

$('#10050').on('click', function() {
    updateStockSizeCalculatorIndex();
    updateStockSizeInfo(getStockSizeCalculatorIndex(), 100, -50);
    calculateStockSize(getStockSizeCalculatorIndex());
});

$('#100100').on('click', function() {
    updateStockSizeCalculatorIndex();
    updateStockSizeInfo(getStockSizeCalculatorIndex(), 100, -100);
    calculateStockSize(getStockSizeCalculatorIndex());
});

$('#200100').on('click', function() {
    updateStockSizeCalculatorIndex();
    updateStockSizeInfo(getStockSizeCalculatorIndex(), 200, -100);
    calculateStockSize(getStockSizeCalculatorIndex());
});

$('#200200').on('click', function() {
    updateStockSizeCalculatorIndex();
    updateStockSizeInfo(getStockSizeCalculatorIndex(), 200, -200);
    calculateStockSize(getStockSizeCalculatorIndex());
});

$('#300150').on('click', function() {
    updateStockSizeCalculatorIndex();
    updateStockSizeInfo(getStockSizeCalculatorIndex(), 300, -150);
    calculateStockSize(getStockSizeCalculatorIndex());
});

$('#300300').on('click', function() {
    updateStockSizeCalculatorIndex();
    updateStockSizeInfo(getStockSizeCalculatorIndex(), 300, -300);
    calculateStockSize(getStockSizeCalculatorIndex());
});
