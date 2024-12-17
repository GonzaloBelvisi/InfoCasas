# InfoCasas Task Manager API 

## Descripción
Este proyecto es el **backend API** de una aplicación de gestión de tareas personales desarrollada con **Laravel** (PHP). Proporciona una API RESTful para realizar operaciones **CRUD** sobre las tareas, permitiendo:

- Crear, listar, actualizar y eliminar tareas.
- Filtrar las tareas completadas.
- Buscar tareas por nombre.

Este backend servirá como fuente de datos para el proyecto frontend desarrollado con **React**.

---

## **Requisitos previos**

1. Tener **Docker** y **Docker Compose** instalados.
2. Cliente **Postman** o una herramienta similar para probar la API.

---

## **Configuración del proyecto**

### **1. Clonar el repositorio**
```bash```
git clone https://github.com/GonzaloBelvisi/InfoCasas.git
cd task-manager-api

### Configurar el entorno

DB_CONNECTION=mysql
DB_HOST=db
DB_PORT=3306
DB_DATABASE=task_manager
DB_USERNAME=user
DB_PASSWORD=secret


### Levantar los contenedores con Docker
docker-compose up --build -d

1. Laravel (API backend): Disponible en http://127.0.0.1:8000
2. MySQL (Base de datos): Disponible en db:3306
3. phpMyAdmin: Disponible en http://127.0.0.1:8080


### Instalar dependencias

docker-compose exec app bash
composer install
php artisan key:generate


### Configurar la base de datos

1. Ejecutar las migraciones: php artisan migrate
2. Cargar datos iniciales usando el seeder: php artisan db:seed --class=TaskSeeder


### Iniciar el servidor
php -S 0.0.0.0:8000 -t public (La API estará disponible en http://127.0.0.1:8000.)


## **Uso de la API**
La API está diseñada para realizar operaciones **CRUD** sobre tareas y tiene funcionalidades adicionales como **filtros por completado** y **búsqueda por nombre**.

---

### **Crear una nueva tarea**
- **Método**: POST  
- **URL**: `http://127.0.0.1:8000/api/tasks`  

**Body (JSON):**
```json
{
    "name": "Nueva tarea",
    "completed": false
}
```

**Respuesta:**
```json
{
    "id": 1,
    "name": "Nueva tarea",
    "completed": false,
    "created_at": "2024-12-17T22:00:00",
    "updated_at": "2024-12-17T22:00:00"
}
```

---

### **Listar todas las tareas**
- **Método**: GET  
- **URL**: `http://127.0.0.1:8000/api/tasks`  

**Respuesta:**
```json
[
    {
        "id": 1,
        "name": "Tarea de ejemplo",
        "completed": false,
        "created_at": "2024-12-17T22:00:00",
        "updated_at": "2024-12-17T22:00:00"
    },
    {
        "id": 2,
        "name": "Otra tarea",
        "completed": true,
        "created_at": "2024-12-17T22:10:00",
        "updated_at": "2024-12-17T22:10:00"
    }
]
```

---

### **Filtrar tareas completadas**
- **Método**: GET  
- **URL**: `http://127.0.0.1:8000/api/tasks?completed=true`  

**Descripción**: Devuelve solo las tareas completadas.

**Respuesta:**
```json
[
    {
        "id": 2,
        "name": "Otra tarea",
        "completed": true,
        "created_at": "2024-12-17T22:10:00",
        "updated_at": "2024-12-17T22:10:00"
    }
]
```

---

### **Buscar tareas por nombre**
- **Método**: GET  
- **URL**: `http://127.0.0.1:8000/api/tasks?search=ejemplo`  

**Descripción**: Busca tareas que contengan el nombre especificado.

**Respuesta:**
```json
[
    {
        "id": 1,
        "name": "Tarea de ejemplo",
        "completed": false,
        "created_at": "2024-12-17T22:00:00",
        "updated_at": "2024-12-17T22:00:00"
    }
]
```

---

### **Obtener una tarea específica**
- **Método**: GET  
- **URL**: `http://127.0.0.1:8000/api/tasks/{id}`  

**Respuesta:**
```json
{
    "id": 1,
    "name": "Tarea de ejemplo",
    "completed": false,
    "created_at": "2024-12-17T22:00:00",
    "updated_at": "2024-12-17T22:00:00"
}
```

---

### **Actualizar una tarea**
- **Método**: PUT  
- **URL**: `http://127.0.0.1:8000/api/tasks/{id}`  

**Body (JSON):**
```json
{
    "name": "Tarea actualizada",
    "completed": true
}
```

**Respuesta:**
```json
{
    "id": 1,
    "name": "Tarea actualizada",
    "completed": true,
    "created_at": "2024-12-17T22:00:00",
    "updated_at": "2024-12-17T22:15:00"
}
```

---

### **Eliminar una tarea**
- **Método**: DELETE  
- **URL**: `http://127.0.0.1:8000/api/tasks/{id}`  

**Respuesta:**
```json
{
    "message": "Task deleted successfully"
}
```

---

### **Combinar filtros (completado + búsqueda)**
Puedes combinar los parámetros `completed` y `search` en una misma solicitud:

**URL**:
```
http://127.0.0.1:8000/api/tasks?completed=false&search=tarea
```

**Respuesta:**
```json
[
    {
        "id": 3,
        "name": "Tarea de prueba",
        "completed": false,
        "created_at": "2024-12-17T22:20:00",
        "updated_at": "2024-12-17T22:20:00"
    }
]
```

---

## **Resumen**
Con estos endpoints puedes realizar todas las operaciones necesarias sobre las tareas:

- **Crear** una tarea.
- **Listar** todas las tareas.
- **Filtrar** tareas completadas.
- **Buscar** tareas por nombre.
- **Actualizar** una tarea existente.
- **Eliminar** una tarea por su ID.



## **React**
Para Iniciar React correctamente es necesario iniciarlo con la version React 18:
- npx create-react-app task-manager-frontend --use-npm
- cd task-manager-frontend
- npm install react@18 react-dom@18 --legacy-peer-deps
- npm start

