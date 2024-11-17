// import { useEffect, useState } from "react";
// import { FaTrash, FaEdit, FaWindowClose } from "react-icons/fa";
// import { PieChart } from "@mui/x-charts/PieChart";
// // import { PieChart, Pie, Cell } from "recharts";
// import { publicRequest } from "./requestMethod";
// function App() {
//   const [showAddExpense, setShowExpense] = useState(false);
//   const [showReport, setShowReport] = useState(false);
//   const [showEdit, setShowEdit] = useState(false);
//   const [label, setLabel] = useState("");
//   const [amount, setAmount] = useState(0);
//   const [date, setDate] = useState("");
//   const [expenses, setExpenses] = useState([]);
//   const [updatedID, setupdatedID] = useState("");
//   const [updatedLabel, setupdatedLabel] = useState("");
//   const [updatedAmount, setupdatedAmount] = useState("");
//   const [updatedDate, setupdatedDate] = useState("");

//   const handleAddExpense = () => {
//     setShowExpense(!showAddExpense);
//   };

//   const handleShowReport = () => {
//     setShowReport(!showReport);
//   };
//   const handleShowEdit = (id) => {
//     setShowEdit(!showEdit);
//     setupdatedID(id);
//   };
//   const handleUpdateExpense = async () => {
//     if (updatedID) {
//       try {
//         await publicRequest.put(`/expenses/${updatedID}`, {
//           value: updatedAmount,
//           label: updatedLabel,
//           date: updatedDate,
//         });
//         window.location.reload();
//       } catch (error) {}
//     }
//   };
//   const handleDelete = async (id) => {
//     try {
//       await publicRequest.delete(`/expenses/${id}`);
//       window.location.reload();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleExpense = async () => {
//     try {
//       await publicRequest.post("/expenses", {
//         label,
//         date,
//         value: amount,
//       });

//       window.location.reload();
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     const getExpenses = async () => {
//       try {
//         const res = await publicRequest.get("/expenses");
//         setExpenses(res.data.expenses);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     getExpenses();
//   }, []);

//   return (
//     <div>
//       <div className="flex flex-col justify-center items-center mt-[3%] w-[80%] mr-[5%] ml-[5%]">
//         <h1 className="text-2xl font-medium text-[#555]">Expense Tracker</h1>

//         <div className="relative flex items-center justify-between mt-5 w-[100%]">
//           <div className="relative flex justify-between w-[300px] ">
//             <button
//               className="bg-[#af8978] p-[10px] border-none outline-none cursor-pointer text-[#fff] text-medium"
//               onClick={handleAddExpense}
//             >
//               Add Expense
//             </button>
//             <button
//               className="bg-blue-300 p-[10px] border-none outline-none cursor-pointer text-[#fff] text-medium"
//               onClick={handleShowReport}
//             >
//               Expense Report
//             </button>
//           </div>

//           {showAddExpense && (
//             <div className="absolute z-[999] flex flex-col p-[10px] top-[20px] left-0 h-[500px] w-[500px] bg-white  shadow-xl">
//               <FaWindowClose
//                 className="flex justify-end items-end text-2xl text-red-500 cursor-pointer "
//                 onClick={handleAddExpense}
//               />
//               <label htmlFor="" className="mt-[10px] font-semibold text-[18px]">
//                 Expense Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Snack"
//                 className="border-[#555] border-2 border-solid  p-[10px] outline-none  "
//                 onChange={(e) => setLabel(e.target.value)}
//               ></input>
//               <label htmlFor="" className="mt-[10px] font-semibold text-[18px]">
//                 Expense Date
//               </label>
//               <input
//                 type="date"
//                 placeholder="dd/mm/yyyy"
//                 className="border-[#555] border-2 border-solid  p-[10px] outline-none  "
//                 onChange={(e) => setDate(e.target.value)}
//               ></input>
//               <label htmlFor="" className="mt-[10px] font-semibold text-[18px]">
//                 Expense Ammount
//               </label>
//               <input
//                 type="Number"
//                 placeholder="0"
//                 className="border-[#555] border-2 border-solid  p-[10px] outline-none  "
//                 onChange={(e) => setAmount(e.target.value)}
//               ></input>

//               <button
//                 className="bg-[#af8978] text-white p-[10px] border-none cursor-pointer my-[10px]"
//                 onClick={handleExpense}
//               >
//                 Add Expense
//               </button>
//             </div>
//           )}
//           {showReport && (
//             <div className="absolute z-[999] flex flex-col p-[10px] top-[20px] left-[100px] h-[500px] w-[500px] bg-white  shadow-xl">
//               <FaWindowClose
//                 className="flex justify-end items-end text-2xl text-red-500 cursor-pointer "
//                 onClick={handleShowReport}
//               />
//               <PieChart
//                 series={[
//                   {
//                     data: expenses,
//                     innerRadius: 30,
//                     outerRadius: 100,
//                     paddingAngle: 5,
//                     cornerRadius: 5,
//                     startAngle: -45,
//                     endAngle: 225,
//                     cx: 150,
//                     cy: 150,
//                   },
//                 ]}
//               />
//             </div>
//           )}

//           <div>
//             <input
//               type="text"
//               placeholder="search"
//               className="p-[10px] w-[150px] border-2 border-[#444] border-solid"
//             ></input>
//           </div>
//         </div>

//         <div className="flex flex-col">
//           {expenses.map((item, index) => (
//             <>
//               <div
//                 className="relative flex justify-between items-center w-[80vw] h-[100px] bg-[#f3edeb] my-[20px] py-[10px]  "
//                 key={index}
//               >
//                 <h2 className="m-[20px] text-[#555] text-[18px] font-medium">
//                   {item.label}
//                 </h2>
//                 <span className="m-[20px] text-[18px] "> {item.date}</span>
//                 <span className="m-[20px] text-[18px] font-medium">
//                   ${item.value}
//                 </span>
//                 <div className="m-[20px]">
//                   <FaTrash
//                     className="text-red-500 mb-[5px] cursor-pointer"
//                     onClick={() => {
//                       handleDelete(item._id);
//                     }}
//                   />
//                   <FaEdit
//                     className="text-[#555]-500 mb-[5px] cursor-pointer"
//                     onClick={() => handleShowEdit(item._id)}
//                   />
//                 </div>
//               </div>
//             </>
//           ))}
//         </div>
//         {showEdit && (
//           <div className="absolute z-[999] flex flex-col p-[10px] top-[25%] right-0 h-[500px] w-[500px] bg-white  shadow-xl">
//             <FaWindowClose
//               className="flex justify-end items-end text-2xl text-red-500 cursor-pointer "
//               onClick={handleShowEdit}
//             />
//             <label htmlFor="" className="mt-[10px] font-semibold text-[18px]">
//               Expense Name
//             </label>
//             <input
//               type="text"
//               placeholder="Snack"
//               className="border-[#555] border-2 border-solid  p-[10px] outline-none  "
//               onChange={(e) => setupdatedLabel(e.target.value)}
//             ></input>
//             <label htmlFor="" className="mt-[10px] font-semibold text-[18px]">
//               Expense Date
//             </label>
//             <input
//               type="date"
//               placeholder="dd/mm/yyyy"
//               className="border-[#555] border-2 border-solid  p-[10px] outline-none  "
//               onChange={(e) => setupdatedDate(e.target.value)}
//             ></input>
//             <label htmlFor="" className="mt-[10px] font-semibold text-[18px]">
//               Expense Ammount
//             </label>
//             <input
//               type="Number"
//               placeholder="0"
//               className="border-[#555] border-2 border-solid  p-[10px] outline-none  "
//               onChange={(e) => setupdatedAmount(e.target.value)}
//             ></input>

//             <button
//               className="bg-[#af8978] text-white p-[10px] border-none cursor-pointer my-[10px]"
//               onClick={handleUpdateExpense}
//             >
//               Update Expense
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import { FaTrash, FaEdit, FaWindowClose } from "react-icons/fa";
import { PieChart } from "@mui/x-charts/PieChart";
import { publicRequest } from "./requestMethod";

function App() {
  const [showAddExpense, setShowExpense] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [label, setLabel] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]); // save the new expense array
  const [searchTerm, setSearchTerm] = useState(""); // store the search term
  const [updatedID, setupdatedID] = useState("");
  const [updatedLabel, setupdatedLabel] = useState("");
  const [updatedAmount, setupdatedAmount] = useState("");
  const [updatedDate, setupdatedDate] = useState("");

  const handleAddExpense = () => {
    setShowExpense((prev) => !prev);
    setShowReport(false); // Close report modal when adding expense
  };

  const handleShowReport = () => {
    setShowReport((prev) => !prev);
    setShowExpense(false); // Close add expense modal when showing report
  };

  const handleShowEdit = (id) => {
    setShowEdit(true);
    setupdatedID(id);
  };

  const handleUpdateExpense = async () => {
    if (updatedID) {
      try {
        await publicRequest.put(`/expenses/${updatedID}`, {
          value: updatedAmount,
          label: updatedLabel,
          date: updatedDate,
        });
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await publicRequest.delete(`/expenses/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleExpense = async () => {
    try {
      await publicRequest.post("/expenses", {
        label,
        date,
        value: amount,
      });
      setShowExpense(false); // Close modal after adding expense
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch expenses on component mount
  useEffect(() => {
    const getExpenses = async () => {
      try {
        const res = await publicRequest.get("/expenses");
        setExpenses(res.data.expenses);
        setFilteredExpenses(res.data.expenses);
      } catch (error) {
        console.log(error);
      }
    };

    getExpenses();
  }, []);

  // Filter expenses when searchTerm changes
  useEffect(() => {
    const filtered = expenses.filter((expense) =>
      expense.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredExpenses(filtered);
  }, [searchTerm, expenses]);

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-[3%] w-[80%] mr-[5%] ml-[5%]">
        <h1 className="text-2xl font-medium text-[#555]">Expense Tracker</h1>

        <div className="relative flex items-center justify-between mt-5 w-[100%]">
          <div className="relative flex justify-between w-[300px]">
            <button
              className="bg-[#af8978] p-[10px] border-none outline-none cursor-pointer text-[#fff] text-medium"
              onClick={handleAddExpense}
            >
              Add Expense
            </button>
            <button
              className="bg-blue-300 p-[10px] border-none outline-none cursor-pointer text-[#fff] text-medium"
              onClick={handleShowReport}
            >
              Expense Report
            </button>
          </div>

          <div>
            <input
              type="text"
              placeholder="Search expenses..."
              className="p-[10px] w-[150px] border-2 border-[#444] border-solid"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {showAddExpense && (
          <div className="absolute z-[999] flex flex-col p-[10px] top-[20px] left-0 h-[500px] w-[500px] bg-white shadow-xl">
            <FaWindowClose
              className="flex justify-end items-end text-2xl text-red-500 cursor-pointer"
              onClick={handleAddExpense}
            />
            <label className="mt-[10px] font-semibold text-[18px]">
              Expense Name
            </label>
            <input
              type="text"
              placeholder="Snack"
              className="border-[#555] border-2 border-solid p-[10px] outline-none"
              onChange={(e) => setLabel(e.target.value)}
            ></input>
            <label className="mt-[10px] font-semibold text-[18px]">
              Expense Date
            </label>
            <input
              type="date"
              className="border-[#555] border-2 border-solid p-[10px] outline-none"
              onChange={(e) => setDate(e.target.value)}
            ></input>
            <label className="mt-[10px] font-semibold text-[18px]">
              Expense Amount
            </label>
            <input
              type="number"
              placeholder="0"
              className="border-[#555] border-2 border-solid p-[10px] outline-none"
              onChange={(e) => setAmount(e.target.value)}
            ></input>

            <button
              className="bg-[#af8978] text-white p-[10px] border-none cursor-pointer my-[10px]"
              onClick={handleExpense}
            >
              Add Expense
            </button>
          </div>
        )}

        {showReport && (
          <div className="absolute z-[999] flex flex-col p-[10px] top-[20px] left-[100px] h-[500px] w-[500px] bg-white shadow-xl">
            <FaWindowClose
              className="flex justify-end items-end text-2xl text-red-500 cursor-pointer"
              onClick={handleShowReport}
            />
            <PieChart
              series={[
                {
                  // data: expenses,
                  data: filteredExpenses,
                  innerRadius: 30,
                  outerRadius: 100,
                  paddingAngle: 5,
                  cornerRadius: 5,
                  startAngle: -45,
                  endAngle: 225,
                  cx: 150,
                  cy: 150,
                  // data: filteredExpenses.map((item) => ({
                  //   id: item.label,
                  //   value: item.value,
                  // })),
                  // innerRadius: 30,
                  // outerRadius: 100,
                  // paddingAngle: 5,
                  // label: ({ id }) => id, // Show the label of each partition
                },
              ]}
            />
          </div>
        )}

        <div className="flex flex-col">
          {filteredExpenses.map((item, index) => (
            <div
              className="relative flex justify-between items-center w-[80vw] h-[100px] bg-[#f3edeb] my-[20px] py-[10px]"
              key={index}
            >
              <h2 className="m-[20px] text-[#555] text-[18px] font-medium">
                {item.label}
              </h2>
              <span className="m-[20px] text-[18px]">{item.date}</span>
              <span className="m-[20px] text-[18px] font-medium">
                ${item.value}
              </span>
              <div className="m-[20px]">
                <FaTrash
                  className="text-red-500 mb-[5px] cursor-pointer"
                  onClick={() => {
                    handleDelete(item._id);
                  }}
                />
                <FaEdit
                  className="text-[#555]-500 mb-[5px] cursor-pointer"
                  onClick={() => handleShowEdit(item._id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
