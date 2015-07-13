var sum = require( 'sum' );

//var site = require('apostrophe-site');

module.exports = factory;

function factory(options, callback) {
  return new Construct(options, callback);
}

function Construct(options, callback) {
  var self = this;
  self.apos = options.apos;

  var superBeforePutPage = self.apos.beforePutPage;

  self.apos.beforePutPage = function(req, page, callback) {
    page.summary = self.summarizeArea(page, 'body', options.summarize);

    superBeforePutPage(req, page, callback);
  };


  //self.apos.getAreaPlaintext(page, name)//add from before

  self.summarizeArea = function(page, name, options, callback) {
  	var text = self.apos.getAreaPlaintext(page, name, {});
  	return self.summarizeText(text, options, callback)

  }


  self.summarizeText = function(text, options, callback) {
  	
    if(!options) {
      options = {};
    }

    if(text.length == 0) {
      var abstract = "";
    }

    else {

    	var abstract = sum({
      /**
       * `corpus`: String - is the string you want to summarize
       */
      'corpus': text,

      /**
       * `nSentences`: Number - controls the number of sentences from the original text included in the abstact
       */
      'nSentences': options.sentNum || 3,

      /**
       * `nWords`: Number - controls the length in words of the nGram output. Output might be larger as some words are ignored in the algorithm but present in the abstract, for ex. prepositions. When `nWords` is set, `nSentences` is ignored
       */
      'nWords': options.nWords || undefined,

      /**
       * `exclude`: Array[String] - sum.js allows you to exclude from the final abstract, sentences or nGrams that contain any of the words in the `exclude` param
       */
      'exclude': options.exclude || undefined,

      /**
       * `emphasise`: Array[String] - forces sum.js to include in the summary the sentences or nGrams that contain any the words specified by `emphasise` param.
       */
      'emphasise': options.emphasise || undefined

  	});
  }
	if(callback)
		return callback(abstract.summary);
	return abstract.summary;
  }


  // Add a bunch of methods to self here, then...

  // Invoke the callback. This must happen on next tick or later!
  if (callback) {
    return process.nextTick(function() {
      return callback(null);
    });
  }
}

// Export the constructor so others can subclass
factory.Construct = Construct;