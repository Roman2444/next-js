import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";

export default function ({ user }) {
  return (
    <MainContainer keywords={user.name}>
      <div>
        <h2>Пользователь с id {user.id}</h2>
        <h3> Имя пользователя: {user.name}</h3>
        <div>Электронная почта:{user.email} </div>
      </div>
    </MainContainer>
  );
}

export async function getServerSideProps(context) {
  console.log(context);
  const request = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.query.id}`
  );
  const user = await request.json();
  return {
    props: { user }, // will be passed to the page component as props
  };
}
