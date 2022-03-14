import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import { useState, useEffect } from 'react'
import AddItem from './item/AddItem'
import SearchItem from './item/SearchItem'
function App() {
  let allItems = JSON.parse(localStorage.getItem('shoppinglist') || []);

  const [items, setItems] = useState(allItems);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('shoppinglist', JSON.stringify(items));
  }, [items]);

  const addItem = (title) => {
    const id = items.length ? (items[items.length - 1].id + 1) : 0;
    const myNewItem = { id, checked: false, title };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  }

  const newItemSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');

  }
  const updateItemStatus = (key) => {
    const listItems = items.map((item) => {
      if (item.id == key) {
        item.checked = !item.checked;
      }
      return item;
    });
    setItems(listItems);
  }
  const itemDelete = (key) => {
    const listItems = items.filter((item) => {
      if (item.id != key) {
        return item;
      }
    });
    setItems(listItems);
  }
  return (
    <div className="App">
      <Header title="Districts" />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <AddItem newItem={newItem} setNewItem={setNewItem} newItemSubmit={newItemSubmit} />
      <Content
        items={items.filter((item) => ((item.title).toLowerCase()).includes(search.toLowerCase()))}
        updateItemStatus={updateItemStatus}
        itemDelete={itemDelete}
      />
      <Footer />
    </div>
  );
}

export default App;
