import _fetch from "isomorphic-fetch"
import Layout from "../components/layout"
import UserList from "../components/userlist"
const UserPage = (props) => (
    <Layout>
        <div>
            User Page
            <UserList users={props.users}/>
        </div>
    </Layout>
)

UserPage.getInitialProps=async ()=>{
    const res =await _fetch("https://jsonplaceholder.typicode.com/users");
    const users=await res.json();
    return {
        users
    }
}
export default UserPage