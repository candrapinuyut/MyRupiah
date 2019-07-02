import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            
            <div class='container'>
					<div className="row">
						
						
						<div id="form-search">
								<div className="t-center">
									<span className='title-app'>Pecah <strong>Rupiah</strong ></span>
									<span className="title-slogan">Lihat Hasil kembalian Pecahan Uang Anda</span>
								</div>
								<div className="input-area"> 
																		
									<input type="text" placeholder='enter amount....' className="input" />
									<button>Cek</button>
									
									
								</div>
								
								<div className="box input-area mt-10">
										<span className='amount'>150.000</span>
								</div>
								<div className="box input-area">
										<span className='amount'>150.000</span>
								</div>
								
								
								
						</div>
						
						
					</div>
					

					
             </div>
        )
    }
}

export default Home
