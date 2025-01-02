"use client";

import React, { useState } from "react";
import styles from "./ContactForm.module.css";

const FundraisingForm = () => {
  const initialFormData = {
    organizationName: "",
    name: "",
    email: "",
    phone: "",
    location: "",
    fundraiserType: "",
    timeline: "",
    participants: "",
    nameOnCheck: "",
    checkMessage: "",
    addressMessage: "",
    fundsMessage: "",
    comments: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-fundraising-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success
        console.log("Email sent successfully");
        setFormData(initialFormData);
      } else {
        // Handle error
        console.error("Error sending email");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className="text-3xl font-bold underline">
        Please Fill Out the Form Below
      </h2>
      <h3 className={styles.formHeader}>Contact Details</h3>
      <div className={styles.formFeild}>
        <label htmlFor="organizationName">Name of Charity/Organization:</label>
        <input
          type="text"
          id="organizationName"
          name="organizationName"
          value={formData.organizationName}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formFeild}>
        <label htmlFor="name">Contact Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formFeild}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formFeild}>
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <h3 className={styles.formHeader}>Event Details</h3>
      <div className={styles.formFeild}>
        <label htmlFor="phone">Fundraiser Type:</label>
        <input
          type="text"
          id="fundraiserType"
          name="fundraiserType"
          value={formData.fundraiserType}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formFeild}>
        <label htmlFor="phone">Let&apos;er Buck Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formFeild}>
        <label htmlFor="timeline">Desired Timeline:</label>
        <input
          type="date"
          id="timeline"
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formFeild}>
        <label htmlFor="participants">Number of Participants:</label>
        <input
          type="text"
          id="participants"
          name="participants"
          value={formData.participants}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formFeild}>
        <label htmlFor="nameOnCheck">Name on Check:</label>
        <input
          type="text"
          id="nameOnCheck"
          name="nameOnCheck"
          value={formData.nameOnCheck}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formFeild}>
        <label htmlFor="checkMessage">Address to send check:</label>
        <textarea
          id="checkMessage"
          name="checkMessage"
          value={formData.checkMessage}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formFeild}>
        <label htmlFor="fundsMessage">How will the funds be used?:</label>
        <textarea
          id="fundsMessage"
          name="fundsMessage"
          value={formData.fundsMessage}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formFeild}>
        <label htmlFor="comments">Additional comments:</label>
        <textarea
          id="comments"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          required
        />
      </div>
      <input
        type="image"
        src="./images/submit.png"
        alt="Submit"
        className={styles.submitFormBtn}
        disabled={isSubmitting}
      ></input>
    </form>
  );
};

export default FundraisingForm;
