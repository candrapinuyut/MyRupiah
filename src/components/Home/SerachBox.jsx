import React, { Component } from 'react'
import './css/SearchBox.css'

export class SerachBox extends Component {

    constructor(props){
        super(props);
        this.state={
            searchInput:{
                old:0,
                new:0,
                status:false
            },
             data:[],
        }
    }
    
    kelipatan( kpk, limitAmount ){

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


    getMinimumNumberRupiah(n){

        const fractions=new Array(100000,50000,20000,10000,5000,2000,1000,500,100,50); //list of fractions 
        
        let i=0;
        let total  = 0; 
        let Amount = n ; //initia as amount 
        let temp   = Amount;
        let data   = []; 


        fractions.filter(e => e<=n).filter((a,b)=>a-b).map(fraction=>{

            let getKPKbyLimit     =  this.kelipatan( fraction, temp);
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

    filterSearch( input ){

    }

    search(){
        let input = this.state.searchInput.new;
        let data  = this.getMinimumNumberRupiah(input);
        this.setState({
            data:data,
            searchInput:{
                old:input
            }
        })
        console.log(data)

    }

    updateInput(event){
         this.setState({
            searchInput:{
                new:event,
                old:this.state.searchInput.old,
            }
        })


    }
    render() {
        let {data,searchInput} = this.state;
        return (
            <div id='searchbox' className="row "> 
							 
                    <h2>TukarDuit.com</h2>
                    <input  onInput={e=>this.updateInput(e.target.value)} className='input-text' 
                     placeholder='masukan uang disini...' type="text" 
                     onKeyPress={event => {
                        if (event.key === 'Enter') {
                          this.search()
                        }
                      }}
                      
                     />
                    <button onClick={()=>this.search()} className='hijau btn'>Cari</button>
                
        
                    <div className="item-container"> 
                        {
                            data.length!=0 ? 
                            (
                                <span className='status sukses'>Found result for : <strong><i> { searchInput.old }  </i> </strong> Rupiah</span>
                            ):(null)
                        }
                         {
                            (data.length!=0) ?(
                            
                                   data.map((e,index)=>(
                                    <div className="item" key={index}> 
                                        <span className='uang'>Rp. {e.data.fraction} </span>
                                         <span  className='mount'>{e.data.used} X</span>
                                      
                                         {
                                            
                                            (index == (data.length-1) && e.total_sisa!=0  ) ?(
                                            <span className="sisa">Sisa : (Rp. {e.total_sisa} ) no available fraction</span>         
                                            ):(null)
                                         }
                                         
                                     </div>

                                   ))
                           


                            ):(null)
                        }
                        
                        
                        
                    
                    </div>	
                 </div>
        )
    }
}

export default SerachBox
