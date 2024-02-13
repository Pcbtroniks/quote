# Cotizaciones

## Descripción



## Temporadas Alta y Baja
Los precios de los precios varian segun la temporada del año.

### Ajuste de temporadas (08.02.2024)
resources\js\Services\Providers.js

```js
// Date and seasons

export const getSeason = (Date) => {
    return isDateInRange('2024-04-03', '2024-04-16', Date) 
        || isDateInRange('2024-07-01', '2024-08-15', Date)
        || isDateInRange('2024-12-26', '2025-12-31', Date) 
        ? 'high' 
        : 'low';
}
```

## Filtros