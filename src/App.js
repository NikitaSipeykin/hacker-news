import { useState } from "react";
import { NewsItem } from "./NewsItem/NewsItem";

const initNews =[
  {
    
      title: 'First news',
      url: 'example.com',
      userName: 'User 1',
      date: '10.10.11',
      score: 120,
      id: 1
    },
   {
      title: 'Second news',
      url: 'example.com',
      userName: 'User 2',
      date: '10.03.11',
      score: 3,
      id: 2
    },
     {
      title: 'Third news',
      url: 'example.com',
      userName: 'User 3',
      date: '10.20.11',
      score: 1022,
      id: 3
    }
    
  
]


function App() {
  const [news, setNews] = useState(initNews)

  const newNews ={
    title: 'New news',
    url: 'example.com',
    userName: 'User 4',
    date: '10.20.11',
    score: 1022,
    id: 4
  }

  const newsCountHandler = () => {
    setNews((prevState) => [...prevState, newNews])
    
  }  

  return (
    <><div>Number of news: {news.length}</div>
    <button onClick={newsCountHandler}>Add news</button>
    
      {
        news.map(item => {
          return <NewsItem 
            key= {item.id}
            title= {item.title} 
            url= {item.url} 
            userName= {item.userName} 
            date={item.date} 
            score= {item.score}/>
        })
      }
    </>
  );
}

export default App;
