var ContactForm = React.createClass({
    propTypes: {
      contact: React.PropTypes.object.isRequired
    },
  
    render: function() {
      return (
        <form className={'contactForm'}>
          <input type={'text'} placeholder={'Imię'} value={this.props.contact.firstName}/>
          <input type={'text'} placeholder={'Nazwisko'} value={this.props.contact.lastName}/>
          <input type={'email'} placeholder={'Email'} value={this.props.contact.email}/>
          <button type={'submit'}>Dodaj kontakt</button>    
          </form>      
        )
    },
  })

  var Contacts = React.createClass({
    propTypes: {
      items: React.PropTypes.array.isRequired,
    },
  
    render: function() {
      
      var contacts = this.props.items.map(function(contact) {
        return (
          <Contact item={contact} key={contact.id}></Contact>
      )
        })
  
      return (
        <ul className={'contactsList'}>{contacts}</ul>
      );
    }
  });