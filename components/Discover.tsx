import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { topics } from '../utils/constants'


const Discover = () => {
    const router = useRouter();
    const { topic } = router.query;

    const activeTopicStyle = "md:border-2 hover:bg-primary md:border-[#f51997] px-3 py-2 rounded md:rounded-full flex items-center gap-2 justify-content cursor-pointer text-[#f51997]"

    const topicStyle = "md:border-2 hover:bg-primary md:border-gray-300 px-3 py-2 rounded md:rounded-full flex items-center gap-2 justify-content cursor-pointer text-black"

  return (
    <div className="md:border-b-2 md:border-gray-200 pb-6" >
        <p className="text-gray-500 font-semibold m-3 mt-4 hidden md:block">
            Popular Topics
        </p>
        <div className="flex gap-3 flex-wrap">
            {topics.map((item) => (
                <Link href = {`/?topic=${item.name}`} key = {item.name}>
                    <div className={topic == item.name ? activeTopicStyle : topicStyle}>
                        <span className="font-bold text-2xl xl:text-md" >
                            {item.icon}
                        </span>
                        <span className="text-md font-medium hidden md:block">
                            {item.name}
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Discover