import React, { useState, useEffect } from 'react';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

const StockInfoColumn = () => {
  // stock info
  const [balance, setBalance] = useState(2000);
  const [dailyProfitTarget, setDailyProfitTarget] = useState(50);
  const [dailyMaxLoss, setDailyMaxLoss] = useState(-50);
  const [stockPrice, setStockPrice] = useState(0);

  // results
  const [maxShares, setMaxShares] = useState(0);
  const [profitTarget, setProfitTarget] = useState(0);
  const [stopLoss, setStopLoss] = useState(0);

  // update results when all info is set
  useEffect(() => {
    setMaxShares(balance / stockPrice);
    setProfitTarget((dailyProfitTarget + (stockPrice * maxShares)) / maxShares);
    setStopLoss((dailyMaxLoss + (stockPrice * maxShares)) / maxShares);
  }, [balance, dailyProfitTarget, dailyMaxLoss, stockPrice, maxShares]);

  return (
    <div>
      <div>
        <h2>Stock Info</h2>
        <TextField
          label="Balance"
          id="balance"
          name="balance"
          type="number"
          value={ balance }
          onChange={(e: any) => setBalance(e.target.value) }
          required
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          inputProps={{
            step: "100",
            min: 0,
          }}
        />
        <TextField
          label="Daily Profit Target"
          id="dailyProfitTarget"
          name="dailyProfitTarget"
          type="number"
          value={ dailyProfitTarget }
          onChange={(e: any) => setDailyProfitTarget(e.target.value) }
          required
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          inputProps={{
            step: "50",
            min: 0,
          }}
        />
        <TextField
          label="Daily Max Loss"
          id="dailyMaxLoss"
          name="dailyMaxLoss"
          type="number"
          value={ dailyMaxLoss }
          onChange={(e: any) => setDailyMaxLoss(e.target.value) }
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          inputProps={{
            readOnly: true,
            step: "50",
            max: 0,
          }}
        />
        <TextField
          label="Stock Price"
          id="stockPrice"
          name="stockPrice"
          type="number"
          value={ stockPrice }
          onChange={(e: any) => setStockPrice(e.target.value) }
          required
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          inputProps={{
            step: "0.1",
            min: 0,
          }}
        />
      </div>

      <div>
        <h2>Results</h2>
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
      </div>

      {/*<Button>Clear</Button>*/}

    </div>
  )
};

export default StockInfoColumn;
