// this should be used as a base to work on the actual installer

var files = [
  '_pt_user.js',
  'autoclean.js',
  'config.json',
  'css.js',
  'fixed.js',
  'index.html',
  'perftweak.js',
  'splasher93.min.js',
  'startcat.js',
  'tips.js',
  'tips.json',
  'win94sim.js'
]
var repo = "https://cdn.jsdelivr.net/gh/its-pablo/windows94@main/win94/"

files.forEach((file) => {
    fetch(repo + file).then(resp => resp.text()).then((resp) => {
        $store.set('win94/'+file, resp);
    }).catch((err) => {
      alert(err) 
    });
});

$store.set("boot/94l.js", "// Windows 94 Loader\n// Do not touch\n//\n\nle._devmode=!0,le._debug=!0,$file.scan(\"/a/win94\",function(b){if(b)for(var a in b)$file.getUrl(\"/a/win94/\"+a,b=>{a.toLowerCase().endsWith(\".css\")&&$loader.css(b),a.toLowerCase().endsWith(\".js\")&&$loader.script(b)})});"),
$store.set("win94/runonce.js","// Windows 94 Runonce Setup\n//\n\nwindow.$runOnce = ()=>{$notif(\"Welcome to Windows 94\",\"Congratulations! You now have Windows 94 beta 1.\"),$store.del(\"win94/runonce.js\"),delete window.$runOnce,$explorer.refresh()};");

setTimeout(() => {
    location.reload();
}, 5000);
