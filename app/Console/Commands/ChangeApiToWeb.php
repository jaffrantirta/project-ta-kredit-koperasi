<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class ChangeApiToWeb extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'persiapan';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'change api role into web role';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        DB::update('update roles set guard_name = "web"');
        DB::update('update permissions set guard_name = "web"');
        $this->info("Persiapan selesai.");
        $this->info("Made with love by ANAK AGUNG ISTRI DINA PRABAWATI");
    }
}
