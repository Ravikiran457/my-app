import SchoolLists from './SchoolLists';
import useFetch from '../useFetch';

// SchoolHome Component will render the initial loading till data is fetched and passed on to schoolList 
 function SchoolHome() {

// Fetching the school list data from the server
  const { data: schoolsList, isPending, error } = useFetch('http://localhost:8000/schools')


  return (
      <section id="display-schools">
          {error && <p>{error}</p>}
          {isPending && <p>Loading users...</p>}
          {schoolsList && <SchoolLists schools={schoolsList} />}
      </section>
  );
  }

  export default SchoolHome;