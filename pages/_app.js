import { NavBar } from "@/components/componentsIndex";
import "@/styles/globals.css";
const App = ({ Component, pageProps }) => (
  <div>
    <NavBar />
    <Component {...pageProps} />
  </div>
);
export default App;
