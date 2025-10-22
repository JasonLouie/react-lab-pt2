import Header from './Header';
import Profile from './Profile';
import Contact from './Contact';

export default function EmployeePage() {
    return (
        <div className='page'>
            <Header nested={true} />
            <Profile name="Tommy Pickles" src="/images/tommypickles.jpg" position="Rugrats Protagonist"/>
            <Contact  />
            <Contact />
            <Contact />
            <Contact type="Email" info = "tommypickles@gmail.com"/>
        </div>
    );
}