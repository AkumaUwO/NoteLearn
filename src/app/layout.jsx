import "./globals.css";
import 'remixicon/fonts/remixicon.css';
import 'react-piano/dist/styles.css';

import Navbar from "@/components/navbar/Navbar";

export const metadata = {
  title: "NoteLearn",
  description: "NoteLearn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="mt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
