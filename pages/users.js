import React from "react";
import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({ users }) => {
  console.log(users);

  return (
    <MainContainer keywords={'users'}>
      <div>
        <div>
          <h2>Список пользователей</h2>
          <ul>
            {users.map((el) => (
              <li key={el.id}>
                <Link legacyBehavior href={`/users/${el.id}`}>
                  <a>
                    {el.id}. {el.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MainContainer>
  );
};

export async function getStaticProps(context) {
  const request = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await request.json();
  return {
    props: { users },
  };
}

export default Users;
