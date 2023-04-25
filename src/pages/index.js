import prisma from "../../lib/prisma";

export const getStaticProps = async () => {
  const data = await prisma.user.findMany();
  // console.log(data);
  return {
    props: { data: JSON.stringify(data, null, 2) },
  };
};

export default function Home(props) {
  return (
    <div>
      {/* <h1>hello</h1> */}
      {/* query data prisma */}
      <pre>{props.data}</pre>
    </div>
  );
}
