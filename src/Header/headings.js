import './header.css'
import './headings.css'

const Headings=()=>{
    return <div className='space'>
        <div className='heading'>
        <h3 className='selected'>Account</h3>
        <h3 className='unselect'>Business</h3>
        <h3 className='unselect'>Plans</h3>
        </div>
        <button className='btn'>Next</button>
    </div>

}
export default Headings