'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { InputField } from '../../../../components/InputField'
import Link from 'next/link'
import { Button } from '../../../../components/Button'

interface SignUpFormInputs {
  fullName: string
  email: string
  password: string
  confirmPassword: string
  occupation: string
  acceptTerms: boolean
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputs>()

  const onSubmit = (data: SignUpFormInputs) => {
    console.log(data)
    // Simular o envio dos dados
  }

  return (
    <div className="flex py-4 lg:items-center justify-center h-screen lg:px-20">
      <div className="px-8 rounded-lg w-full">
        <h2 className="text-4xl lg:text-5xl font-bold lg:mb-6 text-white text-center">
          Cadastro
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="z-10">
          <InputField
            label="Nome completo"
            type="text"
            placeholder="Digite seu nome completo"
            register={register}
            name="fullName"
            error={errors.fullName}
          />
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
          <InputField
            label="Confirmar senha"
            type="password"
            placeholder="Repita sua senha"
            register={register}
            name="confirmPassword"
            error={errors.confirmPassword}
          />
          <InputField
            label="Área de atuação"
            type="text"
            placeholder="Ex: Product Designer"
            register={register}
            name="occupation"
            error={errors.occupation}
          />
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                {...register('acceptTerms', { required: true })}
                className="form-checkbox"
              />
              <span className="ml-2 text-gray-700">
                Li e aceito os{' '}
                <a href="#" className="text-blue-500">
                  termos
                </a>{' '}
                e as{' '}
                <a href="#" className="text-blue-500">
                  condições
                </a>
                .
              </span>
            </label>
            {errors.acceptTerms && (
              <span className="text-red-500 block">
                Você deve aceitar os termos e condições.
              </span>
            )}
          </div>
          <Button type="submit">Realizar cadastro</Button>
        </form>
        <Link href="/login">
          <Button
            type="submit"
            className="bg-transparent border border-white w-full p-3 text-white mt-4"
          >
            Cancelar cadastro
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default SignUp
