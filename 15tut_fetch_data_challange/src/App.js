import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Form from './components/Form';
import Table from './components/Table';
function App() {
  const [reqType, setReqType] = useState("users");
  const [items, setItems] = useState([]);
  const API_URL = "https://jsonplaceholder.typicode.com";
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const reqUrl = `${API_URL}/${reqType}`;
        const response = await fetch(reqUrl);
        if (!response.ok) throw Error("Something wrong.Try again");
        const data = await response.json();
        setItems(data);
      }
      catch (err) {
        console.log(err.message);
      }
    }
    fetchItems();
  }, [reqType]);
  return (
    <>
      <Form reqType={reqType} setReqType={setReqType} />
      <main>
        <Table items={items} />
      </main>
    </>
  );
}

export default App;
