<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exploreemotions Proforma Cupon</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap" rel="stylesheet">
    <style>
        html, body {
            font-family: 'Nunito', sans-serif;
        }
    </style>
</head>
<body>
<div style="width: 595px; height: 1000px; position: relative; background: white; border: 1px solid gray; display: flex; justify-content: center; margin: 0 auto">

    <!-- LOGO -->
    <img style="width: 200px; height: 99px; left: 200px; top: 40px; position: absolute" src="{{ asset('assets/exploreemotions-logo.png') }}" />

    {{-- Introducción --}}
    <div style="width: 500px; height: 259px; left: 53px; top: 139px; position: absolute">
      <div style="left: 0px; top: 0px; position: absolute; font-size: 30px; font-weight: bold; color: black;">Confirmación de Reserva</div>
      <div style="left: 0px; top: 60px; position: absolute; font-size: 18px; font-weight: 700; color: gray;">Estimado/a {{ $quote->holder_name ?? 'Holder name' }} favor de presentar esta confimación de reserva al abordar.</div>
    </div>

    <!-- Fondo del contenido -->
    <div style="width: 500px; height: 500px; left: 53px; top: 300px; position: absolute; background-color: #f8fafc">
    <div style="width: 500px; height: 150px; left: 0px; top: 500px; position: absolute; background-color: #a5c296"></div>

    <div style="width: 20; height: 10; left: 35px; top: 20px; position: absolute; background-color: #324160"></div>
    <div style="width: 500px; height: 119px; left: 80px; top: 0px; position: absolute; font-weight: bold; font-size: 24px">Información de la Reserva</div>


    <!-- NÚMERO DE SOLICITUD + FECHA -->
    <div style="width: 500px; height: 180px; left: 0px; top: 50px; position: absolute;">
        <div style="left: 20px; top: 0px; position: absolute; font-size: 19px; font-weight: bold; color: rgb(80, 80, 80);">Número de solicitud:</div>
        <div style="left: 20px; top: 24px; position: absolute; font-size: 20px; font-weight: 700; color: #52763e;">{{ $quote->tmpFolio ?? 'not-available' }}</div>

        <div style="left: 250px; top: 0px; font-size: 19px; font-weight: bold; color: rgb(80, 80, 80); position: absolute">Fecha:</div>
        <div style="left: 250px; top: 33px; font-size: 16px; font-weight: 800; color: black; position: absolute;">{{ $quote->listed_activities[0]->date_string_formatted ?? 'invalid date' }}</div>
    </div>

    <!-- NOMBRE + ACTIVIDAD -->
    <div style="width: 200px; height: 25px; left: 0px; top: 20px; position: absolute">
    <div style="left: 20px; top: 94px; position: absolute; font-size: 19px; font-weight: bold; color: rgb(80, 80, 80);">Nombre:</div>
    <div style="left: 20px; top: 125px; position: absolute; font-size: 18px; font-weight: 900; color: black;">{{ $quote->holder_name ?? 'Holder name' }}</div>
    </div>

    <div style="width: 500px; height: 25px; left: 0px; top: 20px; position: absolute">
    <div style="left: 250px; top: 94px; position: absolute; font-size: 19px; font-weight: bold; color: rgb(80, 80, 80);">TOUR:</div>
    <div style="left: 250px; top: 125px; position: absolute; font-size: 16px; color: black; font-weight: 900;">{{ $quote->listed_activities[0]->activity->name }}</div>

    </div>

    
    <!-- ACTIVIDADES -->
    <div style="width: 500px; height: 120px; left: 0px; top: 240px; position: absolute">
      <div style="left: 20px; top: 0px; position: absolute; font-size: 19px; font-weight: bold; color: rgb(80, 80, 80);">Punto de Encuentro/Hora:</div>
      
      @if ($quote->type == 'entrance')
      <div style="left: 20px; top: 24px; position: absolute; font-size: 16px; color: black; font-weight: 800">
        {{ $quote->listed_activities[0]->activity->name }}
      </div>
      @else
      @foreach ($quote->listed_activities as $index => $activity)
      <div style="left: 20px; top:  {{ (40 + (36 * $loop->index)) }}px; position: absolute; font-size: 16px; color: black; line-height: 15px; font-weight: 800">
          {{ optional($activity->hotel)->name ?? '' }} <br>
          {{ $activity->pickup_time ? substr($activity->pickup_time, 0, 5) : 'n/d' }} h
      </div>
      @endforeach
      @endif
    </div>
    
    <!-- ADULTOS, MENORES, INFANTES -->
    <div style="width: 500px; height: 400px; left: 0px; top: 360px; position: absolute">
        <div style="left: 20px; top: 0px; position: absolute; font-size: 19px; font-weight: bold; color: rgb(80, 80, 80);">Pasajeros:</div>
        <div style="left: 20px; top: 33px; font-size: 16px; color: black; position: absolute; font-weight: 800">
            Adultos: <span>{{ $quote->adults ?? ' ' }}</span> <br>
            Menores: <span>{{ $quote->minors ?? ' ' }}</span> <br>
            Infantes: <span>{{ $quote->infants ?? ' ' }}</span> <br>
        </div>
        <div style="left: 250px; top: 0px; position: absolute; font-size: 19px; font-weight: bold; color: rgb(80, 80, 80);">PAÍS:</div>
    <div style="left: 250px; top: 35px; position: absolute; font-size: 16px; color: black; font-weight: 800">MX</div>
    </div>

    <!-- IMPORTES TOTALES -->
    <div style="width: 250px; height: 159px; left: 120px; top: 430px; position: absolute">
        <div style="left: 20px; top: 70px; font-size: 20px; font-weight: 700; color: black; position: absolute;">Importes totales</div>

        <div style="left: 20px; top: 99px; font-size: 18px; font-weight: 400; color: black; position: absolute;">Precio publico:</div>
        <div style="left: 142px; top: 99px; font-size: 18px; font-weight: 400; color: black; position: absolute;">${{ $quote->public_price ?? 'n/d' }}</div>

        <div style="left: 20px; top: 125px; font-size: 18px; font-weight: 400; color: black; position: absolute;">Precio a pagar:</div>
        <div style="left: 142px; top: 125px; font-size: 18px; font-weight: 400; color: black; position: absolute;">${{ $quote->cost_amount ?? 'n/d' }}</div>

        <div style="left: 20px; top: 155px; font-size: 20px; font-weight: 700; color: black; position: absolute;">
            Comisiones: ${{ isset($quote->public_price, $quote->cost_amount) ? number_format($quote->public_price - $quote->cost_amount, 2) : 'n/d' }}
        </div>
    </div>
</div>
</div>
</body>
</html>
