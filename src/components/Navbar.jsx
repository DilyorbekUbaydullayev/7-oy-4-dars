import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLogout } from '../lib/slices/userSlice';

const Navbar = () => {
	const cart=useSelector(state=>state.cart.cart)
	const users = useSelector(state => state.users.users);
	const [user, setUser] = useState({});
	const dispatch = useDispatch();
	const handleLogout = () => {	
		dispatch(setLogout(user.id));
	}

	useEffect(() => {
		users.forEach(item => {
			if (item.isLogin) {
				setUser(item);
			}else{
				setUser({isLogin:false});
			}
		});
	}, [users]);
	
	return (
		<div className='container border-b-2 border-primary flex justify-between items-center py-3'>
			<a href='/' className='flex items-center gap-5 text-primary'>
				<img src='/logo.svg' alt='logo' />
				<div>
					<span className='block text-3xl font-semibold'>Red Clothes</span>
					<span className='text-sm'>Магазин одежды для практики </span>
				</div>
			</a>
			<div className='flex gap-5 items-center text-primary text-2xl'>
				
				<div className="relative">
              <Link to='/cart'>
					<i className='fa me-2 fa-shopping-cart'></i>
				</Link>
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {cart.length}
              </span>
            </div>
				<span>30 595 ₽</span>
				<a href='/'>
					<i className='fa-regular fa-heart'></i>
				</a>
				<a href='/'>
					<i className='fa-regular fa-user'></i>
				</a>
				<Link to='/register'>
				<button className={` ${user.isLogin?'hidden':''} w-[90px] cursor-pointer bg-primary text-[18px] text-white px-3 pb-1.5 pt-0.5 rounded-3xl`}>
					sign up
				</button >
				</Link>
				<Link to='/login'>
                <button className={` ${user.isLogin?'hidden':''} w-[90px] cursor-pointer bg-primary text-[18px] text-white px-3 pb-1.5 pt-0.5 rounded-3xl`}>
                    log in
                </button>
                </Link>
				<p className='-ms-10'>
					{user.isLogin ? user.fullName : ''}
				</p>
				<Link to='/login'>
				<button onClick={()=>handleLogout()} className={` ${user.isLogin?'block':'hidden'} w-[90px] cursor-pointer bg-primary text-[18px] text-white px-3 pb-1.5 pt-0.5 rounded-3xl`}>
                    logout
                </button>
				</Link>
				
			</div>
		</div>
	);
};

export default Navbar;
