<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;

class TaskController extends Controller
{
    // Obtener todas las tareas
    public function index(Request $request)
{
    // Inicializar query
    $query = Task::query();

    // Filtro: tareas completadas
    if ($request->has('completed')) {
        $query->where('completed', $request->completed);
    }

    // Búsqueda: por nombre
    if ($request->has('search')) {
        $query->where('name', 'like', '%' . $request->search . '%');
    }

    // Obtener las tareas
    $tasks = $query->get();

    return response()->json($tasks, 200);
}


    // Crear una nueva tarea
    public function store(Request $request)
    {
        // Validar los datos de entrada
        $request->validate([
            'name' => 'required|string|max:255',
            'completed' => 'boolean',
        ]);

        // Crear la tarea
        $task = Task::create([
            'name' => $request->name,
            'completed' => $request->completed ?? false,
        ]);

        return response()->json($task, 201);
    }

    // Obtener una tarea específica
    public function show($id)
    {
        $task = Task::findOrFail($id);
        return response()->json($task, 200);
    }

    // Actualizar una tarea existente
    public function update(Request $request, $id)
    {
        $task = Task::findOrFail($id);

        $request->validate([
            'name' => 'sometimes|string|max:255',
            'completed' => 'sometimes|boolean',
        ]);

        $task->update($request->all());

        return response()->json($task, 200);
    }

    // Eliminar una tarea
    public function destroy($id)
    {
        $task = Task::findOrFail($id);
        $task->delete();

        return response()->json(['message' => 'Task deleted successfully'], 200);
    }
}
