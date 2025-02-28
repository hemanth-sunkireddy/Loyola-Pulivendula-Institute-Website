import { useEffect, useState } from "react";
import Container from "../../common/Container";
import ScrollToTop from "../../common/ScrollToTop";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import Input from "../../common/Input";
import { Button } from "../../common/Button";

const firebaseConfig = {
  apiKey: "AIzaSyCYbTOTqUajcIkd8oCvpEadFt7RyvBjfng",
  authDomain: "loyola-institute-website.firebaseapp.com",
  projectId: "loyola-institute-website",
  storageBucket: "loyola-institute-website.firebasestorage.app",
  messagingSenderId: "402915219080",
  appId: "1:402915219080:web:7ea779b21ce69e4829313d",
  measurementId: "G-M5X9CS51T0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface EventItem {
  id: string;
  event_date: string;
  event_description: string;
}

interface ContactFormItem {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: any;
}

const Admin = () => {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [eventDate, setEventDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [contactForms, setContactForms] = useState<ContactFormItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "events_and_notifications"));
        const eventsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as EventItem));
        setEvents(eventsData);
      } catch (error) {
        console.error("Error fetching events: ", error);
      }
    };

    const fetchContactForms = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "contact-form"));
        const formsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ContactFormItem));
        setContactForms(formsData);
      } catch (error) {
        console.error("Error fetching contact forms: ", error);
      }
    };

    const fetchData = async () => {
      setLoading(true);
      await Promise.all([fetchEvents(), fetchContactForms()]);
      setLoading(false);
    };

    fetchData();
  }, []);

  const addEvent = async () => {
    if (!eventDate || !eventDescription) return;
    try {
      const docRef = await addDoc(collection(db, "events_and_notifications"), {
        event_date: eventDate,
        event_description: eventDescription
      });
      setEvents([...events, { id: docRef.id, event_date: eventDate, event_description: eventDescription }]);
      setEventDate("");
      setEventDescription("");
      alert("Event added successfully!");
    } catch (error) {
      console.error("Error adding event: ", error);
    }
  };

  const deleteEvent = async (id: string) => {
    try {
      await deleteDoc(doc(db, "events_and_notifications", id));
      setEvents(events.filter(event => event.id !== id));
      alert("Event deleted successfully!");
    } catch (error) {
      console.error("Error deleting event: ", error);
    }
  };

  return (
    <Container>
      <section>
        <h4 className="text-center text-3xl">Contact Form Submissions</h4>

        {loading ? (
          <p>Loading contact form submissions...</p>
        ) : contactForms.length === 0 ? (
          <p>No contact form submissions yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <div className="block">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr>
                    <th className="border px-4 py-2 text-2xl font-extrabold">Name</th>
                    <th className="border px-4 py-2 font-bold text-2xl">Email</th>
                    <th className="border px-4 py-2 font-bold text-2xl">Message</th>
                    <th className="border px-4 py-2 font-bold text-2xl">Received On</th>
                  </tr>
                </thead>
                <tbody>
                  {contactForms.map((form) => (
                    <tr key={form.id}>
                      <td className="border px-4 py-2">{form.name}</td>
                      <td className="border px-4 py-2">{form.email}</td>
                      <td className="border px-4 py-2">{form.message}</td>
                      <td className="border px-4 py-2">{form.timestamp?.toDate().toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <div>
          <h4 className="text-center text-3xl">Add Event</h4>
          <div className="flex flex-col gap-4 p-4">
            <Input
              name="Event Date"
              type="date"
              placeholder="Event Date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />
            <Input
              name="Event Description"
              type="text"
              placeholder="Event Description"
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
            />
            <Button onClick={addEvent}>Add Event</Button>
          </div>
        </div>

        <div>
          <h4 className="text-center text-3xl">Delete Event</h4>
          {loading ? (
            <p>Loading events...</p>
          ) : events.length === 0 ? (
            <p>No events added yet.</p>
          ) : (
            <ul className="list-disc p-4 space-y-4">
              {events.map((event) => (
                <li key={event.id} className="flex justify-between items-center p-2 border rounded-md">
                  <span>{event.event_date}: {event.event_description}</span>
                  <Button onClick={() => deleteEvent(event.id)}>Delete</Button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      <ScrollToTop />
    </Container>
  );
};

export default Admin;
