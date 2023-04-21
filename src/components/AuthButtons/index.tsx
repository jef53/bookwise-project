import { AuthButton, Container } from "./styles"

export const AuthButtons = () => {
  return (
    <Container>
      <AuthButton><img src="/images/icons/google.svg" alt="google" /> Entrar com Google</AuthButton>
      <AuthButton><img src="/images/icons/github.svg" alt="github" /> Entrar com Github</AuthButton>
      <AuthButton><img src="/images/icons/rocket.svg" alt="visitante" /> Entrar como visitante</AuthButton>

    </Container>
  )
}