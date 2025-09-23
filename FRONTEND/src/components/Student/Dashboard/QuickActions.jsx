import React, { useState } from "react";

const QuickActions = ({ setActiveView }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [portfolio, setPortfolio] = useState("");

  const generatePortfolio = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setPortfolio("This is your AI-generated portfolio content...");
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
      <div className="flex flex-wrap gap-4">
        <button
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          onClick={() => setActiveView("My Documents")}
        >
          Upload a Document
        </button>
        <button
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          onClick={() => setActiveView("AI Career Guidance")}
        >
          Get AI Guidance
        </button>
        <button
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          onClick={generatePortfolio}
        >
          Generate My Portfolio
        </button>
      </div>

      {/* Portfolio Modal */}
      {(isGenerating || portfolio) && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
            {isGenerating ? (
              <p className="text-gray-600 text-center">Generating portfolio...</p>
            ) : (
              <>
                <h3 className="text-lg font-bold mb-2 text-gray-800">AI-Generated Portfolio</h3>
                <textarea
                  className="w-full p-3 border rounded h-40 mb-3 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  value={portfolio}
                  readOnly
                />
                <div className="flex justify-end gap-2">
                  <button
                    className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
                    onClick={() => navigator.clipboard.writeText(portfolio)}
                  >
                    Copy
                  </button>
                  <button
                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition-colors"
                    onClick={() => setPortfolio("")}
                  >
                    Close
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default QuickActions;
