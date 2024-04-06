import React, { useState } from 'react';

const ServiceRequestForm = () => {
  const [issueDescription, setIssueDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tutaj możesz dodać logikę wysyłania formularza do API
    console.log(issueDescription);
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-5">
      <div className="mb-3">
        <label htmlFor="issueDescription" className="form-label">Opis problemu</label>
        <textarea
          id="issueDescription"
          className="form-control"
          value={issueDescription}
          onChange={(e) => setIssueDescription(e.target.value)}
          rows="3"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Wyślij zgłoszenie</button>
    </form>
  );
};

export default ServiceRequestForm;
