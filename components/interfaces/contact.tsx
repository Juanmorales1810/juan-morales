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
        <section className="w-full max-w-6xl px-2 my-16 mx-auto">
            <div className="flex flex-col gap-14 justify-center items-center w-full md:flex-row">
                <section className="px-4 h-full">
                    <div className="grid items-center grid-cols-1 gap-4 mx-auto max-w-7xl">
                        <div>
                            <p className="mb-1 text-base font-medium md:text-xl text-secondary">Hagamos una App</p>
                            <h2 className="mb-6 text-3xl font-bold md:leading-tight md:text-4xl md:mb-4">Contactame para hacer realidad tus ideas</h2>
                            <div className="flex flex-col mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
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

                <div className="w-full">
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
                </div>
            </div>
        </section>
    )
}
