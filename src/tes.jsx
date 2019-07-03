
//18.000
//18.500,00
//005.000 
//001000
// cek separator,
// cek ribuan 
//1. separator standar 
//2. rupiah standar
//3. 00 point standar 




function cek(str){
    var separatorValidation = str.split('.').filter((x,i)=>{
        let firstSep=(i==0  && parseInt(x).toString().length <=3 )  ? true : false; 
        return(x.length != 3  && firstSep==false  )
    });
    return( separatorValidation.length > 0  ) ? false : true;
}
var str = "Rp 1234567 ";

var valid_rp= /^([rpRP]{0,2})([0-9. ,]+)$/;
var valid_00= /^([0-9. ,RPrp]+)\,([0]{2})$/;
var valid_number=/^[0-9.]+$/; 
var valid_input= /^[0-9.rpRP, ]+$/;


let err=[];
str=str.trim();
if( valid_input.test( str) ){

    if(
        str.toLocaleLowerCase().indexOf('rp')== -1 
         && 
        str.toLocaleLowerCase().indexOf(',')==-1
    ){
        
        if(valid_number.test(str)==false)
        err.push('invalid2 separator');
        else{
            
            if(str.toLocaleLowerCase().indexOf('.')!= -1 ){
                if(cek(str)===false)
                err.push('invalid2 separator');
            }
        }


    }else{

        if(str.toLocaleLowerCase().indexOf('rp')!=-1){
           if(str.trim().length==2){
            err.push('Missing Value');
           }else{
               if(valid_rp.test(str)===false){
                err.push('valid character in wrong position');
               }
           }
       
           
        }
        if(str.toLocaleLowerCase().indexOf(',')!=-1  ){
           if(valid_00.test(str)===false)
               err.push('invalid separator');
        }

    }



}else err.push('bad format')


let stt="3000,00";

console.log(stt.substring(0,stt.length-3));
// masih tinggal format rupiah, spasi, dll.

 
 