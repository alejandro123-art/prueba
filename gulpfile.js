const {src,dest,watch} = require("gulp");
const sass = require ("gulp-sass") (require("sass"));

function tarea1(done)
{
    console.log("primera tarea");
    done();
}

function css(done)
{
   //identificar el css
    src("src/scss/app.scss") 
       
    //compilarlo
    .pipe(sass())  

   //guardarlo
    .pipe(dest("build/css"))

   done();
}

function dev(done)
{
    watch("src/scss/app.scss",css);
    done();
}

exports.css = css;
//exports.tarea1 = tarea1;
exports.dev = dev;
