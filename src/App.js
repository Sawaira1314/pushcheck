import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Buttonmodule from './button.module.css';

function App() {
 

  let [status, setStatus] = useState(false);
  let [pstatus, setPstatus] = useState(false)
  let [menustatus, setMenustatus] = useState(false)
 let [modalstatus,setModalStatus] =useState(false)
  // else{
  //   template=<button className='' onClick={() => setpshow(!pshow)}>show</button>
  // 

  // let n=10;
  // let displayData = () => {
  //   seCount(count+1)
  // }
  return (
    
    // <><p> welcome to ws </p>
  
      // <><p> welcome to ws </p>
    
      <div className="App">
      <div className="faqouter">
        <div className="faqitems">
          <h2>'Popular Articles'</h2>
          <p>The next step is designing your FAQ page. We have some handy tips for doing this located in the next section of this post. But, if you can't wait until then, here's a jump link so you can skip on down.</p>
        </div>

        <div className="faqitems">
          <h2>'Popular Articles'</h2>
          <p>The next step is designing your FAQ page. We have some handy tips for doing this located in the next section of this post. But, if you can't wait until then, here's a jump link so you can skip on down.</p>
        </div>

        <div className="faqitems">
          <h2>'Popular Articles'</h2>
          <p>The next step is designing your FAQ page. We have some handy tips for doing this located in the next section of this post. But, if you can't wait until then, here's a jump link so you can skip on down.</p>
        </div>

        <div className="faqitems">
          <h2>'Popular Articles'</h2>
          <p>The next step is designing your FAQ page. We have some handy tips for doing this located in the next section of this post. But, if you can't wait until then, here's a jump link so you can skip on down.</p>
        </div>
        
      </div>
     <div>
      
      <h1>
        FAQ'S
      </h1>
     </div>

   <button  className='en' onClick={()=> setModalStatus(true) }> Enquire now</button>
   <div onclick={()=>setModalStatus(false)} className={`modalOverLay ${modalstatus ? 'modalshow' : ' '}`}>  </div>
    <div className={`ModalDiv ${modalstatus ? 'showModalDiv' : ' '}` }>
      <h3>enquire now <span onclick={()=>setModalStatus(false)}>&times;</span></h3>
   
   </div>

        
        <button className='micon' onClick={() => setMenustatus(!menustatus)}>
        {menustatus ? <span> &times;</span> : <span>&#9776;</span>}
        </button>
        <div className={`menu ${menustatus ? 'activeMenu' : ''}`}>
       
        
        <ul>

          <li>home</li>
          <li>about</li>
          <li>course</li>
          <li>gallery</li>
          <li>contact us</li>
        </ul>
      </div>
      <input type={pstatus ? 'text' : 'password'} /><button onClick={() => setPstatus(!pstatus)}>
        {(pstatus) ? "hide" : "show"}
      </button><br /><button className={Buttonmodule.error}> Error</button><button onClick={() => setStatus(!status)}>
        {(status) ? 'hide' : 'show'}</button>
      {(status) ? <p className='para'> welcome to my world</p> :  ''}
    
      {/* {count}
      {template}
    <button onClick>add data</button> */}
    </div>
  );
}

export default App;


