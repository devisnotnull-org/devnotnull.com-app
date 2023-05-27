import glob from 'glob'
//import DtsCreator from 'typed-css-modules';

//let creator = new DtsCreator();

glob('src/**/*.css', {}, (error, filePaths) => {
  /** 
  for (const filePath of filePaths) {
    creator.create(filePath).then(content => {    
      content.writeFile();
    });
  }
  **/
});