import Navbar from "./(components)/Navbar";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const footer = (
    <div className="flex w-full justify-center p-6 sm:p-8 l:p-12 mx-auto yellowBackground fixed bottom-0 max-w-[600px]  ">
      <Navbar />
    </div>
  );

  return (
    <html lang="en">
      <body
        className={`w-full max mx-auto text-sm sm:text-base min-h-screen flex flex-col overflow-auto text-slate-800 `}
      >
        {children}
        {footer}
      </body>
    </html>
  );
}
