var Contact = React.createClass({
    propTypes: {
      item: React.PropTypes.object.isRequired,
    },
  
    render: function() {
      return (
        <div className={'contactItem'}>
          <img className={'contactImage'} src={'http://chittagongit.com//images/contact-icon-png/contact-icon-png-5.jpg'
          }/>
          <p className={'contactLabel'}>Imię: {this.props.item.firstName}</p>
          <p className={'contactLabel'}>Nazwisko: {this.props.item.lastName}</p>
          <a className={'contactEmail'} href={'mailto:' + this.props.item.email}>e-mail: {this.props.item.email}</a>
        </div>  
        )
      }
  });