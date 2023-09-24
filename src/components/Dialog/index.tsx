import Swal from 'sweetalert2';

export const Dialog = Swal.mixin({
  buttonsStyling: false,
  customClass: {
    confirmButton:
      'px-4 mx-1 py-2 rounded text-white text-lg font-semibold bg-primary-600 hover:bg-primary-800 transition',
    cancelButton:
      'px-4 mx-1 py-2 rounded border border-red-600 text-red-600 text-lg font-semibold hover:bg-red-100 transition',
  },
});
