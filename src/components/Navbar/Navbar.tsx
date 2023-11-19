import { useState } from "react";
import {
    Box,
    IconButton,
    InputBase,
    Typography,
    Select,
    MenuItem,
    FormControl,
    useTheme,
    useMediaQuery
} from '@mui/material';
import {
    Search,
    Message,
    DarkMode,
    LightMode,
    Notifications,
    Help,
    Menu,
    Close
} from '@mui/icons-material';
import { setMode, setLogout } from "../../state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "../FlexBetween/FlexBetween";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
    const [isMobileMenuToggled, setIsModebileMenuToggled] = useState(false);
    const dispach = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');
    const theme = useTheme();

    return (
        <h1>Hello Navbar</h1>
    );
}

export default Navbar;