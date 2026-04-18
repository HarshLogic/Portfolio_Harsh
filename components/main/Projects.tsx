import React from "react";
import Image from "next/image";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center pt-8 pb-20"
      id="projects"
    >
      <div className="w-full flex flex-col items-center mb-12 md:mb-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-400 to-cyan-500 py-6 md:py-10 text-center">
          Featured Projects
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-2"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 z-20">
        <ProjectCard
          src="/FinFlow.png"
          title="FinFlow"
          description="Full-stack MERN application for tracking expenses, managing investments, and projecting future wealth."
          link="https://fin-flow-personal-finance.vercel.app/"
          key="1"
          github="https://github.com/HarshLogic/FinFlow-Personal-Finance"
        />
        <ProjectCard
          src="/storify.png"
          title="Bankify"
          description="A production-grade double-entry ledger system with atomic transfers, real-time balance derivation, and an immutable audit trail — built on Node.js, Express, MongoDB, and React."
          link=""
          key="2"
          github="https://github.com/HarshLogic/Bankify-Banking-Dashboard"
        />
        <ProjectCard
          src="/Zepto.png"
          title="Zepto-SQL"
          description="Data Analyst Portfolio Project with end-to-end SQL Data Analysis of Zepto E-commerce Inventory data using PostgreSQL."
          link=""
          key="3"
          github="https://github.com/HarshLogic/E-commerce-Zepto-"
        />
        <ProjectCard
          src="/netflix.png"
          title="Netflix Movies & TV Shows Clustering"
          description="Built a machine learning project to analyze and cluster Netflix movies and TV shows based on genres, descriptions, and metadata. The model groups similar content to reveal patterns and enhance recommendation systems."
          link=""
          key="4"
          github="https://github.com/HarshLogic/Netflix-Movies-Suggestion-"
        />
        <ProjectCard
          src="/cryptotracker.png"
          title="Stock Mark"
          description="Predict the monthly closing price of Yes Bank stock using Regression Model."
          link=""
          key="5"
          github="https://github.com/HarshLogic/STOCK_MARK"
        />
        <div className="col-span-full flex flex-col items-center space-y-4 mt-4">
          <p className="text-center text-gray-500 text-sm max-w-2xl">
            Looking for more? Visit my GitHub profile for all repositories, more recent work, and latest projects.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a
              href="https://github.com/HarshLogic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm rounded-full px-5 py-2 border border-purple-600/40 text-purple-300 hover:bg-purple-600/10 transition"
            >
              <Image src="/github.svg" alt="GitHub" width={16} height={16} className="opacity-80" />
              View All Repos
            </a>
            <a
              href="https://drive.google.com/file/d/1ru8QZ1eBtqNJAuThF3Xk0zOlQnOIdzGI/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm rounded-full px-5 py-2 border border-cyan-600/40 text-cyan-300 hover:bg-cyan-600/10 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM12 18l-4-4h3V9h2v5h3l-4 4z" />
              </svg>
              Resume
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
