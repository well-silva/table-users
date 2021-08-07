import { Header } from "./components/Header";
import { UsersTable } from "./components/UsersTable";
import { GlobalStyle } from "./styles/global";

export function App() {


  return (
    <div className="App">
      <Header />

      <UsersTable/>

      <GlobalStyle />
    </div>
  );
}