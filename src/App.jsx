import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import Stats from "./pages/Stats";
import FriendDetail from "./pages/FriendDetail";
import { InteractionProvider } from "./InteractionContext"; // ১. কন্টেক্সট ইম্পোর্ট করলাম

function App() {
  return (
    /* ২. পুরো অ্যাপকে InteractionProvider দিয়ে মুড়িয়ে দিলাম যাতে সব পেজ ডাটা পায় */
    <InteractionProvider>
      <div className="min-h-screen flex flex-col font-['Inter',sans-serif] bg-[#F9FAFB]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/stats" element={<Stats />} />
            {/* Dynamic Route for Friend Details */}
            <Route path="/friend/:id" element={<FriendDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </InteractionProvider>
  );
}

export default App;