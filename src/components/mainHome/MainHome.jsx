
import './css/mainHome.css';
import SelectTraduction from '../selectTraduction/SelectTraduction';
import HomeContent from '../homeContent/HomeContent';

export default function MainHome() {
    return (
        <main className='content_principal'>
            <div className='main_header'>
                <SelectTraduction/>
            </div>
            <HomeContent/>
        </main>
    )
}
