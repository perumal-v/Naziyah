<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'short_description',
        'full_description',
        'images',
        'tags',
    ];

    protected $casts = [
        'images' => 'array',
        'tags' => 'array',
    ];
}
