import React, { useState } from 'react';
import '../assets/styles.css';

const Testimonials = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCert, setActiveCert] = useState('');

  const openModal = (img) => {
    setActiveCert(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setActiveCert('');
    setModalOpen(false);
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="section-title">Testimonials</h2>
      <p className="section-subtitle">Internship Experience & Certificates</p>

      <div className="testimonials-grid">
        {/*  testimonial */}
        <div className="testimonial-card">
          <h3>InternPe - Web Development Intern</h3>
          <p>Duration: Aug 2024 – Sep 2024</p>
          <p>I developed real-world web applications and collaborated with professionals.</p>
          <button className="btn" onClick={() => openModal("/NAVEEN KUMAR.png")}>
            View Certificate
          </button>
        </div>

        {/* Add more testimonial cards if needed in future */}
        <div className="testimonial-card">
          <h3>Dart</h3>
          <p>Duration: Aug 2024 – Sep 2024</p>
          <p>I developed real-world web applications and collaborated with professionals.</p>
          <button className="btn" onClick={() => openModal("/Dart.PNG")}>
            View Certificate
          </button>
        </div>

<div className="testimonial-card">
          <h3>Meta certificate</h3>
          <p>Duration: Aug 2024 – Sep 2024</p>
          <p>I developed real-world web applications and collaborated with professionals.</p>
          <button className="btn" onClick={() => openModal("/meta.jpg")}>
            View Certificate
          </button>
        </div>

<div className="testimonial-card">
          <h3>Ms Excel for Data analyst</h3>
          <p>Duration: Aug 2024 – Sep 2024</p>
          <p>I developed real-world web applications and collaborated with professionals.</p>
          <button className="btn" onClick={() => openModal("/ms excel.jpg")}>
            View Certificate
          </button>
        </div>

      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <img src={activeCert} alt="Certificate Preview" className="modal-img" />
            <span className="close-btn" onClick={closeModal}>&times;</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
