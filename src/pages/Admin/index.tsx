import { useEffect, useState } from "react";
import Container from "../../common/Container";
import ScrollToTop from "../../common/ScrollToTop";
import aboutContent from "../../content/History.json";
import MiddleBlockContent from "../../content/People.json";
import AboutBlock from "../../components/AboutBlock";

// Firebase imports
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Firebase configuration (same as before)
const firebaseConfig = {
  apiKey: "AIzaSyCYbTOTqUajcIkd8oCvpEadFt7RyvBjfng",
  authDomain: "loyola-institute-website.firebaseapp.com",
  projectId: "loyola-institute-website",
  storageBucket: "loyola-institute-website.firebasestorage.app",
  messagingSenderId: "402915219080",
  appId: "1:402915219080:web:7ea779b21ce69e4829313d",
  measurementId: "G-M5X9CS51T0"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Admin = () => {
  const [aboutHistory, setAboutHistory] = useState<any>(null);
  const [contactForms, setContactForms] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load historical content
    setAboutHistory(aboutContent);

    // Fetch contact form data from Firestore
    const fetchContactForms = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "contact-form"));
        const forms: any[] = [];
        querySnapshot.forEach((doc) => {
          forms.push({ id: doc.id, ...doc.data() });
        });
        setContactForms(forms);
      } catch (error) {
        console.error("Error fetching contact forms: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContactForms();
  }, []);

  return (
    <Container>
      {/* Render contact forms in a table */}
      <section>
        <h3>Contact Form Submissions</h3>
        {loading ? (
          <p>Loading contact form submissions...</p>
        ) : contactForms.length === 0 ? (
          <p>No contact form submissions yet.</p>
        ) : (
          <div className="overflow-x-auto">
            {/* Table Layout for larger screens */}
            <div className="hidden lg:block">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr>
                    <th className="border px-4 py-2 font-bold text-2xl">Name</th>
                    <th className="border px-4 py-2 font-bold text-2xl">Email</th>
                    <th className="border px-4 py-2 font-bold text-2xl">Message</th>
                    <th className="border px-4 py-2 font-bold text-2xl">Recieved On</th>
                  </tr>
                </thead>
                <tbody>
                  {contactForms.map((form, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">{form.name}</td>
                      <td className="border px-4 py-2">{form.email}</td>
                      <td className="border px-4 py-2">{form.message}</td>
                      <td className="border px-4 py-2">
                        {form.timestamp?.toDate().toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Flex Layout for smaller screens */}
            <div className="lg:hidden grid grid-cols-1 gap-4">
              {contactForms.map((form, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg p-4 flex flex-col space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <strong className="font-bold">Name:</strong>
                    <span>{form.name}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <strong>Email:</strong>
                    <span>{form.email}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <strong>Message:</strong>
                    <span>{form.message}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <strong>Timestamp:</strong>
                    <span>{form.timestamp?.toDate().toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <ScrollToTop />
    </Container>
  );
};

export default Admin;
