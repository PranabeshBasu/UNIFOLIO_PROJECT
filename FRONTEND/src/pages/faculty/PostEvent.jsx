// pages/faculty/PostEvent.jsx
import React, { useState } from "react";
import Card from "../../components/faculty/FacultyCard";

const PostEvent = () => {
  const [toast, setToast] = useState({ show: false, message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setToast({ show: true, message: "Event/Notice published successfully!" });
    e.target.reset();
    setTimeout(() => setToast({ show: false, message: "" }), 3000);
  };

  return (
    <div className="space-y-8">
      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed top-5 right-5 p-4 rounded-lg shadow-lg text-white bg-primary">
          {toast.message}
        </div>
      )}

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Post Event or Notice</h1>
        <p className="text-slate-500">
          Create announcements, event details, or important notices for students.
        </p>
      </div>

      {/* Form Card */}
      <Card className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              required
              className="w-full border-slate-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>

          <div>
            <label htmlFor="type" className="block text-sm font-medium text-slate-700 mb-1">
              Type
            </label>
            <select
              id="type"
              className="w-full border-slate-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            >
              <option>Event</option>
              <option>Notice</option>
              <option>Workshop</option>
              <option>Placement Drive</option>
            </select>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              rows="5"
              required
              className="w-full border-slate-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            ></textarea>
          </div>

          <div>
            <label htmlFor="attachment" className="block text-sm font-medium text-slate-700 mb-1">
              Attachment (Optional)
            </label>
            <input
              type="file"
              id="attachment"
              className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-light file:text-primary hover:file:bg-blue-200"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-primary text-white font-semibold py-2.5 px-6 rounded-lg hover:bg-primary-hover transition-colors"
            >
              Publish
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default PostEvent;
