obstacles that i faced 
1) sass was not converting to css 
-solution 
 copied the code in the json workspace file (workspace json)
  "liveSassCompile.settings.formats": [
     {
    "format": "expanded",
    "extensionName": ".css",
    "savePath": "/css"
  }
],
"liveSassCompile.settings.includeItems": [
  "**/scss/main.scss"
],
"liveSassCompile.settings.excludeList": [
  "**/node_modules/**",
  ".vscode/**"
].


2) toggle button not working 
solution-
 added a code function in jquerry and updated the sass code 


 3) image not displaying in carosel 
 solution-
  silly mistke of extension 

 4) the etxt on the carosel not displaying on phone 
 solution-
   replaced  (d-none d-md-block) to (d-none d-md-block) in html file 

5) News letter popup not working 
solution-
it was placed just above closing body tag , the import script jquerry was above this line , replaced or swaped both lines 