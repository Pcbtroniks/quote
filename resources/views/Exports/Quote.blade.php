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
            width: 650px;
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
            height: 80px;
		}
        /* pax */
        table.table-pax {
            height: 120px;
        }
    </style>
</head>
<body>
    <div class="pdf-body">

        <div class="header" style="height: 100px;">
            <div class="logo float" style="width: 53%; display: flex; margin-left: 44px;">
            <div style="width: 300px; height: 90px; position: relative;">
                <img style="position: relative; top: 50%; left: 50%; transform: translate(-50%,-50%); height: auto; width: 100%;" src="{{$quote->logo}}" alt="">
            </div>
            </div>
            <div style="width: 30%; display: inline-block; margin-left: 32px">
                <table class="table-top-right">
                    <tbody style="font-size: 14px; line-height: 12px;">
                        <tr>
                            <td style="height: 20px; font-size: 12px;">Cúpon de servicio / service coupon</td>
                        </tr>
                        <tr>
                            <td style="height: 20px; ">{{ $quote->coupon->code ?? 'n/d' }}</td>
                        </tr>
                        <tr>
                            <td style="height: 20px; font-size: 12px;">Lugar y fecha / Date and place</td>
                        </tr>
                        <tr>
                            <td style="height: 20px;">{{ $quote->created_at ?? '' }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="pax" style="margin-top: 10px; width: 702px">
            <div style="width: 100%; height: 100px">
                <table class="table-pax" style="width: 100%;">
                    <tbody style="font-size: 14px; line-height: 12px;">
                        <tr style="height: 36px; text-align: center; vertical-align: middle;">
                            <td style="width: 30%; height: 36px;">Nombre / Name</td>
                            <td style="width: 70%; height: 36px;">{{ $quote->holder_name }}</td>
                        </tr>
                        <tr style="height: 40px">
                            <td style="width: 30%; height: 40px;">Pasajeros / Passengers</td>
                            <td style="width: 70%; height: 40px; padding: 0px">
                                <table style="height: 40px; width: 100%; padding: 0px">
                                    <tbody>
                                        <tr>
                                            <td style="font-size: 10px; line-height: 7px;">Adultos ( 12 años o mas ) / Adults ( ages 12 and more )</td>
                                            <td style="font-size: 10px; line-height: 7px;">Menores (5 a 11 años)/Minors (ages 5 to 11)</td>
                                            <td style="font-size: 10px; line-height: 7px;">Infantes (0 a 4 años)/Infants (ages 0 to 4)</td>
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
        <div class="description" style="width: 702px">
            <div style="margin-bottom: 1px">
                <h3 style="margin-bottom: 1px; margin-top: 0px; font-size: 14px">Descripción del servicio / Description of the service:</h3>
            </div>
            <div>
                <table class="table-descripyion" style="width: 100%;">
                    <tbody style="font-size: 12px;">
                        <tr>
                            <td style="width: 30%; line-height: 12px">
                                Fecha Actividad/ Date of the activity:
                            </td>
                            <td style="width: 35%;">
                            @if ($quote->type == 'entrance')
                                {{ $quote->listed_activities[0]->date->format('d/m/Y') ?? '' }}
                            @elseif ($quote->type == 'tour')
                                {{ $quote->listed_activities[0]->date->format('d/m/Y') ?? '' }}
                            @endif
                            </td>
                            <td style="width: 35%; text-align:left; line-height: 12px; vertical-align: middle;">
                                Horario /<br> Schedule
                                @if ($quote->type == 'tour')
                                    &nbsp;&nbsp;
                                    {{ substr($quote->listed_activities[0]->pickup_time, 0, 5) }}
                                @endif
                            </td>
                        </tr>
                        <tr style="height: 36px;">
                            <td style="line-height: 12px; height: 36px;">Lugar de Pick up</td>
                            <td style="line-height: 12px">
                            @if ($quote->type == 'tour')
                                    &nbsp;&nbsp;
                                    {{ $quote->listed_activities[0]->hotel->name }}
                            @endif
                            </td>
                            <td style="text-align:left; line-height: 12px">Cuarto /<br> Room</td>
                        </tr>
                        <tr style="height: 36px;">
                            <td style="height: 36px;">Entrada / Entrance</td>
                            <td>@if ($quote->type == 'entrance')
                                {{ $quote->listed_activities[0]->activity->name }}
                            @endif</td>
                            <td>
                            @if ($quote->national)
                                PROMOMEX
                            @else
                                &nbsp;
                            @endif
                            </td>
                        </tr>
                        <tr style="height: 36px;">
                            <td style="height: 36px;">Tour</td>
                            <td>
                            @if ($quote->type == 'tour')
                                {{ $quote->listed_activities[0]->activity->name }}
                            @endif
                            </td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr style="height: 36px;">
                            <td style="padding: 0px; line-height: 12px; height: 36px;">PAQUETE / PACKAGE
                                @if ($quote->type == 'pack' && count($quote->listed_activities) > 1)
                                <br>
                                PAQ#{{ count($quote->listed_activities) }}
                                @endif
                            </td>
                            <td colspan="2" style="font-weight: bold; font-size:11px; padding: 0px; line-height: 12px">
                            @if ($quote->type == 'pack' && count($quote->listed_activities))                                 
                            @foreach ($quote->listed_activities as $activity)
                               {{ $activity->activity->name }}, <span style="font-weight: normal;"> {{ $activity->date_string_formatted . ', ' .  $activity->hotel->name . ' ' . (substr($activity->pickup_time, 0, 5) ?? 'n/d') . ' h' }}</span>
                               <br>
                            @endforeach
                            @endif
                            </td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ffffff; border-right: 1px solid #b3adad; font-weight: bold; line-height: 12px; text-align: right; font-size: 14px;">
                            Clave de confirmacion / <br> Confirmation code
                            </td>
                            <td colspan="2" style="text-align: left; padding-left: 12px">
                                @if ($quote->coupon->confirmation_key)
                                    {{ $quote->coupon->confirmation_key ?? '' }}
                                @endif
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="conditions" style="width: 702px; font-size: 12px;">
            <div>
                @if (false || $quote->national)
                    <h3 style="font-weight: bold; text-align: center; margin-bottom: 0px ; margin-top: 0px; font-size: 14px">Descuento para mexicanos, presentar INE o pasaporte</h3>
                @endif
                <div style="line-height: 12px">
                    <p style="font-weight: bold; line-height: 12px; margin-top: 1px;  margin-bottom: 1px">Requisitos para recibir el servicio según sea el caso / Requirements to recieve the service, as the case may be:</p>
                    <ul style="list-style: none; padding: 0px; line-height: 12px; margin-top: 1px; margin-bottom: 1px;">
                        <li>1.- Verificar que el cupon tenga clave de confirmacion ya que sin ella no se podra brindar el servicio/Verify the confirmation code in the</li>
                        <li>2.- Presentar este cupon impreso y firmado por el titular/ Show this coupon printed and signed by the titular</li>
                        <li>3.- Presentar identificacion oficial con fotografia/ Show official ID with photo</li>
                        <li>4.- Una vez entregado lo anterior debera recibir los brazaletes con los cuales podra disfrutar del parque/ After showing the above you should recieve the bracelets with which you will be able to enter the park</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="sign clear-fix" style="width: 702px; font-size: 12px; height: 80px;">
                <div class="float" style="border-top: 1px solid #5c5c5c; width: 50%; margin-top: 54px;">
                    Nombre y firma del titular / Main passanger`s singature
                </div>
                <div class="float" style="width: 25%; text-align: center; margin-right: 20px;">
                    <img style="width: 220PX;" src="{{ asset('/assets/exploreemotions-logo.png') }}" alt="Coupon logo">
                </div>
                <div class="float" style="width: 25%; text-align: end; margin-top: 30px;">
                    <img style="width: 95px;" src="{{ asset('/assets/sello_vero_12.jpeg') }}" alt="Logo vero">
                </div>
        </div>

        <div class="policies" style="width: 702px; font-size: 12px;margin-top: 40px">
            <p style="line-height: 12px; margin-bottom: 0px;">
                <span style="font-weight: bold;">Politicas de Cancelacion/Cancellation policies</span> <br>
                Todo cambio o cancelacion de una reservacion de: ENTRADA, TOUR O PAQUETE que se haya pagado con anticipacion se debera efectuar con 36 horas de anticipacion para proceder a su devolucion, para los casos de NO SHOW existe la posibilidad de reagendar la actividad con al menos 30 horas de anticipacion SIN PENALIDAD, en caso de no existir posibilidad de reagendar se aplica la politica de Certificado de Extension con validez de 1 año a partir de la fecha de la operacion del Tour. Para casos por afectaciones de salud, sera necesario presentar constancia medica que acredite su estado de salud para reagendar el servicio sin penalidad/ Any change or cancellation of a reservation paid in advance for an entrance, tour or package should be done 36 hours before the time on the reservation for a chance to be refunded, in case of not showing for the reservation the chance to reschedule the activity at least 30 hours in advance WITH NO PENALTY, in case of not having a chance to reschedule an extension certificate for one year will be extended for you, starting in the scheluded date for your tour. In case of health restrictions it will be necessary to show medical record to prove your health status to reschedule the servicie WITH NO PENALTY.
            </p>
            <div style="margin-top: 10px; font-size: 14px; line-height: 14px; text-align: right; vertical-align: middle;">
                <p style="font-weight: bold; display: inline-block; margin-bottom: 0px;">
                Clave de cancelacion / <br> Cancellation code
                </p>
                <span class="" style="margin-bottom: 2px; border-bottom: 1px solid #b3adad; border-right: 1px solid #b3adad; border-left: 1px solid #b3adad; border-top: 1px solid #b3adad; font-weight: bold; line-height: 14px; font-size: 14px; text-align: right; width: 390px; height: 26px; display: inline-block">

                </span>
            </div>
        </div>
    </div>
    
</body>
</html>