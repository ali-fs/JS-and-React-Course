import CustomRouter from "./Router/Router";
import LanguageProvider from "./store/LanguageContext/LanguageProvider";
import AuthProvider from "./store/UserContext/AuthProvider";

const App = () => {
  return (
    <LanguageProvider>
      <AuthProvider>
        <CustomRouter />
      </AuthProvider>
    </LanguageProvider>
  );
};

export default App;
