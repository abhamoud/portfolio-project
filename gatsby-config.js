export default {
  siteMetadata: {
    title: "Ahmed Benyoucef",
    description: "Ahmed Benyoucef personal website and blog",
    social: {
      twitter: "https://https://twitter.com/hamoudben11",
      linkedin: "https://https://www.linkedin.com/in/hamoud-ben-53358b221/",
      facebook: "https://facebook.com/profile.php?id=100072751586430",
    },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat:300,400`, `source sans pro\:300,400,400i,700`],
        display: "swap",
      },
    },
  ],
};
