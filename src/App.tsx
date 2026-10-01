import { useReveal } from "./hooks";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Features } from "./components/Features";
import { Audience } from "./components/Audience";
import { Chapters } from "./components/Chapters";
import { Author } from "./components/Author";
import { Listen } from "./components/Listen";
import { Cta } from "./components/Cta";
import { Footer } from "./components/Footer";

export default function App() {
    useReveal();

    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Features />
                <Audience />
                <Chapters />
                <Author />
                <Listen />
                <Cta />
            </main>
            <Footer />
        </>
    );
}
