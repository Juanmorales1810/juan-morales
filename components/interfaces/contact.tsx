"use client"

import { formSchema, Inputs } from '@/validations/formValidations'
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Textarea } from '@nextui-org/input'
import { useLoading } from '@/hooks/useLoading'
import { Button } from '@nextui-org/button'
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { WhatsAppIcon } from '../icons'
import Link from 'next/link'
import React from 'react'

export default function Contact() {
    const { finishLoading, isLoading, startLoading } = useLoading()
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = handleSubmit(async (data) => {


        startLoading()
        try {
            const result = await emailjs.send(
                "service_5se41gu",
                "template_rg34xt8",
                data,
                "nzfKdp7ymZzA0-8K_"
            );
            console.log("Mensaje enviado con éxito:", result);
            reset();
        } catch (error) {
            console.error("Error al enviar el mensaje:", error);
        }
        finishLoading()
    })
    return (
        <section className="py-32">
            <div className="container">
                <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-28">
                    <div className="mx-auto flex w-full max-w-lg flex-col justify-between gap-10">
                        <div className="text-center space-y-4 lg:text-left">
                            <h1 className="mb-2 text-5xl font-semibold text-secondary lg:mb-1 lg:text-6xl">
                                Hagamos una App
                            </h1>
                            <p className="text-secondary-700">
                                Contactame para hacer realidad tus ideas
                            </p>
                        </div>
                        <div className="mx-auto w-fit lg:mx-0">
                            <h3 className="mb-6 text-center text-secondary text-2xl font-semibold lg:text-left">
                                Detalles de contacto
                            </h3>
                            <ul className="ml-4 list-disc space-y-2 text-secondary-700">
                                <li>
                                    <span className="font-bold">
                                        Teléfono:&nbsp;
                                    </span>
                                    (+54) 264 621 6944
                                </li>
                                <li>
                                    <span className="font-bold">
                                        Email:&nbsp;
                                    </span>
                                    <a href="" className="underline">
                                        juan.exequiel.morales@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mx-auto flex w-full max-w-screen-lg flex-col gap-6 rounded-lg bg-zinc-950/10 backdrop-blur-md p-10">
                        <form
                            id='form'
                            action="/submit"
                            onSubmit={onSubmit}
                            className="flex gap-2 flex-col justify-center items-start"
                        >
                            <Input
                                type="text"
                                size="sm"
                                placeholder="Nombre y Apellido"
                                errorMessage={errors.fullName?.message}
                                isInvalid={!!errors.fullName}
                                {...register('fullName')}
                            />
                            <Input
                                type="email"
                                size="sm"
                                placeholder="Email"
                                errorMessage={errors.email?.message}
                                isInvalid={!!errors.email}
                                {...register('email')}
                            />
                            <Textarea
                                placeholder="Escribime un mensaje"
                                errorMessage={errors.message?.message}
                                isInvalid={!!errors.message}
                                {...register('message')}
                            />
                        </form>
                        <Button
                            form='form'
                            type='submit'
                            color="secondary"
                            variant="shadow"
                            isLoading={isLoading}
                            className="w-full shadow sm:w-auto">
                            Envíame un Email
                        </Button>
                        <Button
                            as={Link}
                            href="https://wa.me/542646216944"
                            target="_blank"
                            color="secondary"
                            variant="ghost"
                            className="w-full sm:w-auto gruop"
                            endContent={<WhatsAppIcon className="fill-secondary group-hover:fill-zinc-50 transition-colors" />}
                        >
                            Háblame al WhatsApp
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
