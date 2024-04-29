import QuestionPage from '../components/QuestionPage';



export default function User() {
    return (
        <div>
            {questions.map(question => (
            <QuestionPage key={question.id} question={question} />
        ))}
        </div>
      );
};

const questions = [
    {
        id: 1,
        question: "question one",
        answers: ["good", "test1", "bad"]
    }
];