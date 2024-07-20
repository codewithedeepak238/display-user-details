import { Route, Routes } from "react-router-dom"
import { Homepage, Detailpage, Login, Register } from "../pages"
import { ToastContainer } from "react-toastify"

export const Allroutes = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/detail" element={<Detailpage/>} />
          <Route path="/signin" element={<Login/>} />
          <Route path="/signup" element={<Register/>} />
          <Route path="*" element={<p>Page Not Found</p>} />
        </Routes>
        <ToastContainer/>
    </>
  )
}
