require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `The Farnon Home Team`,
    description: `If you are less than a year from buying or selling your home, lets us get a game plan together for you! Contact us now while rates are historical lows.`,
    author: `@gatsbyjs`,
    siteUrl: `https://farnonteam-bi8.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allSanityPost } }) => {
              return allSanityPost.edges.map(edge => {
                return Object.assign({}, edge.node, {
                  title: edge.node.title,
                  description: edge.node.excerpt,
                  date: edge.node.publishedAt,
                  url: site.siteMetadata.siteUrl + "/" + edge.node.slug.current,
                  guid:
                    site.siteMetadata.siteUrl + "/" + edge.node.slug.current,
                  custom_elements: [{ "content:encoded": edge.node.body }],
                })
              })
            },
            query: `
              {
                allSanityPost{
                  edges {
                    node {
                      id
                      title
                      publishedAt
                      excerpt
                      slug {
                        current
                      }
                      body
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Gatsby + Sanity CMS",
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId:
          process.env.GATSBY_SANITY_PROJECT_ID ||
          process.env.SANITY_PROJECT_ID ||
          `l670kdwr`,
        dataset:
          process.env.GATSBY_SANITY_PROJECT_DATASET ||
          process.env.SANITY_PROJECT_DATASET ||
          `production`,
        // a token with read permissions is required
        // if you have a private dataset
        token:
          process.env.SANITY_TOKEN ||
          `skcw6qFRUrQWoq5uS7uRxZnywIsH5rTfZkEIUg533SgOySFu9Tu6FcHnknulTYZc31awKqjUDtjaXZoITY24AsF1DNd1s2AHPCNWw4oB0xTu9PBKK3y72zaKkMd4OgvQgd5LHtMbrkZkSMEIOPMtqMPyRsMKzAPANeI6oJWaWcvVmTa4zqBX`,
        watchMode: true,
        overlayDrafts: true,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
            variants: [`400`, `900`],
          },
          {
            family: `Rubik`,
            variants: [`300`, `400`],
          },
          {
            family: `Montserrat`,
            variants: [`400`, `900`],
          },
          {
            family: `Courgette`,
            variants: [`400`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sanity CMS Template`,
        short_name: `sanitytemplate`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Farnon-Favicon.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-transformer-remark`,
  ],
}
