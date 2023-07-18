import Swal from 'sweetalert2';

export const SuccessAlert = (Title = null,Text = null) => {
    Swal.fire({
        icon: 'success',
        title: Title ?? 'Operación exitosa',
        text: Text,
        confirmButtonColor: '#0EA5E9',
        confirmButtonText: 'Entendido'
    });
}

export const ErrorAlert = (Title = null,Text = null) => {
    Swal.fire({
        icon: 'error',
        title: Title ?? 'Error',
        text: Text,
        confirmButtonColor: '#0EA5E9',
        confirmButtonText: 'Entendido'
    });
}

export const ConfirmAlert = (Title = null,Text = null, callback = null) => {
    return Swal.fire({
        icon: 'warning',
        title: Title ?? '¿Estás seguro?',
        text: Text,
        showCancelButton: true,
        confirmButtonColor: '#0EA5E9',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, estoy seguro',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        console.log(result);
        if(callback) callback(result);
    });
}

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
        icon: 'warning',
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