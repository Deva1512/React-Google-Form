import React ,{useState}from 'react'
import './googleform.css'

const Googleform = () => {
  const[email,setemail] = useState('');
  const[fname,setfname] = useState('');
  const[number,setNumber] = useState('');
  const[gender,setGender] = useState('');
  const[option,setOption] = useState('');
  const[check1,setCheck1] =useState(true);
  const[check2,setCheck2] =useState(true);
  const[check3,setCheck3] =useState('');

const handleChange=(data)=>{
 if (data=='check1'){
  if(check1==true){
    console.log('Online')
  }
  setCheck1(!check1)
 }
 if (data=='check2'){
  if(check2==true){
    console.log('Offline')
  }
  setCheck2(!check2)
 }
}

const handleSubmit = (e)=>{
  e.preventDefault()
   console.log(email,fname,number,gender,option,check1,check2,check3)
}
// onSubmit={()=>{handleSubmit()}}
// onSubmit={handleSubmit}

  return (
    <form className='gform-container' onSubmit={(e)=>{handleSubmit(e)}}>
      
      <div className='header'>Fita Form</div>
      <div className='box box1'>
          <p className='first'>welcome Everyone for our Academy give ur details below.</p>
          <hr></hr>
          <p className='required'>* Indicates required question</p>
          </div>

        <div className='box box2'>
        <span className='email'>Email<span className='symbol'>*</span></span>
        <input className='email1' placeholder='Your Email' value={email} required  onChange ={(e) => setemail(e.target.value)}></input>
       
        </div>
        
        <div className='box box3'>
        <span className='email'>Full Name<span className='symbol'>*</span></span>
        <input className='email1' placeholder='Your Full Name' value={fname} onChange ={(e) => setfname(e.target.value)}></input></div>

        <div className='box box5'>
        <span className='email'>Contact<span className='symbol'>*</span></span>
        <input className='email1' placeholder=' Enter Valid Number' value={number} onChange={(e) => setNumber(e.target.value)}></input>

        </div>

        <div className='box box4'>
          <label className='email' htmlFor='gender'>Gender</label><br/>
          <input type='radio' name='gender' id='male' value='Male' className='inputradio' required onChange={(e)=>setGender(e.target.value)}></input>
          <label>Male</label><br/>

          <input type='radio' name='gender' id='male' value='Female' className='inputradio' onChange={(e)=>setGender(e.target.value)}></input>
          <label>Female</label><br/>

          <input type='radio' name='gender' id='male' value='Others' className='inputradio' onChange={(e)=>setGender(e.target.value)}></input>
          <label>Others</label><br/>

        </div>
        <div className='box box6'>
          <span className='email'>Coures we Offer<span className='symbol'>*</span></span><br/>
          <select className='option'  onChange={(e)=> setOption(e.target.value)}>
            <option>None</option>
            <option>Front end developer</option>
            <option>Back end developer</option>
            <option>Full stack developer</option>
            <option>Cloud Computing</option>
            <option>Game developer</option>
            <option>Data Analyst</option>
            <option>Power BI</option>
            <option>It Courses</option>
          </select>
          </div>

          <div className='box box6'>
            <label className='email' >Classes
            <input type='checkbox' className='checkbox' value={check1} onChange={()=>handleChange('check1')}></input><span className='spancheck'>Online</span>
            <input type='checkbox' className='checkbox' vaue='Offline' onChange={()=>handleChange('check2')}></input><span className='spancheck'>Offline</span>
            <input type='checkbox' className='checkbox' vaue='Offline' onChange={(e)=>setCheck3(e.target.value)}></input><span className='spancheck'>Offline</span>
            </label>
          </div>

          <button className='btn' onSubmit=''>Submit</button>
          <button type='reset' className='btn1'>Clear form</button>
          <p className='para'>Never submit passwords through Google Forms</p>
          <p className='para1'>This content is neither created nor endorsed by Google.</p>
          <footer>Google Forms</footer>

    </form>
  )
}

export default Googleform