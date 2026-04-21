import { createRoot } from "react-dom/client";
import "./reset.scss";
import classes from "./styles.module.scss";
import { Hello } from "./components/Hello";
import logoImg from "./assets/logo.png";

const App = () => {
  console.log("API URL actual:", import.meta.env.VITE_API_URL);

  return (
    <main className={classes.mainContainer}>
      <div className={classes.logoWrapper}>
        <img src={logoImg} alt="Logo" />
      </div>
      <Hello />
      <p>
        Estás viendo el entorno de:{" "}
        <strong>{import.meta.env.VITE_API_URL}</strong>
      </p>
    </main>
  );
};

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
