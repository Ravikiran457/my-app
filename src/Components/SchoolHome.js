import SchoolLists from './SchoolLists';
import useFetch from '../useFetch';

 function SchoolHome() {
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