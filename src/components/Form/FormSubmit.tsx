import { Button, ButtonProps } from '@/components/Button';

export function FormSubmit({ children, ...rest }: ButtonProps) {
  return (
    <Button type="submit" color="primary" {...rest}>
      {children}
    </Button>
  );
}
