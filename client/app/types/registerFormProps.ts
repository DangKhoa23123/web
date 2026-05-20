export interface RegisterFormProps {
    formData: {
      name: string;
      email: string;
      password: string;
    };
  
    handleChange: (
      e: React.ChangeEvent<HTMLInputElement>
    ) => void;
  
    handleSubmit: (
      e: React.FormEvent
    ) => void;
  }