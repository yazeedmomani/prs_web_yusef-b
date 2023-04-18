import Home from "../views/home";
import Null from "../views/null";
import useWindowDimensions from "../hooks/use-windows-dimension";

export default function App() {
  const { width, height } = useWindowDimensions();
  if (width < 924) return <Null />;

  return <Home />;
}
