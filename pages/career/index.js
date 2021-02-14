import Layout from '../../components/Layout';
import styles from './career.module.scss'

const remoteJobs = [
    {title: 'JSRemotely', url: 'https://jsremotely.com/'},
    {title: '42jobs', url: 'https://www.42jobs.io/react'},
    {title: '6nomads', url: 'https://6nomads.com/'},
    {title: 'Remote Jobb', url: 'https://remotejobb.com/'},
    {title: 'Who Is Hiring?', url: 'https://whoishiring.io/'},
    {title: 'Under Wear Worker', url: 'https://underwearworker.com/'},
    {title: 'RemoteOK', url: 'https://remoteok.io/'},
    {title: 'Remote Work', url: 'https://remote.work/category/programming'},
    {title: 'WFH Jobs', url: 'https://wfhjobs.us/search-jobs/?query=front+end+developer&location='},
    {title: 'We Work Remotely', url: 'https://weworkremotely.com/'},
    {title: 'Hacker News Job List', url: 'https://news.ycombinator.com/jobs'},
    {title: 'Hacker News: Who is Hiring', url: 'https://remoteleaf.com/whoishiring'},
    {title: 'Angel List Jobs', url: 'https://angel.co/jobs/signup?source=homepage'},
    {title: 'Virtual Vocations', url: 'https://VirtualVocations.com'},
    {title: 'Hubstaff', url: 'https://talent.hubstaff.com/'},
    {title: 'Remote.co', url: 'https://remote.co'},
    {title: 'Working Nomads', url: 'https:// WorkingNomads.co'},
    {title: 'Jobspresso', url: 'https://JobsPresso.co'},
    {title: 'Remotive', url: 'https://https://remotive.io/'},
    {title: 'Just Remote', url: 'https://JustRemote.co'},
    {title: 'Skip The Drive', url: 'https://SkipTheDrive.com'},
    {title: 'Outsourcely', url: 'https://Outsourcely.com'},
    {title: 'Let\'s Work Remotely', url: 'https://LetsWorkRemotely.com'},
    {title: 'Remote Circle', url: 'https://RemoteCircle.com'},
    {title: 'Remote Work Hub', url: 'https://RemoteWorkHub.com'},
    {title: 'Virtual Vocations', url: 'https://VirtualVocations.com'},
    {title: 'Virtual Vocations', url: 'https://VirtualVocations.com'},
    {title: 'Virtual Vocations', url: 'https://VirtualVocations.com'},
    {title: 'Virtual Vocations', url: 'https://VirtualVocations.com'},
    
    
]
const freelance = [
    {title: 'MoonLight', url: 'https://www.moonlightwork.com/'},
    {title: 'Crossover', url: 'https://www.crossover.com/jobs/'},
    {title: 'GumRoad', url: 'https://www.gumroad.com/'},
    {title: 'TopTal', url: 'https://www.toptal.com/'},
    {title: 'Topcoder', url: 'https://www.topcoder.com/community/gigstart'},
    
    
]
const govJobs = [
    {title: 'US Digital Service', url: 'https://www.usds.gov/apply'},
    {title: '18F', url: 'https://18f.gsa.gov/join/'},
]
const jobNetworks = [
    {title: 'Front End Developers Slack Community', url: 'https://frontenddevelopers.slack.com/'},
    {title: 'LinkedIn Jobs', url: 'https://www.linkedin.com/jobs/'},
    {title: 'Indeed', url: 'https://www.indeed.com/'},
]
const otherJobs = [
    {title: 'ClimateBase', url: 'https://climatebase.org/'},
    {title: 'Authentic Jobs', url: 'https://AuthenticJobs.com'},
    {title: 'Dynamite Jobs', url: 'https://DynamiteJobs.co'},
]
const Jobs = (props) => {

    return (
        <div>
            <Layout>
            <h1 className={styles.title}>Developer Career Links</h1>
            <section className={styles.padding}>
                <h5 className={styles.subtitle}>A Curated Catalog of Career Links & Resources</h5>
                <ul><strong>Job Networks</strong>
                    {
                        jobNetworks.map(j => <li><a href={j.url}>{j.title}</a></li>)
                    }
                </ul>
                <ul><strong>Freelance Jobs</strong>
                    {
                        freelance.map(j => <li><a href={j.url}>{j.title}</a></li>)
                    }
                </ul>
                <ul><strong>Gov Jobs</strong>
                    {
                        govJobs.map(j => <li><a href={j.url}>{j.title}</a></li>)
                    }
                </ul>
                <ul><strong>Remote Job Boards</strong>
                    {
                        remoteJobs.map(j => <li><a href={j.url}>{j.title}</a></li>)
                    }
                </ul>
                <ul><strong>Climate Jobs</strong>
                    {
                        otherJobs.map(j => <li><a href={j.url}>{j.title}</a></li>)
                    }
                </ul>
            </section>
            </Layout>
        </div>
    )
  }
  
  export default Jobs