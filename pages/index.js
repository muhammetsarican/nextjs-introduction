import Layout from "../components/layout";
import Head from "next/head";

export default () => (
    <Layout>
        <Head>
            <title>Muhammet Sarican</title>
        </Head>
        <div className="hello-world">
            <div>Hello from next js</div>
        </div>
        <style jsx>{`.hello-world{
            display:flex;
            align-items:center;
            justify-content:center;
            border-radius:0.5rem;
            font-size:2rem;
            width:20rem;
            height:20rem;
            box-shadow:0 10px 10px black;
        }`}</style>
    </Layout>
)
