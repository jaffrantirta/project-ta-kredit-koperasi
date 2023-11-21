<?php

namespace App\Enums;

enum CreditWeightValue: int
{
    case Bad = 1;
    case Poor = 2;
    case Fair = 3;
    case Good = 4;
    case Excellent = 5;

    public static function toString(): String
    {
        switch ((int) self::value) {
            case self::Bad:
                return 'Sangat Kurang';
                break;
            case self::Poor:
                return 'Kurang';
                break;
            case self::Fair:
                return 'Cukup';
                break;
            case self::Good:
                return 'Baik';
                break;
            case self::Excellent:
                return 'Sangat Baik';
                break;
            default:
                return 'Tidak terdefinisi';
        }
    }
}
