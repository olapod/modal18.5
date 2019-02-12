var App = React.createClass({
  render: function() {
    return (
      <div className={'app'}>
        <ContactForm contact={contactForm}></ContactForm>
        <Contacts items={contacts}></Contacts>
      </div>
      )
  }
});

