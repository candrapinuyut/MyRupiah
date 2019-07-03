 
//main logic 

const kelipatan=( kpk, limitAmount )=>{

    let i=1;
    let used=0;
    do{
    
    let h = kpk * i;
    if( h <=limitAmount)
        used++;
    else     
        break;       
    i++;

    }while(true);
    

    return used;

}
const getMinimumNumberRupiah=(n)=>{

    const fractions=new Array(100000,50000,20000,10000,5000,2000,1000,500,100,50); //list of fractions 
    
    let i=0;
    let total  = 0; 
    let Amount = n ; //initia as amount 
    let temp   = Amount;
    let data   = []; 


    fractions.filter(e => e<=n).filter((a,b)=>a-b).map(fraction=>{

        let getKPKbyLimit     =  kelipatan( fraction, temp);
        let getKPKbyLimitSisa =  temp - ( getKPKbyLimit * fraction); 
        temp                  =  getKPKbyLimitSisa;

        total                 += getKPKbyLimit*fraction;
        i++;
        
        let pushDataToArray    = {

            fraction:fraction,
            used:getKPKbyLimit,
            sisa:getKPKbyLimitSisa,
        }   
        
        data.push({
            data            : pushDataToArray,
            total_sum       : total,
            total_sisa       : getKPKbyLimitSisa,
            fraction_clear  : ( getKPKbyLimitSisa == 0) ? true : false, 
        });


    });
    return data.filter( a => a.data.used != 0 );
}

const cekDotSeparator=(str)=>{
    var separatorValidation = str.split('.').filter((x,i)=>{
        let firstSep=(i==0  && parseInt(x).toString().length <=3 )  ? true : false; 
        return(x.length != 3  && firstSep==false  )
    });
    return( separatorValidation.length > 0  ) ? false : true;
}
 
  
 
const filterSearch=( str )=>{



         
    var valid_rp= /^([rpRP]{0,2})([0-9. ,]+)$/;
    var valid_00= /^([0-9. ,RPrp]+)\,([0]{2})$/;
    var valid_number=/^[0-9.]+$/; 
    var valid_input_all= /^[0-9.rpRP, ]+$/;
    
    
    let err=[];
   
    if( valid_input_all.test( str) ){
    
        if(
            str.toLocaleLowerCase().indexOf('rp')== -1 
             && 
            str.toLocaleLowerCase().indexOf(',')==-1
        ){
            
            if(valid_number.test(str)==false)
            err.push('Your Rupiah  Invalid Separator');
            else{
                
                if(str.toLocaleLowerCase().indexOf('.')!= -1 ){
                    if(cekDotSeparator(str)==false)
                    err.push('Your Rupiah  Invalid Separator');
                }
            }
    
    
        }else{
            
            if(
                str.toLocaleLowerCase().indexOf('rp')!=-1
                && 
                str.toLocaleLowerCase().indexOf(',')!=-1 
            ){
                if(str.toLocaleLowerCase().indexOf('.')!= -1 ){
                    if(cekDotSeparator(str.substring(2,str.length-3))==false)
                    err.push('Your Rupiah  Invalid Separator');
                }     
            }
            if(str.toLocaleLowerCase().indexOf('rp')!=-1){
                if(str.trim().length==2){
                    err.push('Your Input Rupiah is Missing Value ');
                }else{
                    if(valid_rp.test(str)==false){
                        err.push('valid character in wrong position');
                    }else{
                            if(str.toLocaleLowerCase().indexOf('.')!= -1 && str.toLocaleLowerCase().indexOf('rp')!=-1){
                                let cekIfKomaTrue=(str.indexOf(',')==-1);
                                let max=(cekIfKomaTrue==false)?str.length-3:23;    

                                if(cekDotSeparator(str.substring(2,max))==false)
                                   err.push('Your Rupiah  Invalid Separator');
                            }
                    } 
                    
                }
            }
            if(str.toLocaleLowerCase().indexOf(',')!=-1  ){
                if(valid_00.test(str)==false)
                   err.push('Your Rupiah  Invalid Separator');
                else {

                        if(str.toLocaleLowerCase().indexOf('.')!= -1 && str.toLocaleLowerCase().indexOf(',')!=-1){
                            
                            let cekDot=(str.toLocaleLowerCase().indexOf('rp')==-1);
                            let start=(cekDot==false)?2:0;  

                            if(cekDotSeparator(str.substring(start,str.length-3))==false)
                            
                            err.push('Your Rupiah  Invalid Separator');
                        }
                    
                }

            }
            



            
        }
    
    
    
    }else err.push('Input value was bad format Rupiah..')

    return err;
    
}

const toInt=(str)=>{
    if(str.toLocaleLowerCase().indexOf(',')!=-1)
        str = str.substring(0,str.indexOf(','));

    return parseInt(str.replace(/[^\d]/g, ''), 10)
}
export default  {
    kelipatan:kelipatan,
    getMinimumNumberRupiah:getMinimumNumberRupiah,
    cekDotSeparator:cekDotSeparator,
    filterSearch:filterSearch,
    toInt:toInt,
}