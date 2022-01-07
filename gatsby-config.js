require('dotenv').config();
console.log("URL here", process.env.HARPER_DB_URL)
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "book-library",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-harperdb`,
      options: {
        secret: process.env.HARPER_DB_SECRET_KEY,
        url: process.env.HARPER_DB_URL,
        payload: {
          "operation": "sql",
          "sql":"SELECT * FROM library.book"
        },
        type: "book"
      },
    },
  ],
};

