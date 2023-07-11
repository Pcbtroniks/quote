import Swal from 'sweetalert2';


export const successToast = () => {
    return Swal.mixin({
        toast: true,
        position: 'top-right',
        iconColor: 'white',
        customClass: {
            popup: 'colored-toast'
        },
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true
    })
}

export const BadFormatPickupTimeError = () => {
    Swal.fire({
        icon: 'error',
        title: 'Error al actualizar la hora de pickup',
        text: 'Solo ingrese valores en formato de hora (HH:MM) ej: 12:00 o 6:30',
    })
}

export const FeatureNotAvailable = (Message = null) => {
    Swal.fire({
        icon: 'warning',
        title: 'Funcionalidad no disponible aun',
        text: Message,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Entiendo'
    })
}