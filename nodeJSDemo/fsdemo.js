import {readFile,writeFile} from 'fs/promises';
import { resolve } from 'path';



//read html file 
async function readingHtml(){
    //resolve function is synchronous tha's why dont nedded to use await here
    const path = resolve('./index.html'); 
    let  html = await readFile(path); //we can resolve the function using path variable or directly using resolve function


    const data = {
        name: 'Mani',
        college: 'NSEC'
    }


    for(const [key, value]  of Object.entries(data)){
        html = html.toString().replace(`{{${key}}}`, value);
    }


    await writeFile(resolve('./output.html'), html);





}
    
readingHtml();


