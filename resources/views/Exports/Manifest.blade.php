<!-- CSS Code: Place this code in the document's head (between the 'head' tags) -->
<style>
    table.GeneratedTable {
      width: 100%;
      background-color: #ffffff;
      border-collapse: collapse;
      border-width: 2px;
      border-color: #000000;
      border-style: solid;
      color: #000000;
    }
    
    table.GeneratedTable td, table.GeneratedTable th {
      border-width: 2px;
      border-color: #000000;
      border-style: solid;
      padding: 3px;
    }
    
    table.GeneratedTable thead {
      background-color: #FFFF00;
    }
    </style>
    
    <!-- HTML Code: Place this code in the document's body (between the 'body' tags) where the table should appear -->
    <table class="GeneratedTable">
      <thead>
        <tr>
          <th>SERVICIO</th>
          <th>FECHA</th>
          <th>OBSERVACIONES</th>
          <th>CUPON</th>
          <th>VENDEDOR</th>
          <th>NOMBRE VISITANTE</th>
          <th>PICK-UP</th>
          <th># HAB</th>
          <th># PAX</th>
          <th>AGRUPADOR</th>
          <th>IDIOMA</th>
          <th>DROP-OFF</th>
        </tr>
      </thead>
      <tbody>
        @foreach ($manifest->coupons as $coupon)            
        <tr>
            @if ($coupon->quote->type == 'paquete')
                <td>PAQ#{{$coupon->quote->listed_activities->count()}}
                    {{ $coupon->quote->listed_activities->pluck('activity.name')->join(' + ') }}
                </td>
            @else
                <td>{{ $coupon->quote->listed_activities[0]->activity->name }}</td>
            @endif
            <td>{{ $coupon->quote->listed_activities[0]->manifestDateString }}</td>
            <td>{{ $coupon->quote->observations }}</td>
            <td>{{ $coupon->code }}</td>
            <td>{{ $coupon->quote->user->name }}</td>
            <td>{{ $coupon->quote->holder_name }}</td>
            <td>{{ $coupon->quote->listed_activities[0]->hotel->name ??  'N/A'}}</td>
            <td>&nbsp;</td>
            <td>{{ $coupon->quote->adults . '.' . $coupon->quote->minors . '.' . $coupon->quote->infants }}</td>
            <td>&nbsp;</td>
            <td>Español</td>
            <td>{{ $coupon->quote->listed_activities[0]->hotel->name ??  'N/A'}}</td>
        </tr>
        @endforeach
      </tbody>
    </table>
    <!-- Codes by Quackit.com -->
    
    