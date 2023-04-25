import prisma from "../../lib/prisma";

export const getStaticProps = async () => {
  const data = await prisma.user.findMany();
  console.log(data);
  return {
    props: {
      data: JSON.stringify(data),
    },
  };
};

export default function Home(props) {
  return (
    <div>
      {JSON.parse(props.data).map((user) => (
        <div key={user.id}>
          <h1>{user.id}</h1>
          <h1>{user.name}</h1>
          <h1>
            {new Date(user.createdAt).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </h1>
        </div>
      ))}
    </div>
  );
}
