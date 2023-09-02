import { BrowserRouter, Routes,Route }from 'react-router-dom'
import './App.css';
import SideBar, {} from './Components/Sidebar'
import UpdateBook from './Trial/UpdateBook';
import Admin from './Components/Admin.jsx'
import AddBook from './Trial/AddBook';
import MainAndSide from './Components/MainAndSide';
import Navba from './Components/NavBar/Navbar';
import ViewBooks from './Trial/ViewBooks';
import ViewBookAndSidebar from './Components/ViewBookAndSidebar';
import TeamMembers from './Trial/TeamMembers/TeamMembers';
import AddMember from './Trial/TeamMembers/AddMember';
import UpdateMember from './Trial/TeamMembers/UpdateMember';
import ViewMember from './Trial/TeamMembers/ViewMember';
import SideTeam from './Trial/TeamMembers/SideTeam';
import OrderHome from './Trial/Orders/OrdersHome'

import AddOrders from './Trial/Orders/AddOrders';
import UpdateOrders from './Trial/Orders/UpdateOrders';
import AddOrder from './Trial/Orders/AddOrders';
import ViewOrder from './Trial/Orders/ViewOrder';
import SideAndOrders from './Trial/Orders/SideAndOrders';
import UserLogin from './Components/Operations/UserLogin';
import CartMain from './Components/CartForUsers/CartMain';
import Cart from './Components/CartForUsers/Cart';
import SearchBar from './SearchBar';
function App() {
  return (
    <div className="App">
   

      <BrowserRouter>
     
     {/* <SearchBar/> */}

      
      <Routes>
         <Route path='/' element={<Navba/>}/>
        <Route path='/login' element={<Admin/>}/>

        <Route path='/sidebar' element={<SideBar/>}/>
        <Route path='/main' element={<MainAndSide/>}/>
        <Route path='/addbook' element={<AddBook/>}/>
        <Route path='/update/:bookId' element={<UpdateBook/>}/>
        <Route path='/viewbook/:bookId' element={<ViewBookAndSidebar/>}/> 
        
        {/* Members */}
         <Route path='/membmain' element={<SideTeam/>}/>
        <Route path='/addmember' element={<AddMember/>}/>
        <Route path='/updatemember/:memberId' element={<UpdateMember/>}/>
        <Route path='/viewmember/:memberId' element={<ViewMember/>}/>

        {/* Orders */}
        <Route path='/ordermain' element={<SideAndOrders/>}/>
        <Route path='/addorder' element={<AddOrders/>}/>
        <Route path='/updateorder/:orderId' element={<UpdateOrders/>}/>
        <Route path='/vieworder/:orderId' element={<ViewOrder/>}/> 

        {/* UserSection */}
        <Route path='/userlog' element={<UserLogin/>}/>
        <Route path='/cartmain' element={<CartMain/>}/>
        <Route path='/cart' element={<Cart/>}/>
        


       

      </Routes>
      
      </BrowserRouter>



      
      
     
      
      
      
      
    </div>
  );
}

export default App;
