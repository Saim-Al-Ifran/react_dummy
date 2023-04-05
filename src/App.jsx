 
import Layout from './components/layout/Layout';
import Section from './components/Section';
import Tasks from './Tasks';
 
 const education = [
      `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, consectetur. Necessitatibus quo accusamus tenetur sed officiis`,
      `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, consectetur. Necessitatibus quo accusamus tenetur sed officiis `,
      `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of usi`
       
 ];
 const subjects = [
      `CSE101`,
      `PHY101`,
      `MATH101`
       
 ];

 
 

function App() {
  return (
    <>
      {/* <Layout> */}
             {/* <h2>Todo List</h2>  */}
              <Tasks/>
             {/* <Section title="Education" description={education}/>
             <Section title="Subjects" description={subjects}/> */}
             
      {/* </Layout> */}

      
          
    </>

  );
}

export default App;
