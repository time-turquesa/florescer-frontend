'use client'

import { useForm } from 'react-hook-form'
import { InputField } from '../../../../components/InputField'
import Link from 'next/link'
import { Button } from '../../../../components/Button'

interface LoginFormInputs {
  email: string
  password: string
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>()

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data)
    // Simular o envio dos dados
  }

  return (
    <div className="min-h-screen flex lg:items-center lg:px-20 justify-center">
      <div className="p-8 rounded-lg w-full">
        <h2 className="text-5xl font-bold mb-6 text-white text-center">
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            label="E-mail"
            type="email"
            placeholder="Digite seu e-mail"
            register={register}
            name="email"
            error={errors.email}
          />
          <InputField
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            register={register}
            name="password"
            error={errors.password}
          />
          <Button type="submit">Entrar</Button>
        </form>
        <div className="hidden lg:flex items-center flex-col gap-4 mt-10">
          <Link href="/signup">
            <p className="text-white">
              Não tem cadastro?{' '}
              <span className="text-[#432E97]">Cadastre-se já</span>
            </p>
          </Link>
          <p className="text-[#432E97]">Recuperar senha</p>
        </div>
        <div className="flex items-center flex-col justify-between gap-4 mt-10 h-[320px] lg:hidden">
          <p className="text-[#432E97]">Recuperar senha</p>
          <Link href="/signup">
            <p className="text-white">
              Desejo{' '}
              <span className="text-[#432E97] underline">Cadastrar-me</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
