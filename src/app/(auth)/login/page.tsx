'use client'

import { useForm } from 'react-hook-form'
import {InputField} from '../../../../components/InputField'
import Link from 'next/link'

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
    <div className="min-h-screen bg-purple-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg max-w-md w-full shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-purple-700">Login</h2>
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
          <button
            type="submit"
            className="bg-blue-600 w-full p-3 text-white rounded-lg mt-4"
          >
            Entrar
          </button>
        </form>
        <Link href="/signup">
          <p>
            Não tem cadastro?{' '}
            <span className="text-[#432E97]">Cadastre- se já</span>
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Login
