import Counter from "./components/Counter";
import "./App.css";
import UserList from "./components/UserList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage";
import Test from "./components/Test";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/counter" Component={Counter} />
        <Route path="/users" Component={UserList} />
        <Route path="/test" Component={Test} />
        <Route path="*" Component =  {NoPage}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
