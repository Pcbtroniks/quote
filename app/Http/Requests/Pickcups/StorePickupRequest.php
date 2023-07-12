<?php

namespace App\Http\Requests\Pickcups;

use Illuminate\Foundation\Http\FormRequest;

class StorePickupRequest extends FormRequest
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
            'pickup_time' => 'required|date_format:H:i',
            'hotel' => 'required|integer',
            'activity' => 'required|integer',
            'zone' => 'required|integer',
        ];
    }

    /**
     * Get the messages that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function messages()
    {
        return [
            'pickup_time.required' => 'La hora del pickup es obligatoria',
            'pickup_time.date_format' => 'El formato del pickup debe ser hh:mm o h:mm',
            'activity.required' => 'The activity is required',
            'activity.integer' => 'No se ha seleccionado una actividad',
            'zone.required' => 'La zona es obligatoria',
            'zone.integer' => 'No se ha seleccionado una zona',
            'hotel.required' => 'El hotel es obligatorio',
            'hotel.integer' => 'No se ha seleccionado un hotel',
        ];
    }
}
