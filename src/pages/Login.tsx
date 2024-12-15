import Card from "@mui/joy/Card";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Container from "@mui/joy/Container";
import { Alert, Button, FormControl, FormLabel, Input, Typography } from "@mui/joy";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CardContent, FormHelperText, Grid2 } from "@mui/material";
import { useRecoilState } from "recoil";
import { globalState } from "../state/global/global.atom";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

interface IFormInput {
  username: string;
  password: string;
}

const schema = yup
  .object({
    username: yup.string().nullable().required("Username is required."),
    password: yup.string().nullable().required("Password is required."),
  })
  .required();

export const Login = () => {
  const [global, setGlobal] = useRecoilState(globalState);
  const navigate = useNavigate();
  const { error, loading, loginFetch } = useLogin();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    loginFetch(data.username, data.password);

    // if (global.token) {
    //   navigate("/admin/dashboard");
    // } else {
    //   console.log("Login failed.");

    // }

  };

  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >

      <Grid2
        container
        justifyContent="center"
        alignItems="center"
        xs={12}
        sm={8}
        md={6}
        lg={4}
      >
        <Card
          variant="outlined"
          sx={{
            width: "100%",
            p: 4,
            borderRadius: "lg",
            boxShadow: "sm",
            borderColor: "#e0e0e0",
            bgcolor: "white",
          }}
        >

          <Typography
            level="h4"
            fontWeight="bold"
            textAlign="center"
            mb={1}
            sx={{ color: "#333" }}
          >
            Login
          </Typography>

          <Typography level="body2" textAlign="center" mb={1} sx={{ color: "#777" }}>
            Enter your credentials to access your account.
          </Typography>

          {(error) ? <Alert severity="solid" color="danger" sx={{ mb: 1 }}>{error}</Alert>
            : <></>}

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Username Field */}
            <Controller
              name="username"
              control={control}
              render={({ field, fieldState }) => (
                <FormControl error={!!fieldState.error} sx={{ mb: 3 }}>
                  <FormLabel>Username</FormLabel>
                  <Input
                    {...field}
                    placeholder="Enter your username"
                    sx={{
                      borderColor: fieldState.error ? "#d32f2f" : "#ccc",
                      ":focus-within": { borderColor: "#55b76b" },
                    }}
                  />
                  {fieldState.error && (
                    <FormHelperText error>{fieldState.error.message}</FormHelperText>
                  )}
                </FormControl>
              )}
            />

            {/* Password Field */}
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <FormControl error={!!fieldState.error} sx={{ mb: 3 }}>
                  <FormLabel>Password</FormLabel>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Enter your password"
                    sx={{
                      borderColor: fieldState.error ? "#d32f2f" : "#ccc",
                      ":focus-within": { borderColor: "#55b76b" },
                    }}
                  />
                  {fieldState.error && (
                    <FormHelperText error>{fieldState.error.message}</FormHelperText>
                  )}
                </FormControl>
              )}
            />

            {/* Login Button */}
            <Button
              loading={loading}
              type="submit"
              variant="solid"
              color="success"
              fullWidth
              sx={{
                mt: 2,
                bgcolor: "#55b76b",
                ":hover": { bgcolor: "#48a963" },
              }}
            >
              Login
            </Button>
          </form>
        </Card>
      </Grid2>
    </div>
  );
};
