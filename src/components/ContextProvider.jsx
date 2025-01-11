import { PianoProvider } from "@/contexts/PianoContext";

export default function ContextProvider({ children }) {

    return (
        <PianoProvider>
            {children}
        </PianoProvider>
    );
};