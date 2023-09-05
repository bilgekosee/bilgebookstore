import React, { useState, useEffect } from "react";
import MarkDown from "react-markdown";
import readmePath from "../data/README.md";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  const [markDownText, setMarkDownText] = useState("");
  useEffect(() => {
    fetch(readmePath)
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        setMarkDownText(text);
      });

    document.title = "About || React BookStore App";
  }, []);

  return (
    <div class="card container border-0">
      <div class="card-body my-body">
        <div className="top-content text-center">
          <h1
            className="display-4"
            style={{ fontStyle: "normal", fontWeight: 400 }}
          >
            Hello, Welcome to BİLGE BookStore!
          </h1>
          <p className="lead">
            At BİLGE BookStore, we are passionate about the world of literature
            and the magic it brings into our lives. Our journey began with a
            simple idea: to create a haven for book enthusiasts where they can
            immerse themselves in the captivating realms of words and stories.
            As avid readers ourselves, we understand the joy of turning the
            pages of a well-worn novel, the excitement of discovering new
            authors, and the way books have the power to transport us to
            different times and places. With this passion at the core of our
            existence, we embarked on a mission to curate a diverse collection
            of books that cater to every taste, interest, and age. Our bookstore
            isn't just a place to purchase books; it's a community of
            like-minded individuals who share a deep appreciation for the
            written word. We take pride in providing a cozy and inviting space
            where you can browse through shelves filled with literary treasures,
            engage in thought-provoking discussions, and attend events that
            celebrate the art of storytelling. Our dedicated team is committed
            to assisting you in finding the perfect book, whether you're
            searching for an enthralling mystery, an inspiring biography, or a
            whimsical children's tale. We believe that books have the incredible
            ability to connect people and foster a sense of empathy and
            understanding in our ever-changing world. Thank you for being a part
            of our journey. Whether you're a lifelong book lover or just
            beginning to explore the world of reading, we're here to accompany
            you every step of the way. Join us at Bilge BookStore and let's
            continue to write this story together, one page at a time. Happy
            reading!
          </p>
          <hr className="my-4" />
        </div>
        <div className="bottom-content" style={{ fontSize: "1.2rem" }}>
          <MarkDown source={markDownText} />
        </div>
      </div>
    </div>
  );
};

export default About;
