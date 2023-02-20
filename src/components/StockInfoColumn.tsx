import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import {formatToWholeNumber, formatToTwoDecimals, formatAsCurrency} from '../services/Utils';

const StockInfoColumn = () => {
  // stock info
  const [balance, setBalance] = useState(2000);
  const [dailyProfitTarget, setDailyProfitTarget] = useState(50);
  const [dailyMaxLoss, setDailyMaxLoss] = useState(-dailyProfitTarget);
  const [stockPrice, setStockPrice] = useState(0);

  // results
  const [maxShares, setMaxShares] = useState(0);
  const [profitTarget, setProfitTarget] = useState(0);
  const [stopLoss, setStopLoss] = useState(0);

  // update results when all info is set
  useEffect(() => {
    console.log(balance, dailyProfitTarget, dailyMaxLoss, stockPrice);
    setMaxShares(Math.round((balance / stockPrice) / 100) * 100);
    setProfitTarget(formatToTwoDecimals((dailyProfitTarget + (stockPrice * maxShares)) / maxShares));
    setStopLoss(formatToTwoDecimals((dailyMaxLoss + (stockPrice * maxShares)) / maxShares));
  }, [balance, dailyProfitTarget, dailyMaxLoss, stockPrice, maxShares]);

  return (
    <div>
        <h3>Stock Info</h3>
        <TextField
          label="Balance"
          id="balance"
          name="balance"
          type="number"
          value={ balance }
          onChange={(e: any) => setBalance(parseInt(e.target.value)) }
          required
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          inputProps={{
            step: 100,
            min: 0,
          }}
        />
        <TextField
          label="Daily Profit Target"
          id="dailyProfitTarget"
          name="dailyProfitTarget"
          type="number"
          value={ dailyProfitTarget }
          onChange={(e: any) => { setDailyProfitTarget(parseInt(e.target.value)); setDailyMaxLoss(-parseInt(e.target.value)); } }
          required
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          inputProps={{
            step: 50,
            min: 50,
          }}
        />
        <TextField
          label="Daily Max Loss"
          id="dailyMaxLoss"
          name="dailyMaxLoss"
          type="number"
          value={ dailyMaxLoss }
          onChange={(e: any) => { setDailyProfitTarget(-parseInt(e.target.value)); setDailyMaxLoss(parseInt(e.target.value)); } }
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          inputProps={{
            step: 50,
            max: 0,
          }}
        />
        <TextField
          label="Stock Price"
          id="stockPrice"
          name="stockPrice"
          type="number"
          value={ stockPrice }
          onChange={(e: any) => setStockPrice(parseFloat(e.target.value)) }
          required
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          inputProps={{
            step: 0.25,
            min: 1,
          }}
        />

        <h3>Results</h3>

        <TextField
          label="Max Shares"
          id="maxShares"
          name="maxShares"
          type="number"
          value={ maxShares }
          // helperText="= price / balance"
        />
        <TextField
          label="Profit Target"
          id="profitTarget"
          name="profitTarget"
          type="number"
          value={ profitTarget }
          // helperText="= (dailyProfitTarget + (stockPrice * maxShares)) / maxShares"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Stop Loss"
          id="stopLoss"
          name="stopLoss"
          type="number"
          value={ stopLoss }
          // helperText="= (dailyMaxLoss + (stockPrice * maxShares)) / maxShares"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />

        <Slider
          track={false}
          min={stopLoss}
          max={profitTarget}
          value={(stopLoss && stockPrice && profitTarget) ? [stopLoss, stockPrice, profitTarget] : []}
          marks={[
            {
              value: 2,
              label: stopLoss && 'Stop Loss',
            },
            {
              value: 3,
              label: maxShares && `${maxShares} Max Shares`,
            },
            {
              value: 4,
              label: profitTarget && 'Profit Target',
            },
          ]}
          getAriaValueText={formatAsCurrency}
          valueLabelDisplay="on"

        />
      {/*<Button>Clear</Button>*/}

    </div>
  )
};

export default StockInfoColumn;
