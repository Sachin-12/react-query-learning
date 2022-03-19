import { createBrowserHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routing/Routing";
import "./styles.css";

const history = createBrowserHistory();

export default function App() {
  return (
    <BrowserRouter history={history}>
      <Routing />;
    </BrowserRouter>
  );
}
