import {AuthLayout} from "../../components/layout";
import {LoginSection, RegisterSection} from "../../components/sections";

const RegisterPage = () => {
  return (
    <AuthLayout title="Registrar" pageDescription="Página de registro">
      <RegisterSection />
    </AuthLayout>
  );
};
export default RegisterPage;
