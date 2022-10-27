<script setup>

const props = defineProps({
    quote: Object
})
</script>

<template>
    <div  class="QuotePDF px-[69px] py-[48px]">
        <!-- top -->
        <div class="flex justify-between">

            <div>
                <img class="w-[350px]" src="/assets/freetravelers-logo.jpg" alt="Logo Freetravelers">
            </div>

            <div>
                <table class="border-collapse border w-[517px]" style="width: 517px;" border="1">
                    <thead></thead>
                    <tbody>
                        <tr style="height: 30px;">
                            <td style="height: 30px;" class="border">Cupon de sevicio / srevice coupon</td>
                        </tr>
                        <tr style="height: 40px;">
                            <td style="height: 40px;" class="border">{{ quote.id }}</td>
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

            <!-- DivTable.com -->
            
    </div>
</template>