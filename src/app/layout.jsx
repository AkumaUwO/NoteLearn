import "./globals.css";
import 'remixicon/fonts/remixicon.css';
import 'react-piano/dist/styles.css';

import Navbar from "@/components/navbar/Navbar";

import ContextProvider from "@/components/ContextProvider";

export const metadata = {
  title: "NoteLearn",
  description: "NoteLearn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>
          <Navbar />
          <div className="mt-20">
            {children}
          </div>
        </ContextProvider>
      </body>
    </html>
  );
}
