import { Layout } from "@components/common";

export const getServerSideProps = async ({ res }) => {
  res.setHeader("location", `/welcome`)

  res.statusCode = 302
  res.end()

  return { props: {} }
}

export default function Home() {
  return <> </>
}

Home.Layout = Layout
