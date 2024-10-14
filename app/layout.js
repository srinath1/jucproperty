import React from "react";
import "../assests/styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthProvider from "../components/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalProvider } from "../context/GlobalContext";
import "photoswipe/dist/photoswipe.css";

export const metadata = {
  title: "PropertyPulse | Find your rental",
  description: "The Best Property Site In Denmark",
  keywords: "rental,find rental denmark",
};
const MainLayout = ({ children }) => {
  return (
    <GlobalProvider>
      <AuthProvider>
        <html lang="en">
    <!-- Google Tag Manager -->
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-V9DKET4B81"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-V9DKET4B81');
</script>
          <body>
 
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </AuthProvider>
    </GlobalProvider>
  );
};

export default MainLayout;
