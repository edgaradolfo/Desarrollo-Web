let editor = new FroalaEditor('div#froala-editor', {heightMin: 100,
    heightMax: 200, videoResponsive: true}, function () {
	console.log(editor.html.get())
})

//new FroalaEditor('.selector', {
  //  requestHeaders: {
    //  custom_header: 'My custom header data.'
    //}
//});
