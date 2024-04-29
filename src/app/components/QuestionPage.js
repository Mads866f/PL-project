import React from 'react';

const QuestionPage = ({ question }) => {
    return (
        <div className="flex flex-col h-screen">
      {/* Main Content */}
      <main className="flex-grow bg-gradient-to-b from-purple-500 to-indigo-600 flex items-center justify-center">
        <div className="bg-white rounded container mx-auto px-4 py-8">
          {/* Question */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-4">{question.text}</h1>
          </div>

          {/* Answers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {question.answers.map((answer, index) => (
              <button key={index} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {answer}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
    );
}

export default QuestionPage