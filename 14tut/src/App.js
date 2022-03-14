import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import { useState, useEffect } from 'react'
import AddItem from './item/AddItem'
import SearchItem from './item/SearchItem'
import apiRequest from './apiRequest'
function App() {
  let allItems = [];
  let API_URL = 'http://localhost:3500/items';

  const [items, setItems] = useState(allItems);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not receive expected data");
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    setTimeout(() => {
      (async () => await fetchItems())();
    }, 2000);
    // fetchItems();
  }, []);

  const addItem = async (title) => {
    const id = items.length ? (items[items.length - 1].id + 1) : 0;
    const myNewItem = { id, checked: false, title };
    const listItems = [...items, myNewItem];
    setItems(listItems);

    const postoptions = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(myNewItem)
    };
    const result = await apiRequest(API_URL, postoptions);
    if (result) setFetchError(result);
  }

  const newItemSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');

  }
  const updateItemStatus = async (key) => {
    const listItems = items.map((item) => {
      if (item.id == key) {
        item.checked = !item.checked;
      }
      return item;
    });
    setItems(listItems);

    const myItem = listItems.filter((item) => item.id === key);

    const updateOptions = {
      method: "PATCH",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ checked: myItem[0].checked })
    };
    const reqUrl = `${API_URL}/${key}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);
  }
  const itemDelete = async (key) => {
    const listItems = items.filter((item) => {
      if (item.id != key) {
        return item;
      }
    });
    setItems(listItems);
    const deleteOptions = {
      method: "DELETE"
    };
    const reqUrl = `${API_URL}/${key}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
  }
  return (
    <div className="App">
      <Header title="Districts" />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <AddItem newItem={newItem} setNewItem={setNewItem} newItemSubmit={newItemSubmit} />
      <br />
      <main>
        {isLoading && <p>Loading Items...</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content
          items={items.filter((item) => ((item.title).toLowerCase()).includes(search.toLowerCase()))}
          updateItemStatus={updateItemStatus}
          itemDelete={itemDelete}
        />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
