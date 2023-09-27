import { useRouter } from "next/router";
import Layout from "../components/layout";

function UserDetail(posts) {
    const router = useRouter();
    return (
        <Layout>
            <div>
                <h2>User Detail</h2>
                <p>{router.query.name}</p>
            </div>
        </Layout>
    )
}
export default UserDetail;