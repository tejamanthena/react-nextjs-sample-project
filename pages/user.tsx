import { GetServerSideProps, NextPage } from "next";
import fetch from "node-fetch";
import ErrorPage from "next/error";
import List from "../components/List/List"

export type User = {
  id: string;
  name: string;
  email: string;
};

const UserPage: NextPage<{ users: User[] }> = props => {
  if (!props.users) {
    return <ErrorPage statusCode={404} />;
  }

  return (
      <>
          <h2 style={{'textAlign': 'center'}}>User Data</h2>

          <List users={props.users} />

          <button onClick={() => console.log(props.users)}>Fetch Data</button>
      </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  try {
    const result = await fetch(`http://localhost:3000/api/user`);
    const users: User = await result.json();

    return {
      props: { users }
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {}
    };
  }
};

export default UserPage;
