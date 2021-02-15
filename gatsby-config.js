module.exports = {
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: 'lrqhg2cpid7x',
                accessToken: 'oC7PNjMD1F2ZG7btQ4nvGK3ExyUigJ2n28b4PPcRRC4',
                downloadLocal: true
            }
        },
        'gatsby-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-transformer-remark'
    ]
}