import QuestionPage from '../../components/QuestionPage';
import { questions } from '../../questions';

export default function Quiz({ params }) {
    let curentQuestion = questions[params.slug-1]; 
    let id = curentQuestion.number;
    let question = curentQuestion.question;
    let teacher = true; 
    
    return (
        <div>
            <QuestionPage key={id} index={id} question={question} isTeacher={teacher}/>
        </div>
    );
};