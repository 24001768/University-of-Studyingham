import React from "react";
import LibraryPortal from "./pages/Libraryportal";
import Librarycollection from "./pages/Librarycollection";
import Bookdetail from "./pages/Bookdetail";
import Libraryhistory from "./pages/Libraryhistory";
import Gateway from "./pages/Gateway";
import Login from "./Components/gatewaycomponents/Login";
import StudentRegistration from "./Components/gatewaycomponents/StudentRegistration";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop></ScrollToTop>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/StudentRegistration"
            element={<StudentRegistration />}
          ></Route>
          <Route
            path="/TutorRegistration"
            element={<TutorRegistration />}
          ></Route>
          <Route path="/gateway" element={<Gateway />}></Route>
          <Route path="/LibraryPortal" element={<LibraryPortal />}></Route>
          <Route path="/librarycollection"element={<Librarycollection />}></Route>
          <Route path="/bookdetail" element={<Bookdetail />}></Route>
          <Route path="/libraryhistory" element={<Libraryhistory />}></Route>
          <Route path="/mentorship" element={<Mentorship />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;