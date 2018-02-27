const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const v1 = require('./api/v1');

const app = express();
const tools = require('./tools');

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(tools.getReportingInfo(tools.report));
app.use('/api/v1/', v1);
app.use(express.static('public'));

app.get('/', tools.homePage);
app.get('/test', tools.test);
app.get('/health', tools.healthCheck);

app.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
});
