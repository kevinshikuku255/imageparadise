import './App.css';
import  icon from "./Assets/icon.jpeg";
import kidcut from "./Assets/kidcut.jpg";
import manicure from "./Assets/manicure.jpg";
import pedicure from "./Assets/pedicure.jpg";
import cyber from "./Assets/cyber.jpg";
import Photocopy from "./Assets/photocopy.jpg";
import Binding from "./Assets/binding.jpg";

function App() {
  return (
 <div className="App">
{/* /* --------------------------header------------------------------------------------ */}
        <div className="header">
            <div className="headcontainer">
              <div className="logo"> <img src={icon} alt="logo"/> </div>
              <div className="description"> <h1>Image Paradise BarberShop and Cyber </h1></div>
            </div>
         </div>
{/* /* -------------------------------Body section------------------------------------------- */}

 <div className="body">
  <div className="leftsidebar">
   <img src="g1.jpg" alt="ss"/>

     <h3>Cyber Section</h3>
     <h3>Berbar Shop</h3>
     <h3 style={{color:"green"}}>Mpesa</h3>

  </div>

  <div className="rightside">
  <div className="mainbar">
     <h1>Image Paradise</h1>
     <h4 style={{color:"wheat"}} >Homa Bay Along garage road near Transformer.</h4>
     <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
         consectetur quo beatae laboriosam cupiditate neque!</h4>
    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vitae tenetur natus sint labore optio, blanditiis repudiandae fugiat quam soluta incidunt quas perspiciatis tempore necessitatibus eaque exercitationem at explicabo rerum?</h5>

    <h1>BarberShop</h1>
    <div className="services">
       Hight profile shaves at affordable cost. <br/>
       Washing and Fecials.
    <ul>
       <li>Kids @ 50/=</li>
       <li>Students @ 50/=</li>
       <li>Adults @ 150/=</li>
       <li>VIP 500/=</li>
    </ul>
    </div>
    <div className="images">
      <div className="more_images">
         <img src={pedicure} alt="ss"/>
         <img src={manicure} alt="ss"/>
         <img src={kidcut} alt="ss"/>
      </div>
    </div>

    <h1>Cyber Cafe</h1>
    <div className="services">
      <ul>
         <li>Photocopy
            <ul>
               <li>A4 @ 5/=</li>
            </ul>
         </li>
         <li>Printing
            <ul>
               <li>A4 - 10/= </li>
               <li>A3 - 7/= </li>
            </ul>
         </li>

         <li>Typeseting
            <ul><li>
               One Page 30/= and discounted according to the number of pages
            </li></ul>
         </li>
         <li>Lamination
            <ul>
               <li>40/= </li>
            </ul>
         </li>
         <li>Internet Services</li>
         <li>KRA Pin registration and Renewal</li>
         <li>E-Citizen</li>
         <li>Certificate of good Conduct</li>
         <li>Driving Licence Renewal</li>
      </ul>
      </div>
    <div className="images">
  <div className="more_images">
     <img src={cyber} alt="ss"/>
     <img src={Photocopy} alt="ss"/>
     <img src={Binding} alt="ss"/>
   </div>
   </div>
   <div className="div">
      <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, officiis unde illo vitae inventore, harum neque eligendi necessitatibus ea accusantium ipsum expedita dolor eos quaerat pariatur quae quis sunt doloribus.</h4>
   </div>
    </div>


  </div>
  </div>

 <div class="footer">
   <p>Image Paradise <br/>ImageParadise &copy;2021
      <br/> For More info call : 0742244889  <br/> kevinshikuku production </p>
 </div>


 </div>

  );
}

export default App;




