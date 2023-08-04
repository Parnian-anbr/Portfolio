import MailIcon from "../../../public/icons/mail.svg";
import { MessageForm } from "./MessageForm";
interface ContactProps {
  //   onClick: () => void;
}

export default function Contact({}: ContactProps) {
  return (
    <>
      <div className="flex items-start justify-start flex-1 pattern  plane submenu-content">
        <section className="text-lg p-14 ">
          <h1 className=" font-bold text-6xl pb-8 pl-2">Contact Me On...</h1>
          <p className="pb-12 pl-6  pt-6 flex flex-wrap h-5">
            <img className="h-5 w-5 mr-1" src="/mail.svg" alt="text" />
            <a href={"mailto:mp.anbary@gmail.com"} className="leading-4">
              <span>
                <b> Email: </b> mp.anbary@gmail.com
              </span>
            </a>
          </p>
          <p className="pb-12 pl-6 flex flex-wrap h-10">
            <img className="h-5 w-5  mr-1" src="/github-icon.svg" alt="text" />
            <a href={"https://github.com/Parnian-anbr"}>
              <b> Github:</b> Parnian-anbr
            </a>
          </p>
          <p className="pb-4 pl-6 flex flex-wrap h-5 mt-3">
            <img className="h-5 w-5 mr-1 mt-1" src="/message.svg" alt="text" />
            Right Here
          </p>
          <MessageForm />
        </section>
      </div>
    </>
  );
}
