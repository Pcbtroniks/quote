<script setup>

const props = defineProps({
    quote: Object
})

console.log(props.quote);
</script>

<template>
    <div  class="QuotePDF px-[69px] py-[48px]" spellcheck="false">
        <!-- top -->
        <div class="flex justify-between" spellcheck="false">

            <div>
                <img class="w-[350px]" src="/assets/freetravelers-logo.jpg" alt="Logo Freetravelers">
            </div>

            <div>
                <table class="border-collapse border w-[517px] text-center" style="width: 517px;" border="1">
                    <thead></thead>
                    <tbody>
                        <tr style="height: 30px;">
                            <td style="height: 30px;" class="border">Cúpon de servicio / service coupon</td>
                        </tr>
                        <tr style="height: 40px;">
                            <td style="height: 40px;" class="border">{{ quote.coupon.code }}</td>
                        </tr>
                        <tr style="height: 30px;">
                            <td style="height: 30px;" class="border">Lugar y fecha / Date and place</td>
                        </tr>
                        <tr style="height: 40px;">
                            <td style="height: 40px;" class="border">{{ quote.created_at }}</td>
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
                        <td style="height: 60px; border: 1px solid;" colspan="3">{{ quote.holder_name }}</td>
                        <!-- <td style="height: 60px; border: 1px solid;">&nbsp;</td>
                        <td style="height: 60px; border: 1px solid;">&nbsp;</td> -->
                    </tr>
                    <tr style="height: 26.5px; text-align: center;">
                        <td style="height: 58.5px; border: 1px solid;" rowspan="2">Pasajeros / Passengers</td>
                        <td style="height: 26.5px; border: 1px solid; width: 258.66px; font-size: x-small;">Adultos ( 12 años o mas ) / Adults ( ages 12 and more )</td>
                        <td style="height: 26.5px; border: 1px solid; width: 258.66px; font-size: x-small;">Menores (5 a 11 años)/Minors (ages 5 to 11)</td>
                        <td style="height: 26.5px; border: 1px solid; width: 258.66px; font-size: x-small;">Infantes (0 a 4 años)/Infants (ages 0 to 4)</td>
                    </tr>
                    <tr style="height: 32px; text-align: center;">
                        <td style="height: 32px; border: 1px solid;">{{ quote.adults }}</td>
                        <td style="height: 32px; border: 1px solid;">{{ quote.minors }}</td>
                        <td style="height: 32px; border: 1px solid;">{{ quote.infants }}</td>
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
                        <td style="height: 59px; border: 1px solid; width: 474.98px; max-width: 1px;" colspan="2">{{ quote.activity_date }}</td>
                        <td style="height: 59px; border: 1px solid; width: 301.2px; text-align: left;">Horario /<br>Schedule <span style="padding-left: 24px">{{ quote.quote_type == 'tour' ? quote.listed_activity?.pickup_time : '' }}</span></td>
                    </tr>
                    <tr style="height: 59px; text-align: center;">
                        <td style="height: 59px; border: 1px solid">Lugar de Pick up</td>
                        <td style="height: 59px; border: 1px solid; width: 474.98px; max-width: 1px;" colspan="2">&nbsp;&nbsp;</td>
                        <td style="height: 59px; border: 1px solid; width: 301.2px; text-align: left; font-style: bold;">Cuarto /<br>Room <span style="padding-left: 24px"> </span></td>
                    </tr>
                    <tr style="height: 59px;text-align: center;">
                        <td style="height: 59px; border: 1px solid">Entrada/ Entrance</td>
                        <td style="height: 59px; border: 1px solid; width: 474.98px; max-width: 1px;" colspan="2">{{ quote.quote_type == 'entrada' ? quote.activity.name : '' }}</td>
                        <td style="height: 59px; border: 1px solid">{{ quote.national == 1 ? 'PROMOMEX' : '' }}</td>
                    </tr>
                    <tr style="height: 59px; text-align: center;">
                        <td style="height: 59px; border: 1px solid">Tour</td>
                        <td style="height: 59px; border: 1px solid; max-width: 11.27px;" colspan="2">{{ quote.quote_type == 'tour' ? quote.activity.name : '' }}</td>
                        <td style="height: 59px; border: 1px solid">&nbsp;</td>
                    </tr>
                    <tr style="height: 59px;">
                        <td style="height: 59px; border: 1px solid; text-align: center;">PAQUETE/ PACKAGE</td>
                        <td style="height: 59px; " colspan="3">&nbsp;&nbsp;&nbsp;</td>
                    </tr>
                    <tr style="height: 59px;">
                        <td style="height: 59px;" colspan="4">&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    </tr>
                </tbody>
            </table>
<!-- DivTable.com -->
        <!-- DivTable.com -->
            <div class="self-end flex">
                <p class="font-bold">Clave de confirmacion / <br> Confirmation code</p>
                <div class="w-[576px] h-[59px] border border-black border-t-0"></div>
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
            
        <div class="mt-4 flex">
            
            <div style="margin: 2rem 0">
                <span style="border-bottom: 1px solid #000000; height: 8px; width: 25rem; display: block;"></span>
                <p>Nombre y firma del titular/Main passanger`s singature</p>
            </div>
        
            <div>
                <img src="/assets/Logo.png" alt="Logo Freetraveler">
            </div>

        </div>
    </div>
</template>