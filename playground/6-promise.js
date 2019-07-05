const doWorkPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // resolve([7,4,2]);
        reject("There is an error");
    })
})

doWorkPromise.then((result)=>{
    console.log("Success", result)
}).catch((error)=>{
    console.log("Error", error)
})
