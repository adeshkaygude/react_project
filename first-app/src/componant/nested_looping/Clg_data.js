const Clg_data = ({ collegeData }) => {
  return (
    <>
      {collegeData.map((el) => (
        <ul key={el.id}>
          <li>clg name : {el.name}</li>
          <li>city : {el.city}</li>
          <li>website : {el.website}</li>
          {el.student.map((el) => (
            <ul key={el.id}>
              <li> name : {el.name}</li>
              <li>age : {el.age}</li>
              <li>email : {el.email}</li>
            </ul>
          ))}
        </ul>
      ))}
    </>
  );
};
export default Clg_data;
