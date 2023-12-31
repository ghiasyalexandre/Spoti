import { useState } from 'react';
import Navbar from './components/navBar';
import Ye from './assets/ye.jpg';
import Cudi from './assets/cudi.jpg';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='flex h-screen w-full'>

        <div className='bg-black w-1/3 lg:w-1/6'>

          <div className='bg-black h-1/6'>

            <h1 className='bg-gray-700 h-full mx-2'>
              Hello,
            </h1>

          </div>

          <div className='bg-black h-2/3'>

            <h1 className='bg-gray-500 h-full mx-2'>
              Hello,
            </h1>

          </div>

          <div className='bg-black h-1/6'>

            <h1 className='bg-gray-700 h-full m-2'>
              Hello,
            </h1>

          </div>


        </div>




        <div className='bg-black w-2/3 lg:w-5/6'>

          <div className='flex bg-black h-16 sticky justify-between items-center w-full'>
            <div className='justify-start pl-4'>
              <a href='#' className=' text-gray-500'>
                &lt;
              </a>
            </div>
            
            <div className='justify-end space-x-4 pr-4'>
              <a href='#' className='font-extrabold text-white'>
                Sign up
              </a>
              <button className='font-extrabold bg-white text-black rounded-full'>
                Log In
              </button>
            </div>          
            
          </div>

          <div className='bg-black h-2/3 overflow-y-auto no-scrollbar'>
            <div>
                
              <div className=' bg-gray-600 border-solid border border-blue-100 h-1/2'>
              
                <div className='flex justify-between items-center mt-2 ml-4'>
                  <div>Spoti Playlists</div>
                  <a>Show all</a>
                </div>
                <div className='flex justify-between items-center mt-4 ml-4 overflow-x-auto no-scrollbar'>
                  <div>
                    <img src={Ye}></img>
                  </div>

                  <div className='flex bg-black flex-col p-2 rounded-md'>
                    <img src={Cudi} className='h-auto w-12'></img>
                    <h2>Kid Cudi</h2>
                    <p>Top tracks from this artist!</p>
                  </div>

                  <div>Spoti Playlists</div>
                  <div>Spoti Playlists</div>
                  <div>Spoti Playlists</div>
                  <div>Spoti Playlists</div>
                  <div>Spoti Playlists</div>
                  <div>Spoti Playlists</div>
                  <div>Spoti Playlists</div>
                  <div>Spoti Playlists</div>
                  <div>Spoti Playlists</div>
                  <div>Spoti Playlists</div>

                </div>
                

              </div>

              <div className=' bg-gray-600 border-solid border border-blue-100 h-1/2'>
              
              <div className='flex justify-between items-center mt-2 ml-4'>
                <div>Spoti Playlists</div>
                <a>Show all</a>
              </div>
              <div className='flex justify-between items-center mt-4 ml-4 overflow-x-auto no-scrollbar'>
                <div>Spoti Playlists</div>
                <div>Spoti Playlists</div>
                <div>Spoti Playlists</div>
                <div>Spoti Playlists</div>
                <div>Spoti Playlists</div>
                <div>Spoti Playlists</div>
                <div>Spoti Playlists</div>
                <div>Spoti Playlists</div>
                <div>Spoti Playlists</div>
                <div>Spoti Playlists</div>
                <div>Spoti Playlists</div>
                <div>Spoti Playlists</div>

              </div>
              

            </div>
              
       
  
           
              
            </div>
          </div>

          <div className='bg-gray-700 h-1/6 mr-2'>

          </div>

        </div>


      </div>
    
  )
}

export default App
