import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  const [date, setDate] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [submissionStatus, setSubmissionStatus] = useState(null); // To handle submission feedback
  const [isSubmitting, setIsSubmitting] = useState(false); // To handle button text
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    if (date) {
      const fetchTimes = async () => {
        try {
          const times = window.fetchAPI(new Date(date));
          setAvailableTimes(times);
        } catch (error) {
          console.error("Error fetching times:", error);
        }
      };
      fetchTimes();
    }
  }, [date]);

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      guests: "",
      occasion: "",
    },
    validationSchema: Yup.object({
      date: Yup.string().required("Date is required"),
      time: Yup.string().required("Time is required"),
      guests: Yup.number()
        .required("Number of guests is required")
        .min(1, "Minimum 1 guest")
        .max(10, "Maximum 10 guests"),
      occasion: Yup.string().required("Occasion is required"),
    }),
    onSubmit: async (values) => {
      setIsSubmitting(true); // Change button text to "Submitting"
      try {
        const submissionSuccess = await window.submitAPI(values);
        if (submissionSuccess) {
          formik.resetForm(); // Optionally reset the form after successful submission
          navigate("/Booked"); // Navigate to /Booked
        } else {
          setSubmissionStatus("Reservation failed. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setSubmissionStatus("Reservation failed. Please try again.");
      } finally {
        setIsSubmitting(false); // Reset button text
      }
    },
  });

  return (
    <article className="booking-wrapper">
      <div className="booking-container">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="res-date">Choose Date</label>
            <input
              type="date"
              id="res-date"
              {...formik.getFieldProps("date")}
              className={
                formik.touched.date && formik.errors.date ? "input-error" : ""
              }
              onChange={(e) => {
                setDate(e.target.value);
                formik.setFieldValue("date", e.target.value);
              }}
            />
            {formik.touched.date && formik.errors.date ? (
              <div className="error"> • {formik.errors.date}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor="res-time">Choose Time</label>
            <select
              id="res-time"
              {...formik.getFieldProps("time")}
              className={
                formik.touched.time && formik.errors.time ? "input-error" : ""
              }
            >
              <option value="">select</option>
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            <span className="material-symbols-outlined">arrow_drop_down</span>
            {formik.touched.time && formik.errors.time ? (
              <div className="error"> • {formik.errors.time}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor="guests">Number of Guests</label>
            <input
              type="number"
              placeholder="1"
              min={1}
              max={10}
              id="guests"
              {...formik.getFieldProps("guests")}
              className={
                formik.touched.guests && formik.errors.guests
                  ? "input-error"
                  : ""
              }
            />
            {formik.touched.guests && formik.errors.guests ? (
              <div className="error"> • {formik.errors.guests}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              {...formik.getFieldProps("occasion")}
              className={
                formik.touched.occasion && formik.errors.occasion
                  ? "input-error"
                  : ""
              }
            >
              <option value="">select occasion</option>
              <option value="bday">Birthday</option>
              <option value="marriage">Marriage</option>
            </select>
            <span className="material-symbols-outlined">arrow_drop_down</span>
            {formik.touched.occasion && formik.errors.occasion ? (
              <div className="error"> • {formik.errors.occasion}</div>
            ) : null}
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Reserve a Table"}
          </button>
        </form>
      </div>
    </article>
  );
};

export default BookingForm;
