'use client';
// import { getAllPosts } from '@/shared/utils/post'
import { useStore } from '@/shared/store/stores';
import Login from '@/features/modal/Login'

export default function Home() {
  // const ALL_POST = await getAllPosts();
  const { isAuth, setIsAuth } = useStore(state => state.auth);

  return (
    <div className="h-screen m-auto">
      {isAuth && <Login/>}
      <div className='md:w-screen border'>
        <div className="w-[92%] m-auto border my-8 rounded-xl shadow-md border border-black">
          <img
            src="https://render.gitanimals.org/lines/sunhoh?pet-id=644124868570253606"
            width="100%"
            height="100"
          />
        </div>
        <section className="w-full min-h-[50px] flex justify-evenly ">
          <ul className="lg:mx-16 mx-6 px-6 w-full min-h-[47px]">
            {/* {ALL_POST.map(({ postId, title, description, date, thumbnail }: any, index) => {
              return (
                <li key={index}>
                  <a href={`/article/${postId}`} className="flex items-center justify-between">
                    <div className=''>
                      <h1 className="text-h6">{title}</h1>
                      <p className="mt-2 text-p text-gray-700 break-words">{description}</p>
                      <p className="mt-4 text-p text-gray-700">{date}</p>
                    </div>
                    <div className='w-[130px] h-[100px] border'>
                      <img 
                        src={thumbnail} 
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </a>
                </li>
              );
            })} */}
          </ul>
          <div className="mx-6 w-full  max-w-[400px] lg:hidden px-6 border-l border-[#e5e8eb]">
            <p className='text-p'>article</p>
            <article>
              <div className="w-full bg-[#f9fafb] rounded-[20px] mt-[12px] p-[20px] cursor-pointer transition-all duration-200">
                article
              </div>
            </article>
          </div>  
        </section>
      </div>
    </div>
  );
}
