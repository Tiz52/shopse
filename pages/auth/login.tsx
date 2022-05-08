import {AuthLayout} from "../../components/layout";
import {LoginSection} from "../../components/sections";

const LoginPage = () => {
  return (
    <AuthLayout title="Ingresar" pageDescription="Página de login">
      <LoginSection />
    </AuthLayout>
  );
};
export default LoginPage;
