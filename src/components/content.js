import React from "react";

import { MDXRenderer } from "gatsby-plugin-mdx";

import styles from "./content.module.css";

const Content = ({ content }) => {
  return (
    <div className="max-w-2xl mx-auto language-diff-javascript diff-highlight line-numbers">
      <div className={styles.markdown}>
        <MDXRenderer>{content}</MDXRenderer>
      </div>
    </div>
  );
};

export default Content;