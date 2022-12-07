<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreQuoteReuest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'fechaActividad' => ['required', 'date'],
            'precioPublico' => ['required'],
            'tipoReservacion' => ['required'],
            'nacionales' => ['required'],
            'nombreTitular' => ['required'],
            'importeVenta' => ['required'],
            'adultos' => ['required'],
            'menores' => ['required'],
            'infantes' => ['required'],
            'actividad' => ['required'],
            'season' => ['required']
        ];
    }
}
