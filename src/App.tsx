import "./styles/global.css";
import { Envelope, Lock } from "phosphor-react";
import { Checkbox } from "./Checkbox/Checkbox";
import { Heading } from "./Heading/Heading";
import { Logo } from "./Logo";
import { Text } from "./Text/Text";
import { TextInput } from "./TextInput/TextInput";
import { Button } from "./Button/Button";
export function App() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-gray-900 text-gray-200">
      <header className="flex flex-col items-center justify-center">
        <Logo />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="md" className="text-gray-500">
          Faça login e comece a usar!
        </Text>
      </header>
      <main className="mt-10 w-full max-w-sm">
        <form className="flex flex-col gap-3">
          <label htmlFor="email" className="flex flex-col gap-3">
            <Text className="font-semibold">Endereço de e-mail</Text>
            <TextInput.TextInputRoot>
              <TextInput.TextInputIcon>
                <Envelope />
              </TextInput.TextInputIcon>
              <TextInput.TextInputInput
                type="email"
                id="email"
                placeholder="Digite seu e-mail"
              />
            </TextInput.TextInputRoot>
          </label>
          <label className="flex flex-col gap-3">
            <Text className="font-semibold">Sua senha</Text>
            <TextInput.TextInputRoot>
              <TextInput.TextInputIcon>
                <Lock />
              </TextInput.TextInputIcon>
              <TextInput.TextInputInput
                type="password"
                id="password"
                placeholder="****************"
              />
            </TextInput.TextInputRoot>
          </label>
          <label htmlFor="remember" className="flex gap-2 items-center mt-6">
            <Checkbox id="remember" />
            <Text size="sm" className="text-gray-400">
              Lembrar de mim por 30 dias
            </Text>
          </label>
          <Button type="submit" className="mt-4">
            Entrar na plataforma
          </Button>
        </form>
      </main>

      <footer className="flex flex-col gap-4 items-center mt-8">
        <Text asChild size="sm">
          <a
            href="#"
            className="text-gray-500 underline hover:text-gray-200 transition-colors"
          >
            Esqueceu sua senha?
          </a>
        </Text>
        <Text asChild size="sm">
          <a
            href="#"
            className="text-gray-500 underline hover:text-gray-200 transition-colors"
          >
            Não possui uma conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  );
}
