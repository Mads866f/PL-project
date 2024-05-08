import QuestionPage from '../../components/QuestionPage';
import { questions } from '../../questions';

export default function Quiz({ params }) {
    let index = params.questionId - 1;
    let currentPage = questions[index]
    
    return (
        <div>
            <QuestionPage key={index} question={currentPage} isTeacher={true}/>
        </div>
    );
};