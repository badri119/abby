export const EmailTemplate = ({ name, email, phone, address, service }) => (
  <div>
    <h1>New Contact Form Submission</h1>
    <div style={{ marginTop: "20px" }}>
      <h2>Contact Details:</h2>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Phone:</strong> {phone}
      </p>
      <p>
        <strong>Address:</strong> {address}
      </p>

      <div style={{ marginTop: "20px" }}>
        <h2>Service Interest:</h2>
        <p>{service}</p>
      </div>
    </div>
  </div>
);
