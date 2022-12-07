import { Routes, Route, HashRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Homepage from "./pages/homepage/Homepage";
import SignInPage from "./pages/sign_in_page/SignInPage";
import SignUpPage from "./pages/sign_up_page/SignUpPage";
import UserPage from "./pages/user_page/UserPage";
import AdminPage from "./pages/admin_page/AdminPage";
import CurrentAccount from "./pages/current_account/CurrentAccount";
import UpdateUserDetails from "./pages/update_user_details/UpdateUserDetails";
import TransferMoney from "./pages/transfer_money/TransferMoney";
import Loan from "./pages/loan/Loan";
import Footer from "./components/footer/Footer";
import HomescreenSidebar from "./components/homescreen_sidebar/HomescreenSidebar";
function App() {
  return (
    <HashRouter >
      <Header />
      <HomescreenSidebar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/sign-in" element={<SignInPage />}></Route>
        <Route path="/sign-up" element={<SignUpPage />}></Route>
        <Route path="/user" element={<UserPage />}></Route>
        <Route path="/admin" element={<AdminPage />}></Route>
        <Route path="/user/loan" element={<Loan />}></Route>
        <Route path="/user/transfer-money" element={<TransferMoney />}></Route>
        <Route path="/user/update-user-details" element={<UpdateUserDetails />}></Route>
        <Route path="/user/current-account" element={<CurrentAccount />}></Route>
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
