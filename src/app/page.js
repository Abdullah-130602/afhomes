import Navbar from "./layout/navbar";
import Footer from "./components/footer";
import Landing_Page from "./pages/home/index";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Landing_Page />
      {/* Footer */}
      <Footer />
    </div>
  );
}

