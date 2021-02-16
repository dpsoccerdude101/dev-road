import Layout from '../../components/Layout';
import styles from './faq.module.css'

let questions =[
    {
        q: 'How do we do our homework?', 
        a: 'Just complete the FCC exercises and make your profile public, then I\'ll be able to see your progress'
    },
    {
        q: 'How do we communicate with you and other students?', 
        a: 'We use an app called slack. You should have received an invite. If not ask me to resend it.'
    },
]

const Question = ({key, question, answer}) => (
    <li key={key}>
        <h5 className={styles.question}>{question}</h5>
        <p>{answer}</p>
    </li>
)

const FAQ = (props) => {

    return (
        <div>
            <Layout>
            <h1 className={styles.title}>FAQ</h1>
            <section className={styles.padding}>
                <ol>
                    {questions.map((q, i ) => <Question key={i} question={q.q} answer={q.a} />)}
                </ol>
            </section>
            </Layout>
        </div>
    )
  }
  
  export default FAQ