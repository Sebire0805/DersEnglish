import React, { useState } from "react";
import { div } from "framer-motion/client";
const LessonBooking = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [lessonType, setLessonType] = useState("General English");
  const [lessonMode, setLessonMode] = useState("group");
  const [platform, setPlatform] = useState("Zoom");

  const calculatePrice = () => {
    return lessonMode === "group" ? 50 : 100;
  };

  const handleBooking = () => {
    alert("Your lesson has been booked!");
  };

  return (
  <div className="book">
    
       <div className="container mt-4 p-4 border rounded shadow bg-light" style={{ maxWidth: "500px" }}>
    
      <h4 className="mb-4 text-center">
        <i className="fas fa-chalkboard-teacher me-2"></i>Book a Lesson
      </h4>

      <div className="mb-3">
        <label className="form-label">
          <i className="fas fa-calendar-alt me-2"></i>Date
        </label>
        <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>

      <div className="mb-3">
        <label className="form-label">
          <i className="fas fa-clock me-2"></i>Time
        </label>
        <input type="time" className="form-control" value={time} onChange={(e) => setTime(e.target.value)} />
      </div>

      <div className="mb-3">
        <label className="form-label">
          <i className="fas fa-book me-2"></i>Lesson Type
        </label>
        <select className="form-select" value={lessonType} onChange={(e) => setLessonType(e.target.value)}>
          <option>General English</option>
          <option>Speaking Practice</option>
          <option>Exam Preparation</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">
          <i className="fas fa-user-friends me-2"></i>Lesson Mode
        </label>
        <select className="form-select" value={lessonMode} onChange={(e) => setLessonMode(e.target.value)}>
          <option value="group">Group Lesson (1 hour)</option>
          <option value="individual">Individual Lesson (1 hour)</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">
          <i className="fas fa-video me-2"></i>Platform
        </label>
        <select className="form-select" value={platform} onChange={(e) => setPlatform(e.target.value)}>
          <option>Zoom</option>
          <option>Skype</option>
          <option>WhatsApp</option>
        </select>
      </div>

      <div className="mb-3 text-end">
        <span className="fw-bold">
          <i className="fas fa-dollar-sign me-1"></i>Price: {calculatePrice()} AZN
        </span>
      </div>

      <button className="btn btn-primary w-100" onClick={handleBooking}>
        <i className="fas fa-check me-2"></i>Book Now
      </button>
    </div>
  </div>
    
  );
};

export default LessonBooking;