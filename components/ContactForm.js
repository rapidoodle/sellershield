"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const res = await fetch("https://formspree.io/f/mnnveyvb", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("Thanks! We'll be in touch soon.");
      reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto space-y-4 bg-white dark:bg-slate-900 p-6 rounded-lg shadow"
    >
      <Input placeholder="Your Name" {...register("name")} />
      <Input type="email" placeholder="Your Email" {...register("email")} />
      <Textarea placeholder="Your Message" {...register("message")} />
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  );
}