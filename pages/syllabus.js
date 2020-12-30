import { Table, Tag, Space } from 'antd';
import Link from 'next/link'
import Layout from '../components/Layout';
import styled from "styled-components";
import SvgIcon from "../components/common/SvgIcon";


const columns = [
  {
    title: 'Topic',
    dataIndex: 'topic',
    key: 'topic',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Hours',
    dataIndex: 'hours',
    key: 'hours',
  },
  {
    title: 'Level',
    key: 'level',
    dataIndex: 'level',
    render: levels => (
      <>
        {levels.map(level => {
          let color = level === 'i' ? 'geekblue' : 'green';
          if (level.includes('iii')) {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={level}>
              {level.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  }
];

const data = [
  {key: 1, level: ['i'], topic: 'Semantic HTML', hours: 8},
  {key: 2, level: ['i'], topic: 'CSS, Media Objects & Layout', hours: 8},
  {key: 3, level: ['i'], topic: 'Mobile Responsive Design', hours: 12},
  {key: 4, level: ['i'], topic: 'Accessibility & UI/UX', hours: 4},
  {key: 5, level: ['i'], topic: 'Individual Projects (Portfolio)', hours: 4},
  {key: 6, level: ['i'], topic: 'Browsers and the DOM', hours: 8},
  {key: 7, level: ['ii'], topic: 'JavaScript Essentials', hours: 14},
  {key: 8, level: ['ii'], topic: 'JSON & AJAX & HTTP/S & APIs', hours: 8},
  {key: 9, level: ['ii'], topic: 'Advanced JavaScript & ES6+', hours: 14},
  {key: 10, level: ['ii'], topic: 'Javascript Data Structures', hours: 4},
  {key: 11, level: ['ii'], topic: 'Functional Programming & CS Concepts', hours: 8},
  {key: 12, level: ['ii'], topic: 'Git & GitHub & VSCode', hours: 6},
  {key: 13, level: ['ii'], topic: 'SASS', hours: 4},
  {key: 14, level: ['ii'], topic: 'Javascript Design Patterns', hours: 12},
  {key: 15, level: ['iii'], topic: 'Performance & Debugging', hours: 8},
  {key: 16, level: ['ii'], topic: 'React & JS Frameworks', hours: 12},
  {key: 17, level: ['iii'], topic: 'JS Build Tools (Webpack, Babel)', hours: 8},
  {key: 18, level: ['iii'], topic: 'Unit Testing', hours: 4},
  {key: 19, level: ['iii'], topic: 'State Management (Context, Redux)', hours: 6},
  {key: 20, level: ['iii'], topic: 'Using Firebase', hours: 12},
  {key: 21, level: ['iii'], topic: 'Final Project (CRUD Application)', hours: 12},
  {key: 22, level: ['iii'], topic: 'Resume, Interviewing and Career Skills', hours: 4},
  {key: 23, level: [], topic: 'Total', hours: 180},
];

const Padding = styled.div`
  max-width: 70vw;
  padding: 1rem;
  margin: 0 auto;
`
const Title = styled.h1`
  text-align: center;
`

const Syllabus = (props) => {
  return (
      <Layout>
        <h1>MCC Front End Professional Certification</h1>
        <p>Equip yourself with the modern skills and tools necessary to work as a professional Front End Developer or even launch your own online business venture!</p>
        <p>Certificates awarded to students based on attendance and completion of homework & projects</p>
        <h2>Class Details</h2>
        <p>Classes are held online via Zoom Meet Teleconferencing</p>
        <p><strong>Time:</strong> Tuesday & Thursday 5:30pm - 8:30pm</p>
        <p><strong>Instructor:</strong> W. Jamie Vaughn - wvaughniv@monroecc.edu</p>

        <h2>Classroom Segments</h2>
        <ul style={{maxWidth: 480, margin: '0 auto'}}>
            <li>
                <SvgIcon src="checked_circle.svg" />
                <p> Tool Tips! - Overview of web development tools for every developer</p>
            </li>
            <li>
                <SvgIcon src="checked_circle.svg" />
                <p> Main Lecture Topic: Review of Material via Slides and Documentation</p>
            </li>
            <li>
                <SvgIcon src="checked_circle.svg" />
                <p> Survey of Computer Science: A look into practical computer science topics and theory</p>
            </li>
            <li>
                <SvgIcon src="checked_circle.svg" />
                <p> Code-Along: Hands on, guided coding exercises</p>
            </li>
            <li>
                <SvgIcon src="checked_circle.svg" />
                <p> Assessments & Challenges: Quizes and coding Challenges to test comprehension</p>
            </li>
            <li>
                <SvgIcon src="checked_circle.svg" />
                <p> Project Sessions: Open time for working on assigned projects with guidance</p>
            </li>
            <li>
                <SvgIcon src="checked_circle.svg" />
                <p> Assigned Homework: Extracurricular exercises from <a href='https://freecodecamp.org'>Freecodecamp</a></p>
            </li>
        </ul>
        <Title>Course Syllabus</Title>
        <Padding>
          <Table columns={columns} dataSource={data} />
        </Padding>
      </Layout>
    
  )
}

export default Syllabus


