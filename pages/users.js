import _fetch from "isomorphic-fetch"
import Layout from "../components/layout"
import UserList from "../components/userlist"
import React from "react";

class UserPage extends React.Component {
    static async getInitialProps() {
        const res = await _fetch("https://jsonplaceholder.typicode.com/users");
        const users = await res.json();
        return {
            users
        }
    }
    render() {
        return (
            <Layout>
                <div>
                    User Page
                    <UserList users={this.props.users} />
                </div>
            </Layout>
        )
    }
}

export default UserPage