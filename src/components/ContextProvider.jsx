import { PianoProvider } from "@/contexts/PianoContext";
import { UserProvider } from "@/contexts/UserContext";

export default function ContextProvider({ children }) {

    return (
        <UserProvider>
            <PianoProvider>
                {children}
            </PianoProvider>
        </UserProvider>
    );
};