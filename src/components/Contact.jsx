import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db } from "../firebase";

const Contact = ({ userRef, listing }) => {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");
  function onChange(e) {
    setMessage(e.target.value);
  }

  useEffect(() => {
    async function getLandlord() {
      const docRef = doc(db, "users", userRef);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setLandlord(docSnap.data());
      } else {
        toast.error("Could not get landlord data");
      }
    }
    getLandlord();
  }, [userRef]);
  return (
    <>
      {landlord !== null && landlord.email}
      <div className="flex flex-col w-full">
        <p className="mt-6">
          Contact {landlord.name} for the {listing.name.tolowerCase()}{" "}
        </p>
        <div className="mt-3 mb-6">
          <textarea
            name="message"
            id="message"
            rows="2"
            value={message}
            onChange={onChange}
            className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-300"
          ></textarea>
        </div>
        <a
          href={`mailto:${landlord.email}?Subject=${listing.name}&body=${message}`}
        >
          <button
            className="px-7 py-3 bg-blue-600 text-white rounded text-sm uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:bg-blue-800 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full text-center mb-6"
            type="button"
          >
            Send Message
          </button>
        </a>
      </div>
    </>
  );
};

export default Contact;
