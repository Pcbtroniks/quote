export const GetCurrencyByCode = async (currency) => {
    return await axios.get(route(`localisation.currencies.api.get`, { currency }));
};

export const CalculateCurrencyConversion = (amount, toCurrencyRate) => {
    amount = Number.parseFloat(amount);
    toCurrencyRate = Number.parseFloat(toCurrencyRate);

    return Number.parseFloat(amount * toCurrencyRate).toFixed(2);
}

export const MultiplyCurrency = (amount, rate) => {
    return amount * rate;
};