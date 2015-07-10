
			DESCRIPTION: 
apostrophe-summarize allows the client to summarize apostrophe snippets. the client can control the length of the summary and words emphasized/de-emphasized in it using the options object. apostrophe-summarize is a client of the sum module; for more on the underlying summarization scheme see it's documentation: https://github.com/topliceanu/text-summarization.

			ADDING:

0) npm install apostrophe-summarize to your apostrophe project directory.

1) add a new page type to app.js under pages or choose which page type you want to edit in adding summaries. 

2) under modules (still in app.js), add a definition of your page type extending apostrophe-snippets; directions on how to do so can be found at: http://apostrophenow.org/tutorials/snippets/subclassing-snippets.html under 'Configuring New Content Types.'  Continue to follow these directions to add a new module under lib/modules for your content type. 

3) in views/global/outerLayout.html, add a new menu for your content type: 
			{{ apos???Menu({ edit: permissions.admin }) }}

4) Follow the directions on the same page under 'Custom Templates'  -- in lib/modules/???/views/index.html set the summary field of a snippet (populate it by calling the summarizer with your desired parameters). in lib/modules/???/views/snippetMacros.html, you can now use item.summary to display the summary text


