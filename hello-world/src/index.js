import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './btn.css';

//banner NORD Software
var Banner = React.createClass({

  render: function () {
    return (
      <div className="banner">
        
          <img src={'https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/17265078_996824620449482_7652124064193049281_n.jpg?oh=56eea8bf6c069e87f31ecda69df001e6&oe=595CF9BB'} alt="Nord logo" />
          <p>{this.props.title}</p>
        
      </div>
    );
  }

});

//main LIST OF participants
var Main = React.createClass({

  render: function () {
    return (

      <div className="main">
        <p>{this.props.describe}</p>
        <form>
          <div className="filling-form">
            <input type="text" id="fullName" name="fullName" placeholder="Full name" />

            <input type="email" id="email" name="email" placeholder="E-mail address" />

            <input type="tel" id="mobile" name="mobile" placeholder="Phone number" />

            <input className="btn-add-new" type="submit" value="Add New" />
          </div>
          {/*closing filling-form*/}
        </form>

        <div className="title">
          <div className="name"><p>Name</p><img src={'https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/17352414_997054423759835_984946767304067486_n.jpg?oh=611b045adbc1aac7bc82380fa310b898&oe=59598DF2'} alt="" />
          </div>

          <div className="email"><p>E-mail address</p>
          </div>

          <div className="phoneNumber"><p>Phone number</p>
          </div>


        </div>
        {/*information*/}

        <div className="participants-information">

        </div>
      </div>
      /*closing main div*/

    );
  }


});


ReactDOM.render(<div>
  <Banner title="Nord Software" />
  <Main describe="List of participants" />

</div>, document.getElementsByClassName('container')[0]);
//***********banner and title




//participants-information
var Participants = React.createClass({
  getInitialState: function () {
    return { editing: false }
  },

  edit: function () {
    this.setState({ editing: true });
  },

  delete: function () {
    console.log('delete');
  },

  save: function () {
    this.setState({ editing: false });
  },

  cancel: function () {
    this.setState({ editing: false });
  },

  // before
  renderNormal: function () {
    return (
      <div id={this.props.id} className="participants-information">
        <div className="participants-name"><p>{this.props.name}</p>
        </div>

        <div className="participants-email"><p>{this.props.email}</p>
        </div>

        <div className="participants-phoneNumber"><p>{this.props.phone}</p>
        </div>

        <div className="button">
            <button onClick={this.edit} className="btn-edit"><img src={'btn-edit.svg'}/></button>
            <button onClick={this.delete} className="btn-delete"><img src={'trash-bin.svg'}/></button>
        </div>

      </div>
    );
  },

  //after
  renderForm: function () {
    return (
      <div id={this.props.id} className="participants-information">
        <input className="participant-name" type="text" id="fullName" name="fullName" placeholder="Full name" value={this.props.name} />

        <input className="participant-email" type="email" id="email" name="email" placeholder="E-mail address" value={this.props.email} />

        <input className="participant-phoneNumber" type="tel" id="mobile" name="mobile" placeholder="Phone number" value={this.props.phone} />


        {/*coi lai cai nut CSS*/}
        <div className="button">
            <button onClick={this.cancel} className="btn-cancel">Cancel</button>
            <button onClick={this.save} className="btn-save">Save</button>
        </div>
        {/*button*/}
      </div>
      //*closing filling-form*/ }



    );
  },

  render: function () {
    if (this.state.editing) {
      return this.renderForm();
    } else {
      return this.renderNormal();
    }
  },
})

ReactDOM.render(<div>
  <Participants id="participant-1" name="Tuan Phan" email="steve-salmiakki@gmail.com" phone="0469 68 35 96"> </Participants>
  <Participants id="participant-2" name="test2" email="test2@gmail.com" phone="0461234567"> </Participants>
  <Participants id="participant-3" name="test3" email="test3@gmail.com" phone="0461234567"> </Participants>
  <Participants id="participant-4" name="test4" email="test4@gmail.com" phone="0461234567"> </Participants>
  <Participants id="participant-5" name="test5" email="test5@gmail.com" phone="0461234567"> </Participants>
  <Participants id="participant-6" name="test6" email="test6@gmail.com" phone="0461234567"> </Participants>
  <Participants id="participant-7" name="test7" email="test7@gmail.com" phone="0461234567"> </Participants>
  <Participants id="participant-8" name="test8" email="test8@gmail.com" phone="0461234567"> </Participants>
  <Participants id="participant-9" name="test9" email="test9@gmail.com" phone="0461234567"> </Participants>
  <Participants id="participant-10" name="test10" email="test10@gmail.com" phone="0461234567"> </Participants>
  <Participants id="participant-11" name="test11" email="test11@gmail.com" phone="0461234567"> </Participants>
  <Participants id="participant-12" name="test12" email="test12@gmail.com" phone="0461234567"> </Participants>
  <Participants id="participant-13" name="test13" email="test13@gmail.com" phone="0461234567"> </Participants>
  <Participants id="participant-14" name="test14" email="test14@gmail.com" phone="0461234567"> </Participants>
  <Participants id="participant-15" name="test15" email="test15@gmail.com" phone="0461234567"> </Participants>
  <Participants id="participant-16" name="test16" email="test16@gmail.com" phone="0461234567"> </Participants>
  <Participants id="participant-17" name="test17" email="test17@gmail.com" phone="0461234567"> </Participants>
  <Participants id="participant-18" name="test18" email="test18@gmail.com" phone="0461234567"> </Participants>
  <Participants id="participant-19" name="test19" email="test19@gmail.com" phone="0461234567"> </Participants>
  <Participants id="participant-20" name="test20" email="test20@gmail.com" phone="0461234567"> </Participants>

</div>, document.getElementsByClassName('participants-information')[0]);

























