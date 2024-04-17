import React from "react";

class ProfileStatus extends React.Component {


state = {
   editMode: false,
   status: this.props.status
}
activeEditMode = () => {
 this.setState ({
   editMode: true,
   
 })
}
deActivateEditMode = () => {
 this.setState ({
   editMode: false
 })
 this.props.upDateStatusCreator(this.state.status)
}
onStatusChange = (e) => {
  this.setState ({
    status: e.currentTarget.value
    
  })
}
componentDidUpdate(prevProps, prevState) {
  
  if(prevProps.status != this.props.status){
    this.setState({
      status: this.props.status
    })
  }
 
}
  render() {
    return ( 
      <>
      {!this.state.editMode  &&
        <div>
          <span onDoubleClick={this.activeEditMode}>{this.props.status || "---status---" }</span>
        </div>
  }
  {this.state.editMode &&
        <div>
          <input onChange={this.onStatusChange}  autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.status} />
        </div>
  }
      </>
    );
  }
}

export default ProfileStatus;
