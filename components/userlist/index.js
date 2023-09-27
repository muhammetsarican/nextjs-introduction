import Link from "next/link";
import Router from "next/router";
const UserList = ({ users }) => (
    <div>
        {users.map((user, key) => (
            <div>
                <Link
                    key={key}
                    href={{ pathname: "/user", query: { name: user.username } }}
                    as={`/user/${user.username}`}>
                    <a
                        onMouseEnter={() => {
                            Router.prefetch(`/user/${user.username}`);
                            console.log("Fetching...")
                        }}>{user.name}
                    </a>
                </Link>
                <br />
            </div>
        ))}
    </div>
)

export default UserList;