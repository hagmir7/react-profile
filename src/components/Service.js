import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Cards from './Cards'

class Service extends Component{
    render(){
        return(
            <div className=''>
                <h3 class="email mb-0">Hagmir6@gmail.com</h3>
                <div className='row m-0 w-100 pt-4 service pb-4'>
                
                <Cards title='Web design' body='I was 16 years when I start learning and working design in web  using HTML , CSS, JS , SASS and some libres like Bootstrap and JQuery I was spent 2 yeas and I use them to design websites with a mazing design , now I have abilrty to belding any website with any design click in bottom to see My work.' link='google.com' icon={<FontAwesomeIcon icon='palette' />} />



                <Cards title='Web Development' body='Befor learning design I start develop websits using programin languag it was new start to look for more information about how to program website applection and that needs more effort to contune your job as a developer 
                I spent 2 years in this domin today I can develop any website easly...' link='google.com' icon={<FontAwesomeIcon icon='code' />} />


                <Cards title='Softwer Development' body='I was tolk about web development befor,
                     in importent to be a softwer developer to develop your web , I use Python to do that with django framework Python is my pest languag  I was learnig python for 3 yers ago I can use any thing in Python and django framework like views models, signals, form, urls, apps...' link='google.com' icon={<FontAwesomeIcon icon='laptop-code' />} />

            </div>
            </div>

        )
    }
}
export default Service;