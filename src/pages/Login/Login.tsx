import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import Form from "../../components/Form/Form.tsx";

const Login = () => {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

    return (
        <Box>
            <Box width="100%" sx={{ backgroundColor: theme.palette.background.alt, p: "1rem 6%", textAlign: "center" }}>
                <Typography
                    fontWeight="bold"
                    fontSize="32px"
                    color="primary"
                >
                    Sociopedia
                </Typography>
            </Box>
            <Box
                sx={{
                    width: isNonMobileScreens ? "50%" : "93%",
                    p: "2rem",
                    m: "2rem auto",
                    borderRadius: "1.5rem",
                    backgroundColor: theme.palette.background.alt
                }}
            >
                <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
                    Welcome to Socialpedia, the Social Media for Sociopaths!
                </Typography>
                <Form />
            </Box>
        </Box>
    );
}

export default Login;