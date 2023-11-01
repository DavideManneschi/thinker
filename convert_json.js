

const fs= require("fs");



async function conversion_mock(text_path){
   let  empty_arr=[];
   let final_json={}
     await fs.readFile(text_path,"utf-8",(err,data)=>{
        if (err) throw err;
        // adding semicolumn at the end of every lin
        empty_arr=data.split(",");
        empty_arr.forEach((data)=>{
            final_json[data]=[];
        })
        console.log(final_json)
    })
}
conversion_mock("../thinker/text_sample").then(()=>{

    console.log("function returned properly")

});
