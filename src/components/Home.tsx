import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1> Home </h1>
      <Link to="/counter"> Counter</Link> <span> </span>
      <Link to="/users"> Users</Link>
      <span> </span>
      <Link to="/newtest"> New Test</Link> <span> </span>
      <Link
        to="/insertLaw"
        state={{
          isUpdate: false,
          lawData: {
            Id: "",
            Name: "",
            Description: "",
          },
        }}
      >
        Add Law
      </Link>{" "}
      <span> </span>
    </div>
  );
}

export default Home;
