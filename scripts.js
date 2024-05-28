window.addEventListener('DOMContentLoaded', (event) => {
  const fromAmount = document.getElementById('fromAmount');
  const toAmount = document.getElementById('toAmount');
  const fromCurrency = document.getElementById('fromCurrency');
  const toCurrency = document.getElementById('toCurrency');
  const exchangeButton = document.getElementById('exchangeButton');

  const currentCurrencyText = document.querySelector('.converter__current-currency');
  const resultCurrencyText = document.querySelector('.converter__result-currency');

  const rates = {
      BTC: {
          RUB: 6049156.69,
          BTC: 1,
          XYU: 2
      },
      RUB: {
        RUB: 1,
        BTC: 0.69,
        XYU: 6
      },
      XYU: {
        RUB: 6,
        BTC: 2,
        XYU: 1
      },
  };

  function convertCurrency() {
      const fromValue = parseFloat(fromAmount.value);
      const fromCurr = fromCurrency.value;
      const toCurr = toCurrency.value;

      currentCurrencyText.innerHTML = fromCurr;
      resultCurrencyText.innerHTML = toCurr;

      if (rates[fromCurr] && rates[fromCurr][toCurr]) {
          const rate = rates[fromCurr][toCurr];
          toAmount.innerHTML = (fromValue * rate).toFixed(2);
      } else {
          toAmount.innerHTML = 'N/A';
      }
  }

  function swapCurrencies() {
      const temp = fromCurrency.value;
      fromCurrency.value = toCurrency.value;
      toCurrency.value = temp;
      convertCurrency();
  }

  fromAmount.addEventListener('input', convertCurrency);
  fromCurrency.addEventListener('change', convertCurrency);
  toCurrency.addEventListener('change', convertCurrency);
  exchangeButton.addEventListener('click', swapCurrencies);

  // Initial conversion on load
  convertCurrency();
});