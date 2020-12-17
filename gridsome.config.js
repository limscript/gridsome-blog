// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
module.exports = {
  siteName: 'limscript',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000,
        contentTypes: ['blog', 'people', 'version', 'project', 'info'],
        // singleTypes: ['impressum'],
        // loginData: {
        //   identifier: '17198669671@163.com',
        //   password: '408123Li'
        // }
      }
    }
  ]
}
