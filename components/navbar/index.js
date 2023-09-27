import Link from "next/link"
const Navbar = () => (
    <div>
        <Link href="/"><a>Home</a></Link>
        &nbsp; <u>|</u> &nbsp;
        <Link prefetch href="/users" as={"/kullanicilar"}><a>Users</a></Link>
        <hr />
    </div>
)
export default Navbar;