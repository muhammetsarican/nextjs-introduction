import Link from "next/link";
const UserList=({users})=>(
    <div>
        {console.log(users)}
    {users.map((user)=>(
        <div>
        <Link href={{pathname:"/user", query:{name:user.username}}} as={`/user/${user.username}`}>{user.name}</Link>
        <br/>
        </div>
    ))}
        <Link href={{pathname:"/user", query:{name:"ahmet"}}} as="user/ahmet"><a>Ahmet</a></Link><br />
        <Link href={{pathname:"/user", query:{name:"Mehmet"}}} as={"user/mehmet"}><a>Mehmet</a></Link>
    </div>
)

export default UserList;