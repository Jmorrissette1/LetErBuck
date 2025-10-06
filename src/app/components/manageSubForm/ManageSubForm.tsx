"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import styles from "./ManageSub.module.css";

const ManageAccountForm = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    plateNum: "",
    sticker: "",
    locationSelect: "default",
    subscriptionType: "",
    comments: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const toastId = toast.loading("📤 Sending email...");
    try {
      const response = await fetch("/api/manage-sub", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("✅ Email sent successfully!", { id: toastId });
        console.log("Email sent successfully");
        setFormData(initialFormData);
      } else {
        toast.error("❌ Error sending email", { id: toastId });
        console.error("Error sending email");
      }
    } catch (error) {
      toast.error("❌ Something went wrong. Try again.", { id: toastId });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3 className={styles.formHeader}>Change Pass</h3>

      <div className={styles.formFeild}>
        <div className={styles.formItem}>
          <label htmlFor="name">First</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="email">Last</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className={styles.formFeild}>
        <div className={styles.formItem}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formItem}>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className={styles.formFeild}>
        <div className={styles.formItem}>
          <label htmlFor="plateNum">License Plate Number:</label>
          <input
            type="text"
            id="plateNum"
            name="plateNum"
            value={formData.plateNum}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formItem}>
          <label htmlFor="sticker">Windshield Sticker Number</label>
          <input
            type="text"
            id="sticker"
            name="sticker"
            value={formData.sticker}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className={styles.formFeild}>
        <label htmlFor="locationSelect">
          Location where Pass was purchased:
        </label>
        <select
          id="locationSelect"
          name="locationSelect"
          value={formData.locationSelect}
          onChange={handleChange}
          required
        >
          <option value="default">---</option>
          <option value="Sheridan">Sheridan</option>
          <option value="Casper2nd">Casper - 2nd Street</option>
          <option value="CasperCY">Casper - CY Street</option>
          <option value="Gillette">Gillette</option>
        </select>
      </div>

      <div>
        <label>Subscription Type:</label>
        <div>
          <input
            type="radio"
            id="wyomingWorks"
            name="subscriptionType"
            value="Wyoming Works"
            checked={formData.subscriptionType === "Wyoming Works"}
            onChange={handleChange}
          />
          <label htmlFor="wyomingWorks">Wyoming Works</label>
        </div>
        <div>
          <input
            type="radio"
            id="steamboatCeramics"
            name="subscriptionType"
            value="Steamboat Ceramics"
            checked={formData.subscriptionType === "Steamboat Ceramics"}
            onChange={handleChange}
          />
          <label htmlFor="steamboatCeramics">Steamboat Ceramic</label>
        </div>
        <div>
          <input
            type="radio"
            id="bigHorn"
            name="subscriptionType"
            value="Big Horn"
            checked={formData.subscriptionType === "Big Horn"}
            onChange={handleChange}
          />
          <label htmlFor="bighorn">Big Horn Experience</label>
        </div>
        <div>
          <input
            type="radio"
            id="blackTooth"
            name="subscriptionType"
            value="Black Tooth"
            checked={formData.subscriptionType === "Black Tooth"}
            onChange={handleChange}
          />
          <label htmlFor="blackTooth">Black Tooth Deluxe</label>
        </div>
      </div>
      <div className={styles.formFeild}>
        <div className={styles.formItem}>
          <label htmlFor="comments">Any additional comments?</label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            required
           className={styles.textarea}
          />
        </div>
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

export default ManageAccountForm;
