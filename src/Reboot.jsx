import { useLocation } from "react-router-dom";

function Reboot() {
    useLocation()

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto" // <--- faz ser instantâneo, mesmo que o body tenha scroll smooth
    });

    return null;
}

export default Reboot;