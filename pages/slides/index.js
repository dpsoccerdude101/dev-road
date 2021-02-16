import Layout from '../../components/Layout';
import styles from "./slides.module.css";

let slidesI = [
  {title: 'HTML', url: 'http://wjv.io/deck/01-html/#/'},
  {title: 'CSS I', url: 'http://wjv.io/deck/03-css/#/'},
  {title: 'CSS II', url: 'http://wjv.io/deck/04-css-2/#/'},
  {title: 'The DOM', url: 'http://wjv.io/deck/05-dom/#/'},
]

let slidesII = [
  {title: 'HTML', url: 'http://wjv.io/deck/01-html/#/'},
  {title: 'CSS I', url: 'http://wjv.io/deck/03-css/#/'},
  {title: 'CSS II', url: 'http://wjv.io/deck/04-css-2/#/'},
  {title: 'The DOM', url: 'http://wjv.io/deck/05-dom/#/'},
]

let slidesIII = [
  {title: 'HTML', url: 'http://wjv.io/deck/01-html/#/'},
  {title: 'CSS I', url: 'http://wjv.io/deck/03-css/#/'},
  {title: 'CSS II', url: 'http://wjv.io/deck/04-css-2/#/'},
  {title: 'The DOM', url: 'http://wjv.io/deck/05-dom/#/'},
]


const Slides = (props) => {

    return (
        <div>
            <Layout>
            <h1 className={styles.title}>Slides</h1>
            <section className={styles.padding}>
                <h5 className={styles.subtitle}>Section I: HTML & CSS</h5>
                <ol>
                  {
                    slidesI.map((s, i) => <li key={i}><a href={s.url}>{s.title}</a></li>)
                  }
                </ol>
            </section>
            <section className={styles.padding}>
                <h5 className={styles.subtitle}>Section II: Javascript</h5>
                <ol>
                  {
                    slidesII.map((s, i) => <li key={i}><a href={s.url}>{s.title}</a></li>)
                  }
                </ol>
            </section>
            <section className={styles.padding}>
                <h5 className={styles.subtitle}>Section III: React</h5>
                <ol>
                  {
                    slidesIII.map((s, i) => <li key={i}><a href={s.url}>{s.title}</a></li>)
                  }
                </ol>
            </section>
            </Layout>
        </div>
    )
  }
  
  export default Slides