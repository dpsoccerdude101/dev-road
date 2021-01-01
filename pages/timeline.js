import Layout from '../components/Layout';
import styled from "styled-components";
import SvgIcon from '../components/common/SvgIcon'
import data from "../content/data"

// import "./style.css"

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"

const Title = styled.h1`
  text-align: center;
`

const Timeline = (props) => {
    console.log(props)
    let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#f9c74f" };
    return (
        <div>
            <Layout>
                <Title>Course Timeline</Title>
                <VerticalTimeline>
                  {data.map((element) => {
                    let isWorkIcon = element.icon === "work";
                    let showButton =
                      element.buttonText !== undefined &&
                      element.buttonText !== null &&
                      element.buttonText !== "";
          
                    return (
                      <VerticalTimelineElement
                        key={element.key}
                        date={element.date}
                        dateClassName="date"
                        iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                        icon={isWorkIcon ? <SvgIcon src="work.svg" /> : <SvgIcon src="school.svg" />}
                      >
                        <h3 className="vertical-timeline-element-title">
                          {element.title}
                        </h3>
                        <h5 className="vertical-timeline-element-subtitle">
                          {element.location}
                        </h5>
                        <p id="description">{element.description}</p>
                        {showButton && (
                          <a
                            className={`button ${
                              isWorkIcon ? "workButton" : "schoolButton"
                            }`}
                            href="/"
                          >
                            {element.buttonText}
                          </a>
                        )}
                      </VerticalTimelineElement>
                    );
                  })}
                </VerticalTimeline>
            </Layout>
        </div>
    )
  }
  
  export default Timeline