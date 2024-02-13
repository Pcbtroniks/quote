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

### Filtro por fecha
El filtro por fecha permite seleccionar las cotizaciones que se encuentran en un rango de fechas.
* Fecha de inicio `from_date`
* Fecha de fin `to_date`
`quotes?from_date=01-02-2024&to_date=13-02-2024`    

Ambas fechas pueden ser usadas en conjunto o por separado.
**from_date**
Fecha de inicio del rango de fechas.
**to_date**
Fecha de fin del rango de fechas.

Si se usa solo `from_date` se obtendran todas las cotizaciones a *desde de esa fecha* a la fecha actual.
Si se usa solo `to_date` se obtendran todas las cotizaciones *hasta esa fecha* a partir de la fecha actual.
