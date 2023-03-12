import { Footer, NavBar } from "@/components/componentsIndex";
import "@/styles/globals.css";
const App = ({ Component, pageProps }) => (
  <div>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
  </div>
);
export default App;
