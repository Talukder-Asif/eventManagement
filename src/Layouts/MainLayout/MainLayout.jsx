import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const MainLayout = () => {
    return (
        <div className="max-w-screen-2xl m-auto">
            <NavBar></NavBar>
            <div>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>

            <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
            {/* Same as */}
          <ToastContainer />
        </div>
    );
};

export default MainLayout;