<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;

class CreateSuperAdmin extends Command
{
    protected $signature = 'buat:super-admin';

    protected $description = 'Membuat super admin';

    public function handle()
    {
        $user = User::create([
            'name' => 'Super Admin',
            'email' => 'super@admin',
            'password' => \Hash::make('password')
        ]);

        $user->assignRole('super-admin');

        $this->info("Super admin sudah dibuat.");
        $this->info("Made with love by ANAK AGUNG ISTRI DINA PRABAWATI");
    }
}
