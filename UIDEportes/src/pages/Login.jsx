import { Box, Typography, Paper } from "@mui/material";
import AuthLayout from "../components/layout/AuthLayout";
import UIButton from "../components/ui/UIButton";
import UIInput from "../components/ui/UIInput";
import UIDivider from "../components/ui/UIDivider";

const Login = () => {
  return (
    <AuthLayout>
      <Paper
        elevation={8}
        sx={{
          width: 380,
          p: 4,
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" textAlign="center" mb={1}>
          ¡Bienvenido a UIDEportes!
        </Typography>

        <Typography
          variant="body2"
          textAlign="center"
          color="text.secondary"
          mb={3}
        >
          Inicia sesión para continuar
        </Typography>

        <UIButton>
          Iniciar con UIDE
        </UIButton>

        <UIDivider text="o inicia con" />

        <UIInput label="usuario@uide.edu.ec" />
        <UIInput label="Contraseña" type="password" />

        <UIButton color="secondary" sx={{ mt: 2 }}>
          Iniciar sesión
        </UIButton>
      </Paper>
    </AuthLayout>
  );
};

export default Login;
