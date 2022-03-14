import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import { useState } from 'react'
function App() {
  let allItems = [
    {
      id: 1,
      title: "Feni",
      checked: true
    },

    {
      id: 2,
      title: "Dhaka",
      checked: false
    },

    {
      id: 3,
      title: "Chittagong",
      checked: true
    },

    {
      id: 4,
      title: "Gazipur",
      checked: false
    },

    {
      id: 5,
      title: "Cumilla",
      checked: true
    },

  ];

  const [items, setItems] = useState(allItems);

  const updateItemStatus = (key) => {
    const updatedItems = items.map((item) => {
      if (item.id == key) {
        item.checked = !item.checked;
      }
      return item;
    });
    setItems(updatedItems);
  }
  const itemDelete = (key) => {
    const updatedItems = items.filter((item) => {
      if (item.id != key) {
        return item;
      }
    });
    setItems(updatedItems);
  }
  return (
    <div className="App">
      <Header title="Districts" />
      <Content
        items={items}
        updateItemStatus={updateItemStatus}
        itemDelete={itemDelete}
      />
      <Footer />
    </div>
  );
}

export default App;
