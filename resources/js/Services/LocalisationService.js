import { GetCurrencyByCode,
        MultiplyCurrency,
        CalculateCurrencyConversion } from "./Localisation/CurrenciesService";

export default {
    GetCurrencyByCode,
    MultiplyCurrency,
    CalculateCurrencyConversion,
    ApplyConversionRate: (amount, rate) => {
        return MultiplyCurrency(amount, rate).toFixed(2);
    }
}