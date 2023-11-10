module.exports = {
  apps : {
    script: 'node ./bin/www',
  },   
  // Deployment Configuration
  deploy : {
    production : {
       "user" : "eric",
       "host" : ["10.1.10.15"],
       "ref"  : "origin/master",
       "repo" : "git@github.com:eric-merritt/mini-message-board-project.git",
       "path" : "/var/www/html/mini-message-board-project",
       "post-deploy" : "npm install"
    }
  }
};