<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AccountResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'currencyId'  => $this->currency_id,
            'name'        => $this->name,
            'amount'      => $this->amount,
            'startAmount' => $this->startAmount,
            'type'        => $this->type
        ];
    }
}
