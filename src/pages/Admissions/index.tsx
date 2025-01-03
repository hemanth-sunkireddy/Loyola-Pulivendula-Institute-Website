import { lazy } from "react";
import admissionContent from "../../content/Admissions.json"; // Import the admission content JSON

// Lazy load Container and ScrollToTop
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Admissions = () => {
  const { admissionCriteria } = admissionContent;

  return (
    <Container>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Admissions</h1>

      {/* Admission Criteria Section */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Seat Distribution</h2>
          <p className="text-lg text-gray-700">Minority Quota: {admissionCriteria.quota.minorityQuota}</p>
          <p className="text-lg text-gray-700">General Quota: {admissionCriteria.quota.generalQuota}</p>
        </div>

        {/* Courses Available */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Courses Available</h2>
          <ul className="space-y-2">
            {admissionCriteria.coursesAvailable.map((course, index) => (
              <li key={index} className="text-lg text-gray-700">
                <strong className="font-semibold">{course.courseName}</strong>: {course.intake} seats (Duration: {course.duration})
              </li>
            ))}
          </ul>
        </div>

        {/* Admission Policy */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Admission Policy</h2>
          <p className="text-lg text-gray-700">{admissionCriteria.admissionPolicy.minorityQuotaSeats}</p>
          <p className="text-lg text-gray-700">{admissionCriteria.admissionPolicy.governmentQuotaSeats}</p>
        </div>

        {/* Eligibility Criteria */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Eligibility Criteria</h2>
          <p className="text-lg text-gray-700">{admissionCriteria.eligibilityCriteria.entranceExam}</p>
          <ul className="space-y-2">
            {admissionCriteria.eligibilityCriteria.requirements.map((requirement, index) => (
              <li key={index} className="text-lg text-gray-700">{requirement}</li>
            ))}
          </ul>
        </div>

        {/* Documents Required */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Documents Required</h2>
          <ul className="space-y-2">
            {admissionCriteria.documentsRequired.map((document, index) => (
              <li key={index} className="text-lg text-gray-700">{document}</li>
            ))}
          </ul>
        </div>
      </section>

      <ScrollToTop />
    </Container>
  );
};

export default Admissions;
