import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { MdAddShoppingCart } from "react-icons/md";
import {combo} from './data.js';

function Header() {
    return (
      <div className="flex justify-between space-x-3 pl-12 rounded-sm">
        <img
          className="h-20 w-auto cursor-pointer"
          src="https://i.imgur.com/HxUij9o.jpg"
          alt="Logo"
        />
        <div className="space-x-5 my-auto font-bold text-black">
          <a href="/" className="hover:text-red-500 transition-colors duration-300">Món Ăn</a>
          <a href="/menu" className="hover:text-red-500 transition-colors duration-300">Menu</a>
          <a className="hover:text-red-500 transition-colors duration-300">Đồ Uống</a>
          <a className="hover:text-red-500 transition-colors duration-300">Combo</a>
          <a href="/AboutUs" className="hover:text-red-500 transition-colors duration-300">About Us</a>
        </div>
  
        <div className="space-x-5 my-auto border-black border-2 rounded-sm flex">
          <input type="text" className="w-full p-2 h-7 my-auto" placeholder="Search..." />
          <IoSearchSharp className="justify-center my-auto text-2xl pr-1" />
        </div>
  
        <div className="flex space-x-4 text-xl pr-3 items-center">
    <div className="relative">
      <MdAddShoppingCart className="my-auto mr-9 cursor-pointer hover:text-red-500"  />
    </div>
    <FaRegUser className="my-auto cursor-pointer hover:text-red-500"  />
  </div>
  
      </div>
    );
}

export default function Footer() {
    return (
      <footer className="bg-pink-100 py-8">
                          <div className="container mx-auto text-center">
                              <div className="flex justify-center  mb-4 h-10">
                                  <img src="https://imgur.com/9FZAm7h.jpeg" alt="Google Play Store"/>
                                  <img src="https://imgur.com/QcGKppH.jpeg" alt="Apple App Store"/>
                              </div>
                              <div className="flex justify-center items-center space-x-2 text-sm relative">
                                  <img src="https://imgur.com/HxUij9o.jpeg" alt="Footer logo" className="absolute left-0 ml-20 w-56 h-42"/>
                                  <div className="ml-24">
                                    <b>
                                      <p>Số điện thoại: 0987654321</p>
                                      <p>Email: cpr.store@gmail.com</p>
                                      <p>Địa chỉ cửa hàng:</p>
                                      <p>69/68 Đường Quang Trung, Quận Bình Thạnh, TP.HCM</p>
                                      <p>45 Nguyễn Thái Học, Quận 1, TP.HCM</p>
                                      <p>233A Phan Văn Trị, Quận Bình Thạnh, TP.HCM</p>
                                      </b>
                                  </div>
                              </div>
                          </div>
                      </footer>
    )
}

const Banner = () => {
    return (
      <div className="mt-7 relative w-full h-96 bg-gray-800 overflow-hidden">
        <img
          src="https://www.lotteria.vn/media/banner/b/a/banner_si_u_sao_g_p_th__banner_web.jpg"
          alt="Banner"
          className="absolute inset-0 object-cover w-full h-full opacity-70"
        />
        <div className=" relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl font-bold mb-2">Chào Mừng Đến Với CPR</h1>
          <p className="mb-4">Khám phá nội dung thú vị và khuyến mãi mới nhất.</p>
          <a
            href="#"
            className="px-6 py-2 text-lg font-semibold text-white bg-red-600 rounded hover:bg-blue-500 transition"
          >
            Khám Phá Ngay
          </a>
        </div>
      </div>
    );
};

function NavigationBar() {
    return (
      <section
        className="bg-pink-100 py-4 mx-4 my-4 rounded-lg"
        style={{ margin: "25px" }}
      >
        <div className="container mx-auto flex justify-around">
          <div className="flex items-center w-24 h-24">
            <img
              src="https://imgur.com/AGqTqcW.jpeg"  alt="Bestseller icon" className="mr-2"
            />
            <a href="#" className="font-bold hover:text-red-500">
              BESTSELLER
            </a>
          </div>
          <div className="flex items-center">
            <img
              src="https://imgur.com/gNpii9J.jpeg " alt="Order icon" className="mr-2"
            />
            <a href="#" className="font-bold hover:text-red-500">
              ĐẶT HÀNG
            </a>
          </div>
          <div className="flex items-center">
            <img
              src="https://imgur.com/pZqVwte.jpeg" alt="Promotion icon" className="mr-2"
            />
            <a href="#" className="font-bold hover:text-red-500">
              KHUYẾN MÃI
            </a>
          </div>
          <div className="flex items-center">
            <img
              src="https://imgur.com/8ZY1eAS.jpeg" alt="Store icon" className="mr-2"
            />
            <a href="#" className="font-bold hover:text-red-500">
              CỬA HÀNG
            </a>
          </div>
        </div>
      </section>
    );
}

export function ItemsList(props) {
  
    return (
      <div className="h-max-100 w-max-50">
        <div key={props.id} className="border border-gray-300 rounded-lg shadow-md">
          <div className="relative">
            {/* Hiển thị hình ảnh combo */}
            <img
              src={`assets/${props.id}.jpg`} // Đường dẫn tới hình ảnh
              alt={props.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            {/* Giá hiển thị trên ảnh */}
            <div className="absolute top-0 left-0 bg-red-500 text-white p-2 rounded-br-lg">
              Chỉ {props.price / 1000}K
            </div>
          </div>
          <div className="p-4">
            {/* Tên và mô tả combo */}
            <h3 className="text-lg font-bold">{props.name}</h3>
            <p className="text-sm text-gray-600">{props.description}</p>
  
            {/* Giá và giá gốc */}
            <div className="flex items-center mt-2">
              <span className="text-red-500 font-bold text-lg">{props.price.toLocaleString('vi-VN')}đ</span>
              {props.originalPrice && (
                <span className="text-gray-400 line-through ml-2">
                  {props.originalPrice.toLocaleString('vi-VN')}đ
                </span>
              )}
            </div>
  
            {/* Nút thêm vào giỏ */}
            <button
              className="mt-4 w-full flex justify-center items-center bg-red-500 text-white py-2 rounded-md"
            >
              <span className="mr-2">+</span> Thêm vào giỏ
            </button>
          </div>
        </div>
      </div>
    );
  }

export function Home() {
    return (
      <div>
        <Header />
        <div>
          <Banner/>
          <NavigationBar />
          <div className='grid grid-cols-4 gap-4 p-4'>
            {combo.map(item => (
              <ItemsList {...item} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  
// export function Carts() {
//     const { cartItems, setCartItems } = useCart();
  
//     const handleIncrease = (id) => {
//       setCartItems((prevItems) =>
//         prevItems.map((item) => 
//           item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//         )
//       );
//     };
  
//     const handleDecrease = (id) => {
//       setCartItems((prevItems) =>
//         prevItems.map((item) => 
//           item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
//         )
//       );
//     };
  
//     const handleRemove = (id) => {
//       setCartItems((prevItems) => prevItems.filter((item) => item.id !== id)); // Xóa sản phẩm
//     };
  
//     return (
//       <div className="p-4">
//         <h2 className="text-2xl font-bold mb-4">Giỏ hàng của bạn</h2>
//         {cartItems.length === 0 ? (
//           <p>Giỏ hàng của bạn đang trống</p>
//         ) : (
//           cartItems.map((item) => (
//             <div key={item.id} className="flex justify-between items-center p-4 border-b">
//               <div className="flex items-center">
//                 <img
//                   src={`assets/${item.id}.jpg`} // Đường dẫn tới hình ảnh
//                   alt={item.name}
//                   className="h-16 w-16 object-cover mr-4"
//                 />
//                 <div>
//                   <h3 className="font-bold">{item.name}</h3>
//                   <p>{item.description}</p>
//                   <p>{item.price.toLocaleString('vi-VN')}đ x {item.quantity} = {(item.price * item.quantity).toLocaleString('vi-VN')}đ</p>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <button
//                   className="bg-green-500 text-white px-2 py-1 rounded-md mr-2"
//                   onClick={() => handleIncrease(item.id)} // Tăng số lượng
//                 >
//                   +
//                 </button>
//                 <span>{item.quantity}</span>
//                 <button
//                   className="bg-red-500 text-white px-2 py-1 rounded-md ml-2"
//                   onClick={() => handleDecrease(item.id)} // Giảm số lượng
//                 >
//                   -
//                 </button>
//                 <button
//                   className="bg-red-700 text-white px-2 py-1 rounded-md ml-2"
//                   onClick={() => handleRemove(item.id)} // Xóa sản phẩm
//                 >
//                   Xóa
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//         <div className="mt-4">
//           <h3 className="text-lg font-bold">Tổng cộng:</h3>
//           <p className="text-xl">
//             {cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString('vi-VN')}đ
//           </p>
//         </div>
//       </div>
//     );
//   }
  