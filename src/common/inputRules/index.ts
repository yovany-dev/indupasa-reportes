export const emailRules = [
  (value: any): string|boolean => {
    const trimmedValue = (value && typeof value === 'string') ? value.trim() : '';

    if (trimmedValue) {
      return true
    }
    return 'Correo requerido.'
  },
  (value: string): string|boolean => {
    if (/.+@.+\..+/.test(value)) {
      return true
    }
    return 'El correo debe ser válido.'
  },
];
export const passwordRules = [
  (value: any): string|boolean => {
    const trimmedValue = (value && typeof value === 'string') ? value.trim() : '';

    if (trimmedValue) {
      return true
    }
    return 'Contraseña requerido.'
  },
];
