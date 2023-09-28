import React from "react";
import MailIcon from "../../../public/icons/mail.svg";
import { MessageForm } from "./MessageForm";
interface ContactProps {
  //   onClick: () => void;
}

export default function Contact({}: ContactProps) {
  const [showForm, setShowForm] = React.useState<boolean>(false);
  return (
    <>
      <div className="flex items-center justify-center flex-1 pattern  plane submenu-content overflow-auto">
        <section className="text-lg p-10 w-9/12">
          <h1 className=" font-bold text-6xl pb-8 pl-2 text-center">
            Contact Me via
          </h1>
          <p className="pb-12 pl-6 pt-6 flex flex-wrap h-10 justify-center text-2xl">
            <img className="h-5 w-5 mr-1" src="/mail.svg" alt="text" />
            <a href={"mailto:mp.anbary@gmail.com"} className="leading-4">
              <span>
                <b className=""> Email: </b> mp.anbary@gmail.com
              </span>
            </a>
          </p>
          <p className="pb-12 pl-6 flex flex-wrap h-10 justify-center text-2xl">
            <img className="h-5 w-5 mr-1" src="/github-icon.svg" alt="text" />
            <a href={"https://github.com/Parnian-anbr"}>
              <span>
                <b> Github:</b> Parnian-anbr
              </span>
            </a>
          </p>
          <p
            className="pb-12 pl-6 flex flex-wrap h-10 justify-center"
            onClick={() => setShowForm(!showForm)}
          >
            <img className="h-5 w-5 mr-1 mt-1" src="/message.svg" alt="text" />
            Right Here
          </p>
          {showForm && (
            <div className="pb-12 pl-6 flex flex-wrap">
              <MessageForm />
            </div>
          )}
        </section>
      </div>
    </>
  );
}
