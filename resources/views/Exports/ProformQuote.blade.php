<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Freetravelers Proforma Cupon</title>


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
<div style="width: 595px; height: 842px; position: relative; background: white">
  <div style="width: 211px; height: 159px; left: 53px; top: 441px; position: absolute">
    <div style="left: 0px; top: 40px; position: absolute; color: black; font-size: 18px; font-family: Nunito; font-weight: 400; word-wrap: break-word">Precio publico: </div>
    <div style="left: 0px; top: 78px; position: absolute; color: black; font-size: 18px; font-family: Nunito; font-weight: 400; word-wrap: break-word">Precio a pagar: </div>
    <div style="left: 142px; top: 40px; position: absolute; color: black; font-size: 18px; font-family: Nunito; font-weight: 400; word-wrap: break-word">${{ $quote->public_price ?? 'n/d'}}</div>
    <div style="left: 142px; top: 78px; position: absolute; color: black; font-size: 18px; font-family: Nunito; font-weight: 400; word-wrap: break-word">${{ $quote->cost_amount ?? 'n/d'}}</div>
    <div style="left: 0px; top: 0px; position: absolute; color: black; font-size: 20px; font-family: Nunito; font-weight: 700; word-wrap: break-word">Importes totales</div>
    <div style="left: 0px; top: 132px; position: absolute; color: black; font-size: 20px; font-family: Nunito; font-weight: 700; word-wrap: break-word">Comisiones: ${{ ($quote->public_price - $quote->cost_amount) ?? 'n/d'}}</div>
  </div>
  <div style="width: 580px; height: 95px; left: 53px; top: 317px; position: absolute">
    @foreach ($quote->listed_activities as $activity)
      <div style="left: 0px; top: {{ (40 + (25 * $loop->index)) }}px; position: absolute; color: black; font-size: 18px; font-family: Nunito; font-weight: 400">{{ $activity->activity->name }} {{ $activity->hotel->name ?? '' }} {{ ($activity->pickup_time != null && $activity->pickup_time != '00:00:00') ? $activity->pickup_time : '' }}</div>  
    @endforeach
    <div style="left: 0px; top: 0px; position: absolute; color: black; font-size: 20px; font-family: Nunito; font-weight: 700; word-wrap: break-word">Actividades</div>
  </div>
  <div style="width: 351px; height: 25px; left: 53px; top: 263px; position: absolute">
    <div style="width: 351px; height: 25px; left: 0px; top: 0px; position: absolute; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex; flex-direction: row">
      <div style="color: black; font-size: 18px; font-family: Nunito; font-weight: 400;">Adultos: <span>{{ $quote->adults ?? ' ' }}</span> - Menor:  <span>{{ $quote->minors ?? ' '}}</span> - Infante:  <span>{{ $quote->infants ?? ' '}}</span></div>
    </div>
  </div>
  <div style="width: 295px; height: 25px; left: 53px; top: 179px; position: absolute">
    <div style="left: 0px; top: 0px; position: absolute; color: black; font-size: 18px; font-family: Nunito; font-weight: 400; word-wrap: break-word">Fecha: </div>
    <div style="left: 73px; top: 0px; position: absolute; color: black; font-size: 18px; font-family: Nunito; font-weight: 400; word-wrap: break-word">{{ $quote->listed_activities[0]->date_string_formatted ?? 'invalid date' }}</div>
  </div>
  <div style="width: 500px; height: 119px; left: 53px; top: 139px; position: absolute">
    <div style="left: 0px; top: 0px; position: absolute; color: black; font-size: 20px; font-family: Nunito; font-weight: 700; word-wrap: break-word">Número de solicitud: </div>
    <div style="left: 224px; top: 0px; position: absolute; color: #CA8A04; font-size: 20px; font-family: Nunito; font-weight: 700; word-wrap: break-word">{{ $quote->tmpFolio ?? 'not-available'}}</div>
    <div style="left: 0px; top: 94px; position: absolute; color: black; font-size: 18px; font-family: Nunito; font-weight: 400; word-wrap: break-word">Nombre:  </div>
    <div style="left: 89px; top: 94px; position: absolute; color: black; font-size: 18px; font-family: Nunito; font-weight: 400; word-wrap: break-word">{{ $quote->holder_name ?? 'Holder name'}}</div>
  </div>
  <img style="width: 286px; height: 99px; left: 53px; top: 40px; position: absolute" src="{{asset('assets/freetravelers-logo.jpg')}}" />
</div>
</body>
</html>