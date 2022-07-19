import React, {useState} from 'react';
import {NextPage} from 'next';
import Link from 'next/link';
import {AiFillHome, AiOutlineMenu} from 'react-icons/ai';
import {ImCancelCircle} from 'react-icons/im';
import Discover from './Discover';
import SuggestedAccounts from './SuggestedAccounts';
import Footer from './Footer';


const Sidebar: NextPage = () => {
  const [showSidebar, setShowSidebar] = useState<Boolean>(true);

  const normalLink = 'flex items-center gap-3 hover:bg-primary pt-4 pb-4 px-1 justify-center md:justify-start cursor-pointer font-semibold text-[#f51997] rounded';

  return (
    <div>
        <div className="block md:hidden ml-4 mt-3 text-2xl" 
            onClick={() => setShowSidebar((prev) => !prev)}
        >
            {showSidebar 
                ? <ImCancelCircle /> 
                : <AiOutlineMenu className="text-3xl" />
            }
        </div>
        {showSidebar && (
            <div className="md:w-400 w-[60px] flex flex-col justify-start mb-10 border-r-2 border-gray-100 md:border-0 p-1" >
                <div className = "md:border-b-2 border-gray-200 md:pb-4">
                    <Link href="/">
                        <div className = {normalLink}>
                            <p className= "text-3xl" >
                                <AiFillHome />
                            </p>
                            <span className= "capitalize text-xl hidden md:block" >For You</span>
                        </div>
                    </Link>
                </div>
                
                <Discover />
                <SuggestedAccounts />
                <Footer />
            </div>
        )}
    </div>
  )
}

export default Sidebar