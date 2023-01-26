import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import './css/selectTraduction.css';

export default function SelectTraduction() {

    const {i18n} = useTranslation('global');
    const [languageSelected, setLanguageSelected] = useState('Español');
    const [isSelectActive, setIsSelectActive] = useState(false);
    const select_ref = useRef(null);
    const changeLanguageApp=(language='')=>{
        setLanguageSelected(language);
        setIsSelectActive(!isSelectActive);
        switch (language) {
            case 'Español':
                console.log('hjsdfjdsf')
                i18n.changeLanguage('es');
                break;
            case 'English':
                i18n.changeLanguage('en');
                break;
            
            default:
                break;
        }
    }
    const clickSelectLanguage =()=> setIsSelectActive(!isSelectActive); 
    const handleClickOutsideSelect=(event)=>{
        // Click fuera del elemento referenciado : select_ref
        if(!select_ref.current.contains(event.target)) setIsSelectActive(false);
     }
    useEffect(() => {
        document.addEventListener("mouseup", handleClickOutsideSelect);
        return () =>{
            window.removeEventListener('mouseup', handleClickOutsideSelect);
        }    
    }, []);
    return (
        <div ref={ select_ref } className='cont_select_tr'>
            <button type='button' onClick={ clickSelectLanguage } className="select_traduction">
                <span>{ languageSelected }</span>
                <svg className={(isSelectActive)? 'select-active' : ''} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50">
                    <polygon stroke="#000" points="0,0 100,0 50,50">
                    </polygon>
                </svg>     
            </button>
            <div className={(isSelectActive)? 'select_options options-active' : 'select_options'}>
                <span onClick={ ()=>changeLanguageApp('Español')}>Español</span>
                <span onClick={ ()=>changeLanguageApp('English')}>English</span>
            </div>
        </div>
    )
}
