import { ThemeProvider } from "styled-components";
import { AppRoutes } from "./routes";

import Global from "./styles/global";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
