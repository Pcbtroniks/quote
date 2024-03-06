<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Cupon Freetravelers</title>

    @vite('resources/js/app.js')
</head>
<body>

    <div class="QuotePDF px-[69px] py-[48px] max-w-[10in] w-[10in]" spellcheck="false" style="width: 10in; margin: 0 auto">
        <!-- top -->
        <div class="flex justify-between" spellcheck="false">
            <div class="w-full flex justify-center" style="display: flex; justify-content: center;">
                <img class="w-[350px] h-[120px]" src="/assets/freetravelers-logo.jpg" alt="Logo Freetravelers">
            </div>

            <div>
                <table class="border-collapse border w-[517px] text-center" style="width: 517px;" border="1">
                    <thead></thead>
                    <tbody>
                        <tr style="height: 30px;">
                            <td style="height: 30px;" class="border">Cúpon de servicio / service coupon</td>
                        </tr>
                        <tr style="height: 40px;">
                            <td style="height: 40px;" class="border">{{ $quote->coupon->code }}</td>
                        </tr>
                        <tr style="height: 30px;">
                            <td style="height: 30px;" class="border">Lugar y fecha / Date and place</td>
                        </tr>
                        <tr style="height: 40px;">
                            <td style="height: 40px;" class="border">{{ $quote->created_at }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Name and Passengers -->
        <div class="flex mt-4">

            <table class="border-collapse border" style="width: 1084px;">
                <tbody>
                    <tr style="height: 60px; text-align: center;">
                        <td style="height: 60px; border: 1px solid; width: 301px;" spellcheck="false">Nombre / Name</td>
                        <td style="height: 60px; border: 1px solid;" colspan="3">{{ $quote->holder_name }}</td>
                    </tr>
                    <tr style="height: 26.5px; text-align: center;">
                        <td style="height: 58.5px; border: 1px solid;" rowspan="2">Pasajeros / Passengers</td>
                        <td style="height: 26.5px; border: 1px solid; width: 258.66px; font-size: x-small;">Adultos ( 12 años o mas ) / Adults ( ages 12 and more )</td>
                        <td style="height: 26.5px; border: 1px solid; width: 258.66px; font-size: x-small;">Menores (5 a 11 años)/Minors (ages 5 to 11)</td>
                        <td style="height: 26.5px; border: 1px solid; width: 258.66px; font-size: x-small;">Infantes (0 a 4 años)/Infants (ages 0 to 4)</td>
                    </tr>
                    <tr style="height: 32px; text-align: center;">
                        <td style="height: 32px; border: 1px solid;">{{ $quote->adults }}</td>
                        <td style="height: 32px; border: 1px solid;">{{ $quote->minors }}</td>
                        <td style="height: 32px; border: 1px solid;">{{ $quote->infants }}</td>
                    </tr>
                </tbody>
            </table>
            <!-- DivTable.com -->

        </div>

        
        <!-- Entrances Tours Packages -->
        <div class="mt-4 flex flex-col">
            <!-- Description of the services -->
            <div>
                <p class="font-bold">Descripción del servicio / Description of the service:</p>
            </div>
            <table style="width: 1077; border: solid 1px;">
                <tbody>
                    <tr style="height: 59px; text-align: center;" spellcheck="false">
                        <td style="height: 59px; border: 1px solid; width: 301px;">Fecha Actividad/ Date of the activity:</td>
                        <td style="height: 59px; border: 1px solid; width: 474.98px; max-width: 1px;" colspan="2">{{ $quote->type == 'tour' ? $quote->listed_activity->date : '' }}</td>
                        <td style="height: 59px; border: 1px solid; width: 301.2px; text-align: left;">Horario /<br>Schedule <span style="padding-left: 24px">{{ $quote->type == 'tour' && $quote->listed_activity->pickup_time != '00:00:00' ? $quote->listed_activity->pickup_time : 'N/D' }}</span></td>
                    </tr>
                    <tr style="height: 59px; text-align: center;">
                        <td style="height: 59px; border: 1px solid">Lugar de Pick up</td>
                        <td style="height: 59px; border: 1px solid; width: 474.98px; max-width: 1px;" colspan="2" >{{$quote->type == 'tour' ? $quote->hotel->name : '' }}</td>
                        <td style="height: 59px; border: 1px solid; width: 301.2px; text-align: left; font-style: bold;">Cuarto /<br>Room <span style="padding-left: 24px"> </span></td>
                    </tr>
                    <tr style="height: 59px;text-align: center;">
                        <td style="height: 59px; border: 1px solid">Entrada/ Entrance</td>
                        <td style="height: 59px; border: 1px solid; width: 474.98px; max-width: 1px;" colspan="2">{{ $quote->type == 'entrance' ? $quote->activity->name : '' }}</td>
                        <td style="height: 59px; border: 1px solid">{{ $quote->national == 1 ? 'PROMOMEX' : '' }}</td>
                    </tr>
                    <tr style="height: 59px; text-align: center;">
                        <td style="height: 59px; border: 1px solid">Tour</td>
                        <td style="height: 59px; border: 1px solid; max-width: 11.27px;" colspan="2">{{ $quote->type == 'tour' ? $quote->activity->name : '' }}</td>
                        <td style="height: 59px; border: 1px solid">&nbsp;</td>
                    </tr>
                    <tr style="height: 59px;">
                        <td style="height: 59px; border: 1px solid; text-align: center;">PAQUETE/ PACKAGE</td>
                        <td style="height: 59px; padding-top: 1rem;" colspan="3">
                            @if ($quote->type == 'paquete' || $quote->type == 'pack')                                
                            @foreach ($quote->listed_activities as $a)    
                                <p style="margin-left: 1rem; text-transform: lowercase;" v-if="quote.type == 'paquete'" v-for="a in quote.listed_activities">
                                    <span class="capitalize font-bold">"{{$a->activity->name}}"</span>
                                    el {{$a->date_string_formatted}}
                                    en <span class="capitalize"> "{{ $a->hotel->name ?? 'N/D' }}" </span>
                                    a las {{$a->pickup_time == '00:00:00' ? 'N/D' : $a->pickup_time}} 
                                </p>
                            @endforeach
                            @endif

                        </td>
                    </tr>
                    <tr style="height: 59px;">
                        @if ($quote->type == 'paquete' || $quote->type == 'pack') 
                        <td v-if="quote.type == 'pack'"><p style="text-align:center;">PAQ#{{ count($quote->listed_activities) }}</p></td>
                        @endif
                        <td style="height: 59px;" colspan="3">&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    </tr>
                </tbody>
            </table>
<!-- DivTable.com -->
        <!-- DivTable.com -->
            <div class="self-end flex">
                <p class="font-bold">Clave de confirmacion / <br> Confirmation code</p>
                <div class="w-[576px] h-[59px] border border-black border-t-0 p-4"> {{ $quote->coupon->confirmation_key }}</div>
            </div>
        </div>

        <!-- Clausula descuentos ncionales -->
        <div class="mt-4 flex flex-col">
            
            <div style="text-align:center; width: 100%;">
                <p style="font-weight: bold; font-size:x-large">Descuento para  mexicanos, presentar INE o pasaporte</p>
            
            </div>

            <div style="width: 100%;">
                <p style="font-weight: bold;">
                    Requisitos para recibir el servicio según sea el caso/ Requirements to recieve the service, as the case may be:
                </p>

                <ol>
                    <li>1.- Verificar que el cupon tenga clave de confirmacion ya que sin ella no se podra brindar el servicio/Verify the confirmation code in the coupon, for in case of not having it the service won't be provided</li>
                </ol>

                <ol>
                    <li>2.- Presentar este cupon impreso y firmado por el titular/ Show this coupon printed and signed by the titular</li>
                </ol>

                <ol>
                    <li>3.- Presentar identificacion oficial con fotografia/ Show official ID with photo</li>
                </ol>

                <ol>
                    <li>4.- Una vez entregado lo anterior debera recibir los brazaletes con los cuales podra disfrutar del parque/ After showing the above you should recieve the bracelets with which you will be able to enter the park</li>
                </ol>

            </div>

        </div>
            
        <!-- Firma y sellos -->
        <div class="mt-4 flex justify-between">
            
            <div style="margin: 2rem 0">
                <span style="border-bottom: 1px solid #000000; height: 8px; width: 25rem; display: block;"></span>
                <p>Nombre y firma del titular/Main passanger`s singature</p>
            </div>
        
            <div>
                <img style="width: 301px; height: 121px;" src="/assets/freetravelers-logo.jpg" alt="Logo Freetraveler">
            </div>
            <div style="width: 7rem;">
                <img style="width: 100%;" src="/assets/sello_vero_45.jpeg" alt="Sello Vero 45">
            </div>

        </div>

        <!-- Politicas de cancelacion -->
        <div class="mt-4 flex flex-col">

            <div>
                <p style="font-weight: bold;">Politicas de Cancelacion/Cancellation policies</p>
            </div>
            
            <div>
                <p style="font-size: small;">
                    Todo cambio o cancelacion de una reservacion de: ENTRADA, TOUR O PAQUETE  que se haya pagado con anticipacion se debera efectuar con 36 horas de anticipacion para proceder a su devolucion, para los casos de NO SHOW existe la posibilidad de reagendar la actividad con al menos 30 horas de anticipacion SIN PENALIDAD, en caso de no existir posibilidad de reagendar se aplica la politica de Certificado de Extension con validez de 1 año a partir de la fecha de la operacion del Tour. Para casos por afectaciones de salud, sera necesario presentar constancia medica que acredite su estado de salud para reagendar el servicio sin penalidad/ Any change or cancellation of a reservation paid in advance for an entrance, tour or package should be done 36 hours before the time on the reservation for a chance to be refunded, in case of not showing for the reservation the chance to reschedule the activity at least 30 hours in advance WITH NO PENALTY, in case of not having a chance to reschedule an extension certificate for one year will be extended for you, starting in the scheluded date for your tour. In case of health restrictions it will be necessary to show medical record to prove your health status to reschedule the servicie WITH NO PENALTY.
                </p>
            </div>
            
            <div class="self-end flex">
                <p class="font-bold">Clave de cancelacion / <br> Cancellation code</p>
                <div class="w-[576px] h-[59px] border border-black border-t-0"></div>
            </div>
        </div>
    </div>
    
</body>
</html>