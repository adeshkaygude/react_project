import Clg_data from "./Clg_data";

function NestedLoop() {
  const collegeData = [
    {
      id: 1,
      name: "Pune Institute of Technology",
      city: "Pune",
      website: "www.pit.com",
      student: [
        { id: 1, name: "Adesh", age: 21, email: "adesh@gmail.com" },
        { id: 2, name: "Rahul", age: 22, email: "rahul@gmail.com" },
        { id: 3, name: "Omkar", age: 23, email: "omkar@gmail.com" },
      ],
    },
    {
      id: 2,
      name: "Mumbai Engineering College",
      city: "Mumbai",
      website: "www.mec.com",
      student: [
        { id: 1, name: "Shantanu", age: 24, email: "shantanu@gmail.com" },
        { id: 2, name: "Amit", age: 21, email: "amit@gmail.com" },
        { id: 3, name: "Vishal", age: 25, email: "vishal@gmail.com" },
      ],
    },
    {
      id: 3,
      name: "Delhi Technical College",
      city: "Delhi",
      website: "www.dtc.com",
      student: [
        { id: 1, name: "Rohit", age: 22, email: "rohit@gmail.com" },
        { id: 2, name: "Karan", age: 23, email: "karan@gmail.com" },
        { id: 3, name: "Sahil", age: 20, email: "sahil@gmail.com" },
      ],
    },
    {
      id: 4,
      name: "Nagpur Institute of Technology",
      city: "Nagpur",
      website: "www.nit.com",
      student: [
        { id: 1, name: "Pratik", age: 21, email: "pratik@gmail.com" },
        { id: 2, name: "Saurabh", age: 24, email: "saurabh@gmail.com" },
        { id: 3, name: "Akash", age: 22, email: "akash@gmail.com" },
      ],
    },
  ];

  return (
    <div>
      <Clg_data collegeData={collegeData} />
    </div>
  );
}
export default NestedLoop;
