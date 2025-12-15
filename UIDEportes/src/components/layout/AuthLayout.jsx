import { Box } from "@mui/material";

const AuthLayout = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
      }}
    >
      {/* 🖼️ LADO IZQUIERDO – IMAGEN */}
      <Box
        sx={{
          flex: 1,
          backgroundImage: `
            linear-gradient(
              rgba(0, 0, 0, 0.4),
              rgba(0, 0, 0, 0.4)
            ),
            url("/logo-uide.png")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

          /* Ocultar imagen en móvil */
          display: { xs: "none", md: "block" },
        }}
      />

      {/* 📄 LADO DERECHO – FORMULARIO */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5f5f5", // fondo limpio
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default AuthLayout;
