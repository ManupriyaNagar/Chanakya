import "./globals.css";
import Section from "@/components/Home/Section";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
 
          <Section  />
          {children}
          <Footer  />

      </body>
    </html>
  );
}
