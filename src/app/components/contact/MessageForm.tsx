import React from "react";

const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export const MessageForm = () => {
  const [name, setName] = React.useState<string>();
  const [email, setEmail] = React.useState<string>();
  const [message, setMessage] = React.useState<string>();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log({ name, email, message });
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    event.preventDefault();
  };

  return (
    <form
      className="text-black"
      name="contact"
      data-netlify="true"
      // netlify={true}
      // netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <p>
        <label>
          Your Name:{" "}
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Your Email:{" "}
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Message:{" "}
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
      </p>
      <p>
        <input type="hidden" name="form-name" value="contact" />
        <button type="submit">Send</button>
      </p>
    </form>
  );
};
