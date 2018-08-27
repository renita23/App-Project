import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
class Login extends Component {
	constructor(props){
		super(props);
		this.state={
			username:'',
			password:''
		}
	}
}
render() {
	return(
		<div>
		<MultiThemeProvider>
		<div>
		<AppBar title="Login"/>
		<TextField 
		hintText="Enter your username"
		floatingLabelText="Username"
		onChange = {(event,newvalue) => this.setState({Username:newvalue})}	/>

		<br/>
		<TextField
		type="password"
		hintText="Enter your password"
		floatingLabelText="Password"
		onChange={(event, newvalue) => this.setState({Password:newvalue})} />
		<br/>
		<RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
		</div>
		);
}
}
const style = {
	margin: 15,
};
export default Login;

handleClick(event){
 var apiBaseUrl = "http://localhost:4000/api/";
 var self = this;
 var payload={
 "email":this.state.username,
 "password":this.state.password
 }
 axios.post(apiBaseUrl+'login', payload)
 .then(function (response) {
 console.log(response);
 if(response.data.code == 200){
 console.log("Login successfull");
 var uploadScreen=[];
 uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
 self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
 }
		else if(response.data.code == 204)
		{
			console.log("Username Password do not match");
			alert("Username Password do not match")
		}
		else
		{
			console.log("Username does not exists");
 			alert("Username does not exist")
		}
	})
.catch(function(error))
{
	console.log(error);
});
}

		
