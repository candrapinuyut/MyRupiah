//RP    
//18.000
//18.500,00
//005.000 
//001000
// cek separator,
// cek ribuan 
//1. separator standar 
//2. rupiah standar
//3. 00 point standar 




var str = "2000";
var separatorValidation = str.split('.').filter((x,i)=>{

    let firstSep=(i==0  && parseInt(x).toString().length <=4 )  ? true : false; 
    return(x.length != 3  && firstSep==false  )

});
 
console.log(separatorValidation); 

// masih tinggal format rupiah, spasi, dll.


 