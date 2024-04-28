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
  };

  return (
    <>
      <InputForm setName={setName} setCourse={setCourse}/>
      <WriteUp name={name} course={course}/>
      <button onClick={handleShare}>Share</button>
      <img src={imgUrl} alt="certificate" width="auto" height="auto" style={{ display: 'block', margin: '0 auto', maxWidth: '100%' }} />
      <Header />
      <Twoverses/>
      <Footer/>
    </>
  );
}

export default App;