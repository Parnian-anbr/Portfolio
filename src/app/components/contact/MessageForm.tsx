import React from 'react';

export const MessageForm = () => {
  const [name, setName] = React.useState<string>();
  const [email, setEmail] = React.useState<string>();
  const [message, setMessage] = React.useState<string>();

  // const handleSubmit = (event: any) => {
  //   event.preventDefault();

  //   const myForm = event.target;
  //   const formData = new FormData(myForm);

  //   fetch('/', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //     body: new URLSearchParams(formData as any).toString(),
  //   })
  //     .then(() => alert('post completed.'))
  //     .catch((error) => alert(error));
  // };


  return (
    <form
      name="contact"
      data-netlify="true"
      // netlify={true}
      netlify-honeypot="bot-field" 
      // onSubmit={handleSubmit}
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
       <input type="hidden" name="form-name" value="contact" />
        <button type="submit">Send</button>
      </p>
    </form>
  );
};
