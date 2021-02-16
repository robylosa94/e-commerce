import { Shopping } from "@components/illustrations";
import { Button, Container } from "@components/ui";

export default function Welcome() {
  return (
    <Container className="flex flex-col justify-between h-screen py-20">
      <div>
        <h1 className="text-center text-gray text-xl font-semibold">Welcome to App</h1>
        <span className="block mt-1 text-center text-gray text-lg">Explore Us</span>
      </div>
      <Shopping width="848" height="656" className="w-screen h-auto -mx-5 px-10" />
      <div>
        <Button href="#" Component="a" width="15.3rem" className="mx-auto" variant="primary">
          Log in
        </Button>
        <Button href="#" Component="a" width="15.3rem" className="mx-auto mt-3">
          Signup
        </Button>
      </div>
    </Container>
  )
}
