import React from 'react'
import AddNote from './AddNote'

const Home = () => {
  return (
<div className='container'>
 <img  className='w-full md:h-96 h-60'  src="https://cdn.shopify.com/s/files/1/1644/5247/articles/How-to-Take-Notes-Fast_1200x1200.jpg?v=1601299861" alt="" />
<AddNote/>

    <h2>Latest Notes</h2>
  <section className="text-gray-600 body-font bg-yellow-100 dark:bg-yellow-900 " style={{userSelect: 'auto'}}>
  <div className="container px-5 py-24 mx-auto" style={{userSelect: 'auto'}}>
    <div className="flex flex-wrap -m-4" style={{userSelect: 'auto'}}>
      <div className="p-4 md:w-1/3" style={{userSelect: 'auto'}}>
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden" style={{userSelect: 'auto'}}>
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" style={{userSelect: 'auto'}} />
          <div className="p-6" style={{userSelect: 'auto'}}>
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{userSelect: 'auto'}}>CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{userSelect: 'auto'}}>The Catalyzer</h1>
            <p className="leading-relaxed mb-3" style={{userSelect: 'auto'}}>Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className="flex items-center flex-wrap " style={{userSelect: 'auto'}}>
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" style={{userSelect: 'auto'}}>Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" style={{userSelect: 'auto'}}>
                  <path d="M5 12h14" style={{userSelect: 'auto'}} />
                  <path d="M12 5l7 7-7 7" style={{userSelect: 'auto'}} />
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200" style={{userSelect: 'auto'}}>
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" style={{userSelect: 'auto'}} />
                  <circle cx={12} cy={12} r={3} style={{userSelect: 'auto'}} />
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm" style={{userSelect: 'auto'}}>
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" style={{userSelect: 'auto'}} />
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3" style={{userSelect: 'auto'}}>
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden" style={{userSelect: 'auto'}}>
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/721x401" alt="blog" style={{userSelect: 'auto'}} />
          <div className="p-6" style={{userSelect: 'auto'}}>
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{userSelect: 'auto'}}>CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{userSelect: 'auto'}}>The 400 Blows</h1>
            <p className="leading-relaxed mb-3" style={{userSelect: 'auto'}}>Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className="flex items-center flex-wrap" style={{userSelect: 'auto'}}>
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" style={{userSelect: 'auto'}}>Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" style={{userSelect: 'auto'}}>
                  <path d="M5 12h14" style={{userSelect: 'auto'}} />
                  <path d="M12 5l7 7-7 7" style={{userSelect: 'auto'}} />
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200" style={{userSelect: 'auto'}}>
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" style={{userSelect: 'auto'}} />
                  <circle cx={12} cy={12} r={3} style={{userSelect: 'auto'}} />
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm" style={{userSelect: 'auto'}}>
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" style={{userSelect: 'auto'}} />
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3" style={{userSelect: 'auto'}}>
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden" style={{userSelect: 'auto'}}>
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/722x402" alt="blog" style={{userSelect: 'auto'}} />
          <div className="p-6" style={{userSelect: 'auto'}}>
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{userSelect: 'auto'}}>CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{userSelect: 'auto'}}>Shooting Stars</h1>
            <p className="leading-relaxed mb-3" style={{userSelect: 'auto'}}>Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className="flex items-center flex-wrap " style={{userSelect: 'auto'}}>
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" style={{userSelect: 'auto'}}>Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" style={{userSelect: 'auto'}}>
                  <path d="M5 12h14" style={{userSelect: 'auto'}} />
                  <path d="M12 5l7 7-7 7" style={{userSelect: 'auto'}} />
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200" style={{userSelect: 'auto'}}>
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" style={{userSelect: 'auto'}} />
                  <circle cx={12} cy={12} r={3} style={{userSelect: 'auto'}} />
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm" style={{userSelect: 'auto'}}>
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" style={{userSelect: 'auto'}} />
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</div>
  )
}

export default Home