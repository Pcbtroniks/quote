<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Freetravelers Cotizacion</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap" rel="stylesheet">
    
    <style>
        /* general */
        html, body {
            font-family: 'Nunito', sans-serif;
        }
        .pdf-body {
            width: 612px;
            height: 792px;
        }
        .float {
            float: left;
            width: 50%;
        }
        .clear-fix::after {
            content: "";
            display: table;
            clear: both;
        }

        /* top */
        .logo {
            width: 274px;
            height: 110px;
        }
        .logo img {
            width: 100%;
        }

        /* table  */
        table {
			border:1px solid #b3adad;
			border-collapse:collapse;
			padding:1px;
		}
		table td {
			border:1px solid #b3adad;
			text-align:center;
			padding:1px;
			color: #313030;
		}
        /* top right */
        table.table-top-right {
            width: 280px;
            height: 100px;
		}
        /* pax */
        table.table-pax {
            height: 120px;
        }
    </style>
</head>
<body>
    <div class="pdf-body">

        <div class="header" style="height: 140px;">
            <div class="logo float" style="width: 60%; display: inline-block">
                <img src="{{asset('/assets/freetravelers-logo.jpg')}}" alt="">
            </div>
            <div style="width: 30%; display: inline-block; margin-left: 32px">
                <table class="table-top-right">
                    <tbody>
                        <tr>
                            <td>Cúpon de servicio / service coupon</td>
                        </tr>
                        <tr>
                            <td>{{ $quote->coupon->code ?? 'n/d' }}</td>
                        </tr>
                        <tr>
                            <td>Lugar y fecha / Date and place</td>
                        </tr>
                        <tr>
                            <td>{{ $quote->created_at ?? '30/07/1999' }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="pax" style="margin-top: 10px; width: 680px">
            <div style="width: 100%; height: 120px">
                <table class="table-pax" style="width: 100%; height: 100%">
                    <tbody>
                        <tr style="height: 54px">
                            <td style="width: 30%; height: 54px;">Nombre / Name</td>
                            <td style="width: 70%; height: 54px;">{{ $quote->holder_name }}</td>
                        </tr>
                        <tr style="height: 54px">
                            <td style="width: 30%; height: 54px;">Pasajeros / Passengers</td>
                            <td style="width: 70%; height: 54px; padding: 0px">
                                <table style="height: 54px; width: 100%; padding: 0px">
                                    <tbody>
                                        <tr>
                                            <td style="font-size: 10px;">Adultos ( 12 años o mas ) / Adults ( ages 12 and more )</td>
                                            <td style="font-size: 10px;">Menores (5 a 11 años)/Minors (ages 5 to 11)</td>
                                            <td style="font-size: 10px;">Infantes (0 a 4 años)/Infants (ages 0 to 4)</td>
                                        </tr>
                                        <tr>
                                            <td>{{ $quote->adults }}</td>
                                            <td>{{ $quote->minors }}</td>
                                            <td>{{ $quote->infants }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
        </div>
        <div class="description" style="margin-top: 10px; width: 680px">
            <div style="margin-bottom: 1px">
                <h3 style="margin-bottom: 1px">Descripción del servicio / Description of the service:</h3>
            </div>
            <div>
                <table class="table-descripyion" style="width: 100%;">
                    <tbody>
                        <tr>
                            <td style="width: 33%; line-height: 15px">Fecha Actividad/ Date of the activity:</td>
                            <td style="width: 33%;">&nbsp;</td>
                            <td style="width: 33%; text-align:left; line-height: 15px">Horario /<br> Schedule </td>
                        </tr>
                        <tr style="height: 46px;">
                            <td style="line-height: 15px; height: 46px;">Lugar de Pick up</td>
                            <td style="line-height: 15px">&nbsp;</td>
                            <td style="text-align:left; line-height: 15px">Cuarto /<br> Room</td>
                        </tr>
                        <tr style="height: 46px;">
                            <td style="height: 46px;">Entrada / Entrance</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr style="height: 46px;">
                            <td style="height: 46px;">Tour</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr >
                            <td>PAQUETE / PACKAGE
                                @if (count($quote->listed_activities) > 1)
                                <br>
                                PAQ#{{ count($quote->listed_activities) }}
                                @endif
                            </td>
                            <td colspan="2" style="font-weight: bold; font-size:12px; padding: 1px">"Tour Xcaret Basico" el lun. 18 de septiembre 2023 en "Adhara Hacienda Cancun"A a las 06:40 <br> "Tour Xcaret Basico" el lun. 18 de septiembre 2023 en "Adhara Hacienda Cancun"A a las 06:40 <br> "Tour Xcaret Basico" el lun. 18 de septiembre 2023 en "Adhara Hacienda Cancun"A a las 06:40</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ffffff; border-right: 1px solid #b3adad; font-weight: bold; line-height: 15px; text-align: right; font-size: 14px;">
                            Clave de confirmacion / <br> Confirmation code
                            </td>
                            <td colspan="2" style="text-align: left; padding-left: 12px">
                                @if ($quote->coupon->code ?? false)
                                    {{ $quote->coupon->code ?? '' }}
                                @endif
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="conditions" style="width: 680px; font-size: 14px;">
            <div>
                @if (true || $quote->national)
                    <h3 style="font-weight: bold; text-align: center;">Descuento para mexicanos, presentar INE o pasaporte</h3>
                @endif
                <p style="font-weight: bold;">Requisitos para recibir el servicio según sea el caso / Requirements to recieve the service, as the case may be:</p>
                <ul style="list-style: none; padding: 0px">
                    <li>1.- Verificar que el cupon tenga clave de confirmacion ya que sin ella no se podra brindar el servicio/Verify the confirmation code in the</li>
                </ul>
            </div>
        </div>
    </div>
    
</body>
</html>