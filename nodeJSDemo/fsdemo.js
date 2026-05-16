import {readFile} from 'fs/promises';
import { resolve } from 'path';



//read html file 
async function readingHtml(){
    //resolve function is synchronous tha's why dont nedded to use await here
    const path = resolve('./index.html'); 
    const html = await readFile(path); //we can resolve the function using path variable or directly using resolve function
    console.log(html.toString());
}

readingHtml();


