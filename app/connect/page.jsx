import ConnectNav from "@/components/Connect/ConnectNav";
import ConnectTop from "@/components/Connect/ConnectTop";
import ContactForm from "@/components/Connect/ContactForm";
import Navbar from "@/components/Header/Navbar";
import React from "react";
import { ToastContainer } from "react-toastify";

export default function page() {
  const serviceId = process.env.SERVICE_ID;
  const templateId = process.env.TEMPLATE_ID;
  const apiKey = process.env.API_KEY;
  return (
    <>
      <div>
        <div className="">
          <ConnectNav />
          <ToastContainer />
        </div>
      </div>
      <section className="mt-[6rem]">
        <div className="flex flex-col lg:flex-row justify-around">
          {/* Right section (rest of the screen) */}
          <ConnectTop />
          <ContactForm
            serviceId={serviceId}
            templateId={templateId}
            apiKey={apiKey}
          />
        </div>
      </section>
    </>
  );
}
