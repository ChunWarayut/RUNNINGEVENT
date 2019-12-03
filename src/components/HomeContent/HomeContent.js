import React from 'react';
// import { useEffect, useState } from 'react';
import './HomeContent.css';
import Container from '@material-ui/core/Container'
function HomeContent() {
//   const [date, setDate] = useState(null);
//   useEffect(() => {
//     async function getDate() {
//       const res = await fetch('/api/date');
//       const newDate = await res.text();
//       setDate(newDate);
//     }
//     getDate();
//   }, []);
  return (
    <main>
    <Container>
      <h1>Sungnoen 2020 ไกลแค่ไหน Slow jogging ก็ไปถึง</h1>
      <h2>
        Deployed with
        <a
          href="https://zeit.co/docs"
          target="_blank"
          rel="noreferrer noopener"
        >
          ZEIT Now
        </a>
        !
      </h2>
      <p>
        <a
          href="https://github.com/zeit/now-examples/tree/master/create-react-app-functions"
          target="_blank"
          rel="noreferrer noopener"
        >
          This project
        </a>
        was bootstrapped with
        <a href="https://facebook.github.io/create-react-app/">
          Create React App
        </a>
        and contains three directories, <code>/public</code> for static assets,
        <code>/src</code> for components and content, and <code>/api</code>
        which contains a serverless <a href="https://golang.org/">Go</a>
        function. See
        <a href="/api/date">
          <code>api/date</code> for the Date API with Go
        </a>
        .
      </p>
      <br />
      <h2>The date according to Go is:</h2>
      </Container>
    </main>
  );
}

export default HomeContent;
