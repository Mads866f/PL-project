import React from 'react';
import Link from 'next/link';

const QuizDoneComponent = () => {
    return (
        <div className="flex flex-col h-screen">
            {/* Main Content */}
            <main className="flex-grow bg-gradient-to-b from-purple-500 to-indigo-600 flex items-center justify-center">
                <div className="bg-white rounded container mx-auto px-4 py-8">
                    {/* Quiz Done Message */}
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold mb-4">Quiz gennemført!</h1>
                        <p className="text-lg">Du har gennemført quizzen med succes.</p>
                    </div>
                    {/* Link Back to Landing Page */}
                    <div className="text-center">
                        <Link href="/">
                            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg inline-block">
                                tilbage til Startside
                            </div>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default QuizDoneComponent;