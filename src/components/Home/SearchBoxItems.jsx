import React, { Component } from 'react'

export default class SearchBoxItems extends Component {
    constructor(props){
        super(props)
        this.state={
        }
    }
    ToRupiah(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    render() {

        let {data,error,searchInput,errorData} = this.props;
        
        return (
            <div className="item-container"> 
                    
            {
                data.length!=0 && error==0 ? 
                (
                    <span className='status sukses'>Found result for : Rp<strong> { searchInput.old }  </strong> </span>
                ):(null)
            }

            {
                error==1 ? 
                (
                    <span className='status error'>Sorry, {errorData[0]}</span>
                ):(null)
            }

            
            {
                (data.length!=0 &&  error==0) ?(
                
                        data.map((e,index)=>(
                        <div className="item" key={index}> 
                            <span className='uang'>Rp. {this.ToRupiah(e.data.fraction) } </span>
                            <span  className='mount'>{e.data.used} x</span>
                        
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

        )
    }
}
