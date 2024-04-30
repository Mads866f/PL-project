import React from 'react';
import Link from 'next/link';

const QuestionPage = ({ question }) => {
    return (
        <div className="flex flex-col h-screen">
      {/* Main Content */}
      <main className="flex-grow bg-gradient-to-b from-purple-500 to-indigo-600 flex items-center justify-center">
        <div className="bg-white rounded container mx-auto px-4 py-8">
          {/* Question */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-4">{question.id}. {question.question}</h1>
          </div>

          {/* Answers */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <a href={`/user/${question.id + 1}`} className="bg-red-500 hover:bg-red-700 text-white font-bold py-8 px-4 rounded-lg flex items-center justify-center text-3xl">
    😔
  </a>
  <a href={`/user/${question.id + 1}`} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-8 px-4 rounded-lg flex items-center justify-center text-3xl">
    😐️
  </a>
  <a href={`/user/${question.id + 1}`} className="bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-4 rounded-lg flex items-center justify-center text-3xl">
    🤩
  </a>
</div>

        </div>
      </main>
    </div>
    );
}

export default QuestionPage