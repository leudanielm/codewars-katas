# My collection of katas from https://codewars.com

![](https://www.codewars.com/users/leudanielm/badges/small)

These are katas that I've solved on codewars.com, will try my best to keep this repository up to date. Each kata has its own file, where a link to the respective challenge is provided as a top comment in the header.

My favourite languages to solve katas in are JavaScript, C# and SQL.

⚠️ These katas don't contain production code, they were solved just for fun, they have no tests because codewars provides its own testing framework.

### How I extract and generate the katas in this repository

Under [kata-extractor](./kata-extractor) there are two files: `dom-extractor.js` and `file-writer.js`. First I copy-paste the code from `dom-extractor.js` in the console while I'm on codewars.com profile page. This gives me back a stringified JSON containing all the katas, along with their titles and urls. I then save it to a file called `solutions.json` in the same directory and then run `node file-writer.js` which generates the actual katas in the [katas](./katas) directory.