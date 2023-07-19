<?php

namespace App\Http\Requests\Prices;

use Illuminate\Foundation\Http\FormRequest;

class StoreCostsRequest extends FormRequest
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
            'activity_id' => 'required',
            'team_id' => 'required',
            'entrance' => 'nullable|numeric',
            'tour' => 'nullable|numeric',
            'pack' => 'nullable|numeric',
            'pack_double' => 'nullable|numeric',
            'pack_multiple' => 'nullable|numeric',
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
            'activity_id.required' => 'No ha seleccionado una actividad',
            'team_id.required' => 'La gencia es obligatoria',
            'entrance.numeric' => 'El costo de entrada debe ser un número',
            'tour.numeric' => 'El costo de tour debe ser un número',
            'pack.numeric' => 'El costo de paquete debe ser un número',
            'pack_double.numeric' => 'El costo de paquete doble debe ser un número',
            'pack_multiple.numeric' => 'El costo de paquete multiple debe ser un número',
        ];
    }
}
