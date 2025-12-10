<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Certificate extends Model
{
    use \Illuminate\Database\Eloquent\Factories\HasFactory;

    protected $fillable = [
        'name',
        'category',
        'description',
        'date',
        'image',
    ];

    protected $casts = [
        'date' => 'date',
    ];
    //
}
