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
        .pdf-container {
            width: 595px;
            min-height: 1000px;
            background: white;
            border: 1px solid gray;
            margin: 0 auto;
            padding: 0;
        }
        .pdf-main {
            width: 500px;
            margin: 0 auto;
            padding: 32px;
        }
        .pdf-header {
            margin-bottom: 24px;
        }
        .pdf-title {
            font-size: 30px;
            font-weight: bold;
            color: black;
            margin-bottom: 8px;
        }
        .pdf-greeting {
            font-size: 18px;
            font-weight: 700;
            color: gray;
            margin-bottom: 8px;
        }
        .pdf-message {
            font-size: 18px;
            font-weight: 700;
            color: gray;
            margin-bottom: 16px;
        }
        .pdf-block {
            background: #f8fafc;
            border: 1px solid #cbd5e1;
            border-radius: 8px;
            padding: 24px;
            margin-bottom: 24px;
        }
        .pdf-section-title {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 16px;
        }
        .pdf-section-title-icon {
            width: 30px;
            height: 30px;
            border-radius: 8px;
            background: #2763EC;
            float: left;
            vertical-align: middle;
            align-items: center;
            justify-content: center;
            margin-right: 10px;
            margin-top: 10px;
        }
        .pdf-section-title-text {
            font-size: 24px;
            font-weight: bold;
        }
        .pdf-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 16px;
        }
        .pdf-label {
            font-size: 14px;
            font-weight: bold;
            color: #374151;
        }
        .pdf-value {
            font-size: 18px;
            font-weight: 700;
            color: #2763EC;
        }
        .pdf-float{
            float: left;
            vertical-align: middle;
            margin-right: 30%;
        }
        .pdf-tour {
            font-size: 18px;
            font-weight: 700;
            color: black;
            margin-bottom: 8px;
        }
        .pdf-meeting {
            font-size: 16px;
            font-weight: 700;
            color: black;
            margin-bottom: 8px;
        }
        .pdf-passenger-row {
            display: inline-flex;
            justify-content: space-between;
            margin-top: 40px;
        }
        .pdf-passenger-list {
            display: inline-flex;

        }
        .pdf-country {
            font-size: 16px;
            font-weight: 700;
            color: black;
        }
        .pdf-confirm {
            background: #DCFCE7;
            padding: 24px;
            text-align: center;
            margin-bottom: 16px;
        }
        .pdf-confirm-label {
            font-size: 16px;
            font-weight: 700;
            color: #59CB85;
            margin-bottom: 8px;
        }
        .pdf-confirm-value {
            font-size: 26px;
            font-weight: 700;
            color: #16A34A;
        }
        .pdf-note {
            color: #374151;
            padding-left: 32px;
            margin-top: 8px;
        }
        .pdf-note-list {
            font-size: 12px;
        }

        .page_break { page-break-before: always; }

        .spaceBetween {
            width: 100%;
            height: 100px;
            
        }
    </style>
</head>
<body>
<div class="pdf-container">
    <div class="pdf-main">
        <!-- LOGO (opcional) -->
        <!-- <img src="{{ asset('assets/exploreemotions-logo.png') }}" style="width: 200px; height: 99px; display: block; margin: 0 auto 24px auto;" /> -->

        <div class="pdf-header">
            <div class="pdf-title">Confirmación de Reserva</div>
            <div class="pdf-greeting">Estimado/a {{ $quote->holder_name ?? 'Holder name' }},</div>
            <div class="pdf-message">
                Su reserva ha sido confirmada exitosamente. Nos complace acompañarle en su experiencia en
                @if(count($quote->listed_activities) > 1)
                    @foreach($quote->listed_activities as $i => $activity)
                        {{ $activity->activity->name }}@if($i < count($quote->listed_activities)-1), @endif
                    @endforeach
                @else
                    {{ $quote->listed_activities[0]->activity->name ?? '' }}
                @endif
                garantizamos un servicio de excelencia.
            </div>
        </div>

        <div class="pdf-section-title">
                <div class="pdf-section-title-icon">
                    <img src="{{ asset('assets/icons/calendar.svg') }}" style="width: 8px; height: 8px; margin-top: 2px; margin-left: 3px;" />
                </div>
                <div class="pdf-section-title-text">Información de la Reserva</div>
        </div>
        @foreach($quote->listed_activities as $activity)
        <div class="pdf-block">
            <div class="pdf-row">
                <div class="pdf-float">
                    <div class="pdf-label">CÓDIGO DE RESERVA</div>
                    <div class="pdf-value">{{ $quote->coupon->code ?? 'not-available' }}</div>
                </div>
                <div>
                    <div class="pdf-label">FECHA DE VISITA</div>
                    <div class="pdf-value">{{ substr($activity->date ?? 'invalid date', 0, 10) }}</div>
                </div>
            </div>
            <div class="pdf-tour">
                <span class="pdf-label">TOUR</span><br>
                {{ $activity->activity->name ?? 'N/A' }}
            </div>
            <div class="pdf-meeting">
                <span class="pdf-label">PUNTO DE ENCUENTRO/HORA</span><br>
                {{ optional($activity->hotel)->name ?? 'N/A' }}
                ({{ $activity->pickup_time ? substr($activity->pickup_time, 0, 5) : 'N/D' }} h)
            </div>
            <div class="pdf-row">
            <div  style="display: inline-flex; margin-top: 40px;">
                <div class="pdf-float">
                    <span class="pdf-label">PASAJEROS</span>
                    <span>Adultos: {{ $quote->adults ?? '' }}</span>
                    @if ($quote->minors)
                    <span>Menores: {{ $quote->minors ?? '' }}</span>
                    @endif
                    @if ($quote->infants)
                    <span>Infantes: {{ $quote->infants ?? '' }}</span>
                    @endif
                </div>
            </div>

                <div>
                    <span class="pdf-label">PAÍS</span><br>
                    <span class="pdf-country">MX</span>
                </div>
                                        </div>
        </div>
        <div class="spaceBetween"></div>
        @endforeach
        
        <div class="pdf-confirm">
            <div class="pdf-confirm-label">Número de confirmación del proveedor:</div>
            <div class="pdf-confirm-value">{{ $quote->coupon->confirmation_key ?? '' }}</div>
        </div>
        <div class="pdf-note">
            <ul class="pdf-note-list">
                <li>Presentarse en el punto de reunión 10 min antes del horario señalado.</li>
                <li>Identificación oficial será requerida en taquillas y/o punto de PickUp.</li>
            </ul>
        </div>
    </div>
</div>
</div>
</body>
</html>
