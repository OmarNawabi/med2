let cl = document.getElementById('cl')
setInterval(()=>{
    let d = new Date()
    cl.innerHTML=`${d.getHours() -12 } : ${d.
   getMinutes() + '  ' + "PM"} `

},1000)




  