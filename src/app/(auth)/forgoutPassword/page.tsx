'use client'

import { useForm } from 'react-hook-form'
import { InputField } from '../../../../components/InputField'
import Link from 'next/link'
import { Button } from '../../../../components/Button'

interface LoginFormInputs {
  email: string
  password: string
  confirmPassword: string
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
          Esqueceu sua senha ?
        </h2>
        <p className='text-center text-[#432E97] font-bold text-2xl'>Sem problemas, vamos criar uma nova!</p>
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
            label="Nova Senha"
            type="password"
            placeholder="Digite sua nova senha"
            register={register}
            name="password"
            error={errors.password}
          />
           <InputField
            label="Confirme sua nova senha"
            type="password"
            placeholder="Confirme sua nova senha"
            register={register}
            name="password"
            error={errors.confirmPassword}
          />
          <Button type="submit">Redefinir Senha</Button>
          <Link href='/login'>
          <Button
            type="submit"
            className="bg-transparent border border-white w-full p-3 text-white mt-4"
          >
            Area de Login
          </Button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login
