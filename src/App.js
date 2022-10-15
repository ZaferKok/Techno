import React from "react";
import './App.css';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImR1eWd1c2M5QGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS9kdXlndWNuc3YiLCJpYXQiOjE2NjU3NTgyMzQsImV4cCI6MTY2NjE5MDIzNH0.XrmYl0ZIuxzwzyb_Vd2ALcPYe2k811KDoz9z9hw8zEI';

class App extends React.Component {

  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch(
      "https://upayments-studycase-api.herokuapp.com/api/products",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true
        });
      })
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
      <h1> Pleses wait some time.... </h1> </div>;

    return (
      <div className="App">

        <h1> Fetch data from an api in react </h1>
        <h1> {items.message}</h1>

        <div className="product">
          {
            items.products.map((item) => (
              <ol key={item.id} >
                <picture>
                  <source media="(min-width: 200px)"></source>
                  <img src={item.avatar}></img>
                </picture>
                <h3>Product Name: {item.name}</h3>
              </ol>
            ))
          }
        </div>


      </div>
    );
  }
}

export default App;