import { useRouter } from "next/router";

function UserDetail(posts){
    const router= useRouter();
    return (
    <div>
        <h2>User Detail</h2>
        <p>{router.query.name}</p>
    </div>
)
}
export default UserDetail;