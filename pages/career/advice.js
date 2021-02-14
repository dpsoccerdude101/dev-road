import Layout from '../../components/Layout';
import styles from "./career.module.scss";

const Advice = (props) => {

    return (
        <div>
            <Layout>
                <h1 className={styles.title}>Career Topics</h1>
                <section className={styles.padding}>
                    <h5 className={styles.subtitle}>Advice for your Job Search</h5>
                    <ol className={styles.left_list}>
                        <li>
                            <strong>Your First line of Offense in the Job Market: Portfolio & Resume</strong>
                            <ul>
                                <li>Communication on multiple fronts - LinkedIn, Networking, https://rocdev.org/</li>
                                <li>In addtion to job boards try Matching services: Tryplebyte, Hired.com and Vettery</li>
                                <li>Stay sharp with Coding Challenge sites: HackerRank, Leetcode, Coderbyte, Topcoder, Codility</li>
                                <li>Finish your Freecodecamp Certs to Pursue the <a href="https://guide.freecodecamp.org/miscellaneous/how-free-code-camps-nonprofits-projects-work/">Non-profit opportunity</a></li>
                                <li>Do your research on the Company - website, their blog github: Job market in Dev is strong, so you can afford to be a bit picky… Apply to companies doing work you’re actually interested in since that passion you have for it will end up being a strength during your interview anyways</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Side Projects</strong>
                            <ul>
                                <li>Merge your interests/hobbies with coding</li>
                                <li>Go build something - best way to learn & best asset in an interview</li>
                                <li><a href="https://tonsky.me/blog/github-redesign/">Just redesign an already designed website</a></li>
                                <li>Present it on Github</li>
                                <li>Contribute to an Open Source Project. Maybe through <a href="https://www.codetriage.com/">Code Triage</a></li>
                                <li>Explore an audience for it - it’s possible to monetize these</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Common Interview Questions</strong>
                            <ul>
                                <li>Background/Qualifications - Prep an outline (100% chance)</li>
                                <li>Behavioral Questions - Prep your Stories (80% chance)</li>
                                <li>Whiteboarding/Technical Questions (70% chance)</li>
                                <li>Take home assignments (40-50% chance)</li>
                                <li>Strengths - Find a github project of yours that matches their job description so you can speak about how you already have experience doing what they seek. If you don’t have a github project that matches yet, spend a week or two and make one before you apply.</li>
                                <li>Weaknesses - Framing it as your learning goals</li>
                                <li>Book: <a href="http://www.crackingthecodinginterview.com/">Cracking the Coding Interview</a></li>
                            </ul>
                        </li>
                        <li>
                            <strong>Remember: You should interview them too!</strong>
                            <ul>
                                <li>Perks? Typical day? Ticketing System? Scrum/Agile/Waterfall?</li>
                                <li>When was the last time they promoted someone on the dev team and why?</li>
                                <li>What’s the team like? Who’s your boss? What’s the stack/codebase like? Test coverage?</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Negotiation Tips</strong>
                            <ul>
                                <li>Entry level vs Mid vs Senior</li>
                                <li>Know your worth</li>
                                <li>Negotiate for value not just compensation</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Continuing Learning Resources</strong>
                            <ul>
                                <li><a>Continue with Freecodecamp.org!! Go further with Data Viz and backend Certs</a></li>
                                <li><a>https://guide.freecodecamp.org/miscellaneous/</a></li>
                                <li><a>https://www.freecodecamp.org/news/ivy-league-free-online-courses-a0d7ae675869/</a></li>
                                <li><a>https://fullstackopen.com/en/</a></li>
                                <li><a>Udemy: Javascript the weird parts</a></li>
                                <li><a>Udacity: https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011</a></li>
                                <li><a>Helsinki University: https://www.mooc.fi/en</a></li>
                                <li><a>Harvard University CS courses</a></li>
                                <li><a>Carnegie Mellon University</a></li>
                                <li><a>Github Student Developer education pack</a></li>
                            </ul>
                        </li>
                        <li>
                            <strong>Staying in the Know - Read/Listen to some Dev Media a few times a week</strong>
                            <ul>
                                <li>Podcasts</li>
                                <li>Articles straight to your inbox: Dev.to, Medium.com, Frontend Focus, Javascript Weekly, React Status</li>
                                <li>Youtube Channels: Academind, freeCodeCamp, Fireship, the Coding Train, Classsed </li>
                            </ul>
                        </li>
                        <li><a href="https://studentaffairs.duke.edu/blog/building-skills-and-exploring-careers-online">General Advice from Duke University</a></li>
                    </ol>
                </section>
            </Layout>
        </div>
    )
  }
  
  export default Advice