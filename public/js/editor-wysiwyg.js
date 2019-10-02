//let editor = new FroalaEditor('div#froala-editor', {heightMin: 100,
  //  heightMax: 200, videoResponsive: true}, function () {
	//console.log(editor.html.get())
//})

//new FroalaEditor('.selector', {
  //  requestHeaders: {
    //  custom_header: 'My custom header data.'
    //}
//});

ClassicEditor.create(document.querySelector('#editorck'), {
                  cloudServices: {
                    tokenUrl: 'https://42686.cke-cs.com/token/dev/9zse1zuASK4gV3pXcqAEbr9dp3bbMpzOC3eOhww6eGN1xuUTzPobzya8uxTb',
                    uploadUrl: 'https://42686.cke-cs.com/easyimage/upload/'
                  }
              })
              .then( editor => {
                  console.log(editor);
              })
              .catch( error => {
                  console.log(error);
              } );

ClassicEditor.create(document.querySelector('#editorck1'), {
                    cloudServices: {
                      tokenUrl: 'https://42686.cke-cs.com/token/dev/9zse1zuASK4gV3pXcqAEbr9dp3bbMpzOC3eOhww6eGN1xuUTzPobzya8uxTb',
                      uploadUrl: 'https://42686.cke-cs.com/easyimage/upload/'
                    }
              })
              .then( editor => {
                  console.log(editor);
              })
              .catch( error => {
                  console.log(error);
              } );

ClassicEditor.create(document.querySelector('#editorck2'), {
                    cloudServices: {
                      tokenUrl: 'https://42686.cke-cs.com/token/dev/9zse1zuASK4gV3pXcqAEbr9dp3bbMpzOC3eOhww6eGN1xuUTzPobzya8uxTb',
                      uploadUrl: 'https://42686.cke-cs.com/easyimage/upload/'
                    }
              })
              .then( editor => {
                  console.log(editor);
              })
              .catch( error => {
                  console.log(error);
              } );


var imagenEditor = document.getElementById('editorck');

imagenEditor.execute('imageInsert', {

    source: [
      
      'C:/Users/eaz99/Downloads/Qsbbfie.png',
      'C:/Users/eaz99/Downloads'      
  ]


});