import Home from "./pages/Home";
import Customizer from "./pages/Customizer";
import CanvasModel from "./canvas"

export default function CustomizeClothes3D() {
    return (
        <main className="app transition-all ease-in">
            <Home />
            <CanvasModel />
            <Customizer />
        </main>
    )
}