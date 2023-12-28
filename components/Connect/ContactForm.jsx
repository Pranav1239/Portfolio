"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Input from "../Common/Input";
import TextArea from "../Common/TextArea";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { serviceID, templateID } from "@/lib/ENV";
import { dotenv } from "dotenv";
const ContactForm = ({ serviceId, templateId, apiKey }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      mail: "",
      message: "",
    },
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(serviceId, templateId, form.current, apiKey)
      .then((result) => {
        toast.success("Mail Sent", { theme: "colored" });
        console.log(result.text);
      })
      .catch((err) => {
        console.log("error while sending form", err);
        toast.error("Error while sending mail", { theme: "colored" });
      });
  };

  const onSubmit = async (data) => {
    setIsLoading(true);

    const dataMain = {
      name: `${data.name}`,
      email: `${data.mail}`,
      message: `${data.message}`,
    };

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataMain),
      });
      toast.success("Mail Sent", { theme: "colored" });
    } catch (err) {
      console.log("Error while sending mail", err);
      toast.error("Error while sending mail", { theme: "colored" });
    } finally {
      setIsLoading(false);
    }
  };

  // Animation variants
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <section className="get-in-touch row">
        <motion.h1
          className="title text1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        >
          Contact me!
        </motion.h1>
        <motion.form
          className="contact-form"
          variants={formVariants}
          ref={form}
          initial="hidden"
          animate="visible"
        >
          <div className="form-field col x-50">
            <Input
              id={"name"}
              label={"Name"}
              name={"name"}
              disabled={isLoading}
              errors={errors}
              register={register}
              required
            />
          </div>
          <div className="form-field col x-50">
            <Input
              id={"mail"}
              label={"Gmail"}
              name={"mail"}
              disabled={isLoading}
              errors={errors}
              register={register}
              required
            />
          </div>
          <div className="form-field col x-100">
            <TextArea
              id={"message"}
              name={"message"}
              label={"Message"}
              disabled={isLoading}
              errors={errors}
              register={register}
              required
            />
          </div>
          <motion.div
            className="form-field col x-100 align-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
          >
            <button
              // onClick={handleSubmit(onSubmit)}
              onClick={sendEmail}
              className="custom-btn btn-15"
              type="submit"
            >
              {isLoading ? "Sending..." : "Sumbit"}
            </button>
          </motion.div>
        </motion.form>
      </section>
    </div>
  );
};

export default ContactForm;
