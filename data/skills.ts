export type SkillType = 'Development' | 'Applications' | 'Management' | 'Software';

interface Skill {
  title: string;
  icon?: string;
  img?: string;
  type: SkillType;
}

const skills: Skill[] = [
  // --- Desarrollo ---
  { title: 'JavaScript', icon: 'devicon-javascript-plain', type: 'Development' },
  { title: 'TypeScript', icon: 'devicon-typescript-plain', type: 'Development' },
  { title: 'HTML5', icon: 'devicon-html5-plain', type: 'Development' },
  { title: 'CSS3', icon: 'devicon-css3-plain', type: 'Development' },
  { title: 'Sass', icon: 'devicon-sass-original', type: 'Development' },
  { title: 'Bootstrap', icon: 'devicon-bootstrap-plain', type: 'Development' },
  { title: 'Vue.js', icon: 'devicon-vuejs-plain', type: 'Development' },
  { title: 'Vuex', img: '/images/skills/vuex.svg', type: 'Development' },
  { title: 'Vuetify', icon: 'devicon-vuetify-plain', type: 'Development' },
  { title: 'AngularJS', icon: 'devicon-angularjs-plain', type: 'Development' },
  { title: 'Node.js', icon: 'devicon-nodejs-plain', type: 'Development' },
  { title: 'Express', icon: 'devicon-express-original', type: 'Development' },
  { title: 'NestJS', icon: 'devicon-nestjs-plain', type: 'Development' },
  { title: 'NPM', icon: 'devicon-npm-original-wordmark', type: 'Development' },
  { title: 'Firebase', icon: 'devicon-firebase-plain', type: 'Development' },
  { title: 'MongoDB', icon: 'devicon-mongodb-plain colored', type: 'Development' },
  { title: 'PostgreSQL', icon: 'devicon-postgresql-plain colored', type: 'Development' },
  { title: 'Socket.io', img: '/images/skills/socketio.svg', type: 'Development' },
  { title: 'Kafka', img: '/images/skills/kafka.svg', type: 'Development' },
  { title: 'RabbitMQ', img: '/images/skills/rabbitmq.svg', type: 'Development' },
  { title: 'WordPress', icon: 'devicon-wordpress-plain', type: 'Development' },
  { title: 'Modyo', img: '/images/skills/modyo.svg', type: 'Development' },
  { title: 'VeeValidate', img: '/images/skills/veevalidate.svg', type: 'Development' },

  // --- Gestión ---
  { title: 'Git', icon: 'devicon-git-plain', type: 'Management' },
  { title: 'GitHub', icon: 'devicon-github-original', type: 'Management' },
  { title: 'GitLab', icon: 'devicon-gitlab-plain', type: 'Management' },
  { title: 'Bitbucket', icon: 'devicon-bitbucket-original', type: 'Management' },
  { title: 'Jira', icon: 'devicon-jira-plain', type: 'Management' },
  { title: 'Confluence', icon: 'devicon-confluence-original', type: 'Management' },

  // --- Software ---
  { title: 'Visual Studio', icon: 'devicon-visualstudio-plain', type: 'Software' },

  // --- Aplicaciones ---
  { title: 'Figma', icon: 'devicon-figma-plain', type: 'Applications' },
  { title: 'Photoshop', icon: 'devicon-photoshop-plain', type: 'Applications' },
  { title: 'Illustrator', icon: 'devicon-illustrator-plain', type: 'Applications' },
];

export default skills;