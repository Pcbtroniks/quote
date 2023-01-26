<?php

namespace App\Http\Requests\Cost;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CaculateCostRequest extends FormRequest
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
            'activity' => ['required','integer'],
            'adults' => ['required','integer'],
            'minors' => ['required','integer'],
            'season' => ['required','string'],
            'zone' => ['required','integer', Rule::in($this->availableZones())],
            'type' => ['required','string', Rule::in($this->availableTypes())],
        ];
    }

    public function availableZones()
    {
        return [1,2,3,4,5];
    }

    public function availableTypes()
    {
        return ['entrance','tour','pack_double','pack_multiple'];
    }

    public function isValidZone()
    {
        return $this->type == 'entrance' 
        ? $this->type == 'entrance' && in_array($this->zone, [4,5])
        : $this->type == 'tour' && in_array($this->zone, [1,2,3]);
    }

    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            if (!$this->isValidZone()) {
                $validator->errors()->add('zone', 'The selected zone is invalid for the Activity Type.');
            }
        });
    }
}
