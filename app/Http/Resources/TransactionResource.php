<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TransactionResource extends JsonResource
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
            'id'         => $this->id,
            'categoryId' => $this->category_id,
            'accountId'  => $this->account_id,
            'amount'     => $this->amount,
            'type'       => $this->type,
            'comment'    => $this->comment,
            'createdAt'  => $this->created_at,
            'date'       => $this->date,
        ];
    }
}
