import React, { Component} from 'react';
import './App.css';
import Post from './components/Post'

class App extends Component {
    post = {
      postAuthor: 'Alex Mendez',
      resourceAuthor: 'Elliot Alderson',
      jobSkillLevel: 'Advanced',
      cohort: '8',
      title: 'The Real World of Hacking',
      categories: ['cyber security'],
      summary: "How real hackers get it so right",
      link: 'https://www.wired.com/2016/07/real-hackers-behind-mr-robot-get-right/',
      resourceType: 'Article',
      datePublished: '2019-10-03.00:00:00z',
      videoLength: null,
      timeToComplete: 10,
      rating: 5,
      comments: [{commenter: "Alex", text: 'Nice post'}]
    }
  
  render (){
    return (
      <div className>
        <h1> My Hive </h1>
        <Post post={this.post}/>
      </div>
    );
  }
}

export default App;
