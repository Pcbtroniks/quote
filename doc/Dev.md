# For Development

## Sobre los modelos
Creacion estandar de un modelo en el proyecto

1. Usar espacios de nombre de acuerdo al modulo
    1. Ejemplo: `App\Models\Reservations\Reservation`
    2. Usar el nombre del modelo en singular Ejemplo: `Reservation`
3. Definir las relaciones con otros modelos (Opcional)
4. Crear los repositorios de acceso a datos
    1. Ejemplo: `App\Repositories\Reservations\GetReservation`
    2. Ejemplo: `App\Repositories\Reservations\PostReservation`
5. Crear los controladores
    1. Usar espacios de nombre adecuados, ejemplo: `App\Http\Controllers\Reservations\ReservationController`
    3. Definir los métodos de acceso a datos, ejemplo: `index`, `show`, `store`, `update`, `destroy`
6. Definir las rutas de acceso al controlador
7. Crear las vistas tanto de interfaces como de presentador de información
    1. Ejemplo: `resources\views\reservations\index.blade.php`
    2. Ejemplo: ` { "id": 1, "name": "Reservación 1", "date": "2024-04-03", "season": "high" }`
8. Crear los servicios de acceso a datos (Escalable)
    1. Ejemplo: `App\Services\Reservations\GetReservations`