import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AllRooms from "./pages/AllRooms";
import RoomDetails from "./pages/RoomDetails";
import Offers from "./pages/Offers";
import About from "./pages/About";
import MyBookings from "./pages/MyBookings";
import ScrollToTop from "./components/ScrollToTop";
import ComingSoon from "./pages/ComingSoon";
import Flights from "./pages/Flights";
import Trains from "./pages/Trains";
import Payment from "./pages/Payment";
import BookingSuccess from "./pages/BookingSuccess";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");
  
  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
      <ScrollToTop />
      {!isOwnerPath && <Navbar/>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/exclusive-offers" element={<Offers />} />
          <Route path="/about" element={<About />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/trains" element={<Trains />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/booking-success" element={<BookingSuccess />} />
          <Route path="/buses" element={<ComingSoon serviceName="Buses" />} />
          <Route path="/cabs" element={<ComingSoon serviceName="Cabs" />} />
        </Routes>
      </div>
      {!isOwnerPath && <Footer />}
    </div>
  );
}

export default App;
