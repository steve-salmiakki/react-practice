import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

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
  edit: function () {
    alert('edit');
  },

  delete: function () {
    alert('delete');
  },

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
            {/*coi lai cai nut CSS*/}
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

        <div className="participants-information"></div>
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
var participants = React.createClass({
  getInitialState: function () {
    return { editing: false }
  },

  edit: function () {
    this.setState({ editing: true });
  },

  delete: function () {
    alert('delete');
  },

  save: function () {
    this.setState({ editing: false });
  },

  cancel: function () {
    this.setState({ editing: false });
  },

  renderNormal: function () {
    return (
      <div className="participants-information">
        <div className="name"><p>{this.props.name}</p>
        </div>

        <div className="email"><p>{this.props.email}</p>
        </div>

        <div className="phoneNumber"><p>{this.props.phone}</p>
        </div>

        <div className="button">
            <button onClick={this.edit} className="btn-edit"><img src={'https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/17362867_997054313759846_3464285801317189862_n.png?oh=df067f74690fd2408e59d0490056b1e8&oe=595FE7AF'} /></button>
            <button onClick={this.delete} className="btn-delete"><img src={'https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/17361679_997007440431200_4796113525280811897_n.png?oh=23bf3f487dfdf68bfae57239309dbc10&oe=595E6E96'} /></button>
        </div>

      </div>
    );
  },

  renderForm: function () {
    return (
      <form>
        <div className="filling-form">
          <input type="text" id="fullName" name="fullName" placeholder="Full name" />

          <input type="email" id="email" name="email" placeholder="E-mail address" />

          <input type="tel" id="mobile" name="mobile" placeholder="Phone number" />

          <input className="btn-add-new" type="submit" value="Add New" />
          {/*coi lai cai nut CSS*/}
          <div className="button">

            <textarea defaultValue={this.props.children}></textarea>
            <button onClick={this.cancel} className="btn-cancel">Cancel<img src={''} /></button>

            <button onClick={this.save} className="btn-save">Save<img src={''} /></button>



          </div>

        </div>
        {/*closing filling-form*/}

      </form>

    );
  },

  render: function () {
    return (
      <div className="participants-information">
        <div className="name"><p>{this.props.name}</p>
        </div>

        <div className="email"><p>{this.props.email}</p>
        </div>

        <div className="phoneNumber"><p>{this.props.phone}</p>
        </div>

        <div className="button">
          <div>
            <button onClick={this.edit} className="btn-edit"><img src={'https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/17362867_997054313759846_3464285801317189862_n.png?oh=df067f74690fd2408e59d0490056b1e8&oe=595FE7AF'} /></button>

            <button onClick={this.delete} className="btn-delete"><img src={'https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/17361679_997007440431200_4796113525280811897_n.png?oh=23bf3f487dfdf68bfae57239309dbc10&oe=595E6E96'} /></button>
          </div>


        </div>

      </div>
      /*participants-information*/
    );
  }
});

ReactDOM.render(<participants />);

























