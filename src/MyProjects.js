import React from "react";
import { Link } from "react-router-dom";

export default function MyProjects() {
  return (
    <>
      <section className="hero">
        <nav>
          <h2>Welcome</h2>
        </nav>
      </section>
      <div className="non__login projects ">
        <h1>My React Projects</h1>
        <ul className="listing-pojects">
          <li
            onClick={() =>
              window.open("https://react-recipe-surch-app.netlify.app")
            }
          >
            Recipe Search App v1
          </li>
          <p>
            In this Project you can search for Recipes according to
            Healthlabels. This will fetch data according to your input from an
            Existing JSON file <span onClick={() =>
              window.open("https://recipe-search-v3-1.netlify.app/")
            }>Link !</span>
          </p>
          <br />
          <hr />
          <li
            onClick={() =>
              window.open("https://recipe-search-v3-1.netlify.app/")
            }
          >
            Recipe Search App v2
          </li>
          <p>
            In this Project you can search for Recipes which you've added after clicking on <strong>ADD KAR</strong> which will be saved in localStorage, and you can also add and Remove Products from cart, lastly, Don't underestimate the search bar, try it after adding 4-5 products <span onClick={() =>
              window.open("https://recipe-search-v3-1.netlify.app/")
            }>Link !</span>
          </p>
          <br />
        </ul>
      </div>
    </>
  );
}
