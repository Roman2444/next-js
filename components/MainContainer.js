import Head from "next/head";
import A from "./A";

function MainContainer({ children, keywords }) {
  return (
    <>
      <Head>
        <meta keywords={"next js, react " + keywords} />
        <title> Главная страница</title>
      </Head>
      <div className="navbar">
        <A href={"/"} text="Главная" />
        <A href={"/users"} text="Пользователи" />
        <A href={"/about"} text="О проекте" />
      </div>
      {children}
      <style jsx>
        {`
          .navbar {
            height: 40px;
            background: green;
            padding: 10px;
          }

          .link {
            text-decoration: none;
            color: #fff;
            margin: 15px;
            font-size: 20px;
          }
          .link:hover {
            color: red;
          }
        `}
      </style>
    </>
  );
}

export default MainContainer;
