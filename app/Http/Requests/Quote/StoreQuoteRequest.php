<?php

namespace App\Http\Requests\Quote;

use Illuminate\Foundation\Http\FormRequest;

class StoreQuoteRequest extends FormRequest
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

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, mixed>
     */
    public function messages()
    {
        return [
            'fechaActividad.required' => 'La fecha de actividad es requerida',
            'tipoReservacion.required' => 'El tipo de reservación es requerido',
            'nombreTitular.required' => 'El nombre del titular es requerido',
            'adultos.required' => 'El campo de adultos es requerido',
            'actividad.required' => 'La actividad es requerida',
        ];
    }

}
