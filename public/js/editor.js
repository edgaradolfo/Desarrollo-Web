var editor = ace.edit("editor");
editor.setTheme("ace/theme/chrome");
editor.getSession().setMode("ace/mode/html");

var editorCSS = ace.edit("editorCSS");
editorCSS.setTheme("ace/theme/chrome");
editorCSS.getSession().setMode("ace/mode/css");

var editorJS = ace.edit("editorJS");
editorJS.setTheme("ace/theme/chrome");
editorJS.getSession().setMode("ace/mode/javascript");

