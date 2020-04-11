import React from "react";
import Header from "../components/Header";
import TextBlock from "../components/HeaderBlocks/TextBlock";

const LandingPage = () => {
  return (
    <div className="App">
      <Header backLink="/">
        <TextBlock>Privacy Policy</TextBlock>
        <TextBlock></TextBlock>
      </Header>
      <div style={{ padding: "15px", textAlign: "left" }}>
        <br />
        1. We use tracking technologies, such as cookies, local storage, and
        google analytics.
        <br />
        <br />
        2. Cookies and local storage may be set and accessed on your computer.
        Upon your first visit to the Services, a cookie or local storage will be
        sent to your computer that uniquely identifies your browser. “Cookies”
        and local storage are small files containing a string of characters that
        is sent to your computer’s browser and stored on your device when you
        visit a website. Many major Web services use cookies to provide useful
        features for their users. Each Web site can send its own cookie to your
        browser. Most browsers are initially set up to accept cookies. You can
        reset your browser to refuse all cookies or to indicate when a cookie is
        being sent; however, if you reject cookies, you will not be able to
        store your Medical Information or your Personalised Identity Statement
        or take full advantage of our Services. Additionally, if you clear all
        cookies on your browser at any point after setting your browser to
        refuse all cookies or indicate when a cookie is being sent, you will
        have to again reset your browser to refuse all cookies or indicate when
        a cookie is being sent.
      </div>
    </div>
  );
};

export default LandingPage;
