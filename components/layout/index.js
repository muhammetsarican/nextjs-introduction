import Navbar from "../navbar";

const Layout=({children})=>(
    <div>
    <Navbar></Navbar>
    <main>{children}</main>
    </div>
)

export default Layout;