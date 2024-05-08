import QuestionPage from '../components/QuestionPage';
import questions from '../questions'


export default function User() {
    return (
        <div>
            {questions.map(question => (
            <QuestionPage key={question.id} question={question} />
        ))}
        </div>
      );
};