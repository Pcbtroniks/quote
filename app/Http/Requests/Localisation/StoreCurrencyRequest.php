<?php

namespace App\Http\Requests\Localisation;

use Illuminate\Foundation\Http\FormRequest;

class StoreCurrencyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->user() && auth()->user()->is_freetraveler_admin;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'conversion_rate' => 'required|numeric',
            'code' => 'required|string',
            'name' => 'required|string',
            'symbol' => 'required|string',
        ];
    }

    /**
     * Get the validation messages that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function messages()
    {
        return [
            'conversion_rate.required' => 'La tasa de conversión es requerida',
            'conversion_rate.numeric' => 'La tasa de conversión debe ser un número',
            'code.required' => 'El código es requerido',
            'name.required' => 'El nombre es requerido',
            'symbol.required' => 'El símbolo es requerido',
        ];
    }
}
