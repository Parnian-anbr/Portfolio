import React from 'react';

export const MessageForm = () => {
  const [name, setName] = React.useState<string>();
  const [email, setEmail] = React.useState<string>();
  const [message, setMessage] = React.useState<string>();

  const handleSubmit = () => {
    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   // body: encode({ "form-name": "contact", ...this.state })
    // })
    //   .then(() => alert("Success!"))
    //   .catch(error => alert(error));
    // e.preventDefault();
  };

  return (
    <form
      name="contat"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
    >
      <p>
        <label>
          Your Name:{' '}
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
          Your Email:{' '}
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
          Message:{' '}
          <textarea
            name="message"
            value={message}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
};