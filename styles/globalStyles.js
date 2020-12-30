import { createGlobalStyle } from "styled-components";

import antd from "antd/dist/antd.css";

const Styles = createGlobalStyle`

    ${antd}

    body,
    html,
    a {
        font-family: 'Ubuntu', sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #fff;
        overflow-x: hidden;
    }

    .nav {
        box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.3);
        margin-bottom: 1rem;
    }
    .nav button {
        margin-top: 0;
    }
    .profile-icon {
        width: 1.5rem;
        margin-right: 3px;
    }
    a:hover {
        color: #000;
        fill: rgb(255,130,92);
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Ubuntu', sans-serif;
        color: #0a1f44;
        font-size: 2.575rem;
        line-height: 3.0625rem;
      
        @media only screen and (max-width: 414px) {
          font-size: 1.625rem;
        }
    }

    p {
        color: #343D48;
        font-size: 1.125rem;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #2E186A;
        :hover {
            color: rgb(255, 130, 92);
        }
    }
    button a {
        color: #fff;
    }
    button a.syllabus {
        color: #2E186A;
        transition: font-size 250ms;
        :hover {
            font-size: 1.15rem;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        padding: 1.25rem;
        text-align: left;
        padding-top: 2.5rem;
        padding-right: 2rem;
    }
    
    .ant-select-selector {
        background-color: #FCFCFD !important; 
        border: none !important;
    }

    .anticon.ant-notification-notice-icon-success {
        color: rgb(255,130,92);
    }

    .ant-select-focused .ant-select-selector,
    .ant-select-selector:focus,
    .ant-select-selector:active,
    .ant-select-open .ant-select-selector {
        border-color: #d9d9d9 !important;
        box-shadow: none !important;
    }
    .ant-table-footer {
        display: flex;
        justify-content: flex-end;
        span {
            margin-right: 8vw;
        }
    }
    .auth {
        color: white;
        margin: 0;
    }
    button .auth:hover, .button-link:hover {
        color: #2E186A;
    }
    .button-link {
        background: rgb(255, 130, 92);
        padding: 1rem;
        color: white;
        font-size: 1rem;
        font-weight: 700;
        width: 100%;
        border: none;
        border-radius: 8px;
        height: 60px;
        outline: none;
        cursor: pointer;
        margin-top: 0.625rem;
        max-width: 180px;
    }
    .figures {
        display: flex;
        justify-content: center;
    }
    .figure {
        max-height: 100px;
        width: auto;
    }
    .syllabus-content {
        display: flex;
        justify-content: space-around;
        padding: 0 1rem;
        @media only screen and (max-width: 768px) {
          flex-direction: column;
        }
    }
    .pic {grid-area: pic}
    .name { grid-area: name }
    .email { grid-area: email }
    .join { grid-area: join}
    .login { grid-area: login }
    .phone{ grid-area: phone }
`;

export default Styles;
