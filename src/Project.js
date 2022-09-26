const Project = () => {
  let projects = false; // fetch projects
  return (
    <div>
      {!projects ? (
        <center>
          <h1>Projects will be loaded soon...</h1>
        </center>
      ) : (
        <center>
          <h1>Welcome to projects.</h1>
        </center>
      )}
    </div>
  );
};

export default Project;
