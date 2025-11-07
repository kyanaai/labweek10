import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData(formData); // Save for displaying below
  };

  return (
    <div className="container">
      <h1>Lab Week 10 – Data Entry</h1>

      <form className="card" onSubmit={handleSubmit}>
        <div className="row">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
        </div>

        <div className="row">
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Jane Doe"
          />
        </div>

        <div className="row">
          <label htmlFor="address">Address</label>
          <input
            id="address"
            name="address"
            type="text"
            required
            value={formData.address}
            onChange={handleChange}
            placeholder="160 Kendal Ave"
          />
        </div>

        <div className="row two">
          <div>
            <label htmlFor="city">City</label>
            <input
              id="city"
              name="city"
              type="text"
              required
              value={formData.city}
              onChange={handleChange}
              placeholder="Toronto"
            />
          </div>

          <div>
            <label htmlFor="province">Province</label>
            <select
              id="province"
              name="province"
              required
              value={formData.province}
              onChange={handleChange}
            >
              <option value="">Select a province...</option>
              <option value="AB">Alberta</option>
              <option value="BC">British Columbia</option>
              <option value="MB">Manitoba</option>
              <option value="NB">New Brunswick</option>
              <option value="NL">Newfoundland and Labrador</option>
              <option value="NS">Nova Scotia</option>
              <option value="ON">Ontario</option>
              <option value="PE">Prince Edward Island</option>
              <option value="QC">Quebec</option>
              <option value="SK">Saskatchewan</option>
              <option value="NT">Northwest Territories</option>
              <option value="NU">Nunavut</option>
              <option value="YT">Yukon</option>
            </select>
          </div>
        </div>

        <div className="row">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            id="postalCode"
            name="postalCode"
            type="text"
            required
            value={formData.postalCode}
            onChange={handleChange}
            placeholder="M5R 1M3"
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div className="output">
          <p><strong>Email:</strong><br />{submittedData.email}</p>
          <p><strong>Full Name:</strong><br />{submittedData.fullName}</p>
          <p><strong>Address:</strong><br />{submittedData.address}</p>
          <p><strong>City:</strong><br />{submittedData.city}</p>
          <p><strong>Province:</strong><br />{submittedData.province}</p>
          <p><strong>Postal Code:</strong><br />{submittedData.postalCode}</p>
        </div>
      )}
    </div>
  );
}

export default App;