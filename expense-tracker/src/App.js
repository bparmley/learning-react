import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Quest Bars",
      amount: 34.62,
      date: new Date(2021, 3, 3),
    },
    {
      id: "e2",
      title: "Quest Bars",
      amount: 34.62,
      date: new Date(2021, 4, 3),
    },
    {
      id: "e3",
      title: "Quest Bars",
      amount: 34.62,
      date: new Date(2021, 5, 3),
    },
    {
      id: "e4",
      title: "Quest Bars",
      amount: 34.62,
      date: new Date(2021, 6, 3),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
