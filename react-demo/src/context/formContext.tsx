import React, { useState } from 'react';

// Define the type of the context object
type FormContextType = {
  name: string;
  number: number | null;
};

// Using Context API to manage application state
export const FormContext = React.createContext<FormContextType>({
  name: "N/A",
  number: null
});

interface PropsState {
    children: any
}

const FormProvider: React.FC<PropsState> = ({ children }) => {
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<number | null>(null);

  return (
    <FormContext.Provider value={{ name, number }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;