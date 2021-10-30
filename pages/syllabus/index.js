import { useState } from "react";
import { Table, Tag } from "antd";
import Layout from "../../components/Layout";
import styled from "styled-components";
import ContentBlock from "../../components/ContentBlock";
import MiddleBlock from "../../components/MiddleBlock";
import { rows, details, sections } from "../../content/syllabus";
// import styles from './syllabus.module.css'

// AntD <Table> config
const columns = [
  {
    title: "Topic",
    dataIndex: "topic",
    key: "topic",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Level",
    key: "level",
    dataIndex: "level",
    filters: [
      {
        text: "i",
        value: "i",
      },
      {
        text: "ii",
        value: "ii",
      },
      {
        text: "iii",
        value: "iii",
      },
    ],
    onFilter: (value, record, index) => record.level.indexOf(value) === 0,
    render: (levels) => (
      <>
        {levels.map((level) => {
          let color = level === "i" ? "geekblue" : "green";
          if (level.startsWith("iii")) {
            color = "volcano";
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
    title: "Hours",
    dataIndex: "hours",
    key: "hours",
  },
];

const Padding = styled.div`
  max-width: 70vw;
  padding: 1rem;
  margin: 0 auto;
`;
const Title = styled.h1`
  text-align: center;
`;
const footer = (num) => (
  <>
    <strong>{"Total hours selected levels:"}</strong>
    <span></span>
    <span>{num}</span>
  </>
);

const Syllabus = () => {
  const sum = (arr) => arr.reduce((acc, cur) => (acc += cur.hours), 0);
  const [total, setTotal] = useState(sum(rows));

  return (
    <>
      <Layout>
        <MiddleBlock
          title={"MCC Front End Professional Certification"}
          content={
            "Equip yourself with the modern skills and tools necessary to work as a professional Front End Developer or even launch your online business venture! We award certificates to students based on attendance and completion of homework & projects."
          }
          icon={false}
        />
        <div className="syllabus-content">
          <ContentBlock
            type="left"
            title={"Class Details"}
            content={
              "Classes are held via Discord Voice Channels Teleconferencing"
            }
            section={details}
            icon={false}
          />
          <ContentBlock
            type="left"
            title={"Classroom Segments"}
            section={sections}
            dense={true}
            icon={false}
          />
        </div>
        <Title>
          Course Syllabus{" "}
          <a
            href="https://campusce.monroecc.edu/monroecc/course/course.aspx?C=848"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            🔗
          </a>
        </Title>
        <Padding>
          <Table
            onChange={(page, sort, ev, filter) =>
              setTotal(sum(filter.currentDataSource))
            }
            size={"small"}
            columns={columns}
            dataSource={rows}
            footer={() => footer(total)}
          />
        </Padding>
      </Layout>
    </>
  );
};

export default Syllabus;
