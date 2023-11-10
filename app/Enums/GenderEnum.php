<?php

namespace App\Enums;

enum GenderEnum: string
{
    case male = 'male';
    case female = 'female';

    public static function toString($value): String
    {
        switch ($value) {
            case 'male':
                return 'Laki - Laki';
                break;
            case 'female':
                return 'Perempuan';
                break;
            default:
                return 'Tidak tersedia';
        }
    }
}