import { createContext, useCallback, useContext, useState } from "react";

const Context = createContext();

const ListProvider = ({ children }) => {
  const [state, setState] = useState({ tasks: [] });
  const addTask = useCallback((title) => {
    setState((prev) => ({ ...prev, tasks: [...prev.tasks, title] }));
  }, []);

  return (
    <Context.Provider value={{ state, addTask }}>{children}</Context.Provider>
  );
};

export const useToDoList = () => useContext(Context);

export default ListProvider;
