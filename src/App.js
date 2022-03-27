import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtoolsPanel } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routing/Routing";
import "./styles.css";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
      <ReactQueryDevtoolsPanel initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}
