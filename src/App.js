import ToDoList from "./components/ToDoList";
import "./App.css";
import ListProvider from "./Context";

function App() {
  return (
    <ListProvider>
      <ToDoList />
    </ListProvider>
  );
}

export default App;
