# Manejo de distintos precios por divisas

## Descripción
EL camnio de divisas se basa en un modificador del precio base.
Este metodo requiere que el precio base sea en la moneda local MXN siempre.
El modificador se basa en la moneda de la cotización
logrando hacer la conversion de dinamica y precisa.

Para que la tasa de conversion sea precisa se debe tener al menos 4 decimales.

## Modelos

1. Quote 
    1. ``` 
        add currency ( Nomenclatura ej. USD, EUR, etc.)
        add currency_id ( Relacion con la tabla de divisas )
        ```  
2. Currency
    1. ```
        add name ( Nombre de la moneda )
        add symbol ( Simbolo de la moneda ej. $, €, etc.)
        add conversion_rate ( Tasa de cambio )
        ```