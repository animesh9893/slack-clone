
import axios from 'axios';
import React ,{useState} from 'react'
import styled from 'styled-components';

function API() {
	const [url,setURL] = useState([]);
	// const [baseurl,setBaseURL] = useState([]);
	const [postdata,setPostData] = useState([]);
	const getLink = ()=>{
		console.log(`${url}`)
		axios.get(`${url}`)
		.then(res =>{
			console.log(res.data)		
		})
	}
	const deleteLink = ()=>{
		console.log(`${url}`)
		axios.delete(`${url}`)
		.then(res =>{
			console.log(res.data)		
		})
	}

	const postLink = ()=>{
		console.log(`${url}`)
		var jsonDataInput=JSON.parse(postdata)
		axios.post(`${url}`,{jsonDataInput}, { headers: {"Content-Type": "application/x-www-form-urlencoded"}})
		.then(res =>{
			console.log(res.data)		
		})
	}

	const putLink = ()=>{
		console.log(`${url}`)
		var jsonDataInput=JSON.parse(postdata)
		axios.put(`${url}`,{jsonDataInput}, { headers: {"Content-Type": "application/x-www-form-urlencoded"}})
		.then(res =>{
			console.log(res.data)		
		})
	}

	const patchLink = ()=>{
		console.log(`${url}`)
		var jsonDataInput=JSON.parse(postdata)
		axios.patch(`${url}`,{jsonDataInput}, { headers: {"Content-Type": "application/x-www-form-urlencoded"}})
		.then(res =>{
			console.log(res.data)		
		})
	}
  	return (
    	<Container>
    		
				<Search>
                    <input type="text" onChange={(e)=>setURL(e.target.value)} placeholder="URL..."/>
                </Search>
                <Buttons>
                	<div><input type="button" value="GET" onClick={getLink} /></div>
                	<div><input type="button" value="DELETE" onClick={deleteLink} /></div>	
                	<div><input type="button" value="POST" onClick={postLink} /></div>
					<div><input type="button" value="PUT" onClick={putLink} />	</div>
					<div><input type="button" value="PATCH" onClick={patchLink} /></div>
                </ Buttons>
                <Container2>
                <InputData>
					<textarea onChange={(e)=>setPostData(e.target.value)} rows={10} col={50} placeholder="InputData.." /><br/>
                </InputData>
                </Container2>
    	</Container>
  	);
}

export default API;

const Container = styled.div`
	width: 100 %;
	height: 100vh;
	padding-left:50px;
	padding-right:50px;	
	align-items: center;
`

const InputData = styled.div`
	margin-left:50px;
	padding-top: 10px;
`

const Container2 = styled.div`
	display:flex;
`
const Search = styled.div`
    box-shadow: inset 0 0 0 1px rgb(104 74 104);
    width :100%;
    border-radius:6px;
    display:flex;
    align-items:center;
    input {
        background-color: transparent;
        border: none;
        padding-left: 8px;
        padding-right:8px;
        padding-top:4px;
        padding-bottom: 4px;
        width:100%;
    }
    input:focus {
        outline:none;
    }
`
const Buttons = styled.div`
	display: flex;
	flex-wrap: nowrap;

	div{
		margin-left:8px;
		margin-top:8px;
	}
`
