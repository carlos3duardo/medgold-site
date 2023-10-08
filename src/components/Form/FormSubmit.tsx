'use client';
import { useFormContext } from 'react-hook-form';
import { Button, ButtonProps } from '../Button';
import { useEffect, useState } from 'react';

export function FormSubmit({ children, ...rest }: ButtonProps) {
  const [success, setSuccess] = useState(false);

  const { formState } = useFormContext();
  const { isSubmitting, isSubmitted, isSubmitSuccessful } = formState;

  useEffect(() => {
    if (isSubmitted && isSubmitSuccessful) {
      setSuccess(true);

      setTimeout(() => setSuccess(false), 3000);
    }
  }, [isSubmitSuccessful, isSubmitted]);

  return (
    <Button
      type="submit"
      color="primary"
      isSubmitting={isSubmitting}
      success={success}
      {...rest}
    >
      {children}
    </Button>
  );
}
