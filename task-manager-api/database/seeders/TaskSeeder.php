<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Task;

class TaskSeeder extends Seeder
{
    public function run()
    {
        Task::create(['name' => 'Tarea 1', 'completed' => false]);
        Task::create(['name' => 'Tarea 2', 'completed' => true]);
        Task::create(['name' => 'Tarea de prueba', 'completed' => false]);
    }
}
