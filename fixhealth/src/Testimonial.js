import styles from './Testimonial.module.css';
import './Testi.css';
import React from 'react';

function Testimonial(){

    return <div className={styles.testimonial}>
        <h1 id='heading'>Testimonials</h1>
        <div className="slide-container swiper">
        <div className="slide-content">
            <div className='card-wrapper swiper-wrapper'>
            <div className= 'card swiper-slide'>
                <div className='image-content'>
                    <span className='overlay'></span>
                    <div className='card-image'>
                        <img src=" https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2FPatel_xOznYxGIr5.png%3FupdatedAt%3D1686564335378&w=3840&q=75" alt='hh'/>
                    </div>

                </div>
                
            <div className="card-content">

                <h1>Nisith Patel</h1>
                <h3>66, Buisness Owner</h3>
            </div>
                
                </div> 
                <div className= 'card swiper-slide'>
                <div className='image-content'>
                    <span className='overlay'></span>
                    <div className='card-image'>
                        <img src="https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2FRashmi_KEXRN9maT.png%3FupdatedAt%3D1686564335393&w=1920&q=75" alt='hh'/>
                    </div>

                </div>
                
            <div className="card-content">

                <h1>Rashmi</h1>
                <h3>43, HR Professional</h3>
            </div>
                
                </div> 
                <div className= 'card swiper-slide'>
                <div className='image-content'>
                    <span className='overlay'></span>
                    <div className='card-image'>
                        <img src=" https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2FDeep_P-vGzCQ88.png%3FupdatedAt%3D1686564335311&w=1920&q=75" alt='hh'/>
                    </div>

                </div>
                
            <div className="card-content">

                <h1>Pranjal Deep</h1>
                <h3>27, Designer</h3>
            </div>
                
             
                
                </div> <div className= 'card swiper-slide'>
                <div className='image-content'>
                    <span className='overlay'></span>
                    <div className='card-image'>
                        <img src=" https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2FNasir_kCpBt8epvL.png%3FupdatedAt%3D1686564335336&w=1920&q=75" alt='hh'/>
                    </div>

                </div>
                
            <div className="card-content">

                <h1>Dr. Nasir</h1>
                <h3>64, General Physican</h3>
            </div>
                
                </div> <div className= 'card swiper-slide'>
                <div className='image-content'>
                    <span className='overlay'></span>
                    <div className='card-image'>
                        <img src=" https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2FRajesh_SUeQmKzaY.png%3FupdatedAt%3D1686564335353&w=1920&q=75" alt='hh'/>
                    </div>

                </div>
                
            <div className="card-content">

                <h1>Rajesh Chainani</h1>
                <h3>67, Chairman</h3>
            </div>
                
                </div>  
                <div className= 'card swiper-slide'>
                <div className='image-content'>
                    <span className='overlay'></span>
                    <div className='card-image'>
                        <img src=" https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2FNeil_glNgiERto.png%3FupdatedAt%3D1686564335273&w=1920&q=75" alt='hh'/>
                    </div>

                </div>
                
            <div className="card-content">

                <h1>Niel Pinhero</h1>
                <h3>42, Consultant</h3>
            </div>
                
                </div> 
               
                  
            </div>

            


        </div>
        </div>
    </div>

}

export default Testimonial;