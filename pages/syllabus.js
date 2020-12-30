import {useState} from 'react'
import { Table, Tag, Space } from 'antd';
import Link from 'next/link'
import Layout from '../components/Layout';
import styled from "styled-components";
import SvgIcon from "../components/common/SvgIcon";
import ContentBlock from "../components/ContentBlock";
import MiddleBlock from "../components/MiddleBlock";


const columns = [
  {
    title: 'Topic',
    dataIndex: 'topic',
    key: 'topic',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Level (click to sort by)',
    key: 'level',
    dataIndex: 'level',
    render: levels => (
      <>
        {levels.map(level => {
          let color = level === 'i' ? 'geekblue' : 'green';
          if (level.startsWith('iii')) {
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
  },
  {
    title: 'Hours',
    dataIndex: 'hours',
    key: 'hours',
  }
];

const rows = [
  {level: ['i'], topic: 'Semantic HTML', hours: 12},
  {level: ['i'], topic: 'CSS, Media Objects & Layout', hours: 12},
  {level: ['i'], topic: 'CSS Frameworks', hours: 3},
  {level: ['i'], topic: 'Mobile Responsive Design', hours: 6},
  {level: ['i'], topic: 'Accessibility & UI/UX', hours: 3},
  {level: ['i'], topic: 'Individual Portfolio Project', hours: 3},
  {level: ['i'], topic: 'GitHub & VSCode', hours: 3},
  {level: ['i'], topic: 'Web Browsers and the DOM', hours: 9},
  {level: ['ii'], topic: 'JavaScript & ES6 Essentials', hours: 12},
  {level: ['ii'], topic: 'Javascript Data Structures', hours: 3},
  {level: ['ii'], topic: 'JSON & AJAX & HTTP/S', hours: 6},
  {level: ['ii'], topic: 'REST & GraphQL APIS', hours: 6},
  {level: ['ii'], topic: 'Git & Version Control', hours: 3},
  {level: ['ii'], topic: 'Functional Programming & CS Concepts', hours: 6},
  {level: ['ii'], topic: 'SASS', hours: 3},
  {level: ['ii'], topic: 'Javascript Design Patterns', hours: 9},
  {level: ['ii'], topic: 'Javascript Application Project', hours: 3},
  {level: ['iii'], topic: 'Intro to React & JS Frameworks', hours: 9},
  {level: ['iii'], topic: 'Advanced JavaScript & Beyond ES6', hours: 12},
  {level: ['iii'], topic: 'JS Build Tools (Babel, Parcel, Snowpack)', hours: 6},
  {level: ['iii'], topic: 'Advanced React', hours: 9},
  {level: ['iii'], topic: 'State Management (Context, Redux)', hours: 6},
  {level: ['iii'], topic: 'Firebase, NodeJS', hours: 9},
  {level: ['iii'], topic: 'Linting & Testing', hours: 3},
  {level: ['iii'], topic: 'Performance & Debugging', hours: 3},
  {level: ['iii'], topic: 'Final Project (CRUD Application)', hours: 12},
  {level: ['iii'], topic: 'Resume, Interviewing and Career Skills', hours: 9},
].map((obj, ind) => ({...obj, key: ind}));
const total = rows.reduce((acc, cur) => acc += cur.hours, 0)
const data = rows //.concat([{level: ['i, ii, iii'], topic: 'Total', hours: total}])
const footer =  () => <><strong>{'Total hours for all levels: '}</strong><span>{total}</span></>

const Padding = styled.div`
  max-width: 70vw;
  padding: 1rem;
  margin: 0 auto;
`
const Title = styled.h1`
  text-align: center;
`

const Syllabus = ({user, logout}) => {
const [sieve, setSieve] = useState(0)

  return (
      <Layout>
        <MiddleBlock
            title={"MCC Front End Professional Certification"}
            content={"Equip yourself with the modern skills and tools necessary to work as a professional Front End Developer or even launch your own online business venture! Certificates are awarded to students based on attendance and completion of homework & projects."}
            icon={false}
          />
        <div className='syllabus-content'>
          <ContentBlock
            type="left"
            title={"Class Details"}
            content={"Classes are held via Open Source Jitsi Meet Teleconferencing"}
            section={[
              {
                "title": "Time:",
                "content": "Tuesdays & Thursdays, 5:30pm - 8:30pm",
                "icon": "notes.svg"
              },
              {
                "title": "Instructor:",
                "content": "W. Jamie Vaughn wvaughniv@monroecc.edu",
                "icon": "notes.svg"
              }
            ]}
            icon={false}
          />
          <ContentBlock
            type="left"
            title={"Classroom Segments"}
            // content={"Classes are held online via Zoom Meet Teleconferencing"}
            section={[
              {
                "title": "Tool Tips!",
                "content": "Overview of web development tools for every developer",
                "icon": "checked_circle.svg"
              },
              {
                "title": "Main Lecture Topic",
                "content": "Review of Material via Slides and Documentation",
                "icon": "checked_circle.svg"
              },
              {
                "title": "Survey of Computer Science",
                "content": "A look into practical computer science topics and theory",
                "icon": "checked_circle.svg"
              },
              {
                "title": "Code-Along",
                "content": "Hands on, guided coding exercises",
                "icon": "checked_circle.svg"
              },
              {
                "title": "Assessments & Challenges",
                "content": "Quizes and coding Challenges to test comprehension",
                "icon": "checked_circle.svg"
              },
              {
                "title": "Project Sessions",
                "content": "Open time for working on assigned projects with guidance",
                "icon": "checked_circle.svg"
              },
              {
                "title": "Assigned Homework",
                "content": "Extracurricular exercises from Freecodecamp.org",
                "icon": "checked_circle.svg"
              }
            ]}
            dense={true}
            icon={false}
            />
        </div>
        <Title>Course Syllabus</Title>
        <Padding>
          <Table 
            size={'small'}
            columns={columns} 
            dataSource={sieve%4 ? data.filter(d => d.level[0].length === sieve%4) : data} 
            footer={footer}
            onHeaderRow={() => {
              return {
                onClick: () => setSieve(state => state + 1)
              }
            }}
              />
        </Padding>
      </Layout>
  )
}

export default Syllabus


