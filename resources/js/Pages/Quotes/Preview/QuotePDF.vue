<script setup>

document.designMode = 'on';

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
                            <td style="height: 40px;" class="border">&nbsp;</td>
                        </tr>
                        <tr style="height: 30px;">
                            <td style="height: 30px;" class="border">Lugar y fecha / Date and place</td>
                        </tr>
                        <tr style="height: 40px;">
                            <td style="height: 40px;" class="border">&nbsp;</td>
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
                        <td style="height: 60px; border: 1px solid;" colspan="3">&nbsp;</td>
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
                        <td style="height: 32px; border: 1px solid;">&nbsp;</td>
                        <td style="height: 32px; border: 1px solid;">&nbsp;</td>
                        <td style="height: 32px; border: 1px solid;">&nbsp;</td>
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
                        <td style="height: 59px; border: 1px solid; width: 474.98px; max-width: 1px;" colspan="2">&nbsp;</td>
                        <td style="height: 59px; border: 1px solid; width: 301.2px; text-align: left;">Horario /<br>Schedule <span style="padding-left: 24px"> 30 Octubre 2022</span></td>
                    </tr>
                    <tr style="height: 59px; text-align: center;">
                        <td style="height: 59px; border: 1px solid">Lugar de Pick up</td>
                        <td style="height: 59px; border: 1px solid; width: 474.98px; max-width: 1px;" colspan="2">&nbsp;&nbsp;</td>
                        <td style="height: 59px; border: 1px solid; width: 301.2px; text-align: left; font-style: bold;">Cuarto /<br>Room <span style="padding-left: 24px"> Cuarto No. 202</span></td>
                    </tr>
                    <tr style="height: 59px;text-align: center;">
                        <td style="height: 59px; border: 1px solid">Entrada/ Entrance</td>
                        <td style="height: 59px; border: 1px solid; width: 474.98px; max-width: 1px;" colspan="2">&nbsp;&nbsp;</td>
                        <td style="height: 59px; border: 1px solid">&nbsp;</td>
                    </tr>
                    <tr style="height: 59px; text-align: center;">
                        <td style="height: 59px; border: 1px solid">Tour</td>
                        <td style="height: 59px; border: 1px solid; max-width: 11.27px;" colspan="2">&nbsp;&nbsp;</td>
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
            
    </div>
</template>