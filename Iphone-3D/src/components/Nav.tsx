import Logo from '../assets/logo.svg';
import Search from '../assets/search.svg';
import Store from '../assets/store.svg';

const Nav:React.FC = () => {
  return (
    <nav className="fixed bg-white w-full text-black text-[0.8vw] flex items-center justify-center gap-10">
      <img className='cursor-pointer' src={Logo} alt="Apple" />
      {[
        "Store",
        "Mac",
        "iPad",
        "iPhone",
        "Watch",
        "Airpods",
        "TV & Home",
        "Entertainment",
        "Accessories",
        "Support",
      ].map((item, index) => (
        <a className='cursor-pointer' key={index}>{item}</a>
      ))}
      <img className='cursor-pointer' src={Search} alt="Search" />
      <img className='cursor-pointer' src={Store} alt="Store" />

    </nav>
  );
};

export default Nav;
