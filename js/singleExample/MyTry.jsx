import React from 'react';
import ReactDOM from 'react-dom';

export default class MyTry extends React.Component {
    constructor(){
    super();    
    
this.state={   
    someIcon: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDRANDQ0NFREWFhURFRUYHSggGBoxGxUVITEhJSkrLi46Fx8/ODM4NygtOisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQf/xAAVEAEBAAAAAAAAAAAAAAAAAAAAEf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACiAKAIKAgoCAAAAAAAoIAAAAAAKAgKCAoICgIACoAoiggAAAAAAAAAAAAAAAAAAAAAAAAAAACoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoIAAKgAAAAAAAAAAAAAAAAAAAAAAAAAAKgAogCiAAAAAAAAqAAAAAAAAAAAAAAAKiggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqAAAAAAAAAAAAAAAAAAAAAAAAAAAKgACgioAAAAAAAqKgKgACoAKgAAKgAAAAAoAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAgAAAAAAAAAAAAAAAAACgAgACgIAD/2Q==',
    counter: 0
}  
    
};
    getRandomIcon = () => {
    let somepic = ['https://4.allegroimg.com/s512/035596/56c3d7e94d81ae7c0de5f8c015d4ttp://www.visitsi.com/webware/account_docs/images/selogo_121517_114500.jpg', 'https://lh3.googleusercontent.com/O5T5bSXb9FO8kank66J3c4UoQakzouc6z70HD78ocGSRik5Gpu87bmmgrSBY10YEjDTB4tw=s85', 'https://samequizy.pl/wp-content/uploads/2016/03/filing_images_d874ba82a72e.jpeg', 'https://cdn.prezenty.pl/media/catalog/product/cache/8/image/9df78eab33525d08d6e5fb8d27136e95/o/d/odswiezacz-powietrza-emotikon-prezenty-pl_8114-76d37129.jpeg', 'https://www.telegraph.co.uk/content/dam/technology/2017/11/01/emoji_update_2017_12_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.png?imwidth=450', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy2N1Ae0WYsv0tw3NOZ4HLKIm8aS8GypCFZhO0dKJ1Xd4FW9Scrw']

    let randomNumber = Math.floor(Math.random() * somepic.length);
    return somepic[randomNumber]
          
    }
     
     
  addSomething = () =>{
    
     
      let i = this.state.counter;
      let icon =  this.getRandomIcon();
  
       i % 2 === 0 ? this.setState({
           someIcon: icon
       }) : ''
      
      }
    
  
   
  increment = () => {
    this.setState({ counter: ++this.state.counter });
    this.addSomething();
  };
  decrement = () => {
    this.setState({ counter: --this.state.counter });
    this.addSomething();
  };


  render(){
      
 
    return (
      <div>
        <p>Let's see what we have :D</p>
        <button type='button' onClick={this.increment}>+</button>{ }
        <button type='button' onClick={this.decrement}>-</button><br /><br />
          <div>{this.state.counter}<img width='100px'  height='100px' src={this.state.someIcon}></img></div>
      </div>
    );
  }

}