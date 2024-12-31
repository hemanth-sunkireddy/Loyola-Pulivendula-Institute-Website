import { lazy } from "react";
import admissionContent from "../../content/Admissions.json"; // Import the admission content JSON

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Admissions = () => {
  const { admissionCriteria } = admissionContent;

  return (
    <Container>
      <h1>Admissions</h1>
      
      {/* Admission Criteria */}
      <section>
        <h1 className="md-text-2xl text-3xl">Seat Distribution</h1>
        <p>{admissionCriteria.quota.minorityQuota}</p>
        <p>{admissionCriteria.quota.generalQuota}</p>

        <h2 className="md-text-2xl text-3xl">Courses Available</h2>
        <ul>
          {admissionCriteria.coursesAvailable.map((course, index) => (
            <li key={index}>
              <strong>{course.courseName}</strong>: {course.intake} seats (Duration: {course.duration})
            </li>
          ))}
        </ul>

        <h2 className="md-text-2xl text-3xl">Admission Policy</h2>
        <p>{admissionCriteria.admissionPolicy.minorityQuotaSeats}</p>
        <p>{admissionCriteria.admissionPolicy.governmentQuotaSeats}</p>

        <h2 className="md-text-2xl text-3xl">Eligibility Criteria</h2>
        <p>{admissionCriteria.eligibilityCriteria.entranceExam}</p>
        <ul>
          {admissionCriteria.eligibilityCriteria.requirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>

        <h2 className="md-text-2xl text-3xl">Documents Required</h2>
        <ul>
          {admissionCriteria.documentsRequired.map((document, index) => (
            <li key={index}>{document}</li>
          ))}
        </ul>
      </section>

      <ScrollToTop />
    </Container>
  );
};

export default Admissions;
