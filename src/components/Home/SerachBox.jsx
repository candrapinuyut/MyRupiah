import React, { Component } from 'react'
import './css/SearchBox.css'
import SearchBoxItems from './SearchBoxItems';
import SearchBoxValidation from'./SearcBoxValidation';

export class SerachBox extends Component {

    constructor(props){
        super(props);
        this.state={
            error:0,
            errorData:[],
            searchInput:{
                old:0,
                new:0,
             },
             data:[],
        }
    }

    search(){
        
        let input = this.state.searchInput.new;
        let filterSearch = SearchBoxValidation.filterSearch(input);
       
        this.setState({
            data:[]
        })
        if( filterSearch.length > 0 ){
            console.log(filterSearch)
            this.setState({
                error:1,
                errorData:filterSearch
            })
        }else{
            let data  = SearchBoxValidation.getMinimumNumberRupiah(SearchBoxValidation.toInt(input));
            this.setState({
                data:data,
                error:0,
                errorData:[],
            })
            console.log( data )

        }
        this.setState({
            searchInput:{
                old:input,
                new:input
            }
        })


    }

    updateInput(event){
         this.setState({
            searchInput:{
                new:event.trim(),
                old:this.state.searchInput.old,
            }
        })
    }

    render() {
        let {errorData,error,data,searchInput} = this.state;
        return (
            <div id='searchbox' className="row "> 
							 
                    <h2>My<span>Rupiah</span></h2>
                    <p>
                        Simpe Application that given a number of rupiahs will 
                        calculate the minimum number of rupiahs needed to make that amount 
                    </p>

                    <input  onInput={e=>this.updateInput(e.target.value)} className='input-text' 
                     placeholder='Enter your Rupiahs here...' type="text" 
                     onKeyPress={event => {
                        if (event.key == 'Enter') {
                          this.search()
                        }
                      }} 
                     />
                    <button onClick={()=>this.search()} className='hijau btn'>Cari</button>

                    <SearchBoxItems
                     errorData={errorData }
                     error={error}
                     data={data}
                     searchInput={searchInput}
                      />
            </div>
        )
    }
}

export default SerachBox
