import React, { useState } from "react";
import "./MyWorks.css";
import mywork_data from "../../assets/mywork_data";

const MyWorks = () => {
  const [selectedWork, setSelectedWork] = useState(null);

  const openModal = (work) => {
    setSelectedWork(work);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedWork(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="works-section" id="works">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Selected Works</h2>
          <p className="section-subtitle">
            A curated selection of projects showcasing innovation and craftsmanship.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {mywork_data.map((work) => (
            <div
              key={work.id}
              className="project-card"
              onClick={() => openModal(work)}
            >
              <div className="project-image-wrapper">
                <img
                  src={work.image}
                  alt={work.title}
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-overlay">
                  <div className="overlay-content">
                    <h3>{work.title}</h3>
                    <div className="project-meta">
                      <span>{work.category}</span>
                      <span>{work.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedWork && (
          <div className="project-modal-overlay" onClick={closeModal}>
            <div className="project-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={closeModal}>
                ×
              </button>
              <div className="modal-content">
                <div className="modal-image-container">
                  <img
                    src={selectedWork.image}
                    alt={selectedWork.title}
                    className="modal-main-image"
                  />
                </div>
                <div className="modal-details">
                  <div className="modal-header">
                    <h3>{selectedWork.title}</h3>
                    <p className="project-description">
                      {selectedWork.description}
                    </p>
                  </div>
                  <div className="modal-body">
                    <div className="project-details">
                      <div className="detail-item">
                        <span className="detail-label">Developed Year:</span>
                        <span className="detail-value">{selectedWork.year}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Front-End:</span>
                        <span className="detail-value">
                          {selectedWork.frontend.join(", ")}
                        </span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Back-End:</span>
                        <span className="detail-value">
                          {selectedWork.backend.join(", ")}
                        </span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Framework:</span>
                        <span className="detail-value">
                          {selectedWork.framework.join(", ")}
                        </span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Database:</span>
                        <span className="detail-value">
                          {selectedWork.database.join(", ")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyWorks;