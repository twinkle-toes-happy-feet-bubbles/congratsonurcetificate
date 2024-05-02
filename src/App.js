import React, {useState, useEffect} from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';
import Twoverses from './twoverses.jsx'
import InputForm from './inputForm.jsx';
import WriteUp from './writeup.jsx';
import imgUrl from './certificate.jpg'

function App() {
  const params = new URLSearchParams(window.location.search);
  const initialName = params.get('name') || "Name";
  const initialCourse = params.get('course') || "Course";

  const [name, setName] = useState(initialName);
  const [course, setCourse] = useState(initialCourse);

  useEffect(() => {
    const params = new URLSearchParams();
    params.set('name', name);
    params.set('course', course);
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
  }, [name, course]);

  const handleShare = () => {
    const params = new URLSearchParams();
    params.set('name', name);
    params.set('course', course);
    const url = `${window.location.origin}${window.location.pathname}?${params}`;
    navigator.clipboard.writeText(url);
    alert('Link copied to clipboard')
  };

  return (
    <>
      
      <div className="relative">
        <img src={imgUrl} alt="certificate" className="w-full" />
        <div className="absolute inset-0 flex items-center justify-center px-9">
          <WriteUp name={name} course={course} className="text-center"/>
        </div>
      </div>
      
      <div className='relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32'>
      <InputForm setName={setName} setCourse={setCourse}/>
      <button onClick={handleShare} className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Copy link</button>
      
      </div>
      <Header />
      <Twoverses/>
      <Footer/>
    </>
  );
}

export default App;