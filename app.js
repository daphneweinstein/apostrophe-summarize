var site = require('apostrophe-site')({
  // Allows apostrophe-sites to require stuff
  // on our behalf and also find our root folder
  root: module,

  // Used to name the local mongodb database,
  // if you don't pass a db option with more details
  shortName: 'mysite',

  // Hostname you plan to give your site
  hostName: 'mysite.com',

  // You can always log in at /login as admin, with this password
  adminPassword: 'SOMETHING SECURE PLEASE',

  // a random session secret
  sessionSecret: 'SOMETHING RANDOM',

  // Any options accepted by the apostrophe-pages module go here.
  // The `name` field refers to the template in the views/pages folder.
  pages: {
    // List all the page types users should be able to add here
    types: [
      { name: 'default', label: 'Default Page Template' },
      { name: 'home', label: 'Home Page Template' }
    ]
  },

  modules: {
    // Styles required by the new editor, must go FIRST
    'apostrophe-site': {}
  },

  afterInit: function(callback) {
    self.modules['apostrophe-summarizer'].summarizeArea(foo.content, 10, function(summmary) {
      foo.summary = summary;
      db.save(foo, function(result){
      //you have access to outside vars here
      });
      console.log(foo.summary); //not null
    })

    console.log(foo.summary);

    callback(null);
  }

});