import { useContext } from 'react';
import { Button, ButtonProps } from '../Button';
import { FormContext } from './FormContext';

export function FormSubmit({ children, ...rest }: ButtonProps) {
  const { isSubmitting } = useContext(FormContext);

  return (
    <Button type="submit" color="primary" isSubmitting={isSubmitting} {...rest}>
      {children}
    </Button>
  );
}
