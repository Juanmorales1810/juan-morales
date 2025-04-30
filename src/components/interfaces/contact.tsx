"use client";

import { formSchema, type Inputs } from "@/validations/formValidations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { useLoading } from "@/hooks/useLoading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { WhatsAppIcon } from "../icons";
import emailjs from "@emailjs/browser";
import Link from "next/link";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";

export default function Contact() {
    const { finishLoading, isLoading, startLoading } = useLoading();
    const form = useForm<Inputs>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            message: "",
        },
    });

    const onSubmit = async (data: Inputs) => {
        startLoading();
        try {
            const result = await emailjs.send(
                "service_5se41gu",
                "template_rg34xt8",
                data,
                "nzfKdp7ymZzA0-8K_"
            );
            console.log("Mensaje enviado con éxito:", result);
            form.reset();
        } catch (error) {
            console.error("Error al enviar el mensaje:", error);
        }
        finishLoading();
    };

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
                        <Form {...form}>
                            <form
                                id="form"
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="flex gap-4 flex-col justify-center items-start"
                            >
                                <FormField
                                    control={form.control}
                                    name="fullName"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormControl>
                                                <Input
                                                    placeholder="Nombre y Apellido"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormControl>
                                                <Input
                                                    type="email"
                                                    placeholder="Email"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Escribime un mensaje"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="flex flex-col sm:flex-row gap-4 w-full">
                                    <Button
                                        type="submit"
                                        className="w-full shadow sm:w-auto"
                                        variant="default"
                                        disabled={isLoading}
                                    >
                                        {isLoading
                                            ? "Enviando..."
                                            : "Envíame un Email"}
                                    </Button>
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="w-full sm:w-auto group"
                                    >
                                        <Link
                                            href="https://wa.me/542646216944"
                                            target="_blank"
                                        >
                                            Háblame al WhatsApp
                                            <WhatsAppIcon className="ml-2 fill-secondary group-hover:fill-zinc-50 transition-colors" />
                                        </Link>
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
}
